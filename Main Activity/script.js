const apiUrl = 'http://localhost:8080/api/users'; // Replace with your Spring Boot API

const userTable = document.getElementById('userTable');
const createBtn = document.getElementById('createBtn');
const updateBtn = document.getElementById('updateBtn');
const userIdInput = document.getElementById('userId');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

// Fetch all users
async function fetchUsers() {
    const res = await fetch(apiUrl);
    const data = await res.json();
    userTable.innerHTML = '';
    data.forEach(user => {
        userTable.innerHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td class="actions">
                <button class="edit" onclick="editUser(${user.id}, '${user.name}', '${user.email}')">Edit</button>
                <button class="delete" onclick="deleteUser(${user.id})">Delete</button>
            </td>
        </tr>
        `;
    });
}
async function fetchUsers() {
    const res = await fetch(apiUrl);   // GET request to your API
    const data = await res.json();      // Parse JSON response
    userTable.innerHTML = '';           // Clear existing table rows
    data.forEach(user => {              // Add a row for each user
        userTable.innerHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td class="actions">
                <button class="edit" onclick="editUser(${user.id}, '${user.name}', '${user.email}')">Edit</button>
                <button class="delete" onclick="deleteUser(${user.id})">Delete</button>
            </td>
        </tr>
        `;
    });
}
// Create a new user
createBtn.addEventListener('click', async () => {
    const user = {
        name: nameInput.value,
        email: emailInput.value
    };
    await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    nameInput.value = '';
    emailInput.value = '';
    fetchUsers();
});

// Edit user
function editUser(id, name, email) {
    userIdInput.value = id;
    nameInput.value = name;
    emailInput.value = email;
    createBtn.style.display = 'none';
    updateBtn.style.display = 'inline-block';
}

// Update user
updateBtn.addEventListener('click', async () => {
    const id = userIdInput.value;
    const user = {
        name: nameInput.value,
        email: emailInput.value
    };
    await fetch('${apiUrl}/${id}', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    userIdInput.value = '';
    nameInput.value = '';
    emailInput.value = '';
    createBtn.style.display = 'inline-block';
    updateBtn.style.display = 'none';
    fetchUsers();
});

// Delete user
async function deleteUser(id) {
    if (confirm('Are you sure you want to delete this user?')) {
        await fetch('${apiUrl}/${id}', { method: 'DELETE' });
        fetchUsers();
    }
}

// Initial fetch
fetchUsers();
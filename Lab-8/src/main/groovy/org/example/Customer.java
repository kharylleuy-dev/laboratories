package com.example.lab9.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;

    // One-to-Many relationship with Invoice.
    // 'mappedBy' indicates that the 'customer' field in the Invoice entity is the owner.
    // CascadeType.ALL ensures invoices are managed when a customer is managed (e.g., deleted).
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Invoice> invoices = new HashSet<>();

    // Constructors
    public Customer() {}

    public Customer(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public Set<Invoice> getInvoices() { return invoices; }
    public void setInvoices(Set<Invoice> invoices) { this.invoices = invoices; }
}
// CustomerController.java (Stays the same!)

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private final CustomerService customerService;

    // ... Constructor Injection ...

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        // Calls the Service method, which now persists to MySQL
        return customerService.createCustomer(customer);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
        return customerService.getCustomerById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

}
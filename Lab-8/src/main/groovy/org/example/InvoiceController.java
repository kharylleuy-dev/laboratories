// InvoiceController.java (Stays the same!)

@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {

    private final InvoiceService invoiceService;

    // ... Constructor Injection ...

    @PostMapping
    public Invoice createInvoice(@RequestBody Invoice invoice) {
        // Calls the Service method
        return invoiceService.createInvoice(invoice);
    }

    @GetMapping
    public List<Invoice> getAllInvoices() {
        // Calls the Service method
        return invoiceService.getAllInvoices();
    }
}
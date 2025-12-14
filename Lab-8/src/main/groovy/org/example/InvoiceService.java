// InvoiceService.java

package com.example.lab9.service;

import com.example.lab9.entity.Invoice;
import com.example.lab9.repository.InvoiceRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InvoiceService {

    // Inject the JPA Repository
    private final InvoiceRepository invoiceRepository;


    public InvoiceService(InvoiceRepository invoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }

}
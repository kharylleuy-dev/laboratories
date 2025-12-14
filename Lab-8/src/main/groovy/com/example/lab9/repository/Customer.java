package com.example.lab9.repository;

import com.example.lab9.entity.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@com.example.lab9.repository.Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
    // Custom query methods can be added here if needed
}
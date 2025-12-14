// CustomerService.java

package com.example.lab9.service;

import com.example.lab9.entity.Customer;
import com.example.lab9.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    // Inject the JPA Repository
    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }
}

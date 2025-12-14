
package com.example.lab9.graphql;

import com.example.lab9.entity.Product;
import com.example.lab9.service.ProductService; // The refactored service!
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Optional;

@Controller
public class ProductGraphQLController {

    // Inject the Refactored Service
    private final ProductService productService;

    public ProductGraphQLController(ProductService productService) {
        this.productService = productService;
    }

}
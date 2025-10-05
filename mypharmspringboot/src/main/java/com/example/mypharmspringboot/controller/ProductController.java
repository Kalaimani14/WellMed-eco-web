package com.example.mypharmspringboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.mypharmspringboot.services.ProductService;

@Controller
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("getallproduct")
    public ResponseEntity getAllProduct(){
        return ResponseEntity.status(200).body(productService.getAllProduct());
    }

}

package com.example.mypharmspringboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


import com.example.mypharmspringboot.model.Products;
import com.example.mypharmspringboot.repo.ProductRepo;

@Service
public class ProductService {
    @Autowired
    private ProductRepo productRepo;
    
    public List<Products> getAllProduct(){
        return productRepo.findAll();
    }
}

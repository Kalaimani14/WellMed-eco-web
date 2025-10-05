package com.example.mypharmspringboot.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mypharmspringboot.model.Products;

public interface ProductRepo extends JpaRepository <Products,Integer>{
    
}

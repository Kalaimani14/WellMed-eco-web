package com.example.mypharmspringboot.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mypharmspringboot.model.Signup;

public interface SignupRepo extends JpaRepository<Signup , Integer> {
    
    Signup findByEmail(String email);     // Custom finder
    
}

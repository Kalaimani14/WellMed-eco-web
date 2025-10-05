package com.example.mypharmspringboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.mypharmspringboot.model.Signup;
import com.example.mypharmspringboot.services.SignupService;

@RestController
public class SignupController {
    
    @Autowired
    private SignupService signupService;

    @PostMapping("/saveuser")
    public ResponseEntity<Signup> saveUser(@RequestBody Signup signup) {
        Signup savedUser = signupService.saveUser(signup);
        return ResponseEntity.ok(savedUser);
    }
    
    @PostMapping("/login")
    public String login(@RequestBody Signup request) {
        Signup user = signupService.login(request.getEmail(), request.getPassword());
        if (user != null) {
            return "Login Successful!";
        } else {
            return "Invalid Email or Password!";
        }
    }
}

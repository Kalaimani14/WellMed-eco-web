package com.example.mypharmspringboot.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.mypharmspringboot.model.Signup;
import com.example.mypharmspringboot.repo.SignupRepo;

@Service
public class SignupService {

    @Autowired
    private SignupRepo signupRepo;

    // Save user
    public Signup saveUser(Signup signup) {
        return signupRepo.save(signup);
    }

    // Get all users
    public List<Signup> getAllUsers() {
        return signupRepo.findAll();
    }

    // Login check
    public Signup login(String email, String password) {
        Signup user = signupRepo.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user; // valid user
        }
        return null; // invalid
    }
}

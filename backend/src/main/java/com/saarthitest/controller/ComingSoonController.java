package com.saarthitest.controller;

import com.saarthitest.model.ComingSoon;
import com.saarthitest.repository.ComingSoonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/test/coming-soon")
@CrossOrigin(origins = "*")
public class ComingSoonController {

    @Autowired
    private ComingSoonRepository comingSoonRepository;

    @GetMapping
    public ResponseEntity<Map<String, String>> getComingSoonMessage() {
        ComingSoon comingSoon = comingSoonRepository.findFirstByOrderByIdAsc();
        
        if (comingSoon == null) {
            // Initialize with default message if none exists
            comingSoon = new ComingSoon("We're coming soon! Stay tuned for exciting updates.");
            comingSoon = comingSoonRepository.save(comingSoon);
        }
        
        Map<String, String> response = new HashMap<>();
        response.put("message", comingSoon.getMessage());
        return ResponseEntity.ok(response);
    }

    @PutMapping
    public ResponseEntity<Map<String, String>> updateComingSoonMessage(@RequestBody Map<String, String> request) {
        String message = request.get("message");
        if (message == null || message.trim().isEmpty()) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "Message cannot be empty");
            return ResponseEntity.badRequest().body(error);
        }
        
        ComingSoon comingSoon = comingSoonRepository.findFirstByOrderByIdAsc();
        if (comingSoon == null) {
            comingSoon = new ComingSoon(message);
        } else {
            comingSoon.setMessage(message);
        }
        
        comingSoon = comingSoonRepository.save(comingSoon);
        
        Map<String, String> response = new HashMap<>();
        response.put("message", comingSoon.getMessage());
        return ResponseEntity.ok(response);
    }
}


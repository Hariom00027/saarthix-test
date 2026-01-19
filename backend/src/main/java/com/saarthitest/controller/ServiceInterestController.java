package com.saarthitest.controller;

import com.saarthitest.model.ServiceInterest;
import com.saarthitest.service.ServiceInterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/service-interest")
@CrossOrigin(origins = "*")
public class ServiceInterestController {

    private final ServiceInterestService serviceInterestService;

    @Autowired
    public ServiceInterestController(ServiceInterestService serviceInterestService) {
        this.serviceInterestService = serviceInterestService;
    }

    @PostMapping("/submit")
    public ResponseEntity<ServiceInterest> submitServiceInterests(@RequestBody ServiceInterestRequest request) {
        try {
            ServiceInterest saved = serviceInterestService.saveServiceInterests(
                request.getBetaUserId(),
                request.getEmail(),
                request.getRole(),
                request.getServiceInterests()
            );
            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/by-email/{email}")
    public ResponseEntity<ServiceInterest> getByEmail(@PathVariable String email) {
        return serviceInterestService.getServiceInterestsByEmail(email)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // Inner class for request body
    public static class ServiceInterestRequest {
        private String betaUserId;
        private String email;
        private String role;
        private Map<String, String> serviceInterests;

        public String getBetaUserId() {
            return betaUserId;
        }

        public void setBetaUserId(String betaUserId) {
            this.betaUserId = betaUserId;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getRole() {
            return role;
        }

        public void setRole(String role) {
            this.role = role;
        }

        public Map<String, String> getServiceInterests() {
            return serviceInterests;
        }

        public void setServiceInterests(Map<String, String> serviceInterests) {
            this.serviceInterests = serviceInterests;
        }
    }
}




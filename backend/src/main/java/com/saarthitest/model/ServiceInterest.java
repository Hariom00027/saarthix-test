package com.saarthitest.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Map;

@Document(collection = "service_interests")
public class ServiceInterest {

    @Id
    private String id;
    private String betaUserId; // Reference to BetaUser
    private String email; // For easy lookup
    private String role; // Industry, Institute, Student
    private Map<String, String> serviceInterests; // Map of serviceId -> interestLevel (very_interested, somewhat_interested, not_interested)
    private LocalDateTime submittedAt;

    public ServiceInterest() {
        this.submittedAt = LocalDateTime.now();
    }

    public ServiceInterest(String betaUserId, String email, String role, Map<String, String> serviceInterests) {
        this.betaUserId = betaUserId;
        this.email = email;
        this.role = role;
        this.serviceInterests = serviceInterests;
        this.submittedAt = LocalDateTime.now();
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

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

    public LocalDateTime getSubmittedAt() {
        return submittedAt;
    }

    public void setSubmittedAt(LocalDateTime submittedAt) {
        this.submittedAt = submittedAt;
    }
}




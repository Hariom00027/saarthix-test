package com.saarthitest.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "beta_users")
public class BetaUser {

    @Id
    private String id;
    private String name;
    private String email;
    private String role; // Industry, Institute, Student
    private LocalDateTime joinedAt;

    // New Fields for Enhanced Data Collection
    private String phoneNumber;
    private String institution; // Company, College, or Institute Name
    private String designation; // Job Title, Stream, or Role
    private String location;    // City or Region
    private String specificNeed; // What they are looking for

    public BetaUser() {
        this.joinedAt = LocalDateTime.now();
    }

    public BetaUser(String name, String email, String role) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.joinedAt = LocalDateTime.now();
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public LocalDateTime getJoinedAt() {
        return joinedAt;
    }

    public void setJoinedAt(LocalDateTime joinedAt) {
        this.joinedAt = joinedAt;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getInstitution() {
        return institution;
    }

    public void setInstitution(String institution) {
        this.institution = institution;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getSpecificNeed() {
        return specificNeed;
    }

    public void setSpecificNeed(String specificNeed) {
        this.specificNeed = specificNeed;
    }
}

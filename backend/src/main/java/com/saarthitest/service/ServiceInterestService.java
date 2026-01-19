package com.saarthitest.service;

import com.saarthitest.model.ServiceInterest;
import com.saarthitest.repository.ServiceInterestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ServiceInterestService {

    private final ServiceInterestRepository serviceInterestRepository;

    @Autowired
    public ServiceInterestService(ServiceInterestRepository serviceInterestRepository) {
        this.serviceInterestRepository = serviceInterestRepository;
    }

    public ServiceInterest saveServiceInterests(String betaUserId, String email, String role, Map<String, String> serviceInterests) {
        // Check if service interest already exists for this user
        Optional<ServiceInterest> existing = serviceInterestRepository.findByBetaUserId(betaUserId);
        
        if (existing.isPresent()) {
            // Update existing
            ServiceInterest existingInterest = existing.get();
            existingInterest.setServiceInterests(serviceInterests);
            return serviceInterestRepository.save(existingInterest);
        } else {
            // Create new
            ServiceInterest newInterest = new ServiceInterest(betaUserId, email, role, serviceInterests);
            return serviceInterestRepository.save(newInterest);
        }
    }

    public Optional<ServiceInterest> getServiceInterestsByEmail(String email) {
        return serviceInterestRepository.findByEmail(email);
    }

    public Optional<ServiceInterest> getServiceInterestsByBetaUserId(String betaUserId) {
        return serviceInterestRepository.findByBetaUserId(betaUserId);
    }

    public List<ServiceInterest> getAllServiceInterests() {
        return serviceInterestRepository.findAll();
    }
}




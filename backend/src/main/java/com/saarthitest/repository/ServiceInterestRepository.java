package com.saarthitest.repository;

import com.saarthitest.model.ServiceInterest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ServiceInterestRepository extends MongoRepository<ServiceInterest, String> {
    Optional<ServiceInterest> findByEmail(String email);
    Optional<ServiceInterest> findByBetaUserId(String betaUserId);
}




package com.saarthitest.repository;

import com.saarthitest.model.BetaUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BetaUserRepository extends MongoRepository<BetaUser, String> {
    // Custom query methods if needed, currently none required for basic features
}

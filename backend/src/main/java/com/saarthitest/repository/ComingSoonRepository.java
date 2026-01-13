package com.saarthitest.repository;

import com.saarthitest.model.ComingSoon;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComingSoonRepository extends MongoRepository<ComingSoon, String> {
    ComingSoon findFirstByOrderByIdAsc();
}


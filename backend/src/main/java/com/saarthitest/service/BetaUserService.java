package com.saarthitest.service;

import com.saarthitest.model.BetaUser;
import com.saarthitest.repository.BetaUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BetaUserService {

    private final BetaUserRepository betaUserRepository;

    @Autowired
    public BetaUserService(BetaUserRepository betaUserRepository) {
        this.betaUserRepository = betaUserRepository;
    }

    public BetaUser joinBetaClub(BetaUser user) {
        // Here you could add check if email already exists
        return betaUserRepository.save(user);
    }

    public long getTotalInterestedUsers() {
        return betaUserRepository.count() + 500; // Base count of 500
    }
    
    public List<BetaUser> getAllUsers() {
        return betaUserRepository.findAll();
    }
}

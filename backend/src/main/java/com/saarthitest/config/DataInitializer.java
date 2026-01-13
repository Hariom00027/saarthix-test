package com.saarthitest.config;

import com.saarthitest.model.ComingSoon;
import com.saarthitest.repository.ComingSoonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ComingSoonRepository comingSoonRepository;

    @Override
    public void run(String... args) throws Exception {
        // Retry logic for MongoDB connection
        int maxRetries = 5;
        int retryDelay = 2000; // 2 seconds
        
        for (int i = 0; i < maxRetries; i++) {
            try {
                if (comingSoonRepository.count() == 0) {
                    ComingSoon comingSoon = new ComingSoon("We're coming soon! Stay tuned for exciting updates.");
                    comingSoonRepository.save(comingSoon);
                    System.out.println("Initialized coming soon message in database");
                }
                return; // Success, exit retry loop
            } catch (Exception e) {
                if (i < maxRetries - 1) {
                    System.out.println("Warning: Could not initialize data (attempt " + (i + 1) + "/" + maxRetries + ") - " + e.getMessage());
                    Thread.sleep(retryDelay);
                } else {
                    System.err.println("Error: Could not initialize data after " + maxRetries + " attempts - " + e.getMessage());
                    // Don't fail startup if MongoDB is temporarily unavailable
                }
            }
        }
    }
}


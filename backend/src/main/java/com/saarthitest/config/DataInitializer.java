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
        if (comingSoonRepository.count() == 0) {
            ComingSoon comingSoon = new ComingSoon("We're coming soon! Stay tuned for exciting updates.");
            comingSoonRepository.save(comingSoon);
            System.out.println("Initialized coming soon message in database");
        }
    }
}


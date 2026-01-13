package com.saarthitest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.saarthitest.repository")
public class SaarthiTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(SaarthiTestApplication.class, args);
    }

}


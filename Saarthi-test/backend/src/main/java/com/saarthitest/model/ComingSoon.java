package com.saarthitest.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "comingSoon")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ComingSoon {
    @Id
    private String id;
    private String message;
    
    public ComingSoon(String message) {
        this.message = message;
    }
}


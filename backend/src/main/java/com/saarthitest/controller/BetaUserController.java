package com.saarthitest.controller;

import com.saarthitest.model.BetaUser;
import com.saarthitest.service.BetaUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/beta")
@CrossOrigin(origins = "*") // Allow requests from frontend
public class BetaUserController {

    private final BetaUserService betaUserService;

    @Autowired
    public BetaUserController(BetaUserService betaUserService) {
        this.betaUserService = betaUserService;
    }

    @PostMapping("/join")
    public ResponseEntity<BetaUser> joinBetaClub(@RequestBody BetaUser user) {
        try {
            BetaUser savedUser = betaUserService.joinBetaClub(user);
            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/count")
    public ResponseEntity<Long> getCount() {
        return ResponseEntity.ok(betaUserService.getTotalInterestedUsers());
    }

    @GetMapping("/all")
    public ResponseEntity<List<BetaUser>> getAllUsers() {
        return ResponseEntity.ok(betaUserService.getAllUsers());
    }
}

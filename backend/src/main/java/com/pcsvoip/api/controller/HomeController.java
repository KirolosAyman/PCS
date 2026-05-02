package com.pcsvoip.api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * HomeController – Entry point for the PCS VoIP API.
 * Phase 1: returns a simple health-check / welcome message.
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")          // Allow React dev-server during development
public class HomeController {

    /**
     * GET /api/home
     * Returns a welcome payload confirming the API is alive.
     */
    @GetMapping("/home")
    public Map<String, Object> home() {
        return Map.of(
            "status",  "ok",
            "message", "Welcome to PCS VoIP API – Pegasus Communication Solutions",
            "version", "1.0.0"
        );
    }
}

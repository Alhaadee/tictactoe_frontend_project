package com.example.TicTacToeFinal.controller;


import com.example.TicTacToeFinal.model.Player;
import com.example.TicTacToeFinal.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/players")
public class PlayerController {
    @Autowired
    PlayerService playerService;

    // ADD A PLAYER (if you don't use data loader)
    @PostMapping()
    public ResponseEntity<Player> createGame(@RequestParam String name ){
        Player player = playerService.createPlayer(name);
        return new ResponseEntity<>(player, HttpStatus.CREATED);
    }
}

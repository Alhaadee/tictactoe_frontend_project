package com.example.TicTacToeFinal.service;

import com.example.TicTacToeFinal.model.Player;
import com.example.TicTacToeFinal.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlayerService {
    @Autowired
    PlayerRepository playerRepository;

    public Player createPlayer(String name) {
        Player player = new Player(name);
        player = playerRepository.save(player);
        return player;
    }
}

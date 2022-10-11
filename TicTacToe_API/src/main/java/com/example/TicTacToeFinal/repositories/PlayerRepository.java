package com.example.TicTacToeFinal.repositories;

import com.example.TicTacToeFinal.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
}
package com.example.TicTacToeFinal.repositories;

import com.example.TicTacToeFinal.model.Game;
import com.example.TicTacToeFinal.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;



public interface GameRepository  extends JpaRepository<Game, Long> {
}



package com.example.TicTacToeFinal.service;

import com.example.TicTacToeFinal.model.Counter;
import com.example.TicTacToeFinal.model.Game;
import com.example.TicTacToeFinal.model.GameStatus;
import com.example.TicTacToeFinal.model.Player;
import com.example.TicTacToeFinal.repositories.GameRepository;
import com.example.TicTacToeFinal.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service

public class GameService {
    @Autowired
    GameRepository gameRepository;
    @Autowired
    PlayerRepository playerRepository;

    //Below are all the possible win combinations
    private static final int[][] winCombinations = new int[][]{
            {0,1,2}, {3,4,5}, {6,7,8},
            {0,3,6}, {1,4,7}, {2,5,8},
            {0,4,8}, {2,4,6}
    }; //array of integer arrays [][]

    // To create the game you only need the playerId that was generated in Postman (or assigned in data loader)
    public Game createGame (long player1id ){
        Player player1= playerRepository.findById(player1id).get();
        Game game = new Game(player1, GameStatus.NEW);
        gameRepository.save(game);
        //ask game repo to save
        return game;
    }

    public Game connectToGame(long player2id, Long gameId){
        //player2 id passed in
        Player player2= playerRepository.findById(player2id).get();
        // find game by gameId (use gameId generated in create game method)
        Game game = gameRepository.findById(gameId).get();
        //set player 2 to player 2
        game.getPlayers().add(player2);
        // change the game status
        game.setStatus(GameStatus.ONGOING);
        // save game
        gameRepository.save(game);
        // return game
        return game;
    }

    // When making moves the players id is no longer used, you need to use the ArrayList position in  Player
    public Game makeMove (long playerArrayPosition, long gameId, int position){
        Game game = gameRepository.findById(gameId).get(); //find game first
        if (playerArrayPosition == 0){ //this is the position in the ArrayList (player 1 = 0, player 2 = 1)
            game.getBoard().set(position, Counter.X); // player 1 (ArrayList position 0) is auto assigned 'X' counter
        }
        else if (playerArrayPosition == 1){ //player 2 (ArrayList position 1)
            game.getBoard().set(position, Counter.O); // assigned counter 'O'
        }
//       ELSE THROW EXCEPTION (EXTENSION - cannot override positions, exits out at 'full' board)

//      After each move we check all winning combinations to see if there is a winner
        game.setWinner(checkWinner(game));

        // Any winner found exists the game and status is changed
        if (!(game.getWinner() == null)){
            game.setStatus(GameStatus.FINISHED);
        }
        gameRepository.save(game);
        return game;
    };

    public Counter checkWinner(Game game) {
        Counter winner;
        for (int i = 0; i < winCombinations.length; i++) { //loop through outer array for all win combos
            if(game.getBoard().get(winCombinations[i][0]).equals(Counter.EMPTY)){
                continue;
            }
            if (
                    game.getBoard().get(winCombinations[i][0]).equals(game.getBoard().get(winCombinations[i][1])) &&
                            game.getBoard().get(winCombinations[i][1]).equals(game.getBoard().get(winCombinations[i][2]))
            ) {
                return game.getBoard().get(winCombinations[i][0]); //return counter EMUN type
            }
        }
        return null;
    }

    //new method in game service to get all games available
    public List<Game> getAllGames(){
//  calling findAll method from jparepository which returns a list of games
        return gameRepository.findAll();
    }

    public Optional<Game> GameById(long Id){
        return gameRepository.findById(Id);
    }

}

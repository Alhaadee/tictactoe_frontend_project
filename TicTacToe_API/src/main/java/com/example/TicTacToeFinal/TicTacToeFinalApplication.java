
// This doesn't need to be here but it checks in terminal if the winning combinations are working
// Just change the emun status on line 36 to EMPTY, X or O

package com.example.TicTacToeFinal;

import com.example.TicTacToeFinal.model.Counter;
import com.example.TicTacToeFinal.model.Game;
import com.example.TicTacToeFinal.model.GameStatus;
import com.example.TicTacToeFinal.model.Player;
import com.example.TicTacToeFinal.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.Arrays;

@SpringBootApplication
public class TicTacToeFinalApplication {

	@Autowired
	GameService gameService;

	private static final int[][] winCombinations = new int[][]{
			{0,1,2}, {3,4,5}, {6,7,8},
			{0,3,6}, {1,4,7}, {2,5,8},
			{0,4,8}, {2,4,6}
	};

	public static void main(String[] args) {

		Player player = new Player("april");
		Game game = new Game(player, GameStatus.NEW);

		ArrayList<Counter> winningState = new ArrayList<>(Arrays.asList(Counter.X, Counter.X, Counter.X, Counter.EMPTY, Counter.EMPTY, Counter.EMPTY, Counter.EMPTY, Counter.EMPTY, Counter.EMPTY));

		game.setBoard(winningState);

		System.out.println(checkWinner(game));

		SpringApplication.run(TicTacToeFinalApplication.class, args);
	}

	public static Counter checkWinner(Game game) {
		for (int i = 0; i < winCombinations.length; i++) { //loop through outer array for all win combos
			if (
					game.getBoard().get(winCombinations[i][0]).equals(Counter.EMPTY) || //will check for empty
							game.getBoard().get(winCombinations[i][1]).equals(Counter.EMPTY) ||
							game.getBoard().get(winCombinations[i][2]).equals(Counter.EMPTY)
			) {
				return null;
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
}

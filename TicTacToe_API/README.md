# TicTacToeFinal

## What is our project?

Our project is a restful API made using Spring and Postgres. It is a local 2 player tictactoe game, where players take turns trying to get 3 of their counters in a vertical, horizontal or diagonal sequence.
Our results are stored in a SQL Database, which records the individual Game Id, and the players associated with that game, along with the status of the game, and the winner if the status is "complete".
We used Postman to test run our code, to ensure our methods work,  most importantly to see if our API allows us to add players to a game, and create sequences that result in a winner if any of the winning combinations are satisfied.

## Why did we choose this project?

We chose this project because we wanted to explore how games would be made using an API, especially one that would take two different players that could play the same game.
Also, we wanted to make a game because it allowed us flexibility when deciding what goes into the game, i.e. Requirements for making the game set up, and making two players connect to a game.


## What are our game features?

Firstly, someone can start the game by entering their player name, in doing so, they are assigned Player ID, and a game ID is assigned. However, for a game to start, and for our Board Array to be generated,
a second player must enter their name, and the ID of the game they would like to join.

Now, they can play the game. They each take turns entering a position on our 1D Array List (which is our board), and the first to satisfy one of the winning combination conditions is the winner of the game. 
<img width="945" alt="Screenshot 2022-09-15 at 15 15 32" src="https://user-images.githubusercontent.com/109157608/190427278-cd2073fb-c6ac-4ea1-9ca0-b290841f55e5.png">

## How to play in postman:

1. Ensure that before run you 'createdb tictactoe' in terminal before starting, so you can see your SQL tables updating.
2. POST request to create a new player: http://localhost:8080/players?name= (insert player name) Do this twice to make 2 players.
3. POST request for new game: http://localhost:8080/games/start?player1Id= (insert player 1 id)
4. GET request to connect to game: http://localhost:8080/games/ (insert game id/second players Array list position)
5. PATCH request to play a move: http://localhost:8080/games/ (insert player array list position/game id/ position to be player(0-8))
6. Continue with patch requests, taking it in turns with each player until someone wins (3 in a row either horizontal, vertical or diagonal)
WATCH THE VIDEO IF UNSURE

## Still to do / extensions:

- The players ArrayList in postman is still coming up empty even when players are added to the game.
- CPU is not currently an option for player 2. 

- Exception thrown for position if taken: The game currently allows users to enter their counters to positions regardless of if the position is 'EMPTY' or is taken by an 'X' or 'O'.
- Auto players take turns: The game currently does not prompt who's turn it is. Any player can go at any time. 
- Game play cannot continue when status is FINISHED: game play can currently continue even when there is a winner or a full board. 
- Game status change to 'FINISHED' when all counter positions are filled even though there is no winner: currently unless there is a winner the status is ONGOING
- Exception thrown if incorrect gameId/playerId entered: currently just gets an error.
- Connect to random game: filter method for a player 2 to connect to a random game where the status is NEW. 

# Who made this project?

Ravi, Yingying, April, Khatija
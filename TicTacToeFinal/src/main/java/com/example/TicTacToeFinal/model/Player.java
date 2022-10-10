package com.example.TicTacToeFinal.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity(name="players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "username")
    private String username;

    @ManyToOne
    @JoinColumn(name = "game_id")
    @JsonIgnoreProperties({"players"})
    private Game game;


    public Player(String username) {
        this.username = username;
    }

    public Player (){}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

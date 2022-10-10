package com.example.TicTacToeFinal.model;

import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.criteria.CriteriaBuilder;
public enum Counter {

  EMPTY(null),  X(1),O(2); //these are our counters, let's set a value for each

    private Integer value;

    Counter(Integer value) {
        this.value = value;
    }
    public Integer getValue() {
        return value;
    }


}

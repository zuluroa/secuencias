package com.mentoring35.randomlist.model;

import com.mentoring35.randomlist.collection.Parametros;

import java.util.List;

public class RequestDTO {

    private String id;
    private List<List<String>> randomList;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<List<String>> getRandomList() {
        return randomList;
    }

    public void setRandomList(List<List<String>> randomList) {
        this.randomList = randomList;
    }
}

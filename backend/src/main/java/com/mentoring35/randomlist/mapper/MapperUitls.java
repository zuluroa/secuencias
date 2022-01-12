package com.mentoring35.randomlist.mapper;

import com.mentoring35.randomlist.collection.Random;
import com.mentoring35.randomlist.model.RequestDTO;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class MapperUitls {

    public Function<Random, RequestDTO> randomToRequestDTO() {
        return update -> {
            var requestDTO = new RequestDTO();
            requestDTO.setId(update.getId());
            requestDTO.setRandomList(update.getRandomList());
            return requestDTO;
        };
    }

}

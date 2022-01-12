package com.mentoring35.randomlist.router;

import com.google.common.collect.Lists;
import com.mentoring35.randomlist.collection.Random;
import com.mentoring35.randomlist.model.RequestParamsDTO;
import com.mentoring35.randomlist.repository.RandomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.Collections;
import java.util.Date;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

@RestController
@CrossOrigin("*")
public class RandomRouter {

    @Autowired
    private RandomRepository repository;

    @PostMapping("/new")
    public Mono<Random> forNumber(@RequestBody RequestParamsDTO request) {
        return Mono.just(new Random()).map(entity -> {
            entity.setDate(new Date());
            entity.setOriginalList(IntStream.range(request.getValorInicial(), request.getValorMaximo() + 1)
                    .mapToObj(String::valueOf)
                    .collect(Collectors.joining(",")));
            return entity;
        }).map(entity -> {
            var list = Stream.of(entity.getOriginalList().split(","))
                    .collect(Collectors.toList());
            Collections.shuffle(list);
            var size = (list.size()/ request.getCantidadColumnas());
            entity.setRandomList(Lists.partition(list, size));
            entity.setList(Lists.partition(list, size).toString());
            return entity;
        }).flatMap(repository::save);
    }

    @GetMapping("result/{id}")
    public Mono<Random> get(@PathVariable String id) {
        return repository.findById(id);
    }
}

package com.example.vueadmin.api.notice.mapper;

import com.example.vueadmin.api.notice.domain.entity.Board;

import java.util.List;
import java.util.Optional;

public interface BoardMapper {
    Board save(Board member);
    Optional<Board> findById(Integer id);
    List<Board> findAll();
}

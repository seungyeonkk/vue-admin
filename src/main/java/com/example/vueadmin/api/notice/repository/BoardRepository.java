package com.example.vueadmin.api.notice.repository;

import com.example.vueadmin.api.notice.domain.entity.Board;
import com.example.vueadmin.api.notice.mapper.BoardMapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer>, BoardMapper {

    @Override
    Board save(Board member);

    @Override
    Optional<Board> findById(Integer id);

    @Override
    List<Board> findAll();

    @Override
    void deleteById(Integer id);
}

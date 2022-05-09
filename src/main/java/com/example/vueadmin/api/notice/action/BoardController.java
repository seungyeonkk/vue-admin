package com.example.vueadmin.api.notice.action;

import com.example.vueadmin.api.common.domain.APIResponse;
import com.example.vueadmin.api.notice.domain.entity.Board;
import com.example.vueadmin.api.notice.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping(BoardController.PREFIX)
public class BoardController {

    static final String PREFIX = "/api/board";

    private BoardService boardService;

    public BoardController (BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping("/notices")
    public APIResponse findAll() {
        return APIResponse.success( boardService.findAll() );
    }

    @GetMapping("/notice/{id}")
    public APIResponse findById( @PathVariable Integer id) {
        return APIResponse.success( boardService.findById( id ) );
    }

    @PatchMapping("/notice")
    public APIResponse modify( @RequestBody Board board ) {

        boardService.modify( board );
        return APIResponse.success();
    }

    @PostMapping("/notice")
    public APIResponse save( @RequestBody Board board ) {

        boardService.save( board );
        return APIResponse.success();
    }
}

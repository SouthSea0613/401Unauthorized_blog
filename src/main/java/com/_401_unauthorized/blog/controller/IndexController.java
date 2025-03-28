package com._401_unauthorized.blog.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@RequiredArgsConstructor
@RequestMapping
@Controller
public class IndexController {
    @GetMapping
    public String index() {
        return "index";
    }

    @GetMapping("/test01")
    public String test01() {
        return "/test01";
    }
    @GetMapping("/test02")
    public String test02() {
        return "/test02";
    }
}

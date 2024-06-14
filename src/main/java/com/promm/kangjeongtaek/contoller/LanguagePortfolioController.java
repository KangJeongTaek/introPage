package com.promm.kangjeongtaek.contoller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LanguagePortfolioController {

    @GetMapping("/portfolio-ko")
    public String portfolioKo() {
        return "portfolio-ko";
    }
    @GetMapping("/portfolio-ja")
    public String portfolioJa() {
        return "portfolio-ja";
    }

    @GetMapping("/yu_gi_oh")
    public String yu_gi_oh(){return "yu_gi_oh";}
}

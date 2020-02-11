package com.wuyue.chickin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created on 2020/2/10.
 *
 * @author Yue Wu
 */
@Controller
public class ComController {

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String index(){
        return "/index.html";
    }
}

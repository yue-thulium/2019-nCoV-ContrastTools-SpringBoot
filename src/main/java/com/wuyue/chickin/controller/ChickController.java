package com.wuyue.chickin.controller;

import com.wuyue.chickin.model.ChickList;
import com.wuyue.chickin.model.NameList;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.*;

import java.util.*;

/**
 * Created on 2020/2/9.
 *
 * @author Yue Wu
 */
@RestController
@RequestMapping(value = "/chick")
public class ChickController {

    private static List<String> template;

    @RequestMapping(value = "/daychick",method = RequestMethod.POST)
    public Map<String,Object> dalyChick(@RequestParam("list") List<String> list) {
        Map<String,Object> map = new HashMap<>();
        Collections.sort(list);
        List<String> temporary;
        temporary = this.template;
        Collections.sort(temporary);
        if (temporary.equals(list)){
            temporary.removeAll(list);
        }else{
            temporary.removeAll(list);
            System.out.println(Arrays.toString(temporary.toArray()));
        }
        map.put("list",temporary);
        return map;
    }

    @RequestMapping(value = "/template",method = RequestMethod.POST)
    public Map<String,Object> templateList(@RequestParam("template") List<String> list) {
        Map<String,Object> map = new HashMap<>();
        Collections.sort(list);
        this.template = list;
        return map;
    }
}

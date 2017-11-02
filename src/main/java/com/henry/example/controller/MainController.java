package com.henry.example.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.henry.example.bean.MysqlService;

import net.sf.json.JSONObject;


@Controller
public class MainController {
	
	@Autowired 
	private MysqlService mysqlService;
	
	@RequestMapping(value="/")
	public String showGet(){
		return "index";
	}
	
	@ResponseBody 
	@RequestMapping(value = "/getMenu")
	public String getMenu() {
	    return mysqlService.getSQLAll();
	}
	
	@ResponseBody
	@RequestMapping(value="/search/{keyword}")
	public String search(@PathVariable String keyword){
		return mysqlService.getSQL(keyword);
	}
	
	@ResponseBody
	@RequestMapping(value = "/login/{account}&{password}")  
    public String login(@PathVariable String account, @PathVariable String password) {  
		String pwNameId = mysqlService.searchUser(account);
        String jsonResult;
		if (password.equals(pwNameId.split(",")[0])) {  
			jsonResult = "[{\"uid\":"+pwNameId.split(",")[2]+",\"name\":\""+pwNameId.split(",")[1]+"\"}]";
        } else {  
        	jsonResult = "False";
        }  
        JSONObject result = new JSONObject();
		result.accumulate("data", jsonResult);
		result.accumulate("msg", "请求成功");
		result.accumulate("success", true);
		return result.toString();
    }  
	
	@ResponseBody
	@RequestMapping(value = "/register/{account}&{password}&{name}")  
    public String register(@PathVariable String account, @PathVariable String password, @PathVariable String name) {  
		String result = mysqlService.insertUser(account, password, name);
		return result;
    }  
	
	@ResponseBody
	@RequestMapping(value = "/comment/{id}&{uid}&{comment}")  
    public String comment(@PathVariable String id, @PathVariable String uid, @PathVariable String comment) {  
		String result = mysqlService.insertComment(id, uid, comment);
		return result;
    }
	
	@ResponseBody
	@RequestMapping(value = "/searchComment/{id}")  
    public String searchComment(@PathVariable String id) {  
		String menu = mysqlService.searchComment(id);
		return menu;
    }
	
}

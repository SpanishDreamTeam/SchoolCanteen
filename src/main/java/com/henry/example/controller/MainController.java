package com.henry.example.controller;


import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.henry.example.bean.PostgresqlService;
import com.henry.example.bean.RedisService;
import com.henry.example.bean.User;

import javassist.expr.NewArray;

import com.henry.example.bean.JsontoXML;;

@Controller
public class MainController {
	@Autowired  
	private RedisService redisServer;
	
	@Autowired 
	private PostgresqlService postgresqlService;
	
	
	@RequestMapping(value="/hello/{name}",method = RequestMethod.GET)
	public String hello(@PathVariable("name") String name,Model model){
		model.addAttribute("name", name);
		return "hello";
	}
	
//	@RequestMapping(value="/xsdtree")
//	public String showGet(Model model){
//		String xsd = postgresqlService.getSQL("henry_xsd_01");
//		model.addAttribute("xsd", xsd);
//		return "index";
//	}
	
	@RequestMapping(value="/")
	public String showGet(){
		return "index";
	}
	
	@ResponseBody 
	@RequestMapping(value = "/getMenu")
	public String getMenu() {
	    return postgresqlService.getSQLAll();
	}
	
	@ResponseBody
	@RequestMapping(value="/xsdtree/request",method = RequestMethod.POST)
	public String savePost(HttpServletRequest request){
		String input_json = request.getParameter("input_json");
//		JsontoXML jsontoXML = new JsontoXML();
//		String xml_str = jsontoXML.conversion(input_json);
		System.out.println(input_json);
//		postgresqlService.insertSQL("henry_xsd_01", input_json);
		return "Commit success!";
	}
	
	@ResponseBody
	@RequestMapping(value="post",method = RequestMethod.POST)
	public String post(@RequestParam String name){
		return name;
	}
	
	@ResponseBody
	@RequestMapping(value="get")
	public Map<String,String> get(@RequestParam String name){
		Map<String,String> map = new HashMap<String,String>();
		map.put("name", name);
		map.put("value", "hello world");
//		redisServer.save(name, "hello world");
		postgresqlService.insertSQL(name, "hello world");
		return map;
	}
	
	@ResponseBody
	@RequestMapping(value="find/{id}/{name}")
	public User get(@PathVariable int id,@PathVariable String name){
		User u = new User();
		u.setId(id);
		u.setName(name);
		u.setData(new Date());
		
		return u;
	}
	
	@ResponseBody
	@RequestMapping(value = "testpost", method = RequestMethod.POST)  
	public String testpost() {  
        System.out.println("hello  test post");  
        return "ok";  
    } 
}

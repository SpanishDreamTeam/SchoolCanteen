package com.henry.example.bean;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Service
public class MysqlService {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public void insertSQL(String name,String info){
		jdbcTemplate.update("INSERT INTO menu (name, info) VALUES ('"+name+"', '"+info+"');");
//		jdbcTemplate.update("SELECT name FROM auth_group;");
	}
	
	public String getSQL(String dish_name) {
		List<Map<String, Object>> getsql = jdbcTemplate.queryForList("SELECT * FROM bdm291580582_db.menu WHERE dish_name LIKE '%" + dish_name + "%';");
		JSONArray jsonResult = JSONArray.fromObject(getsql);
		JSONObject result = new JSONObject();
		result.accumulate("data", jsonResult);
		result.accumulate("msg", "请求成功");
		result.accumulate("success", true);
		return result.toString();
	}
	
	public String getSQLAll() {
		List<Map<String, Object>> getsql = jdbcTemplate.queryForList("SELECT * FROM bdm291580582_db.menu ORDER BY id ASC;");
		JSONArray jsonResult = JSONArray.fromObject(getsql);
		JSONObject result = new JSONObject();
		result.accumulate("data", jsonResult);
		result.accumulate("msg", "请求成功");
		result.accumulate("success", true);
		return result.toString();
	}
}

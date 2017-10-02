package com.henry.example.bean;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Service
public class PostgresqlService {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public void insertSQL(String name,String info){
		jdbcTemplate.update("INSERT INTO menu (name, info) VALUES ('"+name+"', '"+info+"');");
//		jdbcTemplate.update("SELECT name FROM auth_group;");
	}
	
	public String getSQL(String name) {
		List<Map<String, Object>> getsql = jdbcTemplate.queryForList("SELECT info FROM bdm291580582_db.person WHERE name = '" + name + "' LIMIT 1;");
		String result = (String) getsql.get(0).get("info");
		return result;
	}
	
	public String getSQLAll() {
		List<Map<String, Object>> getsql = jdbcTemplate.queryForList("SELECT * FROM bdm291580582_db.menu ORDER BY id ASC;");
		JSONArray jsonResult = JSONArray.fromObject(getsql);
		JSONObject jsonObject = new JSONObject();
		jsonObject.accumulate("data", jsonResult);
		jsonObject.accumulate("msg", "请求成功");
		jsonObject.accumulate("success", true);
		return jsonObject.toString();
	}
}

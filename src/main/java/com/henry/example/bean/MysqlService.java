package com.henry.example.bean;

import java.text.SimpleDateFormat;
import java.util.Date;
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
	
	public String insertUser(String account,String password,String name){
		String resultString;
		try {			
			jdbcTemplate.update("INSERT INTO bdm291580582_db.user (account, password, name) VALUES ('"+account+"', '"+password+"', '"+name+"');");
			resultString = "True";
		} catch (Exception e) {
			// TODO: handle exception
			resultString = "False";
		}
		String jsonResult = resultString;
        JSONObject result = new JSONObject();
		result.accumulate("data", jsonResult);
		result.accumulate("msg", "请求成功");
		result.accumulate("success", true);
		return result.toString();
	}
	
	public String insertComment(String id,String uid,String comment){
		String resultString;
		SimpleDateFormat dateFormater = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date dateObj = new Date();
		String date  = dateFormater.format(dateObj);
		try {			
			jdbcTemplate.update("INSERT INTO bdm291580582_db.comment (id, uid, comment, date) VALUES ('"+id+"', '"+uid+"', '"+comment+"', '"+date+"');");
			resultString = "True";
		} catch (Exception e) {
			// TODO: handle exception
			resultString = "False";
		}
		String jsonResult = resultString;
        JSONObject result = new JSONObject();
		result.accumulate("data", jsonResult);
		result.accumulate("msg", "请求成功");
		result.accumulate("success", true);
		return result.toString();
	}
	
	public String searchUser(String account){
		List<Map<String, Object>> getsql = jdbcTemplate.queryForList("SELECT * FROM bdm291580582_db.user WHERE account LIKE '%" + account + "%';");
		return getsql.get(0).get("password").toString() + "," + getsql.get(0).get("name").toString() + "," + getsql.get(0).get("uid").toString();
	}
	
	public String searchComment(String id) {
		List<Map<String, Object>> getsql = jdbcTemplate.queryForList("SELECT comment.comment, comment.date, user.name FROM comment INNER JOIN user ON comment.uid = user.uid AND comment.id = "+ id +" ORDER BY comment.date; ");
		JSONArray jsonResult = JSONArray.fromObject(getsql);
		JSONObject result = new JSONObject();
		result.accumulate("data", jsonResult);
		result.accumulate("msg", "请求成功");
		result.accumulate("success", true);
		return result.toString();
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

package com.henry.example.bean;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;

import java.util.Set;

@Service
public class RedisService {
//    @Autowired
//    private RedisTemplate redisTemplate;
    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    /**
     * 保存元素对象进入缓存
     *
     * @param key 存储的Key键
     * @param value 存储的Value值
     */
    public void save (String key, String value) {
    	stringRedisTemplate.opsForValue().set(key, value);
    }


    /**
     * 删除元素对象从缓存中
     *
     * @param key 删除的Key键
     * @return
     */
    public void delete (String key) {
    	stringRedisTemplate.delete(key);
    }

    /**
     * 获得Key对应的值
     *
     * @param key
     */
    public <V> V query (String key) {
        return (V)stringRedisTemplate.opsForValue().get(key);
    }

//    public <T> Set<T> getKeys (String pattern) {
//        return stringRedisTemplate.keys(pattern);
//    }

    public RedisTemplate getRedisTemplate() {
        return stringRedisTemplate;
    }

    public void setRedisTemplate(StringRedisTemplate redisTemplate) {
        this.stringRedisTemplate = redisTemplate;
    }
}

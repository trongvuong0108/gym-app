package com.Code.Service.User;


import com.Code.Entity.User.user;

import java.util.List;

public interface userService {

    public List<user> getAll();
    public void save(user user);

    public user findByUserName(String username);

    public user findByName(String name);

    public user findById(int id);
}

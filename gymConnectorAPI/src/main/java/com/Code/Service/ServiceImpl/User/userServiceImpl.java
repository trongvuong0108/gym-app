package com.Code.Service.ServiceImpl.User;

import com.Code.Entity.User.user;
import com.Code.Repository.User.userRepository;
import com.Code.Service.User.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userServiceImpl implements userService {

    @Autowired
    private userRepository userRepository;

    @Override
    public List<user> getAll() {
        return userRepository.findAll();
    }

    @Override
    public void save(user user) {
        userRepository.save(user);
    }

    @Override
    public user findByUserName(String username) {
        for (user user : userRepository.findAll()) {
            if(user.getAccount().getUsername().equals(username)){
                return user ;
            }

        }
        return null;
    }

    @Override
    public user findByName(String name) {
        return userRepository.findByName(name);
    }

    @Override
    public user findById(int id) {
        return userRepository.findById(id).get();
    }
}

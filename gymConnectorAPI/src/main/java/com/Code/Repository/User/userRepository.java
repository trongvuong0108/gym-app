package com.Code.Repository.User;


import com.Code.Entity.User.user;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepository extends JpaRepository<user,Integer> {
    public user findByName(String username);
}

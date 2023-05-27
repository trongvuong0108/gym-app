package com.Code.Repository.Auth;

import com.Code.Entity.Auth.token;
import org.springframework.data.jpa.repository.JpaRepository;

public interface tokenRepository extends JpaRepository<token,Integer> {
    public token findByToken(String token);
}

package com.Code.Repository.Auth;

import com.Code.Entity.Auth.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account,Integer> {
    public Account findByUsername(String username);
}

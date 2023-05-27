package com.Code.Service.ServiceImpl.Auth;

import com.Code.Entity.Auth.Account;
import com.Code.Entity.Auth.token;
import com.Code.Repository.Auth.AccountRepository;
import com.Code.Repository.Auth.tokenRepository;
import com.Code.Service.Auth.tokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class tokenServiceImpl implements tokenService {

    @Autowired
    private tokenRepository tokenRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public token findByToken(String token) {
        return tokenRepository.findByToken(token);
    }

    @Override
    public void save(token token) {
        tokenRepository.save(token);
    }

    @Override
    public boolean confirmToken(String userName, String confirmToken) {
        token token = tokenRepository.findByToken(confirmToken);
        if (token.getAccount().getUsername().equals(userName) &&
                token.getExpiryAt().isAfter(LocalDateTime.now())) {
            Account acc = token.getAccount();
            acc.setEnable(true);
            accountRepository.save(acc);
            return true;
        } else
            return false;
    }
}

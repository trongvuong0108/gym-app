package com.Code.Service.ServiceImpl.Auth;

import com.Code.Entity.Auth.Account;
import com.Code.Exception.NotFoundException;
import com.Code.Repository.Auth.AccountRepository;
import com.Code.Service.Auth.AccountService;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AccountServiceImpl implements AccountService {
    private final AccountRepository accountRepository;

    public AccountServiceImpl(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    @SneakyThrows
    public List<Account> getAll() {
        return accountRepository.findAll();
    }

    @Override
    @SneakyThrows
    public Account findByUsername(String username) {
        return accountRepository.findByUsername(username);
    }

    @Override
    @SneakyThrows
    public void save(Account account) {
        accountRepository.save(account);
    }
}

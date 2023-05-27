package com.Code.Service.ServiceImpl.Auth;

import com.Code.Entity.Auth.Account;
import com.Code.Enum.role;
import com.Code.Enum.typeAccount;
import com.Code.Exception.NotFoundException;
import com.Code.Repository.Auth.AccountRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class accountServiceImplTest {
    private AccountServiceImpl service;
    private AccountRepository repository;
    private Account account;

    @BeforeEach
    void setUp(){
        repository = mock(AccountRepository.class);
        service = new AccountServiceImpl(repository);
        account = new Account(1,"abc","abc","abc","abc",true, typeAccount.NORMAL, role.USER);
    }

    @Test
    void findByUserName_validName_ThrowNotFoundException() {
//        when(repository.findByUsername("abc")).thenReturn(Optional.empty());
        assertThrows(NotFoundException.class, () -> service.findByUsername("abc"));
    }

    @Test
    void findByUserName_validName_Success() {
//        when(repository.findByUsername("abc")).thenReturn(Optional.of(account));
        assertEquals(service.findByUsername("abc"),account);
    }

}

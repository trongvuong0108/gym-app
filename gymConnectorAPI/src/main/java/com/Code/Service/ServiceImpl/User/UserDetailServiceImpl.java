package com.Code.Service.ServiceImpl.User;

import com.Code.Entity.Auth.Account;
import com.Code.Service.Auth.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service("userDetailService")
public class UserDetailServiceImpl implements UserDetailsService {
    @Autowired
    private AccountService accountService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountService.findByUsername(username);
        if(account == null || !account.isEnable() ) throw new UsernameNotFoundException("User not find");
        else {
            Set<GrantedAuthority> auth = new HashSet<>();
            auth.add(new SimpleGrantedAuthority(account.getRole().getText()));
            return  new org.springframework.security.core.userdetails
                    .User(account.getUsername(),account.getPassword(),true,true,true,true,auth);
        }
    }
}

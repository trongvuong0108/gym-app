package com.Code.Service.Auth;

import com.Code.Entity.Auth.token;

public interface tokenService {
    public token findByToken(String token);
    public void save(token token);
    public boolean confirmToken(String userName, String confirmToken);
}

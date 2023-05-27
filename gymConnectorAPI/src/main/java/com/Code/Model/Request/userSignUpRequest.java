package com.Code.Model.Request;

import lombok.Data;
@Data
public class userSignUpRequest {
    private String username;
    private String password;
    private String name;
    private String address;
    private String email;
    private String phone;
}

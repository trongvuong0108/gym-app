package com.example.lib.Model.Request;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class userSignIn {
    private String username;
    private String password;
    private String name;
    private String email;
    private String address;
    private String phone;
}

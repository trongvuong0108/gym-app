package com.Code.Model.Request;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class ptSignUpRequest {
    private String username;
    private String password;
    private String name;
    private String address;
    private String email;
    private String phone;
    private int gymId;
    private int price;
}

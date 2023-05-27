package com.Code.Model.Request;


import lombok.Data;

@Data
public class updateUserRequest {
    private int id;
    private String name;
    private String phone;
    private String email;
    private String address;
}

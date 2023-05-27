package com.Code.Model.Request;


import lombok.Data;

@Data
public class forgetPasswordRequest {
    private String username;
    private String oldPassword;
    private String newPassword;
}

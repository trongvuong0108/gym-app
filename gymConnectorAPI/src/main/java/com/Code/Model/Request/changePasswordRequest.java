package com.Code.Model.Request;

import lombok.Data;

@Data
public class changePasswordRequest {
    private String username;
    private String password;
    private String newPassword;
}

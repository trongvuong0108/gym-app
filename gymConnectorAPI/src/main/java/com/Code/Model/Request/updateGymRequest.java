package com.Code.Model.Request;

import lombok.Data;

@Data

public class updateGymRequest {
    private int id;
    private String email;
    private String address;
    private String name;
    private String phone;
}

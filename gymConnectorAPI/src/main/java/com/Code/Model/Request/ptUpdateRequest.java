package com.Code.Model.Request;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class ptUpdateRequest {
    private int id;
    private String name;
    private String phone;
    private String email;
    private String address;
    private int price;
}

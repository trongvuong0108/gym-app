package com.Code.Model.Response;

import com.Code.Entity.PT.personalTrainer;
import lombok.Data;

@Data
public class PTResponse {
    private int id;
    private String username;
    private String name;
    private String address;
    private String phone;
    private String email;
    private String avatar;
    private int fee;
    private String Role;
    private float rate = 5;
    private boolean enable;

    private gymResponse gym;

    public PTResponse(personalTrainer pt) {
        this.id = pt.getId();
        this.username = pt.getAccount().getUsername();
        this.name = pt.getName();
        this.address = pt.getAddress();
        this.phone = pt.getAccount().getPhone();
        this.email = pt.getAccount().getEmail();
        this.avatar = pt.getAvatar();
        this.fee = pt.getPrice();
        this.Role = pt.getAccount().getRole().getText();
        this.enable = pt.getAccount().isEnable();
        this.gym = new gymResponse(pt.getGym());
    }
}

package com.Code.Model.Response;

import com.Code.Entity.User.user;
import lombok.Data;

@Data
public class userInfoResponse {
    private int id ;
    private String username ;
    private String name ;
    private String address;
    private String phone ;
    private String email ;
    private String avatar;
    private String Role ;
    private boolean enable;


    public userInfoResponse(user user) {
        this.id = user.getId();
        this.username = user.getAccount().getUsername();
        this.name = user.getName();
        this.address = user.getAddress();
        this.phone = user.getAccount().getPhone();
        this.email = user.getAccount().getEmail();
        this.avatar = user.getAvatar();
        this.Role = user.getAccount().getRole().getText();
        this.enable = user.getAccount().isEnable();
    }
}

package com.Code.Controller.Client;

import com.Code.Entity.User.user;
import com.Code.Exception.NotFoundException;
import com.Code.Model.Request.updateUserRequest;
import com.Code.Model.Response.userInfoResponse;
import com.Code.Service.Payment.billPtService;
import com.Code.Service.User.userService;
import com.Code.Util.Uploader;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/client/user")
public class userController {
    @Autowired
    private userService userService;

    @SneakyThrows
    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody updateUserRequest updateUserRequest) {
        user user = userService.findById(updateUserRequest.getId());
        if (user == null) throw new NotFoundException("user not found");
        user.getAccount().setEmail(updateUserRequest.getEmail());
        user.getAccount().setPhone(updateUserRequest.getPhone());
        user.setAddress(updateUserRequest.getAddress());
        user.setName(updateUserRequest.getName());
        userService.save(user);
        return ResponseEntity.ok(new userInfoResponse(user));
    }

    @PostMapping("/uploadAvatar")
    private HttpStatus uploadAvatar(@RequestParam("username") String username,
                                    @RequestParam("avatar") MultipartFile avatar) {
        user user = userService.findByUserName(username.trim());
        //if(user == null) System.out.println(username + " is null");
        Uploader uploader = new Uploader();
        user.setAvatar(uploader.uploadFile(avatar));
        userService.save(user);
        return HttpStatus.OK;
    }
}

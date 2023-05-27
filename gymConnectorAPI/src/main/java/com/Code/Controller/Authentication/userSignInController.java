package com.Code.Controller.Authentication;

import com.Code.Entity.Auth.Account;
import com.Code.Entity.Auth.token;
import com.Code.Entity.User.user;
import com.Code.Enum.role;
import com.Code.Enum.tokenType;
import com.Code.Enum.typeAccount;
import com.Code.Exception.NotFoundException;
import com.Code.Model.Request.changePasswordRequest;
import com.Code.Model.Request.forgetPasswordRequest;
import com.Code.Model.Request.userSignUpRequest;
import com.Code.Model.Response.userInfoResponse;
import com.Code.Service.Auth.AccountService;
import com.Code.Service.Auth.tokenService;
import com.Code.Service.User.userService;
import com.Code.Util.Uploader;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/signUser")
public class userSignInController {
    @Autowired
    private userService userService;

    @Autowired
    private AccountService AccountService;

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private tokenService tokenService;

    public void sendEmail(String toEmail,
            String subject,
            String body) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom("ngaitrong0108@gmail.com");
        mailMessage.setTo(toEmail);
        mailMessage.setSubject(subject);
        mailMessage.setText(body);
        javaMailSender.send(mailMessage);
    }

    @SneakyThrows
    @PostMapping("/save")
    public HttpStatus save(@RequestBody userSignUpRequest userSignUpRequest) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        if(userService.findByUserName(userSignUpRequest.getName()) != null) throw new NotFoundException("Already have username");
        Account account = new Account(
                userSignUpRequest.getUsername(),
                bCryptPasswordEncoder.encode(userSignUpRequest.getPassword()),
                userSignUpRequest.getEmail(),
                userSignUpRequest.getPhone(),
                false,
                role.USER,
                typeAccount.NORMAL);
        AccountService.save(account);
        user user = new user();
        user.setAccount(account);
        user.setAddress(userSignUpRequest.getAddress());
        user.setName(userSignUpRequest.getName());
        userService.save(user);
        return HttpStatus.OK;
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

    @PostMapping("/sendToken")
    public HttpStatus sendToken(@RequestParam("username") String username) {
        System.out.println("sending....");
        Account account = AccountService.findByUsername(username);
        token token = new token();
        token.genNewToken();
        token.setTokenType(tokenType.REPASSWORD);
        token.setAccount(account);
        tokenService.save(token);
        sendEmail(account.getEmail(), "Token", token.getToken());
        return HttpStatus.OK;
    }

    @RequestMapping("/confirmToken")
    public HttpStatus confirmToken(@RequestParam("token") String tokenString, @RequestParam("username") String username) {
        if(tokenService.confirmToken(username,tokenString))
            return HttpStatus.OK;
        else
            return HttpStatus.BAD_REQUEST;
    }

    @SneakyThrows
    @PostMapping("/forgetPassword")
    public void forgetPassword(@RequestBody forgetPasswordRequest forgetPasswordRequest) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        Account account = AccountService.findByUsername(forgetPasswordRequest.getUsername());
        if(account == null)
            throw new NotFoundException("account not found");
        else if(account.isEnable())
            throw new NotFoundException("account is disable");
        else if (bCryptPasswordEncoder.matches(forgetPasswordRequest.getOldPassword(), account.getPassword()))
            throw new NotFoundException("password not match");
        else
            account.setPassword(bCryptPasswordEncoder.encode(forgetPasswordRequest.getNewPassword()));
    }

    @SneakyThrows
    @PostMapping("/changePassword")
    public HttpStatus changePassword(@RequestBody changePasswordRequest changePasswordRequest) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        Account account = AccountService.findByUsername(changePasswordRequest.getUsername());
        if(account == null)
            throw new NotFoundException("account not found");
        else if(account.isEnable())
            throw new NotFoundException("account is disable");
        else if (bCryptPasswordEncoder.matches(changePasswordRequest.getPassword(), account.getPassword()))
            throw new NotFoundException("password not match");
        else{
            account.setPassword(bCryptPasswordEncoder.encode(changePasswordRequest.getNewPassword()));
            return HttpStatus.OK;
        }
    }

    @RequestMapping("/createGoogleUser")
    public userInfoResponse createGoogleUser(
            @RequestParam("email") String email,
            @RequestParam("name") String name,
            @RequestParam("avatar") String avatar) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        Account accountResult = AccountService.findByUsername(email);
        if (accountResult == null) {
            Account account = new Account(email, bCryptPasswordEncoder.encode(email), email, "", true, role.USER, typeAccount.GOOGLE);
            AccountService.save(account);
            user user = new user();
            user.setAccount(account);
            user.setAddress("");
            user.setName(name);
            user.setAvatar(avatar);
            userService.save(user);
            return new userInfoResponse(user);
        } else {
            user user = userService.findByUserName(accountResult.getUsername());
            return new userInfoResponse(user);
        }
    }


}

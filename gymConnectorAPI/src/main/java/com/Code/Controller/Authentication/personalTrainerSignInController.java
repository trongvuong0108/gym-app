package com.Code.Controller.Authentication;

import com.Code.Entity.Auth.Account;
import com.Code.Entity.Auth.token;
import com.Code.Entity.PT.personalTrainer;
import com.Code.Enum.role;
import com.Code.Enum.tokenType;
import com.Code.Enum.typeAccount;
import com.Code.Exception.NotFoundException;
import com.Code.Model.Request.ptSignUpRequest;
import com.Code.Service.Auth.AccountService;
import com.Code.Service.Auth.tokenService;
import com.Code.Service.Gym.gymService;
import com.Code.Service.PT.personalTrainerService;
import com.Code.Util.MailSender;
import com.Code.Util.Uploader;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/signInPersonalTrainer")
public class personalTrainerSignInController {
    @Autowired
    private personalTrainerService personalTrainerService;

    @Autowired
    private AccountService AccountService;

    @Autowired
    private gymService gymService;

    @Autowired
    private tokenService tokenService;


    @Autowired
    private JavaMailSender javaMailSender;

    @PostMapping("/signIn")
    public HttpStatus signIn(@RequestBody ptSignUpRequest ptSignUpRequest) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        Account account = new Account(
                ptSignUpRequest.getUsername(),
                bCryptPasswordEncoder.encode(ptSignUpRequest.getPassword()),
                ptSignUpRequest.getEmail(),
                ptSignUpRequest.getPhone(),
                false,
                role.PERSONAL_TRAINER,
                typeAccount.NORMAL);
        AccountService.save(account);
        System.out.println(ptSignUpRequest.toString());
        personalTrainer personalTrainer = new personalTrainer(
                ptSignUpRequest.getName(),
                ptSignUpRequest.getAddress(),
                "",
                ptSignUpRequest.getPrice(),
                account,
                gymService.findGymById(ptSignUpRequest.getGymId())
        );
        personalTrainerService.save(personalTrainer);
        return HttpStatus.OK;
    }

    @PostMapping("/uploadAvatar")
    private String uploadAvatar(@RequestParam("username") String username,
            @RequestParam("avatar") MultipartFile avatar) {
        personalTrainer personal_trainer = personalTrainerService.findByUsername(username);
        Uploader uploader = new Uploader();
        personal_trainer.setAvatar(uploader.uploadFile(avatar));
        personalTrainerService.save(personal_trainer);
        return "Successful";
    }

    @PostMapping("/sendToken")
    public HttpStatus sendToken(@RequestParam("username") String username) {
        Account account = AccountService.findByUsername(username);
        token token = new token();
        token.genNewToken();
        token.setTokenType(tokenType.REPASSWORD);
        token.setAccount(account);
        tokenService.save(token);
        sendEmail(account.getEmail(), "Token", token.getToken());
        return HttpStatus.OK;
    }

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

    @RequestMapping("/confirmToken")
    public HttpStatus confirmToken(@RequestParam("token") String tokenString,
                                   @RequestParam("username") String username) {
        token token = tokenService.findByToken(tokenString);
        if (token.getAccount().getUsername().equals(username) &&
                token.getExpiryAt().isAfter(LocalDateTime.now())) {
            Account acc = token.getAccount();
            acc.setEnable(true);
            AccountService.save(acc);
            return HttpStatus.OK;
        } else
            return HttpStatus.BAD_REQUEST;
    }

    @RequestMapping("/forgetPassword")
    public HttpStatus forgetPassword(
            @RequestParam("username") String username,
            @RequestParam("newPassword") String newPassword) {
        Account account = AccountService.findByUsername(username);
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        account.setPassword(bCryptPasswordEncoder.encode(newPassword));
        return HttpStatus.OK;
    }
    @SneakyThrows
    @RequestMapping("/changePassword")
    public HttpStatus changePassword(
            @RequestParam("username") String username,
            @RequestParam("password") String password,
            @RequestParam("newPassword") String newPassword) {
        Account account = AccountService.findByUsername(username);
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        if (bCryptPasswordEncoder.matches(password, account.getPassword())) {
            account.setPassword(bCryptPasswordEncoder.encode(newPassword));
            AccountService.save(account);
            return HttpStatus.OK;
        } else
            return HttpStatus.BAD_REQUEST;
    }
}

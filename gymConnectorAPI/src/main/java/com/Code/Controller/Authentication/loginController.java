package com.Code.Controller.Authentication;

import com.Code.Entity.Auth.Account;
import com.Code.Entity.PT.personalTrainer;
import com.Code.Entity.User.user;
import com.Code.Model.Authentication.jwtDecodeModel;
import com.Code.Model.Authentication.jwtRequest;
import com.Code.Model.Response.PTResponse;
import com.Code.Model.Response.userInfoResponse;
import com.Code.Security.JwtTokenUtil;
import com.Code.Service.Auth.AccountService;
import com.Code.Service.PT.personalTrainerService;
import com.Code.Service.User.userService;
import com.google.gson.Gson;
import io.jsonwebtoken.impl.DefaultClaims;
import lombok.SneakyThrows;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@RequestMapping(value = "/auth")
@RestController
public class loginController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailService;

    @Autowired
    private AccountService accountService;

    @Autowired
    private userService userService;

    @Autowired
    private personalTrainerService personaTrainerService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @SneakyThrows
    @PostMapping(value = "/login")
    public String createToken(@RequestBody jwtRequest jwtRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(jwtRequest.getUsername(),jwtRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorect....", e);
        }
        final UserDetails userDetails = userDetailService.loadUserByUsername(jwtRequest.getUsername().trim());
        return jwtTokenUtil.generateToken(userDetails);
    }

    @PostMapping(value = "/getUserInfo")
    public userInfoResponse getUserInfo(@RequestParam("jwt") String jwt) {
        jwtDecodeModel jwtDecodeModel = extractModel(jwt);
        Account accountResult = accountService.findByUsername(jwtDecodeModel.sub);
        user user = userService.findByUserName(accountResult.getUsername().trim());
        return new userInfoResponse(user);
    }

    @PostMapping(value = "/getPTInfo")
    public PTResponse getPTInfo(@RequestParam("jwt") String jwt) {
        jwtDecodeModel jwtDecodeModel = extractModel(jwt);
        Account accountResult = accountService.findByUsername(jwtDecodeModel.sub);
        personalTrainer pt = personaTrainerService.findByUsername(accountResult.getUsername().trim());
        return new PTResponse(pt);
    }

    public jwtDecodeModel extractModel(String jwt){
        String[] pieces = jwt.split("\\.");
        String b64payload = pieces[1];
        String jsonString = null;
        jsonString = new String(Base64.decodeBase64(b64payload), StandardCharsets.UTF_8);
        return new Gson().fromJson(jsonString, jwtDecodeModel.class);
    }
}


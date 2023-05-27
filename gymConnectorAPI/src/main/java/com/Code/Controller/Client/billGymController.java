package com.Code.Controller.Client;


import com.Code.Entity.Gym.combo;
import com.Code.Entity.Gym.gym;
import com.Code.Entity.Payment.billGym;
import com.Code.Entity.User.user;
import com.Code.Model.Response.billGymResponse;
import com.Code.Service.Gym.comboService;
import com.Code.Service.Gym.gymService;
import com.Code.Service.Payment.billGymService;
import com.Code.Service.User.userService;
import org.apache.http.HttpStatus;
import org.apache.http.protocol.HTTP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("client/billGym")
public class billGymController {
    @Autowired
    private billGymService bill_gymService;

    @Autowired
    private userService userService;

    @Autowired
    private gymService gymService;

    @Autowired
    private comboService comboService;

    @PostMapping("/checkout")
    public ResponseEntity<billGymResponse> checkout(
            @RequestParam("idUser") int idUser,
            @RequestParam("idCombo") int idCombo) {
        user user = userService.findById(idUser);
        combo combo = comboService.findByid(idCombo);
        if (bill_gymService.getByUser(idUser) != null) {
            return ResponseEntity.badRequest().build();
        }
        billGym bill = new billGym();
        bill.setUser(user);
        bill.setGym(combo.getGym());
        bill.setCombo(combo);
        bill.setDayStart(LocalDateTime.now());
        bill.setDayEnd(LocalDateTime.now().plusMonths(1));
        bill_gymService.save(bill);
        billGymResponse billGymResponse = new billGymResponse(bill);
        return ResponseEntity.ok(billGymResponse);
    }

    @RequestMapping("/checkGymExit/{id}")
    public ResponseEntity<billGymResponse> checkGymExit(@PathVariable("id") int id) {
        billGymResponse billGymResponse = new billGymResponse();
        billGym bill = bill_gymService.getByUser(id);
        if (bill != null) {
            billGymResponse.setId(bill.getId());
            billGymResponse.setDayStart(bill.getDayStart().toString());
            billGymResponse.setDayEnd(bill.getDayEnd().toString());
            billGymResponse.setGym(bill.getGym());
            billGymResponse.setCombo(bill.getCombo());
            return ResponseEntity.ok(billGymResponse);
        }
        return ResponseEntity.badRequest().build();
    }
}

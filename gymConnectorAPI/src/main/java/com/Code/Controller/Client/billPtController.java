package com.Code.Controller.Client;

import com.Code.Entity.PT.personalTrainer;
import com.Code.Entity.Payment.billPt;
import com.Code.Entity.User.user;
import com.Code.Model.Response.PTResponse;
import com.Code.Model.Response.billPTResponse;
import com.Code.Service.PT.personalTrainerService;
import com.Code.Service.Payment.billPtService;
import com.Code.Service.User.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("client/billPt")
public class billPtController {
    @Autowired
    private billPtService bill_ptService;

    @Autowired
    private userService userService;


    @Autowired
    private personalTrainerService personal_trainerService;

    @PostMapping("checkout")
    public ResponseEntity<?> checkout(
            @RequestParam("idUser") int idUser,
            @RequestParam("idPt") int idPt) {
        user user = userService.findById(idUser);
        personalTrainer pt = personal_trainerService.findById(idPt);
        if (bill_ptService.getByUser(idUser) != null) {
            return ResponseEntity.badRequest().build();
        }
        billPt bill = new billPt();
        bill.setUser(user);
        bill.setPersonal_trainer(pt);
        bill.setDayStart(LocalDateTime.now());
        bill.setDayEnd(LocalDateTime.now().plusMonths(1));
        bill_ptService.save(bill);
        billPTResponse billPTResponse = new billPTResponse(bill);
        return ResponseEntity.ok(billPTResponse);
    }

    @RequestMapping("checkPTExit/{id}")
    public ResponseEntity<?> checkPTExit(@PathVariable("id") int id) {
        billPTResponse billPTResponse = new billPTResponse();
        billPt bill = bill_ptService.getByUser(id);
        if (bill != null) {
            billPTResponse.setId(bill.getId());
            billPTResponse.setTrainer(new PTResponse(bill.getPersonal_trainer()));
            billPTResponse.setDayStart(bill.getDayStart().toString());
            billPTResponse.setDayEnd(bill.getDayEnd().toString());
            return ResponseEntity.ok(billPTResponse);
        }
        return ResponseEntity.badRequest().build();
    }
}

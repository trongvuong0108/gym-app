package com.Code.Controller.Admin;

import com.Code.Entity.Payment.billGym;
import com.Code.Entity.Payment.billPt;
import com.Code.Service.Payment.billGymService;
import com.Code.Service.Payment.billPtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/admin/billPayment")
public class billPaymentAdminController {
    @Autowired
    private billGymService billGymService;

    @Autowired
    private billPtService billPtService;

    @RequestMapping("/getBillByPt/{id}")
    public ResponseEntity<List<billPt>> getBillByPt(@PathVariable int id){
        List<billPt> billPts = new ArrayList<>();
        billPtService.getAll().forEach((billPt -> {
            if(billPt.getPersonal_trainer().getId() == id) billPts.add(billPt);
        }));
        return ResponseEntity.ok(billPts) ;
    }

    @RequestMapping("/getBillByGym/{id}")
    public ResponseEntity<List<billGym>> getBillByGym(@PathVariable int id){
        List<billGym> billGyms = new ArrayList<>();
        billGymService.getAll().forEach((billGym -> {
            if(billGym.getGym().getId() == id) billGyms.add(billGym);
        }));
        return ResponseEntity.ok(billGyms) ;
    }

    @RequestMapping("/getBillByCombo/{id}")
    public ResponseEntity<List<billGym>> getBillByCombo(@PathVariable int id){
        List<billGym> billGyms = new ArrayList<>();
        billGymService.getAll().forEach((billGym -> {
            if(billGym.getCombo().getId() == id) billGyms.add(billGym);
        }));
        return ResponseEntity.ok(billGyms) ;
    }
}

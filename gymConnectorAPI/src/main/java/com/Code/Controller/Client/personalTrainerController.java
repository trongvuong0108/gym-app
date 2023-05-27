package com.Code.Controller.Client;

import com.Code.Entity.PT.personalTrainer;
import com.Code.Entity.PT.picPt;
import com.Code.Exception.NotFoundException;
import com.Code.Model.Request.ptUpdateRequest;
import com.Code.Model.Response.PTResponse;
import com.Code.Model.Response.userInfoResponse;
import com.Code.Service.Auth.AccountService;
import com.Code.Service.PT.personalTrainerService;
import com.Code.Service.PT.picPTService;
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
@RequestMapping("/client/personalTrainer")
public class personalTrainerController {
    @Autowired
    private personalTrainerService personalTrainerService;

    @Autowired
    private billPtService billPtService;

    @Autowired
    private picPTService picPTService;

    @Autowired
    private AccountService accountService;

    @RequestMapping("/update")
    public PTResponse update(@RequestBody ptUpdateRequest ptUpdateRequest) {
        System.out.println(ptUpdateRequest.toString());
        personalTrainer pt = personalTrainerService.findById(ptUpdateRequest.getId());
        pt.getAccount().setEmail(ptUpdateRequest.getEmail());
        pt.getAccount().setPhone(ptUpdateRequest.getPhone());
        accountService.save(pt.getAccount());
        pt.setAddress(ptUpdateRequest.getAddress());
        pt.setName(ptUpdateRequest.getName());
        pt.setPrice(ptUpdateRequest.getPrice());
        personalTrainerService.save(pt);
        return new PTResponse(pt);
    }

    @PostMapping ("/getUserByPT")
    public ResponseEntity<?> getUserByPT(@RequestParam("idPT") int idPT) {
        List<userInfoResponse> res = new ArrayList<>();
        billPtService.getAll().forEach(bill -> {
            if (bill.getPersonal_trainer().getId() == idPT && bill.getUser().getAccount().isEnable()) {
                userInfoResponse userInfoResponse = new userInfoResponse(bill.getUser());
                res.add(userInfoResponse);
            }
        });
        if(res.size() == 0) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(res);
    }

    @SneakyThrows
    @PostMapping("/addMoreImg")
    public HttpStatus addMoreImg(@RequestParam("id") int id, @RequestParam("pic") MultipartFile pic){
        personalTrainer pt = personalTrainerService.findById(id);
        if(pt == null) throw new NotFoundException("Pt not found");
        Uploader uploader = new Uploader();
        picPt picPt = new picPt();
        picPt.setPersonalTrainer(pt);
        picPt.setImg(uploader.uploadFile(pic));
        picPTService.save(picPt);
        return HttpStatus.OK;
    }
}

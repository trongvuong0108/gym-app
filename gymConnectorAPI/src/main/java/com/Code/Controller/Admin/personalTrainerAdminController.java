package com.Code.Controller.Admin;

import com.Code.Entity.PT.personalTrainer;
import com.Code.Entity.PT.picPt;
import com.Code.Entity.PT.ptRate;
import com.Code.Enum.role;
import com.Code.Exception.NotFoundException;
import com.Code.Model.Response.PTResponse;
import com.Code.Model.Response.ptImgResponse;
import com.Code.Service.PT.personalTrainerService;
import com.Code.Service.PT.picPTService;
import com.Code.Service.PT.ratePtService;
import com.Code.Util.Uploader;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/admin/personalTrainer")
public class personalTrainerAdminController {
    @Autowired
    private personalTrainerService personalTrainerService;
    @Autowired
    private ratePtService ratePtService;




    @SneakyThrows
    @RequestMapping("/getALlPT")
    public ResponseEntity<?> getALlPT(){
        List<personalTrainer> personalTrainers = personalTrainerService.getAll();
        if(personalTrainers.size() == 0) throw new NotFoundException("no personal trainer found");
        List<PTResponse> res = new ArrayList<>();
        personalTrainers.forEach(pt->{
            if (Objects.equals(pt.getAccount().getRole(), role.PERSONAL_TRAINER)){
                PTResponse ptResponseModel = new PTResponse(pt);
                ptResponseModel.setRate(ratePtService.getPtRate(ptResponseModel.getId()));
                res.add(ptResponseModel);
            }
        });
        return ResponseEntity.ok(res);
    }

    @SneakyThrows
    @RequestMapping("/disablePT/{id}")
    public HttpStatus disablePT(@PathVariable("id") int id){
        personalTrainer pt = personalTrainerService.findById(id);
        if(pt == null) throw new NotFoundException("Pt not found");
        pt.getAccount().setEnable(false);
        personalTrainerService.save(pt);
        return HttpStatus.OK;
    }

    @SneakyThrows
    @RequestMapping("/enablePT/{id}")
    public HttpStatus enablePT(@PathVariable("id") int id){
        personalTrainer pt = personalTrainerService.findById(id);
        if(pt == null) throw new NotFoundException("Pt not found");
        pt.getAccount().setEnable(true);
        personalTrainerService.save(pt);
        return HttpStatus.OK;
    }


}

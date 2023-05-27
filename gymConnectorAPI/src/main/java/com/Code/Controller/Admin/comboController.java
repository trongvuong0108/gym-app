package com.Code.Controller.Admin;

import com.Code.Entity.Gym.combo;
import com.Code.Entity.Gym.gym;
import com.Code.Exception.ApiRequestException;
import com.Code.Exception.NotFoundException;
import com.Code.Model.Request.addComboRequest;
import com.Code.Model.Request.updateComboRequest;
import com.Code.Service.Gym.comboService;
import com.Code.Service.Gym.gymService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/combo")
public class comboController {
    @Autowired
    private comboService comboService;

    @Autowired
    private gymService gymService;

    @GetMapping("getAll")
    public ResponseEntity<List<combo>> getAllCombo(){
        return ResponseEntity.ok(comboService.getAll());
    }

    @GetMapping("getComboById/{id}")
    public ResponseEntity<combo> getComboById(@PathVariable int id){
        return ResponseEntity.ok(comboService.findByid(id));
    }
    @PostMapping("addCombo")
    public ResponseEntity<combo> addCombo(@RequestBody addComboRequest addComboRequest) {
        gym gym = gymService.findGymById(addComboRequest.getGymId());
        //if(gym == null) throw new ApiRequestException("Gym not found");
        combo combo = new combo();
        combo.setName(addComboRequest.getName());
        combo.setPrice(addComboRequest.getPrice());
        combo.setGym(gym);
        comboService.save(combo);
        return ResponseEntity.ok(combo);
    }

    @PostMapping("updateCombo")
    public ResponseEntity<?> updateCombo(@RequestBody updateComboRequest updateComboRequest){
        combo combo = comboService.findByid(updateComboRequest.getId());
        if(combo == null) throw new ApiRequestException("Combo not found");
        combo.setName(updateComboRequest.getName());
        combo.setPrice(updateComboRequest.getPrice());
        comboService.save(combo);
        return ResponseEntity.ok(combo);
    }

    @RequestMapping("/enableAllCombo")
    public HttpStatus enableAllCombo(){
        comboService.getAll().forEach(x->{
            x.setEnable(true);
            comboService.save(x);
        });
        return HttpStatus.OK;
    }

    @RequestMapping("/disableCombo/{id}")
    public HttpStatus disableCombo(@PathVariable int id){
        combo combo = comboService.findByid(id);
        combo.setEnable(false);
        comboService.save(combo);
        return HttpStatus.OK;
    }

    @RequestMapping("/enableCombo/{id}")
    public HttpStatus enableCombo(@PathVariable int id){
        combo combo = comboService.findByid(id);
        combo.setEnable(true);
        comboService.save(combo);
        return HttpStatus.OK;
    }
}

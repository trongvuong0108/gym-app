package com.Code.Controller.Client;

import com.Code.Entity.Gym.combo;
import com.Code.Entity.Gym.gymRate;
import com.Code.Entity.PT.ptRate;
import com.Code.Model.Response.PTResponse;
import com.Code.Model.Response.gymRateResponse;
import com.Code.Model.Response.gymResponse;
import com.Code.Model.Response.ptRateResponse;
import com.Code.Service.Gym.comboService;
import com.Code.Service.Gym.gymPicService;
import com.Code.Service.Gym.gymRateService;
import com.Code.Service.Gym.gymService;
import com.Code.Service.PT.personalTrainerService;
import com.Code.Service.PT.picPTService;
import com.Code.Service.PT.ratePtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/home")
public class HomeController {
    @Autowired
    private gymService gymService;

    @Autowired
    private personalTrainerService personalTrainerService;

    @Autowired
    private comboService comboService;

    @Autowired
    private gymRateService gymRateService;

    @Autowired
    private ratePtService ratePtService;

    @Autowired
    private picPTService picPTService;

    @Autowired
    private gymPicService gymPicService;

    @RequestMapping("/getPT")
    public List<PTResponse> getPT() {
        List<PTResponse> ptModels = new ArrayList<>();
        personalTrainerService.getAll().forEach(pt->{
            if (pt.getAccount().isEnable()) {
                PTResponse ptModel = new PTResponse(pt);
                ptModel.setRate(getPTRate(ptModel.getId()));
                ptModels.add(ptModel);
            };
        });
        return ptModels;
    }

    @GetMapping("/getPicByPt/{id}")
    public ResponseEntity<?> getImgByPT(@PathVariable int id){
        return ResponseEntity.ok(picPTService.getByPT(id));
    }

    @GetMapping("/getPicByGym/{id}")
    public ResponseEntity<?> getPicByGym(@PathVariable int id){
        return ResponseEntity.ok(gymPicService.getByGym(id));
    }

    @GetMapping("/getGym")
    public ResponseEntity<?> getGym() {
        List<gymResponse> res = new ArrayList<>();
        gymService.getAll().forEach(gym -> {
            if(gym.isEnable()){
                gymResponse gymModel = new gymResponse(gym);
                gymModel.setRate(getGymRate(gym.getId()));
                res.add(gymModel);
            }
        });
        return ResponseEntity.ok(res);
    }

    @GetMapping("/getGymById/{id}")
    public ResponseEntity<?> getGymById(@PathVariable int id) {
        return ResponseEntity.ok(gymService.findGymById(id));
    }

    public float getGymRate(int id) {
        List<gymRate> gymRates = gymRateService.getByGym(id);
        float res = (float) gymRates.stream().mapToDouble(gymRate::getVote).sum();
        return res / gymRates.size();
    }

    @GetMapping("/getCombo")
    public ResponseEntity<?>  getCombo() {
        List<combo> combos = new ArrayList<>();
        comboService.getAll().forEach((combo)->{
            if(combo.isEnable()) combos.add(combo);
        });
        return ResponseEntity.ok(combos);
    }

    @GetMapping("/getComboByGym/{id}")
    public ResponseEntity<?> getComboByGym( @PathVariable int id) {
        List<combo> combos = new ArrayList<>();
        comboService.getByGym(id).forEach((combo)->{
            if(combo.isEnable()) combos.add(combo);
        });
        return ResponseEntity.ok(combos);
    }



    @RequestMapping("/getPTByGym/{id}")
    public ResponseEntity<?> getPTByGym(@PathVariable int id) {
        List<PTResponse> ptModels = new ArrayList<>();
        personalTrainerService.getPTByGym(id).forEach(pt->{
            if (pt.getAccount().isEnable()) {
                PTResponse ptModel = new PTResponse(pt);
                ptModel.setRate(getPTRate(pt.getId()));
                ptModels.add(ptModel);
            }
        });
        return ResponseEntity.ok(ptModels);
    }

    public float getPTRate(int id) {
        float res = 0;
        int count = 0;
        for (com.Code.Entity.PT.ptRate ptRate : ratePtService.getByPT(id)) {
            res += ptRate.getVote();
            count++;
        }
        return res / count;
    }

    @GetMapping("/getRateByGym/{id}")
    public ResponseEntity<?> getJudgeByGym(@PathVariable int id) {
        if(gymService.findGymById(id) == null) ResponseEntity.badRequest();
        List<gymRateResponse> res = new ArrayList<>();
        for (gymRate gymRate : gymRateService.getByGym(id)) {
            gymRateResponse gymRateResponse = new gymRateResponse(gymRate);
            res.add(gymRateResponse);
        }
        return ResponseEntity.ok(res);
    }

    @GetMapping("/getRateByPT/{id}")
    public ResponseEntity<?> getRateByPT(@PathVariable int id) {
        if(personalTrainerService.findById(id) == null) ResponseEntity.badRequest();
        List<ptRateResponse> res = new ArrayList<>();
        for (ptRate judge_pt : ratePtService.getByPT(id)) {
            ptRateResponse ratePtResponse = new ptRateResponse(judge_pt);
            res.add(ratePtResponse);
        }
        return ResponseEntity.ok(res);
    }
}

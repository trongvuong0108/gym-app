package com.Code.Controller.Client;

import com.Code.Entity.Gym.gymRate;
import com.Code.Entity.PT.ptRate;
import com.Code.Model.Request.addCommentPtRequest;
import com.Code.Model.Request.addGymCommentRequest;
import com.Code.Service.Gym.gymRateService;
import com.Code.Service.Gym.gymService;
import com.Code.Service.PT.personalTrainerService;
import com.Code.Service.PT.ratePtService;
import com.Code.Service.User.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/client/comment")
public class commentController {

    @Autowired
    private ratePtService ratePtService;

    @Autowired
    private userService userService;

    @Autowired
    private personalTrainerService personalTrainerService;

    @Autowired
    private gymRateService gymRateService;

    @Autowired
    private gymService gymService;

    @PostMapping("/addPtComment")
    public String addPtComment(@RequestBody addCommentPtRequest addCommentPtRequest) {
        ptRate ptRate = new ptRate();
        ptRate.setComment(addCommentPtRequest.getContent());
        ptRate.setVote(addCommentPtRequest.getVote());
        ptRate.setPersonalTrainer(personalTrainerService.findById(addCommentPtRequest.getPtId()));
        ptRate.setUser(userService.findById(addCommentPtRequest.getUserId()));
        ratePtService.save(ptRate);
        return "successful";
    }
    @PostMapping("/addGymComment")
    public String addComment(@RequestBody addGymCommentRequest addGymCommentRequest) {
        System.out.println(addGymCommentRequest.getContent());
        System.out.println(addGymCommentRequest.getVote());
        System.out.println(addGymCommentRequest.getUserId());
        System.out.println(addGymCommentRequest.getGymId());
        gymRate gymRate = new gymRate();
        gymRate.setContent(addGymCommentRequest.getContent());
        gymRate.setVote(addGymCommentRequest.getVote());
        gymRate.setGym(gymService.findGymById(addGymCommentRequest.getGymId()));
        gymRate.setUser(userService.findById(addGymCommentRequest.getUserId()));
        gymRateService.save(gymRate);
        return "successful";
    }
}

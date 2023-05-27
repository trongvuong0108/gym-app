package com.Code.Model.Response;

import com.Code.Entity.Gym.gymRate;
import lombok.Data;

@Data
public class gymRateResponse {
    private int id ;
    private String content ;
    private float vote ;
    private String name ;
    private String avatar;

    public gymRateResponse(gymRate judge_gym) {
        this.id = judge_gym.getId();
        this.content = judge_gym.getContent();
        this.vote = judge_gym.getVote();
        this.avatar = judge_gym.getUser().getAvatar();
        this.name= judge_gym.getUser().getName();
    }
}

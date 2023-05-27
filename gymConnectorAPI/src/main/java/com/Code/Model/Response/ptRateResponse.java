package com.Code.Model.Response;

import com.Code.Entity.PT.ptRate;
import lombok.Data;

@Data
public class ptRateResponse {
    private int id ;
    private String content ;
    private float vote ;
    private String name ;
    private String avatar;

    public ptRateResponse(ptRate ptRate) {
        this.id = ptRate.getId();
        this.content = ptRate.getComment();
        this.vote = ptRate.getVote();
        this.avatar = ptRate.getUser().getAvatar();
        this.name= ptRate.getUser().getName();
    }
}

package com.Code.Model.Response;

import com.Code.Entity.PT.picPt;
import lombok.Data;

@Data
public class ptImgResponse {
    private PTResponse ptResponseModel;
    private String img;

    public ptImgResponse(picPt picPt) {
        this.ptResponseModel = new PTResponse(picPt.getPersonalTrainer());
        this.img = picPt.getImg();
    }
}

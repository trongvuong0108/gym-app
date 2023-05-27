package com.Code.Model.Request;

import lombok.Data;

@Data
public class addGymCommentRequest {
    private String content;
    private float vote;
    private int gymId;
    private int userId;
}

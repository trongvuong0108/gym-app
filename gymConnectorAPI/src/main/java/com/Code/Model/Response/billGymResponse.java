package com.Code.Model.Response;

import com.Code.Entity.Gym.combo;
import com.Code.Entity.Gym.gym;
import com.Code.Entity.Payment.billGym;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class billGymResponse {
    private int id ;
    private String dayStart ;
    private String dayEnd ;
    private gym gym;
    private combo combo;

    public billGymResponse(billGym billGym){
        this.id = billGym.getId();
        this.dayStart = billGym.getDayStart().toString();
        this.dayEnd = billGym.getDayEnd().toString();
        this.gym = billGym.getGym();
        this.combo = billGym.getCombo();
    }
}

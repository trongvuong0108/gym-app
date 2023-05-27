package com.Code.Model.Response;

import com.Code.Entity.PT.personalTrainer;
import com.Code.Entity.Payment.billPt;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@Data
public class billPTResponse {
    private int id ;
    private String dayStart ;
    private String dayEnd ;
    private PTResponse trainer;

    public billPTResponse(billPt bill) {
        this.id = bill.getId();
        this.dayEnd = bill.getDayEnd().toString();
        this.dayStart = bill.getDayStart().toString();
        this.trainer = new PTResponse(bill.getPersonal_trainer());
    }
}

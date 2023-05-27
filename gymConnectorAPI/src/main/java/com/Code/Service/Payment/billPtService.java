package com.Code.Service.Payment;


import com.Code.Entity.Payment.billPt;

import java.util.List;

public interface billPtService {
    public void save(billPt bill_pt);
    public List<billPt> getAll();
    public billPt getByUser(int id);
}

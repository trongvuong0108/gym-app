package com.Code.Service.Payment;


import com.Code.Entity.Payment.billGym;

import java.util.List;

public interface billGymService {
    public void save(billGym bill_gym);
    public List<billGym> getAll();
    public billGym getByUser(int id);
}

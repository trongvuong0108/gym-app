package com.Code.Service.Gym;


import com.Code.Entity.Gym.discount;

import java.util.List;

public interface discountService {
    public List<discount> getAll();
    public void save(discount discount);
    public List<discount> getByGym(int id);
    public void delete(int id);
}

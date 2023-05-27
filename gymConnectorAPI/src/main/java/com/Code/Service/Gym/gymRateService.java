package com.Code.Service.Gym;


import com.Code.Entity.Gym.gymRate;

import java.util.List;

public interface gymRateService {
    public List<gymRate> getAll();
    public void save(gymRate judge_gym);
    public List<gymRate> getByGym(int id);
}

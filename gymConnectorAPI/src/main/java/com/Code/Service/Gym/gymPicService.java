package com.Code.Service.Gym;

import com.Code.Entity.Gym.picGym;

import java.util.List;
import java.util.Optional;

public interface gymPicService {
    public List<picGym> getByGym(int id);
    public void add(picGym picGym);
}

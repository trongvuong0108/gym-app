package com.Code.Service.Gym;

import com.Code.Entity.Gym.gym;

import java.util.List;

public interface gymService {
    public List<gym> getAll();
    public void save(gym gym);
    public gym findGymById(int id);
    public gym findGymByName(String name);
}

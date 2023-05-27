package com.Code.Service.Gym;


import com.Code.Entity.Gym.combo;

import java.util.List;

public interface comboService{
    public List<combo> getAll();
    public void save(combo combo);
    public List<combo> getByGym(int id);
    public void delete(int id);
    public combo findByid(int id);
}

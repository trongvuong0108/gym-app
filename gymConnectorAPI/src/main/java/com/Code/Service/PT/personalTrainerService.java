package com.Code.Service.PT;

import com.Code.Entity.PT.personalTrainer;

import java.util.List;

public interface personalTrainerService {
    public List<personalTrainer> getAll();
    public void save(personalTrainer personal_trainer);

    public personalTrainer findById(int id);

    public List<personalTrainer> getPTByGym(int id);
    public personalTrainer findByUsername(String username);
}

package com.Code.Service.ServiceImpl.Gym;


import com.Code.Entity.Gym.gymRate;
import com.Code.Repository.Gym.gymRateRepository;
import com.Code.Service.Gym.gymRateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class gymRateServiceImpl implements gymRateService {

    @Autowired
    private gymRateRepository gymRateRepository;

    @Override
    public List<gymRate> getAll() {
        return gymRateRepository.findAll();
    }

    @Override
    public void save(gymRate judge_gym) {
        gymRateRepository.save(judge_gym);
    }

    @Override
    public List<gymRate> getByGym(int id) {
        return gymRateRepository.getRateByGym(id);
    }
}

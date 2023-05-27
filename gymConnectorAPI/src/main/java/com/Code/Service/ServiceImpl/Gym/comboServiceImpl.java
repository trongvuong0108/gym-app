package com.Code.Service.ServiceImpl.Gym;

import com.Code.Entity.Gym.combo;
import com.Code.Repository.Gym.comboRepository;
import com.Code.Service.Gym.comboService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class comboServiceImpl implements comboService {

    @Autowired
    private comboRepository comboRepository;

    @Override
    public List<combo> getAll() {
        return comboRepository.findAll();
    }

    @Override
    public void save(combo combo) {
        comboRepository.save(combo);
    }

    @Override
    public List<combo> getByGym(int id) {
        return comboRepository.getComboByGym(id);
    }

    @Override
    public void delete(int id) {
        comboRepository.deleteById(id);
    }

    @Override
    public combo findByid(int id) {
        return comboRepository.findById(id).get();
    }
}

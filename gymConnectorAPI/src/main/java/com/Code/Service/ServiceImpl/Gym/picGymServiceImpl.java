package com.Code.Service.ServiceImpl.Gym;

import com.Code.Entity.Gym.picGym;
import com.Code.Repository.Gym.picGymRepository;
import com.Code.Service.Gym.gymPicService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class picGymServiceImpl implements gymPicService {
    private final picGymRepository picGymRepository;

    public picGymServiceImpl(picGymRepository picGymRepository) {
        this.picGymRepository = picGymRepository;
    }

    @Override
    public List<picGym> getByGym(int id) {
        return picGymRepository.getAllImgByPt(id).get();
    }

    @Override
    public void add(picGym picGym) {
        picGymRepository.save(picGym);
    }
}

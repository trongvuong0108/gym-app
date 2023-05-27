package com.Code.Service.ServiceImpl.Gym;

import com.Code.Entity.Gym.gym;
import com.Code.Exception.NotFoundException;
import com.Code.Repository.Gym.gymRepository;
import com.Code.Service.Gym.gymService;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class gymServiceImpl implements gymService {

    private final gymRepository gymRepo;

    public gymServiceImpl(gymRepository gymRepo) {
        this.gymRepo = gymRepo;
    }

    @Override
    public List<gym> getAll() {
        return gymRepo.findAll();
    }

    @Override
    public void save(gym gym) {
        gymRepo.save(gym);
    }

    @SneakyThrows
    @Override
    public gym findGymById(int id) {
        return gymRepo.findById(id).orElseThrow(() -> new NotFoundException("not found this gym"));
    }

    @Override
    @SneakyThrows
    public gym findGymByName(String name) {
        return gymRepo.findByName(name).orElseThrow(()-> new NotFoundException("not found this gym"));
    }
}
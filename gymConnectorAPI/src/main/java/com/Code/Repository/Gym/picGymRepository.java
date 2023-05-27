package com.Code.Repository.Gym;

import com.Code.Entity.Gym.picGym;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface picGymRepository extends JpaRepository<picGym, Integer> {
    @Query(value = "select * from pic_gym where gym_id = :id", nativeQuery = true)
    public Optional<List<picGym>> getAllImgByPt(int id);
}

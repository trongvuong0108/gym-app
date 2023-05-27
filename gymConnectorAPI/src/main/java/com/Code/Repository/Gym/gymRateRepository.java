package com.Code.Repository.Gym;

import com.Code.Entity.Gym.gymRate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface gymRateRepository extends JpaRepository<gymRate,Integer> {
    @Query(value = "select * from gym_rate where gym_id = :id", nativeQuery = true)
    public List<gymRate> getRateByGym(int id);
}

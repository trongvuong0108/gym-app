package com.Code.Repository.Gym;


import com.Code.Entity.Gym.combo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface comboRepository extends JpaRepository<combo,Integer> {

    @Query(value = "select * from combo where gym_id = :id",nativeQuery = true)
    public List<combo> getComboByGym(int id);
}

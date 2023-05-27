package com.Code.Repository.Gym;

import com.Code.Entity.Gym.gym;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface gymRepository extends JpaRepository<gym,Integer> {
    public Optional<gym> findByName(String name);
}

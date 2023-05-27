package com.Code.Repository.PT;

import com.Code.Entity.PT.ptRate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ratePtRepository extends JpaRepository<ptRate,Integer> {
    @Query(value = "select * from pt_rate where pt_id = :id", nativeQuery = true)
    public Optional<List<ptRate>> getRateByPT(int id);
}

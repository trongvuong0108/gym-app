package com.Code.Repository.PT;

import com.Code.Entity.PT.picPt;
import com.Code.Entity.PT.ptRate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface picPTRepository extends JpaRepository<picPt,Integer> {
    @Query(value = "select * from pic_pt where pt_id = :id", nativeQuery = true)
    public Optional<List<picPt>> getAllImgByPt(int id);
}

package com.Code.Service.PT;

import com.Code.Entity.PT.picPt;

import java.util.List;

public interface picPTService {
    public void save(picPt pic_pt);
    public List<picPt> getByPT(int pt);
}

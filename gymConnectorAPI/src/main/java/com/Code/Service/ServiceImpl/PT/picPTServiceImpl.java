package com.Code.Service.ServiceImpl.PT;

import com.Code.Entity.PT.picPt;
import com.Code.Exception.NotFoundException;
import com.Code.Repository.PT.picPTRepository;
import com.Code.Service.PT.picPTService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class picPTServiceImpl implements picPTService {

    @Autowired
    private picPTRepository picPTRepository;

    @Override
    public void save(picPt picPt) {
        picPTRepository.save(picPt);
    }
    @SneakyThrows
    @Override
    public List<picPt> getByPT(int id) {
//        List<picPt> res = new ArrayList<>();
//        for (picPt picPt: picPTRepository.findAll()) {
//            if(picPt.getPersonalTrainer().getId() == pt){
//                res.add(picPt);
//            }
//        }
        return picPTRepository.getAllImgByPt(id).orElseThrow(()-> new NotFoundException("not found"));
    }
}

package com.Code.Service.ServiceImpl.PT;

import com.Code.Entity.PT.ptRate;
import com.Code.Exception.NotFoundException;
import com.Code.Repository.PT.ratePtRepository;
import com.Code.Service.PT.ratePtService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ratePtServiceImpl implements ratePtService {
    @Autowired
    private ratePtRepository ratePtRepository;
    @Override
    @SneakyThrows
    public List<ptRate> getByPT(int id) {
        //        for(ptRate ptRate: ratePtRepository.findAll()) {
//            if(ptRate.getPersonalTrainer().getId() == id)
//                res.add(ptRate);
//        }
        return ratePtRepository.getRateByPT(id).orElseThrow(()-> new NotFoundException("Not found"));
    }

    @Override
    public void save(ptRate ptRate) {
        ratePtRepository.save(ptRate);
    }

    @Override
    public float getPtRate(int id){
        List<ptRate> ptRates = ratePtRepository.getRateByPT(id).get();
        float res = (float) ptRates.stream().mapToDouble(ptRate::getVote).sum();
        return res/ptRates.size();
    }

}

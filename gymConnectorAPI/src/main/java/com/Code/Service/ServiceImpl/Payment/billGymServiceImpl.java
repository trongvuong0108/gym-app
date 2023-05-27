package com.Code.Service.ServiceImpl.Payment;

import com.Code.Entity.Payment.billGym;
import com.Code.Repository.Payment.bill_gymRepository;
import com.Code.Service.Payment.billGymService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class billGymServiceImpl implements billGymService {

    @Autowired
    private bill_gymRepository bill_gymRepository;

    @Override
    public void save(billGym bill_gym) {
        bill_gymRepository.save(bill_gym);
    }

    @Override
    public List<billGym> getAll() {
        return bill_gymRepository.findAll();
    }

    @Override
    public billGym getByUser(int id) {
        billGym result = null;
        for (billGym bill_gym:bill_gymRepository.findAll()) {
           if(
                   bill_gym.getUser().getId() == id &&
                   bill_gym.getDayStart().isBefore(LocalDateTime.now())&&
                   bill_gym.getDayEnd().isAfter(LocalDateTime.now())
           ){
               result = bill_gym;
           }
        }
        return result;
    }
}

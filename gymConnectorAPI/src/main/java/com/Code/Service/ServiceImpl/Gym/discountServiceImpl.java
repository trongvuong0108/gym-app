package com.Code.Service.ServiceImpl.Gym;

import com.Code.Entity.Gym.discount;
import com.Code.Repository.Gym.discountRepository;
import com.Code.Service.Gym.discountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class discountServiceImpl implements discountService {

    @Autowired
    private discountRepository discountRepository;

    @Override
    public List<discount> getAll() {
        return discountRepository.findAll();
    }

    @Override
    public void save(discount discount) {
        discountRepository.save(discount);
    }

    @Override
    public List<discount> getByGym(int id) {
        List<discount> discounts = getAll();
        List<discount> result = new ArrayList<discount>();
        for (discount discount: discounts) {
            if(discount.getGym().getId() == id)
                result.add(discount);
        }
        return result;
    }

    @Override
    public void delete(int id) {
        discountRepository.deleteById(id);
    }
}

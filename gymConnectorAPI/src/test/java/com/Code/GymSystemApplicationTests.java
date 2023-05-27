package com.Code;

import com.Code.Entity.Gym.gym;
import com.Code.Service.Gym.gymService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class GymSystemApplicationTests {

	@Autowired
	private gymService gymService;

	@Test
	void addNewGym(){
		int before = gymService.getAll().size();
		gymService.save(new gym("Test","Test","Test","Test","Test",true));
		assertEquals(gymService.getAll().size(),before+1);
	}

	@Test
	void loadGym() {
		List<gym> test = gymService.getAll();
		for (gym gym: test) {
			System.out.println(gym.toString());
		}
		assertFalse(test.isEmpty());
	}

	@Test
	void testAdd(){
		String test = "hello";
		assertEquals("hello", test);
	}

}

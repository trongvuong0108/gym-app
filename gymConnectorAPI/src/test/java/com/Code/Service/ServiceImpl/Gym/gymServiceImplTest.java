package com.Code.Service.ServiceImpl.Gym;

import com.Code.Entity.Gym.gym;
import com.Code.Exception.NotFoundException;
import com.Code.Repository.Gym.gymRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class gymServiceImplTest {

    private gymRepository repository;
    private gymServiceImpl service;
    private gym gym;
    @BeforeEach
    void setUp() {
        repository = mock(gymRepository.class);
        service = new gymServiceImpl(repository);
        gym = new gym(1, "abc", "123", "123", "123@gmail.com", "123", true);
    }

    @Test
    void findGymById_validId_Success() {
        when(repository.findById(1)).thenReturn(Optional.of(gym));
        assertEquals(service.findGymById(1).getName(), gym.getName());
    }

    @Test
    void findGymByName_validId_Success() {
        when(repository.findByName("abc")).thenReturn(Optional.of(gym));
        assertEquals(service.findGymByName("abc").getName(), gym.getName());
    }

    @Test
    void findGymById_validId_ThrowNotFoundException() {
        when(repository.findById(1)).thenReturn(Optional.empty());
        assertThrows(NotFoundException.class, () -> service.findGymById(1));
    }

    @Test
    void findGymByName_validName_ThrowNotFoundException() {
        when(repository.findByName("abc")).thenReturn(Optional.empty());
        assertThrows(NotFoundException.class, () -> service.findGymByName("abc"));
    }
}
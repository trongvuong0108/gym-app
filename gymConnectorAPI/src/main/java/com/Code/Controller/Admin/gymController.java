package com.Code.Controller.Admin;

import com.Code.Entity.Gym.combo;
import com.Code.Entity.Gym.gym;
import com.Code.Entity.Gym.picGym;
import com.Code.Exception.ApiRequestException;
import com.Code.Exception.NotFoundException;
import com.Code.Model.Request.addGymRequest;
import com.Code.Model.Request.updateGymRequest;
import com.Code.Service.Gym.gymPicService;
import com.Code.Service.Gym.gymService;
import com.Code.Util.Uploader;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/admin/gym")
public class gymController {
    @Autowired
    private gymService gymService;

    @Autowired
    private gymPicService gymPicService;

    @GetMapping("/getAll")
    public ResponseEntity<List<gym>> getAll(){
        return ResponseEntity.ok(gymService.getAll());
    }

    @GetMapping("/getGymById/{id}")
    public ResponseEntity<gym> getGymById(@PathVariable int id){
        return ResponseEntity.ok(gymService.findGymById(id));
    }

    @PostMapping("/addGym")
    public gym addGym(@RequestBody addGymRequest addGymRequest){
        gym gym = new gym();
        gym.setAddress(addGymRequest.getAddress());
        gym.setEmail(addGymRequest.getEmail());
        gym.setName(addGymRequest.getName());
        gym.setPhone(addGymRequest.getPhone());
        gymService.save(gym);
        return gym;
    }

    @SneakyThrows
    @PostMapping("/updateGym")
    public HttpStatus updateGym(@RequestBody updateGymRequest updateGymRequest){
        gym gym = gymService.findGymById(updateGymRequest.getId());
        if(gym == null) throw new NotFoundException("gym not found");
        gym.setAddress(updateGymRequest.getAddress());
        gym.setEmail(updateGymRequest.getEmail());
        gym.setName(updateGymRequest.getName());
        gym.setPhone(updateGymRequest.getPhone());
        gymService.save(gym);
        return HttpStatus.OK;
    }

    @SneakyThrows
    @PostMapping(value = "/addGymImg")
    public ResponseEntity<?> addGymImg(@RequestParam(value = "idGym") int id, @RequestParam(value ="image") MultipartFile img) {
        Uploader uploader = new Uploader();
        gym gym = gymService.findGymById(id);
        if(gym == null) throw new NotFoundException("gym not found");
        if(img != null) {
            gym.setAvatar(uploader.uploadFile(img));
            gymService.save(gym);
        }
        return ResponseEntity.ok(gym);
    }
    @SneakyThrows
    @PostMapping(value = "/addMoreGymImg")
    public ResponseEntity<?> addMoreGymImg(@RequestParam(value = "idGym") int id, @RequestParam(value ="image") MultipartFile img) {
        Uploader uploader = new Uploader();
        gym gym = gymService.findGymById(id);
        picGym pic = new picGym();
        if(gym == null) throw new NotFoundException("gym not found");
        if(img != null) {
            pic.setImg(uploader.uploadFile(img));
            pic.setGym(gym);
            gymPicService.add(pic);
        }
        return ResponseEntity.ok(gym);
    }


    @RequestMapping("/enableAllGym")
    public HttpStatus enableAllGym(){
        gymService.getAll().forEach(gym->{
            gym.setEnable(true);
            gymService.save(gym);
        });
        return HttpStatus.OK;
    }

    @RequestMapping("/disableGym/{id}")
    public ResponseEntity<?> disableGym(@PathVariable int id){
        gym gym = gymService.findGymById(id);
        gym.setEnable(false);
        gymService.save(gym);
        return ResponseEntity.ok(gym);
    }

    @RequestMapping("/enableGym/{id}")
    public ResponseEntity<?> enableGym(@PathVariable int id){
        gym gym = gymService.findGymById(id);
        gym.setEnable(true);
        gymService.save(gym);
        return ResponseEntity.ok(gym);
    }


}

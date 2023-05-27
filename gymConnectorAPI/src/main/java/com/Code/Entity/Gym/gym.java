package com.Code.Entity.Gym;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

@Table(name = "gym")
public class gym {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gymId")
    private int id;
    private String name;
    private String address;
    private String phone;
    private String email;
    private String avatar;
    private boolean enable = true;

    public gym(String name, String address, String phone, String email, String avatar, boolean enable) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.avatar = avatar;
        this.enable = enable;
    }
}

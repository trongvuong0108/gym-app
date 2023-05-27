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
@Table
public class picGym {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "picGymId")
    private int id;
    private String img ;

    @ManyToOne
    @JoinColumn(name = "gymId",nullable = false, referencedColumnName = "gymId")
    private gym gym;

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

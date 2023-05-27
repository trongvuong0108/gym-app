package com.Code.Entity.Gym;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "discount")
public class discount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "discountId")
    private int id ;
    private int percent ;
    private Date Start;
    private Date End;
    private String content;

    @ManyToOne
    @JoinColumn(name = "gymId",nullable = false, referencedColumnName = "gymId")
    private gym gym;

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

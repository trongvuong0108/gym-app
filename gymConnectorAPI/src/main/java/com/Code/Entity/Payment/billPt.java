package com.Code.Entity.Payment;

import com.Code.Entity.PT.personalTrainer;
import com.Code.Entity.User.user;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class billPt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "billPtId")
    private int id ;
    private LocalDateTime dayStart ;
    private LocalDateTime dayEnd ;
    @ManyToOne
    @JoinColumn(name = "ptId",nullable = false, referencedColumnName = "ptId")
    private personalTrainer personal_trainer;

    @ManyToOne
    @JoinColumn(name = "userId",nullable = false, referencedColumnName = "userId")
    private user user;

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

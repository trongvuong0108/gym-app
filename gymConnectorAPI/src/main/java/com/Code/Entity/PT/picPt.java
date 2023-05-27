package com.Code.Entity.PT;

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
public class picPt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "picPtId")
    private int id;
    private String img ;

    @ManyToOne
    @JoinColumn(name = "ptId",referencedColumnName = "ptId")
    private personalTrainer personalTrainer;

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

package com.Code.Entity.PT;

import com.Code.Entity.User.user;
import lombok.*;
import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class ptRate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ptRateId")
    private int id;
    private String comment;
    private float vote;

    @ManyToOne
    @JoinColumn(name = "ptId", referencedColumnName = "ptId")
    private personalTrainer personalTrainer;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false, referencedColumnName = "userId")
    private user user;
}

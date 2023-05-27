package com.Code.Entity.PT;

import com.Code.Entity.Auth.Account;
import com.Code.Entity.Gym.gym;
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
public class personalTrainer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "ptId")
    private int id ;
    private String name;
    private String address;
    private String avatar;
    private int price;
    @OneToOne
    @JoinColumn(name = "accountId", referencedColumnName = "accountId")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "gymId", referencedColumnName = "gymId")
    private gym gym;

    public personalTrainer(String name, String address, String avatar, int price, Account account, gym gym) {
        this.name = name;
        this.address = address;
        this.avatar = avatar;
        this.price = price;
        this.account = account;
        this.gym = gym;
    }
}

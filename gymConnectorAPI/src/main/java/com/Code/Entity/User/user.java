package com.Code.Entity.User;

import com.Code.Entity.Auth.Account;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table
public class user {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "userId")
    private int id ;
    private String name;
    private String address;
    private String avatar;
    @OneToOne
    @JoinColumn(name = "accountId", referencedColumnName = "accountId")
    private Account account;
    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

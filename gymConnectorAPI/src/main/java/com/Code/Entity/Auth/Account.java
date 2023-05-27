package com.Code.Entity.Auth;

import com.Code.Enum.role;
import com.Code.Enum.typeAccount;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "accountId")
    private int id;
    @Column(unique = true)
    private String username;
    private String password;
    private String email;
    private String phone;
    private boolean enable;
    private typeAccount typeAccount;
    private role role;

    public Account(String username, String password, String email,
                   String phone, boolean enable, role role, typeAccount typeAccount) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.enable = enable;
        this.role = role;
        this.typeAccount = typeAccount;
    }
}

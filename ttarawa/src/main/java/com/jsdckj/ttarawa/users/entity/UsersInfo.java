package com.jsdckj.ttarawa.users.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Table(name="users_info")
public class UsersInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="users_info_id",  nullable = false, columnDefinition = "BIGINT UNSIGNED")
    private Long usersInfoId;

    @OneToOne
    @JoinColumn(name="users_id", insertable = false, updatable = false)
    private Users users;

    @Column(name="users_id")
    private Long userId;


    @ManyToOne
    @JoinColumn(name="badge_id", insertable = false, updatable = false)
    private Badge badge;

    @Column(name="badge_id")
    private Long badgeId;


    @Column(name="total_distance", nullable = false)
    private Long totalDistance;


}

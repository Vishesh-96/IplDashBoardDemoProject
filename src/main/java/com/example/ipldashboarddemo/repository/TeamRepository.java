package com.example.ipldashboarddemo.repository;

import com.example.ipldashboarddemo.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team,Long> {

    Team findByTeamName(String teamName);
}

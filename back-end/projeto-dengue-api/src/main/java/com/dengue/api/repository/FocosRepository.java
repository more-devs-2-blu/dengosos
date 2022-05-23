package com.dengue.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dengue.api.entity.Focos;

@Repository
public interface FocosRepository extends JpaRepository<Focos, Integer> {

}

package com.dengue.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dengue.api.entity.Pessoas;

@Repository
public interface PessoasRepository extends JpaRepository<Pessoas, Integer> {

}

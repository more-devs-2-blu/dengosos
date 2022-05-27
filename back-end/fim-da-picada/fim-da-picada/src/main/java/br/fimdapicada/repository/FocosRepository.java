package br.fimdapicada.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.fimdapicada.entity.Focos;

@Repository
public interface FocosRepository extends JpaRepository<Focos, Integer> {

}

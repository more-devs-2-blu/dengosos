package br.fimdapicada.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.fimdapicada.entity.Agente;

@Repository
public interface AgenteRepository extends JpaRepository<Agente, Integer>{

}

package br.fimdapicada.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.fimdapicada.entity.Pessoas;

@Repository
public interface PessoasRepository extends JpaRepository<Pessoas, Integer> {

}

package com.gestion.biblioteca.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.biblioteca.modelo.Reserva;

@Repository
public interface ReservaRepositorio   extends  JpaRepository<Reserva, Integer>{

}

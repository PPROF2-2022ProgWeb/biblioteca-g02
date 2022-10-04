package com.gestion.biblioteca.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.biblioteca.modelo.Bibliotecario;

@Repository
public interface BibliotecarioRepositorio extends  JpaRepository<Bibliotecario, Integer>{

	
}

package com.gestion.biblioteca.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.gestion.biblioteca.modelo.Usuarioregistrado;

@Repository
public interface UsuarioregistradoRepositorio  extends  JpaRepository<Usuarioregistrado, Integer>{

}

package com.gestion.biblioteca.repositorio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gestion.biblioteca.modelo.Libro;


@Repository
public interface LibroRepositorio  extends  JpaRepository<Libro, Integer>{

}

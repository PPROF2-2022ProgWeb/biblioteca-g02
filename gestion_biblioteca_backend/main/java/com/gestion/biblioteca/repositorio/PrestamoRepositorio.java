package com.gestion.biblioteca.repositorio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gestion.biblioteca.modelo.Prestamo;


@Repository
public interface PrestamoRepositorio   extends  JpaRepository<Prestamo, Integer>{

}

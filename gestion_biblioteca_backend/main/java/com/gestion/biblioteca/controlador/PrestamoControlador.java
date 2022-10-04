package com.gestion.biblioteca.controlador;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gestion.biblioteca.modelo.Prestamo;
import com.gestion.biblioteca.repositorio.PrestamoRepositorio;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class PrestamoControlador {
	
	
	@Autowired
	private PrestamoRepositorio repositorio;

	@GetMapping("/prestamo")
	public List<Prestamo> listarTodosLosPrestamos(){
	return repositorio.findAll();
	}
	
	
	@PostMapping("/prestamo")
	public Prestamo registrarPrestamo(@RequestBody Prestamo prestamo){
	return repositorio.save(prestamo);
	}
	

	

}

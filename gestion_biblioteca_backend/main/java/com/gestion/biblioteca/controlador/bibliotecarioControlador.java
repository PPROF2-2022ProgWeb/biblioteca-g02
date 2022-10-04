package com.gestion.biblioteca.controlador;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.biblioteca.excepciones.ResourceNotFoundException;
import com.gestion.biblioteca.modelo.Bibliotecario;
import com.gestion.biblioteca.modelo.Usuarioregistrado;
import com.gestion.biblioteca.repositorio.BibliotecarioRepositorio;



@RestController
@RequestMapping("/api/v1")
public class bibliotecarioControlador {

	
	@Autowired
	private BibliotecarioRepositorio repositorio;

	@GetMapping("/bibliotecarios")
	public List<Bibliotecario> listarTodosLosBibliotecarios(){
	return repositorio.findAll();
	}

	
	
	@GetMapping("/bibliotecarios/{id}")
	public ResponseEntity<Bibliotecario> obtenerBibliotecarioporId(@PathVariable Integer id){
		Bibliotecario bibliotecario = repositorio.findById(id)
					.orElseThrow(()-> new ResourceNotFoundException("No existe el bibliotecario con el ID:" + id));
		
		return ResponseEntity.ok(bibliotecario);
		
	}
	

	
}

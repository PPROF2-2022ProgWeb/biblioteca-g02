package com.gestion.biblioteca.controlador;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.biblioteca.modelo.LibroPerdido;
import com.gestion.biblioteca.repositorio.LibroPerdidoRepositorio;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class LibroPerdidoControlador {

	
	
	@Autowired
	private LibroPerdidoRepositorio repositorio1;

	@GetMapping("/perdidas")
	public List<LibroPerdido> listarTodosLosLibrosPerdidos(){
	return repositorio1.findAll();
	}
	
	
	@PostMapping("/perdidas")
	public LibroPerdido registrarLibroPerdido(@RequestBody LibroPerdido libroperdido){
	return repositorio1.save(libroperdido);
	}
	
}

package com.gestion.biblioteca.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.biblioteca.modelo.Reserva;
import com.gestion.biblioteca.repositorio.ReservaRepositorio;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class ReservaControlador {

	
	@Autowired
	private ReservaRepositorio repositorio;

	@GetMapping("/reservas")
	public List<Reserva> listarTodosLasReservas(){
	return repositorio.findAll();
	}
	
	
	@PostMapping("/reservas")
	public Reserva registrarReserva(@RequestBody Reserva reserva){
	return repositorio.save(reserva);
	}
	

	
}

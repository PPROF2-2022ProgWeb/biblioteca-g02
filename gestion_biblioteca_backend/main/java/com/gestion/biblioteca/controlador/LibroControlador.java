package com.gestion.biblioteca.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.biblioteca.excepciones.ResourceNotFoundException;
import com.gestion.biblioteca.modelo.Libro;
import com.gestion.biblioteca.repositorio.LibroRepositorio;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class LibroControlador {
	
	@Autowired
	private LibroRepositorio repositorio1;

	@GetMapping("/libros")
	public List<Libro> listarTodosLosLibros(){
	return repositorio1.findAll();
	}
	
	
	@PostMapping("/libros")
	public Libro registrarLibro(@RequestBody Libro libro){
	return repositorio1.save(libro);
	}

	
	@GetMapping("/libros/{isbn}")
	public ResponseEntity<Libro> obtenerLibroporId(@PathVariable Integer isbn){
		Libro libro = repositorio1.findById(isbn)
					.orElseThrow(()-> new ResourceNotFoundException("No existe el libro con el isbn:" + isbn));
		
		return ResponseEntity.ok(libro);
		
	}
	
	@PutMapping("/libros/{isbn}")
	public ResponseEntity<Libro> actualizarLibro(@PathVariable Integer isbn, @RequestBody Libro detallesLibro){
		Libro libro = repositorio1.findById(isbn)
					.orElseThrow(()-> new ResourceNotFoundException("No existe el libro con el ISBN:" + isbn));
		libro.setTitulo(detallesLibro.getTitulo());
		libro.setAutor(detallesLibro.getAutor());
		libro.setCategoria(detallesLibro.getCategoria());
		libro.setEditorial(detallesLibro.getEditorial());
		libro.setFechaPublicacion(detallesLibro.getFechaPublicacion());
		libro.setEstado(detallesLibro.getEstado());
		
		Libro libroActualizado = repositorio1.save(libro);
		return ResponseEntity.ok(libroActualizado);
		
	}
	
	
	@DeleteMapping("/libros/{isbn}")
	public ResponseEntity<Map<String,Boolean>> eliminarEmpleado(@PathVariable Integer isbn){
		Libro libro = repositorio1.findById(isbn)
				            .orElseThrow(() -> new ResourceNotFoundException("No existe el libro con el ISBN : " + isbn));
		
		repositorio1.delete(libro);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
    }
	
	
}

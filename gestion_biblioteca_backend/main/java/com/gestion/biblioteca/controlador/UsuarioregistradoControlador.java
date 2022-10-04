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
import com.gestion.biblioteca.modelo.Usuarioregistrado;
import com.gestion.biblioteca.repositorio.UsuarioregistradoRepositorio;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class UsuarioregistradoControlador {


	@Autowired
	private UsuarioregistradoRepositorio repositorio;

	@GetMapping("/usuariosreg")
	public List<Usuarioregistrado> listarTodosLosUsuariosreg(){
	return repositorio.findAll();
	}
	

	@PostMapping("/usuariosreg")
	public Usuarioregistrado registrarUsuario(@RequestBody Usuarioregistrado usuario){
	return repositorio.save(usuario);
	}

	
	@GetMapping("/usuariosreg/{id}")
	public ResponseEntity<Usuarioregistrado> obtenerUsuarioporId(@PathVariable Integer id){
		Usuarioregistrado usuarioreg = repositorio.findById(id)
					.orElseThrow(()-> new ResourceNotFoundException("No existe el usuario con el ID:" + id));
		
		return ResponseEntity.ok(usuarioreg);
		
	}
	
	@PutMapping("/usuariosreg/{id}")
	public ResponseEntity<Usuarioregistrado> actualizarUsuario(@PathVariable Integer id, @RequestBody Usuarioregistrado detallesUsuario){
		Usuarioregistrado usuarioreg  = repositorio.findById(id)
					.orElseThrow(()-> new ResourceNotFoundException("No existe el usuario con el ID:" + id));
		usuarioreg.setApellido(detallesUsuario.getApellido());
		usuarioreg.setDni(detallesUsuario.getDni());
		usuarioreg.setEmail(detallesUsuario.getEmail());
		usuarioreg.setFechaNacimiento(detallesUsuario.getFechaNacimiento());
		usuarioreg.setNombre(detallesUsuario.getNombre());
		usuarioreg.setClave(detallesUsuario.getClave());
		
		
		Usuarioregistrado usuarioregActualizado = repositorio.save(usuarioreg);
		return ResponseEntity.ok(usuarioregActualizado);
		
	}
	
	
	@DeleteMapping("/usuariosreg/{id}")
	public ResponseEntity<Map<String,Boolean>> eliminarUsuario(@PathVariable Integer id){
		Usuarioregistrado usuarioreg = repositorio.findById(id)
				            .orElseThrow(() -> new ResourceNotFoundException("No existe el usuario con el ID : " + id));
		
		repositorio.delete(usuarioreg);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
    }
	

	
}

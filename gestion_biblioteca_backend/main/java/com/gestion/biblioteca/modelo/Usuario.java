package com.gestion.biblioteca.modelo;
import javax.persistence.Column;
import javax.persistence.MappedSuperclass;




@MappedSuperclass
public class Usuario {
	
	@Column(name="dni", nullable = false, unique = true)
	private int dni;
	
	@Column(name="nombre", nullable = false)
	private String nombre;

	@Column(name="apellido", nullable = false)
	private String apellido;
	
	@Column(name="fechaNacimiento", nullable = false)
	private String fechaNacimiento;
	

	@Column(name="email", nullable = false)
	private String email;
	
	
	public Usuario() {
		
	
	}

	
	


	public Usuario(int dni, String nombre, String apellido, String fechaNacimiento, String email) {
		super();
		this.dni = dni;
		this.nombre = nombre;
		this.apellido = apellido;
		this.fechaNacimiento = fechaNacimiento;
		this.email = email;
	}


	public int getDni() {
		return dni;
	}


	public void setDni(int dni) {
		this.dni = dni;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getApellido() {
		return apellido;
	}


	public void setApellido(String apellido) {
		this.apellido = apellido;
	}


	public String getFechaNacimiento() {
		return fechaNacimiento;
	}


	public void setFechaNacimiento(String fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
}

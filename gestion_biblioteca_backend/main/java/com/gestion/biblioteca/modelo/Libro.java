package com.gestion.biblioteca.modelo;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="libros")
public class Libro {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private Integer isbn;
	
	@Column(name="autor", nullable = false, length = 50)
	private String autor;
	
	
	@Column(name="categoria", nullable = false, length = 100)
	private String categoria;
	
	@Column(name="editorial", nullable = false, length = 50)
	private String editorial;
	
	
	@Column(name="fecha_publicacion")
	private Date fechaPublicacion;
	
	@Column(name="titulo", nullable = false, unique = true)
	private String titulo;
	
	@Column(name="estado" , nullable = false)
	private int estado = 0;
	
	
	public Libro() {
		
	}
	
	
	public Libro(Integer isbn, String autor, String categoria, String editorial, Date fechaPublicacion, String titulo, int estado) {
		super();
		this.isbn = isbn;
		this.autor = autor;
		this.categoria = categoria;
		this.editorial = editorial;
		this.fechaPublicacion = fechaPublicacion;
		this.titulo = titulo;
		this.estado = estado;
	}


	public Integer getIsbn() {
		return isbn;
	}


	public void setIsbn(Integer isbn) {
		this.isbn = isbn;
	}


	public String getAutor() {
		return autor;
	}


	public void setAutor(String autor) {
		this.autor = autor;
	}


	public String getCategoria() {
		return categoria;
	}


	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}


	public String getEditorial() {
		return editorial;
	}


	public void setEditorial(String editorial) {
		this.editorial = editorial;
	}


	public Date getFechaPublicacion() {
		return fechaPublicacion;
	}


	public void setFechaPublicacion(Date fechaPublicacion) {
		this.fechaPublicacion = fechaPublicacion;
	}


	public String getTitulo() {
		return titulo;
	}


	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}


	public int getEstado() {
		return estado;
	}


	public void setEstado(int estado) {
		this.estado = estado;
	}

	

}

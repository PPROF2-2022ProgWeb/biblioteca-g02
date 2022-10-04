package com.gestion.biblioteca.modelo;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="prestamo")
public class Prestamo {


	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="fechaPrestamo", nullable = false)
	private Date fechaPrestamo;

	@Column(name="clientePrestamo", nullable = false)
	private String clientePrestamo;
	
	
	@Column(name="fechaDevolucionPrestamo", nullable = false)
	private Date fechaDevolucionPrestamo; 
	
	

	@Column(name="isbn", nullable = false)
	private int isbn;
	
	
	public Prestamo() {
		super();
	}


	public Prestamo(Integer id, Date fechaPrestamo, Date fechaRenovacion, String clientePrestamo, Date fechaDevolucionPrestamo, int isbn) {
		super();
		this.id = id;
		this.fechaPrestamo = fechaPrestamo;
		this.fechaDevolucionPrestamo = fechaDevolucionPrestamo;
		this.clientePrestamo = clientePrestamo;
		this.isbn = isbn;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Date getFechaPrestamo() {
		return fechaPrestamo;
	}


	public void setFechaPrestamo(Date fechaPrestamo) {
		this.fechaPrestamo = fechaPrestamo;
	}


	public String getClientePrestamo() {
		return clientePrestamo;
	}


	public void setClientePrestamo(String clientePrestamo) {
		this.clientePrestamo = clientePrestamo;
	}


	public Date getFechaDevolucionPrestamo() {
		return fechaDevolucionPrestamo;
	}


	public void setFechaDevolucionPrestamo(Date fechaDevolucionPrestamo) {
		this.fechaDevolucionPrestamo = fechaDevolucionPrestamo;
	}


	public int getIsbn() {
		return isbn;
	}


	public void setIsbn(int isbn) {
		this.isbn = isbn;
	}

	

	
}

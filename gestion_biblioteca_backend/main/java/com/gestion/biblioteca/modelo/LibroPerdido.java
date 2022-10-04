package com.gestion.biblioteca.modelo;


import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="librosPerdidos")
public class LibroPerdido {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private Integer idPerdida;
	
	@Column(name="libro", nullable = false, length = 50)
	private int isbn;
	

	@Column(name="fechaPerdida", nullable = false)
	private Date fechaPerdida;
		
	
	public LibroPerdido() {
		super();
		
	}


	public LibroPerdido(Integer idPerdida, int isbn, Date fechaPerdida) {
		super();
		this.idPerdida = idPerdida;
		this.isbn = isbn;
		this.fechaPerdida = fechaPerdida;
	}


	public Integer getIdPerdida() {
		return idPerdida;
	}


	public void setIdPerdida(Integer idPerdida) {
		this.idPerdida = idPerdida;
	}


	public int getIsbn() {
		return isbn;
	}


	public void setIsbn(int isbn) {
		this.isbn = isbn;
	}


	public Date getFechaPerdida() {
		return fechaPerdida;
	}


	public void setFechaPerdida(Date fechaPerdida) {
		this.fechaPerdida = fechaPerdida;
	}
	
	

}

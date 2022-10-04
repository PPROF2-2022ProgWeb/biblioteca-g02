package com.gestion.biblioteca.modelo;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="reserva")
public class Reserva {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="fechaReserva", nullable = false)
	private Date fechaReserva;
	
	@Column(name="id_usuario", nullable = false)
	private int id_usuario;
	
	@Column(name="id_libro", nullable = false)
	private int id_libro;
	
	
	
	public Reserva() {
	
	}



	public Reserva(Integer id, Date fechaReserva, int id_usuario, int id_libro) {
		super();
		this.id = id;
		this.fechaReserva = fechaReserva;
		this.id_usuario = id_usuario;
		this.id_libro = id_libro;
	}



	public Integer getId() {
		return id;
	}



	public void setId(Integer id) {
		this.id = id;
	}



	public Date getFechaReserva() {
		return fechaReserva;
	}



	public void setFechaReserva(Date fechaReserva) {
		this.fechaReserva = fechaReserva;
	}



	public int getId_usuario() {
		return id_usuario;
	}



	public void setId_usuario(int id_usuario) {
		this.id_usuario = id_usuario;
	}



	public int getId_libro() {
		return id_libro;
	}



	public void setId_libro(int id_libro) {
		this.id_libro = id_libro;
	}



	

	
}

package com.gestion.biblioteca.modelo;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="usuariosRegistrados")
public class Usuarioregistrado extends Usuario  {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="clave", nullable = false)
	private String clave;
	
	public Usuarioregistrado() {
	
	}
	

	public Usuarioregistrado(Integer id, String clave) {
		super();
		this.id = id;
		this.clave = clave;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}
	
	
	public String getClave() {
		return clave;
	}


	public void setClave(String clave) {
		this.clave = clave;
	}
	
	
	
	
}

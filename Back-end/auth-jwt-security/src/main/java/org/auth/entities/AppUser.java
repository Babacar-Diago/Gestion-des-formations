package org.auth.entities;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.AllArgsConstructor;
import lombok.Data; 
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppUser {
	
	 @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	 @Column(unique = true)
	private String username;
	//@JsonIgnore au niveau du getter et @JsonSetter au niveau du setter ""pour ne pas afficher le mot de pass""
	private String password;
	 @ManyToMany(fetch = FetchType.EAGER)
	private Collection<AppRole> role = new ArrayList<AppRole>();
	

}

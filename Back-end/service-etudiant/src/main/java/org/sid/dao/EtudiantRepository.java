package org.sid.dao;

import java.util.List;

import org.sid.entities.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource
public interface EtudiantRepository extends JpaRepository<Etudiant, Integer>{

	public List<Etudiant> findByNomContains(String nom);
}

package org.sid.dao;

import org.sid.entities.Etudiant;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="p1",types= {Etudiant.class})
public interface EtudiantProjection {
	public String getNom();
}

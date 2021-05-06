package org.auth.dao;

import org.auth.entities.AppRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<AppRole, Integer> {
	
	public AppRole findByRoleName(String roleName);
	
}

package org.auth.service;

import org.auth.entities.AppRole;
import org.auth.entities.AppUser;

public interface AccountService {
	
	 public AppUser saveUser(AppUser user);
	 public AppRole saveRole(AppRole role);
	 public void addRoleToUser(String username, String roleName);
	 public AppUser findUserByUsername(String username);
}

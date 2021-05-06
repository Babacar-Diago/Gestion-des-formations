package org.auth.web;

import org.auth.entities.AppUser;
import org.auth.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountRestController {
	
	@Autowired
	private AccountService accountService;

	@PostMapping("/register")
	public AppUser register(@RequestBody RegisterForm userForm) {
		
		 // Verifier si les deux mot de passe saisies sont équivalents
		if (!userForm.getPassword().equals(userForm.getRepassword())) 
			throw new RuntimeException("You must confirm your password");
		
		 // Verfier si l'utilisateur n'existe pas
		AppUser user = accountService.findUserByUsername(userForm.getUsername());
		if (user!=null)
			throw new RuntimeException("This user already exists");
		 // Si toute la saisie est correct		
		AppUser appUser = new AppUser();
		appUser.setUsername(userForm.getUsername());
		appUser.setPassword(userForm.getPassword());
		accountService.saveUser(appUser);
		accountService.addRoleToUser(userForm.getUsername(), "USER");
		return appUser;
		
	}
}

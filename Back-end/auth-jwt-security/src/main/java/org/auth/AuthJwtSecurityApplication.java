package org.auth;

import org.auth.dao.TaskRepository;
import org.auth.entities.AppRole;
import org.auth.entities.AppUser;
import org.auth.entities.Task;
import org.auth.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//@EnableDiscoveryClient
@SpringBootApplication/*(exclude = {
        org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class}
        )*/
public class AuthJwtSecurityApplication implements CommandLineRunner {
	
	@Autowired
	private TaskRepository taskRepository;
	@Autowired
	private AccountService accountService;
	
	public static void main(String[] args) {
		SpringApplication.run(AuthJwtSecurityApplication.class, args);
	}
	
	@Bean
	public BCryptPasswordEncoder getBCPE() {
		return new BCryptPasswordEncoder();
	}

	@Override
	public void run(String... args) throws Exception {
		
		accountService.saveUser(new AppUser(1, "admin", "1234", null));
		accountService.saveUser(new AppUser(2, "user", "1234", null));
		accountService.saveRole(new AppRole(1, "ADMIN"));
		accountService.saveRole(new AppRole(2, "USER"));
		
		accountService.addRoleToUser("admin", "ADMIN");
		accountService.addRoleToUser("admin", "USER");
		accountService.addRoleToUser("user", "USER");
		
		taskRepository.save(new Task(1,"T1"));
		taskRepository.save(new Task(2,"T2"));
		taskRepository.save(new Task(3,"T3"));
	}

}

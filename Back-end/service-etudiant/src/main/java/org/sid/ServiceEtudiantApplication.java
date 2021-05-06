package org.sid;

import java.util.Date;

import org.sid.dao.EtudiantRepository;
import org.sid.dao.FormationRepository;
import org.sid.entities.Etudiant;
import org.sid.entities.Formation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@EnableDiscoveryClient
@SpringBootApplication
public class ServiceEtudiantApplication implements CommandLineRunner {

	@Autowired
	private EtudiantRepository etudiantRepository;
	
	@Autowired
	private FormationRepository formationtRepository;
	
	// Pour afficher l'id d'une entité
	@Autowired
	private RepositoryRestConfiguration repositoryRestConfiguration;
	
	
	public static void main(String[] args) {
		SpringApplication.run(ServiceEtudiantApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		// Pour afficher l'id des entitées Formation et Etudiant
		repositoryRestConfiguration.exposeIdsFor(Formation.class, Etudiant.class);
		
		repositoryRestConfiguration.getCorsRegistry()
			.addMapping("/**")
			.allowedOrigins("http://localhost:4200")
			.allowedHeaders("*")
			.allowedMethods("OPTIONS", "HEAD", "GET", "PUT", "POST", "DELEDE", "PATCH");
		
		Formation f1 = formationtRepository.save(new Formation(1,"PHP",30,null));
		Formation f2 = formationtRepository.save(new Formation(2,"Java",40,null));
		Formation f3 = formationtRepository.save(new Formation(3,"Python",30,null));
		Formation f4 = formationtRepository.save(new Formation(4,"Oracle",30,null));
		
		etudiantRepository.save(new Etudiant(1, "Diago","Babacar",new Date(),f1));
		etudiantRepository.save(new Etudiant(2, "Touré","Bacary",new Date(),f2));
		etudiantRepository.save(new Etudiant(3, "Diouf","Mamour",new Date(),f3));
		etudiantRepository.save(new Etudiant(4, "Biaye","Idrissa",new Date(),f4));
		etudiantRepository.save(new Etudiant(5, "Faye","Astou",new Date(),f1));
		
	}

}

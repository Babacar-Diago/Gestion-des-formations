package org.auth.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	/*
	 * @Bean public PasswordEncoder passwordEncoder(){ return
	 * NoOpPasswordEncoder.getInstance(); }
	 */
	 
	
	// cette methode se charge de trouver les utilisateurs et leurs roles
	@Override 
	protected void configure(AuthenticationManagerBuilder auth) throws Exception { 
		/* auth.inMemoryAuthentication()
		//.passwordEncoder(NoOpPasswordEncoder.getInstance())
		.withUser("admin").password("1234").roles("ADMIN", "USER") .and()
		.withUser("user").password("1234").roles("USER"); */
		auth.userDetailsService(userDetailsService)
			.passwordEncoder(bCryptPasswordEncoder);
	}

	// cette methode définie les loies d'accès
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		//http.formLogin();
		
		http.authorizeRequests().antMatchers("/login/**", "/register/**").permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/tasks/**").hasAnyAuthority("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/etudiants/**").hasAnyAuthority("ADMIN");
		http.authorizeRequests().anyRequest().authenticated();
		 
		http.addFilter(new JWTAuthenficationFilter(authenticationManager()));
		http.addFilterBefore(new JWTAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
	}
}

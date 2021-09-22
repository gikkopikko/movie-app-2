package com.brillio.auth.security;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.brillio.auth.model.Customer;

public class UserPrincipal implements UserDetails {
	private String id;
	private String username;
	private String name;
	private String email;
	private String password;
	private Collection<? extends GrantedAuthority> authorities;

	public UserPrincipal() {
		super();
	}

//	public UserPrincipal(String id, String name, String username, String password,
//			Collection<? extends GrantedAuthority> authorities) {
//		super();
//		this.id = id;
//		this.name = name;
//		this.username = username;
//		this.password = password;
//		this.authorities = authorities;
//	}

	

	public UserPrincipal(String id,  String username,String name, String email, String password,
			Collection<? extends GrantedAuthority> authorities) {
		super();
		this.id = id;
		this.name = name;
		this.username = username;
		this.email = email;
		this.password = password;
		this.authorities = authorities;
	}
	public static UserPrincipal create(Customer customer) {
//		List<GrantedAuthority> authorities = Arrays.asList(new SimpleGrantedAuthority("user"));
		List<GrantedAuthority> authorities=customer.getRoles().stream().map(role ->
        new SimpleGrantedAuthority(role)).collect(Collectors.toList());
		
		return new UserPrincipal(customer.getId(), customer.getUsername(),customer.getName(), customer.getEmail(),customer.getPassword(),
				authorities);
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserPrincipal that = (UserPrincipal) o;
		return Objects.equals(id, that.id);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id);
	}

}

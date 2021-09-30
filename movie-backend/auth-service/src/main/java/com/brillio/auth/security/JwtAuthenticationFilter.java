package com.brillio.auth.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Objects;

public class JwtAuthenticationFilter extends OncePerRequestFilter {

	public JwtAuthenticationFilter(JwtTokenProvider tokenProvider) {
		super();
		this.tokenProvider = tokenProvider;
	}

	private JwtTokenProvider tokenProvider;

//	@Autowired
//	private CustomUserDetailsService customUserDetailsService;

	private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationFilter.class);

	private String getJwtFromRequest(HttpServletRequest request) {
		String bearerToken = request.getHeader("Authorization");
//		Cookie[] cookies=request.getCookies();
//		String mytoken="";
//		for (Cookie cookie : cookies) {
//			if ("JWTToken".equals(cookie.getName())) {
//				mytoken = cookie.getValue();
//				
//			}
//		}
//		if (StringUtils.hasText(mytoken) && bearerToken.startsWith("Bearer-")) {
//			return mytoken.substring(7, bearerToken.length());
//		}
		if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer-")) {
			return bearerToken.substring(7, bearerToken.length());
		}
		return null;
	}
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		try {
//			String token = getJwtFromRequest(request);

//	        if (!Objects.isNull(token) && tokenProvider.validateToken(token)) {
//	            Authentication auth = tokenProvider.getAuthentication(token);
//	            if (!Objects.isNull(auth))
//	                SecurityContextHolder.getContext().setAuthentication(auth);
//	        }
			String token = getJwtFromRequest(request);
       if (!Objects.isNull(token) && tokenProvider.validateToken(token)) {
            Authentication auth = tokenProvider.getAuthentication(token);
	            if (!Objects.isNull(auth))
	                SecurityContextHolder.getContext().setAuthentication(auth);
	        }
			
		} catch (Exception ex) {
			logger.error("Could not set user authentication in security context", ex);
		}

		filterChain.doFilter(request, response);
	}


}

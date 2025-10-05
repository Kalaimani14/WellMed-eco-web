package com.example.mypharmspringboot.CrossOrgin;

    import org.springframework.context.annotation.Bean;
    import org.springframework.context.annotation.Configuration;
    import org.springframework.web.servlet.config.annotation.CorsRegistry;
    import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

    @Configuration
    public class CorsConfig {
        @Bean
        public WebMvcConfigurer corsConfigurer() {
            return new WebMvcConfigurer() {
                @Override
                public void addCorsMappings(CorsRegistry registry) {
                    registry.addMapping("/**") // Apply to all paths
                            .allowedOrigins("http://localhost:3000") // Specific origins
                            .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed HTTP methods
                            .allowedHeaders("*") // Allow all headers
                            .allowCredentials(true) // Allow credentials (cookies, auth headers)
                            .maxAge(3600); // Preflight request cache duration
                }
            };
        }
    }
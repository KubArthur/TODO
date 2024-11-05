package com.example.stellar.config;

import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.servers.Server;

@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "TO-DO",
                version = "1.0.0",
                description = "API pour la gestion de tâches.",
                termsOfService = "http://example.com/terms",
                contact = @Contact(
                        name = "Support API",
                        email = "support@example.com",
                        url = "http://example.com/support"
                ),
                license = @License(
                        name = "Apache 2.0",
                        url = "http://www.apache.org/licenses/LICENSE-2.0"
                )
        ),
        servers = {
            @Server(url = "http://localhost:8080", description = "Local server")
        }
)

public class OpenApiConfig {
}

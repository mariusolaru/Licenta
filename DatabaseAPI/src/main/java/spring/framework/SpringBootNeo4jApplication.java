package spring.framework;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import spring.framework.control.service.StorageService;

import javax.annotation.Resource;

@SpringBootApplication
public class SpringBootNeo4jApplication implements CommandLineRunner {

	@Resource
	StorageService storageService;

	public static void main(String[] args) {
		SpringApplication.run(SpringBootNeo4jApplication.class, args);
	}

	@Override
	public void run(String... arg) throws Exception {
		//storageService.deleteAll();
		storageService.init();
	}
}

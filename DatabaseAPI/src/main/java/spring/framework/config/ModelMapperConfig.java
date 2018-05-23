package spring.framework.config;

import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import spring.framework.boundry.dto.UserDTO;
import spring.framework.control.service.interfaces.FacultyService;
import spring.framework.entity.model.Faculty;
import spring.framework.entity.model.User;

@Configuration
public class ModelMapperConfig {

    @Autowired
    private FacultyService facultyService;

    @Bean
    public ModelMapper modelMapper() {

        ModelMapper modelMapper = new ModelMapper();

        modelMapper.getConfiguration().setSkipNullEnabled(true);

        /*modelMapper.typeMap(UserDTO.class, User.class).addMappings(m -> {
            m.<String>map(UserDTO::getGraduatedFaculty, (User, v) -> User.getGraduatedFaculty().setName(facultyService.getFacultyByName(v).getName()));

        });*/


        return modelMapper;
    }
}
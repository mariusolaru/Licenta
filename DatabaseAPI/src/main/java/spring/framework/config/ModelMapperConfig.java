package spring.framework.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {

    @Bean
    public ModelMapper modelMapper() {

        ModelMapper modelMapper = new ModelMapper();

        modelMapper.getConfiguration().setSkipNullEnabled(true);

        /*modelMapper.typeMap(AppointmentDTO.class, Appointment.class).addMappings(m -> {
            m.<Long>map(AppointmentDTO::getDoctor_id, (Appointment, v) -> Appointment.getDoctor().setId(v));
            m.<Long>map(AppointmentDTO::getPatient_id, (Appointment, v) -> Appointment.getPatient().setId(v));

        });*/

        return modelMapper;
    }
}
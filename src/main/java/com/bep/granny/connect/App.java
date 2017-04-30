package com.bep.granny.connect;

import com.bep.granny.connect.controllers.VideoController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 *
 * <h>Mainclass to serve endpoints for Granny-Connect.</h>
 *
 * @author sido
 */
@SpringBootApplication
public class App {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(VideoController.class, args);
    }

}

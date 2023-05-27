package com.Code.Exception;

import org.springframework.http.HttpStatus;

import java.time.ZonedDateTime;

public class ApiRequestException extends RuntimeException{
    public ApiRequestException(String message) {
        super(message);
    }

    public ApiRequestException(String message, Throwable cause) {
        super(message, cause);
    }

    public ApiRequestException(String message, HttpStatus notFound, ZonedDateTime z) {

    }
}

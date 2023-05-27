package com.Code.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@RestControllerAdvice
public class ApiRequestExceptionHandler{

    @ExceptionHandler(value = NotFoundException.class)
    public ResponseEntity<?> ApiRequestExceptionHandler(NotFoundException e) {
        HttpStatus notFound = HttpStatus.NOT_FOUND;

        ApiRequestException apiRequestException = new ApiRequestException(
                e.getMessage(),
                notFound,
                ZonedDateTime.now(ZoneId.of("Z"))
        );
        return new ResponseEntity<>(apiRequestException, notFound);
    }
}
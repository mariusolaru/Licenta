package spring.framework.boundry.exceptions;

public class BadRequestException extends GenericException{
    public BadRequestException(String message) { super(message); }

    public BadRequestException(String message, Throwable throwable) {
        super(message, throwable);
    }
}

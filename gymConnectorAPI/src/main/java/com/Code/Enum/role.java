package com.Code.Enum;

public enum role {
    USER("USER"),
    PERSONAL_TRAINER("PERSONAL_TRAINER"),
    ADMIN("ADMIN");

    private String text;

    role(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}

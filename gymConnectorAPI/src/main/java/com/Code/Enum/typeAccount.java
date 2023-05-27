package com.Code.Enum;

public enum typeAccount {
    NORMAL("NORMAL"),
    GOOGLE("GOOGLE"),
    FACEBOOK("FACEBOOK");

    private String text;

    typeAccount(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}

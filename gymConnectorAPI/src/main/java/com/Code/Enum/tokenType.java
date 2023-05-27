package com.Code.Enum;

public enum tokenType {
        SIGNUP("SIGNUP"),
        REPASSWORD("REPASSWORD");
        private String text;

        tokenType(String text) {
            this.text = text;
        }

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }
}

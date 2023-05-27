package com.Code.Controller.Client;


import com.Code.Model.Chat.Greeting;
import com.Code.Model.Chat.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.HtmlUtils;

@RestController
public class ChatController {

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greeting greet(Message message) throws InterruptedException {
        Thread.sleep(2000);
        return new Greeting("Hello, " +
                HtmlUtils.htmlEscape(message.getName()));
    }
}

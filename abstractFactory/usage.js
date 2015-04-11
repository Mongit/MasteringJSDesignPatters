var smsFactory = require("./sms");
var whatsappFactory = require("./whatsapp");
var emailFactory = require("./email");

var sms = smsFactory();//funcion que regresa instancia = factory pattern
var whats = whatsappFactory();
var email = emailFactory();

sms.sendMessage("This is my SMS");
whats.sendMessage("This is my whatsapp");
email.sendMessage("This is my Email");
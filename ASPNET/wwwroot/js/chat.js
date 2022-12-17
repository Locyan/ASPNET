"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (user, message) {    
    var li = document.createElement("li");    
    //document.getElementById("messagesList").appendChild(li);
    //li.textContent = `${user} says ${message}`;    
    document.getElementById(user).style.backgroundImage = message;
    document.getElementById(user).disabled = true;
    c = c + 1;    
    
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("1-1").addEventListener("click", function (event) {
    var user = document.getElementById("1-1").id;
    //var message = document.getElementById("messageInput").value;
    var message = document.getElementById("1-1").style.backgroundImage;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
    c = c + 1;
    
    
});

document.getElementById("1-2").addEventListener("click", function (event) {
    var user = document.getElementById("1-2").id;
    //var message = document.getElementById("messageInput").value;
    var message = document.getElementById("1-2").style.backgroundImage;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
    c = c + 1;
    
});

document.getElementById("1-3").addEventListener("click", function (event) {
    var user = document.getElementById("1-3").id;
    //var message = document.getElementById("messageInput").value;
    var message = document.getElementById("1-3").style.backgroundImage;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
    c = c + 1;
    
});

document.getElementById("2-1").addEventListener("click", function (event) {
    var user = document.getElementById("2-1").id;
    //var message = document.getElementById("messageInput").value;
    var message = document.getElementById("2-1").style.backgroundImage;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
    c = c + 1;
});

document.getElementById("2-2").addEventListener("click", function (event) {
    var user = document.getElementById("2-2").id;
    //var message = document.getElementById("messageInput").value;
    var message = document.getElementById("2-2").style.backgroundImage;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
    c = c + 1;
});

document.getElementById("2-3").addEventListener("click", function (event) {
    var user = document.getElementById("2-3").id;
    //var message = document.getElementById("messageInput").value;
    var message = document.getElementById("2-3").style.backgroundImage;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
    c = c + 1;
});

document.getElementById("3-1").addEventListener("click", function (event) {
    var user = document.getElementById("3-1").id;
    //var message = document.getElementById("messageInput").value;
    var message = document.getElementById("3-1").style.backgroundImage;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
    c = c + 1;
});

document.getElementById("3-2").addEventListener("click", function (event) {
    var user = document.getElementById("3-2").id;
    //var message = document.getElementById("messageInput").value;
    var message = document.getElementById("3-2").style.backgroundImage;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
    c = c + 1;
});

document.getElementById("3-3").addEventListener("click", function (event) {
    var user = document.getElementById("3-3").id;
    //var message = document.getElementById("messageInput").value;
    var message = document.getElementById("3-3").style.backgroundImage;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
    c = c + 1;
});
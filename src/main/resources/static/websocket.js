let websocket;

function onOpen() {
<<<<<<< HEAD
  websocket.send("connected");
=======
  let username = document.getElementById("username");
  websocket.send(username.value + ":" + "connected");
>>>>>>> 72ff7318115a66be059919135860f65f8a1d2adf
  console.log("connected: onOpen()");
}

function onMessage(receivedMessage) {
  showMessage(receivedMessage.data);
  console.log("received: onMessage()");
}

function onClose() {
  console.log("disconnected: onClose()");
}

function connect() {
  websocket = new WebSocket("ws://localhost:8080/ws/chats");
  websocket.onmessage = onMessage;
  websocket.onopen = onOpen;
  websocket.onclose = onClose;

  setConnected(true);
  console.log("connected: connect()");
}

function disconnect() {
  websocket.close();

  setConnected(false);
  console.log("disconnected: disconnect()");
}

function sendMessage() {
<<<<<<< HEAD
  let message = document.getElementById("message");

  websocket.send(message.value);
=======
  let username = document.getElementById("username");
  let message = document.getElementById("message");

  websocket.send(username.value + ":" +message.value);
>>>>>>> 72ff7318115a66be059919135860f65f8a1d2adf
  message.value = "";
  console.log("sent: send()");
}

function showMessage(message) {
  $("#messages").append("<tr><td>" + message + "</td></tr>");
}

function setConnected(connected) {
  $("#connect").prop("disabled", connected);
  $("#disconnect").prop("disabled", !connected);
  if (connected) {
    $("#conversation").show();
  } else {
    $("#conversation").hide();
  }
  $("#messages").html("");
}

$(function () {
  $("#connect").click(() => connect());
  $("#disconnect").click(() => disconnect());
  $("#send").click(() => sendMessage());
});
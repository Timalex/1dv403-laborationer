"use strict";
console.log("labbyMezzage loaded");

var labbyMezzage = {

    init: function () 
    {
        var buttonPost = document.getElementById("button");

        buttonPost.onclick = labbyMezzage.postMessage;
    },

    postMessage: function ()
    {
        createMessageObjekt();
        renderLatestMessage();

        function createMessageObjekt()
        {
            var textarea = document.getElementById("messageInput");
            labbyMezzage.messages.push( new Message( textarea.value, new Date()));
        }

        function renderLatestMessage()
        {
            var lastMessageId = labbyMezzage.messages.length - 1;

            var messageBoard = document.getElementById("messageBoard");

            var message = document.createElement("article");
            message.setAttribute("class", "message");
            var time = document.createElement("time");
            var p = document.createElement("p");

            // Skapa ta-bort knapp på meddelandet
            var buttonRemove = document.createElement("a");
            buttonRemove.setAttribute("href", "#");
            buttonRemove.innerHTML = '<img src="Delete-icon.png" width="24px" height="24px" />';
            buttonRemove.addEventListener("click", labbyMezzage.removeMessage, false)

            // var imgRemove = document.createElement("img");
            // imgRemove.setAttribute("src", "Delete-icon.png");
            // imgRemove.setAttribute("width", "24px");
            // imgRemove.setAttribute("height", "24px");

            // buttonRemove.appendChild(imgRemove);

            message.appendChild(buttonRemove);

            // var timeText = document.createTextNode("Klockan är mycket nu");
            // var pText = document.createTextNode("Mycket viktig meddelandetext");

            // timeText.data = labbyMezzage.messages[lastMessageId].getClockStringLocal();
            // pText.data = labbyMezzage.messages[lastMessageId].getText();

            
            // time.appendChild(timeText);
            // p.appendChild(pText);            

            time.setAttribute("datetime", labbyMezzage.messages[lastMessageId].getDateStringUTC());

            time.innerHTML = labbyMezzage.messages[lastMessageId].getClockStringLocal();
            p.innerHTML = labbyMezzage.messages[lastMessageId].getText();


            message.appendChild(time);
            message.appendChild(p);

            messageBoard.appendChild(message);
        }
    },

    removeMessage: function(event)
    {
        var messageBoard = document.getElementById("messageBoard");
        var messageClicked = this.parentNode;

        var messageNumber = labbyMezzage.getMessageNumber(messageClicked);

        messageBoard.removeChild(messageBoard.childNodes[messageNumber]);
        labbyMezzage.messages.splice(messageNumber, 1);

        return event.preventDefault();
    },

    getMessageNumber: function(messageClicked)
    {
        var message = document.querySelector(".message");
        var count = 0;

        while (message)
        {
            if (message == messageClicked)
            {
                return count;
            }

            count++;
            message = message.nextElementSibling;
        }
    }, 

    messages: []
};

window.onload = labbyMezzage.init;
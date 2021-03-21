function ShowModalLogin() {
   document.querySelector('#modal-container').classList.remove('opacity_hide');
}

function HideModalLogin() {
    document.querySelector('#modal-container').classList.add('opacity_hide');
}

$(document).ready(function() {
    document.addEventListener("mousedown", event => {
        if (event.target.id == "modal-container") {
            HideModalLogin();
        }
    }, false);
    
    document.addEventListener("click", event => {
        event.stopPropagation();
    }, false);
});

function LoginAccount () {
    var login = document.querySelector('#login').value;
    var password = document.querySelector('#password').value;

    if (login && password) {
        document.querySelector('#enter').style.display = "block";
    }
}

function Send() {
    var textMessage = document.querySelector('#text-message');
    var message = textMessage.value;

    if (message) {
    	document.querySelector('#log').innerHTML = message;

        var codeHtml = '<div class="message-block message-left">' + message + '</div>';
        textMessage.value = '';

        $("#container").append(codeHtml);

        var elm = $('#container');
        elm.scrollTop(elm.get(0).scrollHeight);

    }
}

function Answer(messageA) {
	message =  '<div class="message-block message-right">' +
                    messageA +
                '</div>';

    $("#container").append(message);

    var elm = $('#container');
    elm.scrollTop(elm.get(0).scrollHeight);
}

var lastAnswer = '';

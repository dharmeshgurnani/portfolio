import $ from 'jquery';
import eventEmitter from '../../utils/EventEmitter.js';

$(document).ready(function () {
    $("#ContactForm").submit((e) => {
        e.preventDefault();
        console.info('submited');
        $('#name').val()
        var requestJsonPayload = {
            name: $('#name').val() || 'dharmesh',
            email: $('#email').val() || 'dharmesh@test.com',
            message: $('#message').val() || 'el data not found'
        }

        new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'https://dharmeshgurnani-telegram-bot.herokuapp.com/sendMessage',
                data: JSON.stringify(requestJsonPayload),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: (response) => {
                    window.console.info('Message send successfully');
                    window.console.info(response);
                    var eventObject = {
                        element: e,
                        response: response
                    }
                    eventEmitter.emit('contact.submit.success', eventObject);
                    resolve();
                },
                failure: function (response) {
                    var eventObject = {
                        element: e,
                        response: response
                    }
                    eventEmitter.emit('contact.submit.failed', eventObject);
                    reject();
                }
            });
        });

    });
});

eventEmitter.on('contact.submit', (eventObject) => {
    eventObject.element.submit();
});

// Registering to myEvent 
eventEmitter.on('contact.submit.success', (eventObject) => {
    window.console.info(eventObject);
});

eventEmitter.on('contact.submit.failed', (eventObject) => {
    window.console.info(eventObject);
});
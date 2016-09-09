function sendForm(e) {
    e.preventDefault();
    $.ajax ({
        url:"https://formspree.io/ira.demkovych@gmail.com", 
        method:"POST",
        data: {
            name:$('#name').val(),
            email:$('#email').val(),
            message:$('#text').val()
        },
    });
    $('#formSend').trigger('reset');
};



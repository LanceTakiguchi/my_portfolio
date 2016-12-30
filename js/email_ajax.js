$(document).ready(function(){
    $('#form_submit').click(function(){
        console.log('A Email Form is being submitted');
        alert("A Email Form is being submitted");
        $.ajax({
            url: 'php_mailer/mail_handler.php',
            type: "POST",
            dataType: 'json',
            data: {
                name: $("#form_name").val(),
                email: $("#form_email").val(),
                message: $("#form_message").val()
            },
            success: function(result) {
                console.log("name:", $("#form_name").val());
                console.log("email:", $("#form_email").val());
                console.log("message:", $("#form_message").val());
                console.log('AJAX Success function called, with the following result:', result);
                alert("AJAX Success function called: " );
            },
            error: function(result) {
                console.log("name:", $("#form_name").val());
                console.log("email:", $("#form_email").val());
                console.log("message:", $("#form_message").val());
                console.log("AJAX Error function called, with the following result: ", result);
                alert("AJAX Success function called");
            }
        });
alert("End of Email Form JS Ajax function");
});
});
function email_status(result, message) {
    $("#contact_bulletin h4").text(result);
    $("#contact_bulletin h5").text(message);
    return;
}
function email_clear(){
    $("#form_name").val("");
    $("#form_email").val("");
    $("#form_message").val("");
}
function email_result(func_called, success, error_log){
    email_status("", ""); // Clears out previous email reuslt & message from HTML
    if(func_called){
        if(success){
            email_status("Email sent, thank you!");
            email_clear();
        }else{
            if(error_log[0] === "SMTP connect() failed."){
              email_status("Email failed to send", "Server Error: Please email me at lancetakiguchi@gmail.com. Sorry for the inconvenience");  
          }else{
            var reasons = "";
            for(error_index in error_log){
                reasons += error_log[error_index] + " ";
            }
            reasons += ". Please fix the errored and input try again or email me at lancetakiguchi@gmail.com";
            email_status("Email failed to send", reasons);
        }  
    }
}else{
    email_status("Email failed to send",
       "Unknown Error: Please email me at lancetakiguchi@gmail.com. Sorry for the inconvenience.");
}
}
$(document).ready(function(){
    $('#form_submit').click(function(){
        console.log('A Email Form is being submitted');
        // alert("A Email Form is being submitted");
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
                // console.log("name:", $("#form_name").val());
                // console.log("email:", $("#form_email").val());
                // console.log("message:", $("#form_message").val());
                // alert("AJAX Success function called: " );
                console.log('AJAX Success function called, with the following result:');
                console.log(result.success);
                email_result(true, result.success, result.messages);

            },
            error: function(result) {
                // console.log("name:", $("#form_name").val());
                // console.log("email:", $("#form_email").val());
                // console.log("message:", $("#form_message").val());
                // alert("AJAX Error function called");
                console.log("AJAX Error function called, with the following result: ");
                console.log(result.success);
                email_result(false, result.success, result.messages);
            }
        });
// alert("End of Email Form JS Ajax function");
});
});
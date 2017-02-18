/**
 * [email_status Places a message on the DOM regarding an email's resulting status]
 * @param  {[String]} result  [Boolean indication of success or false]
 * @param  {[String]} message [A more detailed description of the reason behind the result]
 */
 function email_status(result, message) {
    $("#contact_bulletin h4").text(result);
    $("#contact_bulletin h5").text(message);
    return;
}
/**
 * [email_clear Clears the email form inputs]
 */
 function email_clear(){
    $("#form_name").val("");
    $("#form_email").val("");
    $("#form_message").val("");
}
/**
 * [email_result Logic handling what to tell the DOM to display based on the result of attempting to send the email]
 * @param  {[bool]} func_called [Indicates if the ajax call was sucessful]
 * @param  {[bool]} success     [Server's response on whether they did send the email]
 * @param  {[Array]} error_log   [Server's reasons for resulting sucess or fail]
 */
 function email_result(func_called, success, error_log){
    // Clears out previous email reuslt & message from HTML
    email_status("", "");
    // If Ajax was sucessful
    if(func_called){
        // If server sent email
        if(success){
            email_status("Email sent, thank you!");
            email_clear();
        }else{
            // Never connected to server
            if(error_log[0] === "SMTP connect() failed."){
              email_status("Email failed to send", "Server Error: Please email me at lancetakiguchi@gmail.com. Sorry for the inconvenience");  
          }else{ // Server was connected to and has a reason for not sending email
            var reasons = "";
            for(error_index in error_log){
                reasons += error_log[error_index] + " ";
            }
            reasons += ". Please fix the errored and input try again or email me at lancetakiguchi@gmail.com";
            email_status("Email failed to send", reasons);
        }  
    }
}else{ // Ajax failed
    email_status("Email failed to send",
     "Unknown Error: Please email me at lancetakiguchi@gmail.com. Sorry for the inconvenience.");
}
} // End of email_result function
$(document).ready(function(){
    $('#form_submit').click(function(){
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
                email_result(true, result.success, result.messages);
            },
            error: function(result) {
                email_result(false, result.success, result.messages);
            }
        });
    });
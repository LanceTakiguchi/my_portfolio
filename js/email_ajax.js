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
            reasons += ". Please fix the errored input and try again or email me at lancetakiguchi@gmail.com";
            email_status("Email failed to send", reasons);
        }  
    }
}else{ // Ajax failed
    email_status("Email failed to send",
     "Unknown Error: Please email me at lancetakiguchi@gmail.com. Sorry for the inconvenience.");
}
} // End of email_result function
/**
 * [regex_val Tests to see if name and email are valid. If not send a DOM message and return false]
 * @param  {[string]} name  [A name that should be only the english alphabet]
 * @param  {[string]} email [An email that should only have email related char]
 * @return {[bool]}       [Whether or not the name and email were valid or if one was invalid]
 */
 function regex_val(name, email){
    if(!name_val(name)){
        email_status("Invalid Input", "Invalid Name: Please enter in a name with letters between A and Z or email me at lancetakiguchi@gmail.com");  
        return false;
    }else if(!email_val(email)){
        email_status("Invalid Input", "Invalid Email: Please enter an valid email address or email me at lancetakiguchi@gmail.com");  
        return false;
    }
    return true;
} // End of regex_val function
/**
 * Adds an escape for special characters
 * @param  {[string]} str [A string that may have special characters that need to be escaped]
 * @return {[string]}     [A string with all special characters having an escape before it]
 */
 function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
/**
 * [name_val A regex to see if an name is valid]
 * @param  {[string]} name [A user inputed name]
 * @return {[bool]}      [Whether or not the param name was valid]
 */
 function name_val(name){
    var patt = new RegExp("^[A-Za-z .'-]+$");
    return patt.test(name);
}
/**
 * [email_val A regex to see if an email is valid]
 * @param  {[string]} email [A user inputed email address]
 * @return {[bool]}       [Whether or not the param email was valid]
 */
 function email_val(email){
    var patt = new RegExp("^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$");
    return patt.test(email);
}
// function disabled_submit_in(){
//     email_status("Input Required", "All inputs, name, email address, and message are required. Or email me at lancetakiguchi@gmail.com");  
// }
// function disabled_submit_out(){
//     email_status("", "");  
// }
$(document).ready(function(){
    $("#form_submit").mouseover(function(event) {
        var submit_classes = $(this).attr("class").split(' ');
        for (index in submit_classes) {
            if(submit_classes[index] == "disabled"){
               email_status("Input Required", "All inputs, name, email address, and message are required. Or email me at lancetakiguchi@gmail.com"); 
           }
       }
   });
    $("#form_submit").mouseout(function(){
        var submit_classes = $(this).attr("class").split(' ');
        for (index in submit_classes) {
            if(submit_classes[index] == "disabled"){
               email_status("", "");  
           }
       }
   });
    /**
     * [Check to see that all the inputs are filled in, else keep the submit button disabled]
     */
     $('body').on("keyup", function(){
        var empty = false;
        if ($("#form_name").val() == '') {
            empty = true;
        } else if($("#form_email").val() == ''){
            empty = true;
        }
        else if ($("#form_message").val() == '') {
            empty = true;
        }
        var x = document.getElementById("form_submit");
        // If the inputs are all filled, unlock the submit button, else keep it locked
        if (!empty) {
            if (x.className === "width_restrict disabled") {
                x.className = "width_restrict";
            }
        }else{
            if (x.className !== "width_restrict disabled") {
                x.className = "width_restrict disabled";
            }
        }
    });
   /**
    * [Run email form validity tests upon submission]
    */
    $('#form_submit').click(function(){
        // Check for input validity
        var san_name = $("#form_name").val();
        var san_email = $("#form_email").val();
        var san_message = escapeRegExp($("#form_message").val());
        // If submit is disabled
        var submit_disabled = false;
        var submit_classes = $(this).attr("class").split(' ');
        for (index in submit_classes) {
            if(submit_classes[index] == "disabled"){
                submit_disabled = true;
            }
        }
        // If the name and email are deemed valid by js regex, make the AJAX call
        if(!submit_disabled && regex_val(san_name, san_email)){
            $.ajax({
                url: 'php_mailer/mail_handler.php',
                type: "POST",
                dataType: 'json',
                data: {
                    name: san_name,
                    email: san_email,
                    message: san_message
                },
                success: function(result) {
                    email_result(true, result.success, result.messages);
                },
                error: function(result) {
                    email_result(false, result.success, result.messages);
                }
            });
        }
    });
});
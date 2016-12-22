<?php
require_once('email_config.php');
require('phpmailer/PHPMailer/PHPMailerAutoload.php');
// Validate POST inputs
$message = [];
$output = [
"success" => null,
"messages" => []
];
$message['name'] = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
if (empty($message['name'])) {
	$output['success'] = false;
	$output['messages'][] = 'missing name key';
}
    //  Validate email field
$message['email'] = filter_var($_POST['email'], FILTER_VALIDATE_REGEXP, ['options'=>['regexp'=>'/^(?=[A-Z0-9][A-Z0-9@._%+-]{5,253}$)[A-Z0-9._%+-]{1,64}@(?:(?=[A-Z0-9-]{1,63}\.)[A-Z0-9]+(?:-[A-Z0-9]+)*\.){1,8}[A-Z]{2,63}$/i']]);
if (empty($message['email'])) {
	$output['success'] = false;
	$output['messages'][] = 'invalid email key';
}
    //  Sanitize message field
$message['message'] = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
if (empty($message['message'])) {
	$output['success'] = false;
	$output['messages'][] = 'missing message key';
}
if ($output['success'] !== null) {
	// http_response_code(400);
	echo json_encode($output);
	exit();
}
$mail = new PHPMailer;
$mail->SMTPDebug = 4;                               // Enable verbose debug output
$mail->Debugoutput = 'html';
$mail->IsSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication


$mail->Username = EMAIL_USER;                 // SMTP username
$mail->Password = EMAIL_PASS;                 // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to
$mail->SMTPOptions = array(
	'ssl' => array(
		'verify_peer' => false,
		'verify_peer_name' => false,
		'allow_self_signed' => true
		)
	);
print_r($mail->SMTPOptions);

// $mail->smtpConnect($options);
$mail->From = $message['email'];//your email sending account
$mail->FromName = $message['name'];//your email sending account name
$mail->addAddress(EMAIL_USER, "Lance");/*your email address, or the email the sender if you are sending confirmation*/ /*email address user name*/     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo($message['email'], $message['name']);/*email address of the person sending the message, so you can reply*/
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(false);                                  // Set email format to HTML

$mail->Subject = 'Here is the subject';
$mail->Body    = $message['message'];
$mail->AltBody = htmlentities($message['message']);

if(!$mail->send()) {
	$output['success'] = false;
	$output['messages'][] = $mail->ErrorInfo;
} else {
	$output['success'] = true;
}
echo json_encode($output);
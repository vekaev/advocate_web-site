<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['nameFF'];
$phone = $_POST['telFF'];
$email = $_POST['mailFF'];
$speed = $_POST['speedFF'];
$about = $_POST['aboutFF'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
// $mail->Host = 'smtp.advocatepaziuk.com';  	
$mail->Host = "mail.advocatepaziuk.com"; 					// Specify main and backup SMTP servers
$mail->SMTPAuth = false;                               // Enable SMTP authentication
$mail->Username = 'mailer@advocatepaziuk.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'mailerpaziuk'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
// Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // 465 // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('mailer@advocatepaziuk.com'); // от кого будет уходить письмо?
// $mail->addAddress('pazyuk130789@gmail.com'); 
$mail->addAddress('pazyuk130789@gmail.com');      // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
$mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = '' .$name . ' оставил заявку,<br><br> Его телефон: ' .$phone. '<br><br>Почта этого пользователя: ' .$email . '<br><br>Срочность вопроса:  ' .$speed. '<br><br>Вопрос:  ' .$about. '<br><br>';
$mail->AltBody = '';

if(!$mail->send()) {
    echo $mail->ErrorInfo;
} else {
    header('location: thank-you.html');
}
?>



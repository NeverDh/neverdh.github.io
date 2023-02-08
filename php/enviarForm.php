<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require '../vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$nome = $_POST["Nome"];
$email = $_POST["Email"];
$celular = $_POST["Celular"];
$descrição = $_POST["Descrição"];
$categoria = $_POST["Categoria"];
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.kinghost.net';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'testeluis@autowork.dev.br';                     //SMTP username
    $mail->Password   = 'Auto@1234';                               //SMTP password
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('testeluis@autowork.dev.br', $nome);
    $mail->addAddress('testeluis@autowork.dev.br', 'SEM NOME');     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'NOVO CONTATO!';
    $mail->Body    = mb_convert_encoding("
    <html>
        <p><b>Nome: </b>$nome</p>
        <p><b>E-mail: </b>$email</p>
        <p><b>Celular: </b>$celular</p>
        <p><b>Descrição: </b>$descrição</p>
        <p><b>Categoria: </b>$categoria</p>
        <p>Email enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>
", 'windows-1252', 'UTF-8');

    $mail->send();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
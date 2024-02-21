<?php 

$to = 'akbar.deshani07@gmail.com';

$firstname = $_POST['first-name'];
$lastname = $_POST['last-name'];
$emailaddress = $_POST['email-address'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$hp = $_POST['body'];

$subject = 'Email From Website';


$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$message1 = "
	First Name: $firstname <br>
	Last Name: $lastname <br>
	Email Address: $emailaddress <br>
    Subject: $subject <br>
    Message: $message <br>
";

if(!$hp){
	mail($to, $subject, $message1, $headers);
}

header("Location: thankyou.html");
die();
?>
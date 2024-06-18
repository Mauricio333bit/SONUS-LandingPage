<?php
//us
$emailSonus = "mauriquroga97@gmail.com";
$asuntoSonus = "Nuevo cliente";

//costumer
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$findUs = $_POST['findUs'];
$message = $_POST['message'];

$carta = "Nombre de la persona: $name \n";
$carta .= "Correo electronico: $email \n";
$carta .= "Numero telefonico: $phone \n";
$carta .= "Por donde nos conocio: $findUs \n";
$carta .= "Mensaje: $message \n";


//send mail
mail($emailSonus, $asuntoSonus, $carta);
header("Location:/index.astro");

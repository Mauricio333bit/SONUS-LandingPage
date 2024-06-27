<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Aquí va la lógica para enviar el correo electrónico
    // Puedes usar funciones como mail() o librerías como PHPMailer

    // Después de enviar el correo, redirige a la página de inicio
    header("Location: /");
    exit();
}

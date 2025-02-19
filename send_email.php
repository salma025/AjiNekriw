<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];


    $to = "salmalamsassi@gmail.com"; 
    $subject = "Message de contact de " . $name;
    $body = "
    Nom: $name\n
    Téléphone: $phone\n
    E-mail: $email\n\n
    Message:\n$message
    ";
    $headers = "From: $email";

    // Envoi de l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "Merci pour votre message ! Nous vous répondrons dès que possible.";
    } else {
        echo "Une erreur est survenue. Veuillez réessayer plus tard.";
    }
}
?>

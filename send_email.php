<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "lamsassisalma@gmail.com";
    $subject = "Nouveau message de $name via le site AjiNkriw";
    $body = "Nom: $name\nTéléphone: $phone\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès. Merci de nous avoir contacté !";
    } else {
        echo "Erreur lors de l'envoi. Veuillez réessayer plus tard.";
    }
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer et échapper les données utilisateur
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Vérification si les champs sont remplis
    if (empty($name) || empty($phone) || empty($email) || empty($message)) {
        echo "Tous les champs sont obligatoires.";
    } else {
        // Paramètres de l'email
        $to = "lamsassisalma@gmail.com";
        $subject = "Nouveau message de $name via le site AjiNkriw";
        $body = "Nom: $name\nTéléphone: $phone\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: $email";

        // Envoi de l'email
        if (mail($to, $subject, $body, $headers)) {
            echo "Message envoyé avec succès. Merci de nous avoir contacté !";
        } else {
            echo "Erreur lors de l'envoi. Veuillez réessayer plus tard.";
        }
    }
}
?>

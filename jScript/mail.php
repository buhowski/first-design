<?php

$recipient = "intelsub@gmail.com";
$sitename = "Site portfolio";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nМыло: $email \nСообщение: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recipient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recipient");
<?php
if (isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['type'])) {
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $type = $_POST['type'];

  $to = 'example@mail.com';
  $subject = 'Заявка на справку';
  $message = "ФИО: $name\nНомер телефона: $phone\nТип справки: $type";
  $headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);
}
?>
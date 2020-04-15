<?php

    // $to = "mr.mw.96@gmail.com.com"; 
    // $from = $_REQUEST['email']; 
    // $name = $_REQUEST['name'];
    // $headers = "From: $from"; 
    // $subject = "You have a message sent from your site"; 

    // $fields = array(); 
    // $fields{"name"} = "name"; 
    // $fields{"email"} = "email"; 
    // $fields{"subject"} = "subject"; 
    // $fields{"message"} = "message";

    // $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    // $send = mail($to, $subject, $body, $headers);


if($_POST) {
  $to = "mr.mw.96@gmail.com.com"; // your mail here
  $name = filter_var($_POST["name"], FILTER_SANITIZE_EMAIL);
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
  $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
  $body = "Message: $message\nName: $name\nE-mail: $email";
  
  if(@mail($to, $subject, $body)) {
    $output = json_encode(array('success' => true));
    die($output);
  } else {
    $output = json_encode(array('success' => false));
    die($output);
  }
}

?>
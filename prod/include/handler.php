<?php

$errors = '';
$myemail = 'hello@jacksonlewis.co.uk';

if( empty( $_REQUEST[ 'name' ] )  || empty( $_REQUEST[ 'email' ] ) || empty( $_REQUEST[ 'message' ] ) ) {
    $errors .= "\n Error: all fields are required";
}

$name 			= $_REQUEST[ 'name' ];
$email_address 	= $_REQUEST[ 'email' ];
$message 		= $_REQUEST[ 'message' ];

if ( !preg_match( "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address ) ) {
    $errors .= "\n Error: Invalid email address";
}

if( empty( $errors ) ) {

    $to = $myemail;

    $email_subject = "Message From: $name";

    $email_body = "Here are the details:\n Name: $name \n ".
        "Email: $email_address\n Message \n $message";

    $headers = "From: $myemail\n";

    $headers .= "Reply-To: $email_address";
    
    mail( $to, $email_subject, $email_body, $headers );

    echo 'success';
    
} else {
	echo $errors;
}

?>
<?php 

if ($_REQUEST['action'] != 'feedback') exit("Not allowed");

include('wi-feedback-conf.php');

$mail_headers = "MIME-Version: 1.0\r\n";
$mail_headers .= "Content-type: text/plain; charset=UTF-8;\r\n";
$mail_headers .= $mail_from ? "From: ".$mail_from."\r\n" : ' ';

$result = false;
$fieldsNum = 0;

if (isset($_REQUEST['fields']) and count($_REQUEST['fields']) > 0) {
    foreach ($_REQUEST['fields'] as $field) {
        $value = clearFields($field['value']);
        $name = clearFields($field['name']);
        if (!empty($value)) {
            $mail_text .= " ".$name.": ".$value." \n";
            $fieldsNum++;
        } else {
            $mail_text .= $name.": значение не указано \n";
        }
    }
}

if ($fieldsNum > 0) {
    file_put_contents('wi-feedback.log', date('Y.m.d H:i:s')."\n".$mail_text."\r\n", FILE_APPEND);
    $result = mail($mail_addr, '=?UTF-8?B?'.base64_encode($mail_topic).'?=', $mail_text, $mail_headers);
}

echo $result;

function clearFields($str = '') {
	$str = trim($str);
	$str = strip_tags($str);
	$str = htmlspecialchars($str);
	return $str;
}

?>

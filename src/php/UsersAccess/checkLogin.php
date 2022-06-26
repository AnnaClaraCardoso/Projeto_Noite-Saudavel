<?php 
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);

if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST ['email'];
    $senha = $_POST ['password'];
    echo "<script>alert('$email $senha')</script>";

    $emailAdmin = 'ramon@teste.com';
    $senhaAdmin = '123';

    if (($email == $emailAdmin) && ($senha == $senhaAdmin)) {
    echo "<p>Página admin</p>"; //"<script>window.location = 'lista_cadastro.php'</script>";
    echo "<script>alert('$email $senha')</script>";
    } else {
        echo "<script>window.location = '/index.html'</script>";
    }
}
?>
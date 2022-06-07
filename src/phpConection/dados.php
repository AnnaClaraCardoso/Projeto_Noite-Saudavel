<?php
    session_start();

    if (!$_SESSION['login']) {
        echo "<script>alert('Ambiente restrito! Favor fazer login para acessar.'); window.location = 'signin.php'</script>";
    }
    
    require('conexao.php');

    $username = (isset($_POST['username'])) ? $_POST['username'] : "";
    $email = (isset($_POST['email'])) ? $_POST['email'] : "";
    $idade = (isset($_POST['idade'])) ? $_POST['idade'] : "";
    $senha = (isset($_POST['senha'])) ? $_POST['senha'] : "";
    $goals = (isset($_POST['goals'])) ? $_POST['goals'] : "";
    $goalHours = (isset($_POST['goalHours'])) ? $_POST['goalHours'] : "";

    $sql_insert = "INSERT INTO usuario (nome, email, datanasc, senha, horasSono, goals) VALUES ('$username', '$email', '$idade', '$senha', '$goalHours', '$goals')";

    mysqli_close($conexaoMySQL);
?>
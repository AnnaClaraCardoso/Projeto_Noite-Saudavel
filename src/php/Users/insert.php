<?php
    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', 1);

    //Incluindo a conexão com o banco de dados

    include_once("../../php/phpConnection/connection.php");

    echo "<script>console.log('Conexão aberta!')</script>";
    //Aqui está sendo trazido os valores digitados nos inputs
    
    $username = (isset($_POST['username'])) ? $_POST['username'] : "";
    $email = (isset($_POST['email'])) ? $_POST['email'] : "";
    $idade = (isset($_POST['idade'])) ? $_POST['idade'] : "";
    $senha = (isset($_POST['senha'])) ? $_POST['senha'] : "";
    $goalHours = (isset($_POST['goalHours'])) ? $_POST['goalHours'] : "";

    //Aqui estou criando uma query de inserção no banco de dados, sem criptografar a senha

    $sql_insert = "INSERT INTO usuario (nome, email, datanasc, senha, horasSono) VALUES ('$username', '$email', '$idade', '$senha', '$goalHours');";
    //echo $sql; Caso queira ver se o sql não está co erro, tire o comentário dessa linha

    if(mysqli_query($conexaoMySQL, $sql_insert)){ 	//Aqui o mysqli_query está fazendo uma inserção no banco de dados
        echo "<script>console.log('Registro adicionado com sucesso.')</script>";//Caso a inserção seja feita com sucesso, a página será redirecionada ao index.html
        header("Location: http://healthynight.infinityfreeapp.com/src/screens/Records/index.html");
    } else {
        echo "<script>console.log('Falha ao adicionar o registro.')</script>";
    }
    mysqli_close($conexaoMySQL);
?>
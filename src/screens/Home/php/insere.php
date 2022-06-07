
<?php
    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', 1);

    //Incluindo a conexão com o banco de dados

    include_once('/src/phpConection/conexao.php');

    //Aqui está sendo trazido os valores digitados nos inputs
    
    $username = (isset($_POST['username'])) ? $_POST['username'] : "";
    $email = (isset($_POST['email'])) ? $_POST['email'] : "";
    $idade = (isset($_POST['idade'])) ? $_POST['idade'] : "";
    $senha = (isset($_POST['senha'])) ? $_POST['senha'] : "";
    $goals = (isset($_POST['goals'])) ? $_POST['goals'] : "";
    $goalHours = (isset($_POST['goalHours'])) ? $_POST['goalHours'] : "";

    //Aqui estou criando uma query de inserção no banco de dados, sem criptografar a senha

    $sql_insert = "INSERT INTO usuario (nome, email, datanasc, senha, horasSono) VALUES ('$username', '$email', '$idade', '$senha', '$goalHours');";
    //echo $sql; Caso queira ver se o sql não está co erro, tire o comentário dessa linha

    if(mysqli_query($con, $sql)){ 	//Aqui o mysqli_query está fazendo uma inserção no banco de dados
        echo "<script>console.log('Registro adicionado com sucesso.')</script>";//Caso a inserção seja feita com sucesso, a página será redirecionada ao index.html
        mysqli_close($con); 	//Fechando a conexão, é muito importante que ela seja fechada!!!!
    }
    else{
        header("location: sign.php");
        mysqli_close($con);
    }

?>

<?php
    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', 1);

    //Incluindo a conexão com o banco de dados

    include_once('/src/conexaoPHP/conexao.php');

    //Aqui está sendo trazido os valores digitados nos inputs
    
    $Nome  = isset($_POST['nome']) ? $_POST['nome'] : '';
    $Sobrenome = isset($_POST['sobrenome']) ? $_POST['sobrenome'] : '';
    $Email = isset($_POST['email']) ? $_POST['email'] : '';
    $Assunto = isset($_POST['assunto']) ? $_POST['assunto'] : '';
    $Mensagem = isset($_POST['mensagem']) ? $_POST['mensagem'] : '';
    

    //Aqui estou criando uma query de inserção no banco de dados, sem criptografar a senha

    $sql = "INSERT INTO Contato (nome, sobrenome, email, assunto, mensagem) VALUES ('$Nome','$Sobrenome','$Email','$Assunto', '')";


    //echo $sql; Caso queira ver se o sql não está co erro, tire o comentário dessa linha

    if(mysqli_query($con, $sql)){ 	//Aqui o mysqli_query está fazendo uma inserção no banco de dados
        header("location: /contact/index.html"); 	//Caso a inserção seja feita com sucesso, a página será redirecionada ao index.html
        mysqli_close($con); 	//Fechando a conexão, é muito importante que ela seja fechada!!!!
    }
    else{
        header("location: inserecontato.php");
        mysqli_close($con);
    }

?>
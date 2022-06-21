
<?php
    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', 1);

    //Incluindo a conexão com o banco de dados

    include_once("../../php/phpConnection/connection.php");

    //Aqui está sendo trazido os valores digitados nos inputs
    
    $Nome  = isset($_POST['nome']) ? $_POST['nome'] : '';
    $Sobrenome = isset($_POST['sobrenome']) ? $_POST['sobrenome'] : '';
    $Email = isset($_POST['email']) ? $_POST['email'] : '';
    $Assunto = isset($_POST['assunto']) ? $_POST['assunto'] : '';
    $Mensagem = isset($_POST['mensagem']) ? $_POST['mensagem'] : '';
    

    //Aqui estou criando uma query de inserção no banco de dados, sem criptografar a senha

    $sql = "INSERT INTO Contato (nome, sobrenome, email, assunto, mensagem) VALUES ('$Nome','$Sobrenome','$Email','$Assunto', '$Mensagem')";


    //echo $sql; Caso queira ver se o sql não está co erro, tire o comentário dessa linha

    if(mysqli_query($conexaoMySQL, $sql)){ 	//Aqui o mysqli_query está fazendo uma inserção no banco de dados
        echo "<script>conexaoMySQLsole.log('Registro adicionado com sucesso.')</script>";//Caso a inserção seja feita com sucesso, a página será redirecionada ao index.html
        mysqli_close($conexaoMySQL); 	//Fechando a conexaoMySQLexão, é muito importante que ela seja fechada!!!!
    } else {
        echo "<script>conexaoMySQLsole.log('Falha ao tentar adicionar registro.')</script>";
        mysqli_close($conexaoMySQL);
    }

?>
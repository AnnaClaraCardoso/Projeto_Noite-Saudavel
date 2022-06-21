
<?php
    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', 1);
    include_once('../../../phpConnection/conexao.php');

    $Nome  = isset($_POST['Nome']) ? $_POST['Nome'] : '';

    $sql = "DELETE FROM usuarios WHERE nome = '$Nome'"; 	//A lógica do delete é a mesma que o de insert, só que aqui vamos excluir do banco o usuário referente ao nome digitado no input :)

    if(mysqli_query($conexaoMySQL, $sql)){
      header("location: /index.html");
    }
    else{
      header("location: delete.php"); 
      mysqli_close($conexaoMySQL);
    }
    //Essa é uma simples aplicação do delete, mas ele pode ser utilizado por meio do id do usuário após ele clicar no botão de deletar o seu registro, por exemplo.

    mysqli_close($conexaoMySQL);
?>
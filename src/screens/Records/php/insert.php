<?php
    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', 1);

    //Incluindo a conexaoMySQLexão com o banco de dados

    include_once('/src/phpconexaoMySQLection/conexaoMySQLexao.php');

    //Aqui está sendo trazido os valores digitados nos inputs
    
    $dormiu = isset($_POST['dormiu']) ? $_POST['dormiu'] : '';
    $acordou = isset($_POST['acordou']) ? $_POST['acordou'] : '';

    //Aqui estou criando uma query de inserção no banco de dados, sem criptografar a senha

    $sql = "INSERT INTO Registros_SessaoSono (dormiu, acordou,) VALUES ('$dormiu','$acordou')";


    echo $sql; 

    if(mysqli_query($conexaoMySQL, $sql)){ 	//Aqui o mysqli_query está fazendo uma inserção no banco de dados
        echo "<script>conexaoMySQLsole.log('Registro adicionado com sucesso.')</script>";//Caso a inserção seja feita com sucesso, a página será redirecionada ao index.html
        mysqli_close($conexaoMySQL); 	//Fechando a conexaoMySQLexão, é muito importante que ela seja fechada!!!!
    }
    else{
        echo "<script>conexaoMySQLsole.log('Falha ao tentar adicionar registro.')</script>";
        mysqli_close($conexaoMySQL);
    }

?>

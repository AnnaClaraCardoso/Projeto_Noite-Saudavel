<?php
    // Variáveis
    $hostname = "sql204.epizy.com";
    $username = "epiz_31695534";
    $password = "px8ahX1rSSFo4";
    $database = "epiz_31695534_projetonoitesaudavel";

    // Estabelecendo conexão
    $conexaoMySQL = mysqli_connect($hostname, $username, $password, $database);

    // Teste de conexão
    if (!$conexaoMySQL) {
        printf("Não é possível conectar ao localhost. Erro: %s\n", mysqli_connect_error());
    }

    // echo "Connected successfully";
?>
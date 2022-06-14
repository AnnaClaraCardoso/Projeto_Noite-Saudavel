<?php 
mysql_select_db ('usuario') or die (mysql_error());

if (isset($_POST['email']) && isset ($_POST['senha'])){
    $email = $_POST ['email'];
    $senha = $_POST ['senha'];

    $get = mysql_query ("SELECT * FROM usuario WHERE email = '$email' AND senha = '$senha'"); //pega os dados contidos na tabela
    $num = mysql_num_rows ($get);

    if (num == 1){
        while ($percorrer = mysql_fetch_array ($get)){
            $adm = $percorrer ['adm'];

            session_start(); //iniciar uma sessao, momento em que ha um usuario logado

            if ($adm == 1){ //verfica se e adm ou usuario normal
                echo 'Usuario administrador';
            } else {
                echo 'Usuario normal';
            }
        }

    } else {
        echo 'O email ou senha digitados estão errados';
    }
    }



?>
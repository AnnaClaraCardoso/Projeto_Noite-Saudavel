<?php
    session_start();

    if (!$_SESSION['login']) {
        echo "<script>alert('Ambiente restrito! Favor fazer login para acessar.'); window.location = 'signin.php'</script>";
    }
        
    require("conexao.php");

    $cod = (isset($_GET['cod'])) ? $_GET['cod'] : "";

    $sql_delete = "DELETE FROM dados WHERE id = '$cod'";

    if (mysqli_query($conexaoMySQL, $sql_delete)) {
        echo "<script>alert('Registro excluído com sucesso!'); window.location = 'lista_cadastro.php'</script>";
    } else {
        echo "<script>alert('Erro ao excluir!'); window.location = 'lista_cadastro.php'</script>";
    }

    mysqli_close($conexaoMySQL);
?>
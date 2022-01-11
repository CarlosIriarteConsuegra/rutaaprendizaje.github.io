<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

function consultarJson($ruta_archivo){
    $database = file_get_contents($ruta_archivo);//Obtiene la informacion del json
    $database = json_decode($database, true);//La convierte en array
    return $database;
}

function actualizarJson($database, $ruta_archivo){
    $database = json_encode($database, JSON_PRETTY_PRINT);//Codifica la informacion en formato JSON
    $update_database = fopen($ruta_archivo, 'w');//Abre el arcihvo para escribir en el
    fwrite($update_database, $database);//Escribe en el archivo
    fclose($update_database);//Cierra el archivo
}

function nuevo_curso($id_curso, $nombre, $clase, $escuela){
    $database = consultarJson('./cursos.json');
    $database[$id_curso]["cursos"][] = array('nombre' => $nombre,
        'clase' => $clase,
        'escuela' => $escuela);
    actualizarJson($database, './cursos.json');
}

nuevo_curso($_POST['id'],  $_POST['nombre'], $_POST['clase'], $_POST['escuela'])
?>
</body>
</html>
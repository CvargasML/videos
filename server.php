<?php

// Definimos los recursos disponibles
$allowedResourceType = [
    'latam',
];

// Validamos que el recurso este disponible
$resourceType = $_GET['resource_type'];

if ( !in_array($resourceType, $allowedResourceType)) {
    die;
}

// Defino los recursos
$latam = [
    Carlos => [
        'nombre' => 'Carlos',
        'video1' => "https://www.youtube.com/watch?v=6AIh1ViDjzQ",
        'video2' => "https://www.youtube.com/watch?v=6AIh1ViDjzQ",
    ],
    Alfredo => [
        'nombre' => 'Alfredo',
        'video1' => "https://www.youtube.com/watch?v=6AIh1ViDjzQ",
        'video2' => "https://www.youtube.com/watch?v=6AIh1ViDjzQ",
    ],
    Test => [
        'nombre' => 'Test',
        'video1' => "https://www.youtube.com/watch?v=6AIh1ViDjzQ",
        'video2' => "https://www.youtube.com/watch?v=6AIh1ViDjzQ",
    ],
];

// Se indica al cliente que lo que recibirá es un json
header('Content-Type: application/json');

// Levantamos el id del recurso buscado
$resourceId = array_key_exists('resource_id', $_GET) ? $_GET['resource_id']:'';

// Generamos la respuesta asumiendo que el pedido es correcto
switch( strtoupper($_SERVER['REQUEST_METHOD']) ) {
    case 'GET':
         if ( empty( $resourceId ) ){
            echo json_encode( $latam );
         }else{
            if( array_key_exists( $resourceId, $latam) ){
                echo json_encode( $latam[ $resourceId ] );
            }
        }
        break;
}
<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

$app->get('/api/posts', function(Request $request, Response $response){
  $sql = "SELECT * FROM posts";

  try {
    $db = new db();
    $db = $db->connect();
    $stmt = $db->query($sql);
    $posts = $stmt->fetchALL(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($posts);

  } catch(PDOException $e){
    echo '{"error": {"text":'.$e->getMessage().'}}';
  }
});

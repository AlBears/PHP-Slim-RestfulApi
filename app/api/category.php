<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;
//GET all categories
$app->get('/api/categories', function(Request $request, Response $response)
{
  $sql = "SELECT * FROM categories";

  try {
    $db = new db();
    $db = $db->connect();
    $stmt = $db->query($sql);
    $categories = $stmt->fetchALL(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($categories);

  } catch(PDOException $e){
    echo '{"error": {"text":'.$e->getMessage().'}}';
  }
});

//GET Single category
$app->get('/api/category/{id}', function(Request $request, Response $response)
{
  $id = $request->getAttribute('id');
  $sql = "SELECT * FROM categories WHERE id = $id";

  try {
    $db = new db();
    $db = $db->connect();
    $stmt = $db->query($sql);
    $category = $stmt->fetchALL(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($category);

  } catch(PDOException $e){
    echo '{"error": {"text":'.$e->getMessage().'}}';
  }
});
//ADD category
$app->post('/api/category/add', function(Request $request, Response $response)
{
  $name = $request->getParam('name');

  $sql = "INSERT INTO categories (name) values (:name)";

  try {
    $db = new db();
    $db = $db->connect();
    $stmt = $db->prepare($sql);

    $stmt->bindParam(":name", $name);

    $stmt->execute();

    echo '{"notice":{"text":"Category Added"}}';

  } catch(PDOException $e){
    echo '{"error": {"text":'.$e->getMessage().'}}';
  }
});
//Update category
$app->put('/api/category/update/{id}', function(Request $request, Response $response)
{
  $id = $request->getAttribute('id');

  $name = $request->getParam('name');

  $sql = "UPDATE categories SET
          name = :name
          WHERE id = $id";

  try {
    $db = new db();
    $db = $db->connect();
    $stmt = $db->prepare($sql);

    $stmt->bindParam(":name", $name);

    $stmt->execute();

    echo '{"notice":{"text":"Category '. $id .' Updated"}}';

  } catch(PDOException $e){
    echo '{"error": {"text":'.$e->getMessage().'}}';
  }
});
//DELETE category
$app->delete('/api/category/delete/{id}', function(Request $request, Response $response)
{
  $id = $request->getAttribute('id');

  $sql = "DELETE FROM categories WHERE id = $id";

  try {
    $db = new db();
    $db = $db->connect();
    $stmt = $db->prepare($sql);

    $stmt->execute();

    echo '{"notice":{"text":"Category '. $id .' Deleted"}}';

  } catch(PDOException $e){
    echo '{"error": {"text":'.$e->getMessage().'}}';
  }
  });

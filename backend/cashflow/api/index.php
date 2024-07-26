<?php
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;
    use Selective\BasePath\BasePathMiddleware;
    use Psr\Http\Message\ResponseInterface;
    use Slim\Exception\HttpNotFoundException;
    use Slim\Factory\AppFactory;
    use Selective\BasePath\BasePathDetector;

    require_once __DIR__ . '/vendor/autoload.php';

    $app = AppFactory::create();

    // Add Slim routing middleware
    $app->addRoutingMiddleware();


    $app->setBasePath("/app/cashflow/api");

    $app->addErrorMiddleware(true, true, true);

    // Define app routes
    $app->get('/', function (Request $request, Response $response) {
        $response->getBody()->write("API for Cashflow by FooTalent!");
        return $response;
    });

    $app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
        $name = $args['name'];
        $response->getBody()->write("Hello, $name");
        return $response;
    });

    $app->get('/category', function (Request $request, Response $response, array $args) {
        
	$category = ["Alimentación", "Vivienda","Servicios Básicos","Educación", "Ocio", "Compras", "Entretenimiento", "Belleza", "Deportes","Otros"];            
        $response->getBody()->write(json_encode( array("status" => 0, "message" => "Data exitoso", "Data"=>$category)));

        return $response; 
    });




    $app->post('/login', function (Request $request, Response $response, array $args) {

        $data = $request->getParsedBody();
        $users = $data['user'];
        $pass = $data['pass'];

	if($users=="demo" && $pass=="111"){
		$user = true;	
	}else{
		$user = false;

	}

        if ($user) {

            $response->getBody()->write(json_encode(array("status" => 0, "message" => "Usuario existente.")));
            return $response;

        } else {


            $response->getBody()->write(json_encode( array("status" => 1, "message" => "Usuario inexistente o no autorizado.")));
            return $response;

        }

        return $response->withHeader('Content-Type', 'application/json');

    });


     // Run app
     $app->run();

?>

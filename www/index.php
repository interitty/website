<?php

use Nette\Application\Application;

$container = require __DIR__ . '/../app/bootstrap.php';

/* @var $application Application */
$application = $container->getByType(Application::class);
$application->run();

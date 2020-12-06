<?php

declare(strict_types=1);

use Nette\Configurator;

require __DIR__ . '/../vendor/autoload.php';
$configurator = new Configurator();
//$configurator->setDebugMode('23.75.345.200'); // enable for your remote IP
$configurator->enableTracy(__DIR__ . '/../log');
$configurator->setTempDirectory(__DIR__ . '/../temp');
$configurator->addConfig(__DIR__ . '/Config/config.neon');
$container = $configurator->createContainer();
return $container;

<?php

declare(strict_types=1);

use Interitty\Utils\Strings;
use Interitty\Website\Configurator;

require __DIR__ . '/../vendor/autoload.php';
$environment = getenv('ENVIRONMENT');
$configurator = new Configurator();
$configurator->setEnvironment(Strings::lower($environment === false ? $configurator::ENVIRONMENT_LOCAL : $environment));
$configurator->setDebugMode($configurator::DEBUG_MODE_BY_ENVIRONMENT);
$configurator->enableTracy(__DIR__ . '/../log');
$configurator->setTempDirectory(__DIR__ . '/../temp');
$configurator->addConfig(__DIR__ . '/Config/config.neon');
$container = $configurator->createContainer();
return $container;

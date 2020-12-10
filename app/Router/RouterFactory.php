<?php

declare(strict_types=1);

namespace Interitty\Website\Router;

use Nette\Application\IRouter;
use Nette\Application\Routers\Route;
use Nette\Application\Routers\RouteList;

class RouterFactory
{
    /**
     * Router factory
     *
     * @return RouteList|IRouter
     */
    public function create()
    {
        $router = new RouteList();
        $router[] = new Route('<locale>/<presenter>/<action>', [
            'locale' => [
                Route::PATTERN => '[a-z]{2}',
                Route::VALUE => null,
            ],
            'presenter' => 'Homepage',
            'action' => 'default',
        ]);
        return $router;
    }
}

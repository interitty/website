<?php

declare(strict_types=1);

namespace Interitty\Website\Presenters;

use Nette\Application\BadRequestException;
use Nette\Application\Request;
use Nette\Application\UI\Presenter;

use function is_file;
use function sprintf;

class Error4xxPresenter extends Presenter
{
    /**
     * @inheritdoc
     */
    public function startup(): void
    {
        parent::startup();
        $request = $this->getRequest();
        if (($request === null) || ($request->isMethod(Request::FORWARD) === false)) {
            $this->error();
        }
    }

    /**
     * Default action renderer
     *
     * @param BadRequestException $exception
     * @return void
     */
    public function renderDefault(BadRequestException $exception): void
    {
        // load template 403.latte or 404.latte or ... 4xx.latte
        $file = sprintf(__DIR__ . '/templates/Error/%s.latte', $exception->getCode());
        $template = $this->getTemplate();
        $template->setFile(is_file($file) ? $file : __DIR__ . '/templates/Error/4xx.latte');
    }
}

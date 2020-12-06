<?php

declare(strict_types=1);

namespace Interitty\Website\Presenters;

use Interitty\Utils\Validators;
use Nette\Application\BadRequestException;
use Nette\Application\Helpers;
use Nette\Application\IPresenter;
use Nette\Application\IResponse;
use Nette\Application\Request;
use Nette\Application\Responses\CallbackResponse;
use Nette\Application\Responses\ForwardResponse;
use Tracy\ILogger;

use function assert;

class ErrorPresenter implements IPresenter
{
    /** @var ILogger */
    protected $logger;

    /**
     * Constructor
     *
     * @param ILogger $logger
     * @return void
     */
    public function __construct(ILogger $logger)
    {
        $this->setLogger($logger);
    }

    /**
     * Presenter lifecycle run handler
     *
     * @param Request $request
     * @return IResponse
     */
    public function run(Request $request): IResponse
    {
        $exception = $request->getParameter('exception');

        if ($exception instanceof BadRequestException) {
            list($module, , $sep) = Helpers::splitName($request->getPresenterName());
            return new ForwardResponse($request->setPresenterName($module . $sep . 'Error4xx'));
        }

        $this->getLogger()->log($exception, ILogger::EXCEPTION);
        return new CallbackResponse(function (): void {
            require __DIR__ . '/templates/Error/500.phtml';
        });
    }
    // <editor-fold defaultstate="collapsed" desc="Getters & Setters">

    /**
     * Logger getter
     *
     * @return ILogger
     */
    public function getLogger(): ILogger
    {
        return $this->logger;
    }

    /**
     * Logger setter
     *
     * @param ILogger $logger
     * @return static Provides fluent interface
     */
    public function setLogger(ILogger $logger)
    {
        assert(Validators::check($this->logger, 'null', 'Already defined logger'));
        $this->logger = $logger;
        return $this;
    }
    // </editor-fold>
}

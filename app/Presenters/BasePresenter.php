<?php

declare(strict_types=1);

namespace Interitty\Website\Presenters;

use Nette\Application\UI\Presenter;

abstract class BasePresenter extends Presenter
{
    /** All available flash message type constants */
    public const FLASH_ERROR = 'error';
    public const FLASH_INFO = 'info';
    public const FLASH_SUCCESS = 'success';
    public const FLASH_WARNING = 'warning';
}

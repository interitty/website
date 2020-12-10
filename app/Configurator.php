<?php

declare(strict_types=1);

namespace Interitty\Website;

use LogicException;
use Nette\Configurator as NetteConfigurator;

use function in_array;
use function sprintf;

class Configurator extends NetteConfigurator
{
    /** All available debug mode constants */
    public const DEBUG_MODE_BY_ENVIRONMENT = [];
    public const DEBUG_MODE_DISABLED = false;
    public const DEBUG_MODE_ENABLED = true;

    /** All available environment name contants */
    public const ENVIRONMENT_DEVELOPMENT = 'development';
    public const ENVIRONMENT_LOCAL = 'local';
    public const ENVIRONMENT_PRODUCTION = 'production';
    public const ENVIRONMENT_TEST = 'test';

    /** @var string[] */
    public static $allEnvironments = [
        self::ENVIRONMENT_DEVELOPMENT,
        self::ENVIRONMENT_LOCAL,
        self::ENVIRONMENT_PRODUCTION,
        self::ENVIRONMENT_TEST,
    ];

    /** @var string[] */
    public static $debugingEnvironments = [
        self::ENVIRONMENT_DEVELOPMENT,
        self::ENVIRONMENT_LOCAL,
    ];

    /** @var string One of self::ENVIRONMENT_* constant */
    protected static $environment;

    // <editor-fold defaultstate="collapsed" desc="Getters & Setters">

    /**
     * Set parameter %debugMode%
     *
     * @param bool|string|mixed[] $value
     * @return static Provides fluent interface
     */
    public function setDebugMode($value)
    {
        if ($value === self::DEBUG_MODE_BY_ENVIRONMENT) {
            if (in_array($this->getEnvironment(), self::$debugingEnvironments, true) === true) {
                $value = self::DEBUG_MODE_ENABLED;
            } else {
                $value = self::DEBUG_MODE_DISABLED;
            }
        }
        return parent::setDebugMode($value);
    }

    /**
     * Environment name getter
     *
     * @param string $default [OPTIONAL]
     * @return string
     */
    public function getEnvironment(string $default = self::ENVIRONMENT_LOCAL): string
    {
        if (self::$environment === null) {
            self::setEnvironment($default);
        }
        return self::$environment;
    }

    /**
     * Environment name setter
     *
     * @param string $environment One of the self::ENVIRONENT_* constants
     * @return static Provides fluent interface
     */
    public function setEnvironment(string $environment)
    {
        if (in_array($environment, self::$allEnvironments, true) === false) {
            throw new LogicException(sprintf('Unsupported environment name "%s".', $environment));
        }
        self::$environment = $environment;
        return $this;
    }
    // </editor-fold>
}

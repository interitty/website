<?php

declare(strict_types=1);

namespace Interitty\Website\Presenters;

use Contributte\Translation\Translator;
use Interitty\Utils\Validators;
use Nette\Application\UI\Presenter;
use stdClass;

use function assert;
use function in_array;

abstract class BasePresenter extends Presenter
{
    /** All available flash message type constants */
    public const FLASH_ERROR = 'error';
    public const FLASH_INFO = 'info';
    public const FLASH_SUCCESS = 'success';
    public const FLASH_WARNING = 'warning';

    /** @var string|null @persistent */
    public $locale;

    /** @var Translator @inject */
    public $translator;

    /**
     * @inheritdoc
     */
    public function startup(): void
    {
        $this->processTranslatorSetup();
        $this->processWrongLocale();
        parent::startup();
    }

    /**
     * Saves the message to template, that can be displayed after redirect.
     *
     * @param string|mixed $message
     * @param string $type [OPTIONAL]
     * @param mixed[] $parameters [OPTIONAL]
     * @return stdClass Object of the created flash message
     */
    public function flashMessage($message, $type = self::FLASH_INFO, array $parameters = []): stdClass
    {
        $flash = parent::flashMessage($message, $type);
        $flash->parameters = $parameters;
        return $flash;
    }

    /**
     * Translator setup processor
     * SEO fix duplicate content for URL with default locale and without any locale
     *
     * @return void
     */
    protected function processTranslatorSetup(): void
    {
        $locale = $this->getLocale();
        $translator = $this->getTranslator();
        if ($locale === null) {
            $locale = $translator->getLocale();
            $this->redirect('this', ['locale' => $locale]);
        }
        $translator->setLocale($locale);
    }

    /**
     * Wrong locale processor
     *
     * @return void
     */
    protected function processWrongLocale(): void
    {
        $translator = $this->getTranslator();
        $locale = $translator->getLocale();
        if (in_array($locale, $translator->getAvailableLocales(), true) !== true) {
            $this->flashMessage('Unsupported locale "%wrongLocale%" given.', self::FLASH_WARNING, [
                'wrongLocale' => $locale,
            ]);
            $this->redirect('this', ['locale' => null]);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="Getters & Setters">
    /**
     * Locale getter
     *
     * @return string|null
     */
    public function getLocale(): ?string
    {
        return $this->locale;
    }

    /**
     * Translator getter
     *
     * @return Translator
     */
    public function getTranslator(): Translator
    {
        assert(Validators::check($this->translator, Translator::class, 'Not defined translator'));
        return $this->translator;
    }

    /**
     * Translator setter
     *
     * @param Translator $translator
     * @return static Provides fluent interface
     */
    public function setTranslator(Translator $translator)
    {
        assert(Validators::check($this->translator, 'null', 'Already defined translator'));
        $this->translator = $translator;
        return $this;
    }

    // </editor-fold>
}

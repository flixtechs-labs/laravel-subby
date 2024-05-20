<?php

declare(strict_types=1);

namespace Flixtechs\Subby\Tests\Services\PaymentMethods;

use Flixtechs\Subby\Contracts\PaymentMethodService;
use Flixtechs\Subby\Traits\IsPaymentMethod;

class SucceededPaymentMethod implements PaymentMethodService
{
    use IsPaymentMethod;

    /**
     * Charge desired amount
     * @return void
     */
    public function charge()
    {
        // Nothing is charged, no exception is raised
    }
}

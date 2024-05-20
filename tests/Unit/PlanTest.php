<?php


namespace Flixtechs\Subby\Tests\Unit;


use Flixtechs\Subby\Models\Plan;
use Flixtechs\Subby\Tests\TestCase;

class PlanTest extends TestCase
{
    /**
     * Test Plan creation with already existing tag in database
     */
    public function testUnableToCreatePlanWithExistingTag()
    {
        $this->expectException('Flixtechs\Subby\Exceptions\DuplicateException');
        Plan::create([
            'tag' => 'basic',
            'name' => 'New Basic Plan',
            'description' => 'This plan cannot exist.',
            'currency' => 'EUR'
        ]);
    }
}

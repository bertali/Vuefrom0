<?php

namespace Tests;

use App\Calculadora;
use PHPUnit\Framework\TestCase;

class CalculadoraTest extends TestCase {

    public function testWhenInputIsEmptyStringResultIs0() {

        $calculator = new Calculadora;

        $input = "";

        $result = $calculator->calculate($input);
        $this->assertEquals(0, $result);
    }

    public function testIfInputIsASingleNumberResultWillBeTheSame() {

        
    } 
    
}

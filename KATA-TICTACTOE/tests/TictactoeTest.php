<?php

namespace Tests;

use App\Tictactoe;
use PHPUnit\Framework\TestCase;

class TictactoeTest extends TestCase
{
    public function test_serialize_return_array1D()
    {
        $array2D = array (
            array ('x', 'o', 'o'),
            array ('o', 'x', ''),
            array ('','o','x'),
        );

        $ticTacToe = new Tictactoe ();

        $array1D = $ticTacToe->serialize($array2D);

        $this->assertIsArray($array1D);

        $this->assertEquals(9, sizeof($array1D)
        );
    }
}
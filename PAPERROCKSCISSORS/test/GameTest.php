<?php

use PHPUnit\Framework\TestCase;
use App\Game;

class GameTest extends TestCase
{
    public function TestIfRockDestroysScissors()
    {
        $player1 = 'rock';
        $player2 = 'scissors';

        $game = new Game ();

        $result = $game->startRound
    }
}
<?php

namespace App;

class Calculadora {

    public $input;

    public function calculate($input) {
        if ($input === ""){
            return 0;
        }
        if ($input !== ""){
            return $input;
        }

        return null;
    }
}


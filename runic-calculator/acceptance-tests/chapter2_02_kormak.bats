function setup() {
    PATH="${PROJECT_DIR:-$PWD}:${PATH}"
}

@test "Convert | Kormak | Simple runic number (1) : ᚲᚠᚠ = 12" {
    run runic-calculator.sh convert ᚲᚠᚠ

    echo "$output"

    [[ "${output}" == "12" ]]
}

@test "Convert | Kormak | Simple runic number (2) : ᚲᚢᚢ = 8" {
    run runic-calculator.sh convert ᚲᚢᚢ 

    echo "$output"

    [[ "${output}" == "8" ]]
}

@test "Convert | Kormak | Simple runic number (3) : ᚲᚦᚦ = 5" {
    run runic-calculator.sh convert ᚲᚦᚦ

    echo "$output"

    [[ "${output}" == "5" ]]
}

@test "Convert | Kormak | Simple runic number (4) : ᚲᚨᚨ = 4" {
    run runic-calculator.sh convert ᚲᚨᚨ  

    echo "$output"

    [[ "${output}" == "4" ]]
}

@test "Convert | Kormak | Runic number (1) : ᚲᚠᚠᚨᚦ = 27" {
    run runic-calculator.sh convert ᚲᚠᚠᚨᚦ 

    echo "$output"

    [[ "${output}" == "27" ]]
}

@test "Convert | Kormak | Runic number (2) : ᚠᚲᚠᚦᚨᚢᚦ = 65" {
    run runic-calculator.sh convert ᚠᚲᚠᚦᚨᚢᚦ 

    echo "$output"

    [[ "${output}" == "65" ]]
}

@test "Addition | Kormak | Keep Kormak rune attached (1) : ᚠᚲᚠᚨᚦ.ᚢᚦᚢᚢ = ᚠᚢᚲᚠᚦᚨᚢᚦᚢ" {
    run runic-calculator.sh add ᚠᚲᚠᚨᚦ.ᚢᚦᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚢᚲᚠᚦᚨᚢᚦᚢ" ]]
}

@test "Addition | Kormak | Keep Kormak rune attached (2) : ᚠᚠᚲᚨᚦ.ᚢᚦᚢᚢ = ᚠᚢᚠᚦᚲᚨᚢᚦᚢ" {
    run runic-calculator.sh add ᚠᚠᚲᚨᚦ.ᚢᚦᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚢᚠᚦᚲᚨᚢᚦᚢ" ]]
}

@test "Addition | Kormak | Keep Kormak rune attached (3) : ᚠᚠᚨᚦ.ᚢᚦᚲᚢᚢ = ᚠᚢᚠᚦᚨᚲᚢᚦᚢ" {
    run runic-calculator.sh add ᚠᚠᚨᚦ.ᚢᚦᚲᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚢᚠᚦᚨᚲᚢᚦᚢ" ]]
}
function setup() {
    PATH="${PROJECT_DIR:-$PWD}:${PATH}"
}

@test "Convert | Thorlaug | Simple runic number (1) : ᚷᚠᚠ = 14" {
    run runic-calculator.sh convert ᚷᚠᚠ

    echo "$output"

    [[ "${output}" == "14" ]]
}

@test "Convert | Thorlaug | Simple runic number (2) : ᚷᚢᚢ = 9" {
    run runic-calculator.sh convert ᚷᚢᚢ 

    echo "$output"

    [[ "${output}" == "9" ]]
}

@test "Convert | Thorlaug | Simple runic number (3) : ᚷᚦᚦ = 6" {
    run runic-calculator.sh convert ᚷᚦᚦ

    echo "$output"

    [[ "${output}" == "6" ]]
}

@test "Convert | Thorlaug | Simple runic number (4) : ᚷᚨᚨ = 6" {
    run runic-calculator.sh convert ᚷᚨᚨ  

    echo "$output"

    [[ "${output}" == "6" ]]
}

@test "Convert | Thorlaug | Runic number : ᚠᚠᚷᚨᚦ = 27" {
    run runic-calculator.sh convert ᚠᚠᚷᚨᚦ

    echo "$output"

    [[ "${output}" == "27" ]]
}


@test "Convert | Thorlaug | Runic number : ᚷᚠᚠᚨᚦ = 41" {
    run runic-calculator.sh convert ᚷᚠᚠᚨᚦ

    echo "$output"

    [[ "${output}" == "41" ]]
}


@test "Addition | Kormak | Keep Kormak rune attached (1) : ᚠᚷᚠᚨᚦ.ᚢᚦᚢᚢ = ᚠᚢᚷᚠᚦᚨᚢᚦᚢ" {
    run runic-calculator.sh add ᚠᚷᚠᚨᚦ.ᚢᚦᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚢᚷᚠᚦᚨᚢᚦᚢ" ]]
}

@test "Addition | Kormak | Keep Kormak rune attached (2) : ᚠᚠᚷᚨᚦ.ᚢᚦᚢᚢ = ᚠᚢᚠᚦᚷᚨᚢᚦᚢ" {
    run runic-calculator.sh add ᚠᚠᚷᚨᚦ.ᚢᚦᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚢᚠᚦᚷᚨᚢᚦᚢ" ]]
}

@test "Addition | Kormak | Keep Kormak rune attached (3) : ᚠᚠᚨᚦ.ᚢᚦᚷᚢᚢ = ᚠᚢᚠᚦᚨᚷᚢᚦᚢ" {
    run runic-calculator.sh add ᚠᚠᚨᚦ.ᚢᚦᚷᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚢᚠᚦᚨᚷᚢᚦᚢ" ]]
}

function setup() {
    PATH="${PROJECT_DIR:-$PWD}:${PATH}"
}

@test "Convert | Valfeid | Simple runic number (1) : ᚹᚠᚠ = 14" {
    run runic-calculator.sh convert ᚹᚠᚠ

    echo "$output"

    [[ "${output}" == "14" ]]
}

@test "Convert | Valfeid | Simple runic number (2) : ᚹᚢᚢ = 10" {
    run runic-calculator.sh convert ᚹᚢᚢ 

    echo "$output"

    [[ "${output}" == "10" ]]
}

@test "Convert | Valfeid | Simple runic number (3) : ᚹᚦᚦ = 6" {
    run runic-calculator.sh convert ᚹᚦᚦ

    echo "$output"

    [[ "${output}" == "6" ]]
}

@test "Convert | Valfeid | Simple runic number (4) : ᚹᚨᚨ = 6" {
    run runic-calculator.sh convert ᚹᚨᚨ  

    echo "$output"

    [[ "${output}" == "6" ]]
}

@test "Convert | Valfeid | Runic number : ᚠᚠᚹᚨᚦ = 27" {
    run runic-calculator.sh convert ᚠᚠᚹᚨᚦ

    echo "$output"

    [[ "${output}" == "27" ]]
}


@test "Convert | Valfeid | Runic number : ᚹᚠᚠᚨᚦ = 41" {
    run runic-calculator.sh convert ᚹᚠᚠᚨᚦ

    echo "$output"

    [[ "${output}" == "41" ]]
}


@test "Addition | Valfeid | Valfeid rune is working as usual (1) : ᚠᚹᚠᚨᚦ.ᚢᚢ = ᚠᚹᚠᚨᚢᚦᚢ" {
    run runic-calculator.sh add ᚠᚹᚠᚨᚦ.ᚢᚢ  

    echo "$output"

    [[ "${output}" == "ᚠᚹᚠᚨᚢᚦᚢ" ]]
}

@test "Addition | Valfeid | Valfeid rune is working as usual (2) : ᚠᚠᚹᚨᚦ.ᚢᚢ = ᚠᚠᚹᚨᚢᚦᚢ" {
    run runic-calculator.sh add ᚠᚠᚹᚨᚦ.ᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚠᚹᚨᚢᚦᚢ" ]]
}

@test "Addition | Valfeid | Valfeid rune is working as usual (3) : ᚠᚠᚨᚦ.ᚹᚢᚢ = ᚠᚠᚹᚨᚢᚦᚢ" {
    run runic-calculator.sh add ᚠᚠᚨᚦ.ᚹᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚠᚹᚨᚢᚦᚢ" ]]
}
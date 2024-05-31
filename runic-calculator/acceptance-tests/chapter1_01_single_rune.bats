function setup() {
    PATH="${PROJECT_DIR:-$PWD}:${PATH}"
}

@test "Convert | Single rune (1) : ᚠ = 1" {
    run runic-calculator.sh convert ᚠ

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "Convert | Single rune (2) : ᚢ = 1" {
    run runic-calculator.sh convert ᚢ

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "Convert | Single rune (3) : ᚦ = 1" {
    run runic-calculator.sh convert ᚦ 

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "Convert | Single rune (4) : ᚨ = 1" {
    run runic-calculator.sh convert ᚨ

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "Addition | Single rune : ᚦ.ᚢ = ᚢ" {
    run runic-calculator.sh add ᚦ.ᚢ 

    echo "$output"

    [[ "${output}" == "ᚦᚢ" ]]
}

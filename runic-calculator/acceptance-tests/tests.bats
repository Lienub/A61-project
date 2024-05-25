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

@test "Convert | Runic number (same runes) : ᚠᚠᚠᚠ = 34" {
    run runic-calculator.sh convert ᚠᚠᚠᚠ

    echo "$output"

    [[ "${output}" == "34" ]]
}

@test "Convert | Runic number (slide example) : ᚠᚠᚨᚦ = 22" {
    run runic-calculator.sh convert ᚠᚠᚨᚦ

    echo "$output"

    [[ "${output}" == "22" ]]
}

@test "Convert | Runic number (all runes) : ᚠᚢᚦᚨᚨ = 26" {
    run runic-calculator.sh convert ᚠᚢᚦᚨᚨ

    echo "$output"

    [[ "${output}" == "26" ]]
}

@test "Addition | Left runic number than right runic number : ᚠᚠᚨᚦ.ᚢᚢ = ᚠᚠᚨᚢᚦᚢ" {
    run runic-calculator.sh add ᚠᚠᚨᚦ.ᚢᚢ 

    echo "$output"

    [[ "${output}" == "ᚠᚠᚨᚢᚦᚢ" ]]
}

@test "Addition | Left runic number shorter than right runic number : ᚢᚢ.ᚠᚠᚨᚦ = ᚠᚠᚢᚨᚢᚦ" {
    run runic-calculator.sh add ᚢᚢ.ᚠᚠᚨᚦ

    echo "$output"

    [[ "${output}" == "ᚠᚠᚢᚨᚢᚦ" ]]
}

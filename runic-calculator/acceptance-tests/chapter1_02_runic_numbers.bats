function setup() {
    PATH="${PROJECT_DIR:-$PWD}:${PATH}"
}

@test "Convert | Runic number | Same runes : ᚠᚠᚠᚠ = 34" {
    run runic-calculator.sh convert ᚠᚠᚠᚠ

    echo "$output"

    [[ "${output}" == "34" ]]
}

@test "Convert | Runic number | Slide example : ᚠᚠᚨᚦ = 22" {
    run runic-calculator.sh convert ᚠᚠᚨᚦ

    echo "$output"

    [[ "${output}" == "22" ]]
}

@test "Convert | Runic number | With each rune : ᚠᚢᚦᚨᚨ = 26" {
    run runic-calculator.sh convert ᚠᚢᚦᚨᚨ

    echo "$output"

    [[ "${output}" == "26" ]]
}

@test "Addition | Runic number | Left longer than right : ᚠᚠᚨᚦ.ᚢᚢ = ᚠᚠᚨᚢᚦᚢ" {
    run runic-calculator.sh add ᚠᚠᚨᚦ.ᚢᚢ 

    echo "$output"

    [[ "${output}" == "ᚠᚠᚨᚢᚦᚢ" ]]
}

@test "Addition | Runic number | Left shorter than right : ᚢᚢ.ᚠᚠᚨᚦ = ᚠᚠᚢᚨᚢᚦ" {
    run runic-calculator.sh add ᚢᚢ.ᚠᚠᚨᚦ

    echo "$output"

    [[ "${output}" == "ᚠᚠᚢᚨᚢᚦ" ]]
}

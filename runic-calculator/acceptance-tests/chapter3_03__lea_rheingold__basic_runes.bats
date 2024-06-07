function setup() {
    PATH="${PROJECT_DIR:-$PWD}:${PATH}"
}

@test "Convert | Lea Rheingold | Single rune (1) : ᚠ = 1" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚠ

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "Convert | Lea Rheingold | Single rune (2) : ᚢ = 1" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚢ

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "Convert | Lea Rheingold | Single rune (3) : ᚦ = 1" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚦ 

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "Convert | Lea Rheingold | Single rune (4) : ᚨ = 1" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚨ

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "Convert | Lea Rheingold | Runic number | Same runes : ᚠᚠᚠᚠ = 40" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚠᚠᚠᚠ

    echo "$output"

    [[ "${output}" == "40" ]]
}

@test "Convert | Lea Rheingold | Runic number | Slide example : ᚠᚠᚨᚦ = 27" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚠᚠᚨᚦ

    echo "$output"

    [[ "${output}" == "27" ]]
}

@test "Convert | Lea Rheingold | Runic number | With each rune : ᚠᚢᚦᚨᚨ = 48" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚠᚢᚦᚨᚨ

    echo "$output"

    [[ "${output}" == "48" ]]
}

@test "Addition | Lea Rheingold | Single rune : ᚦ.ᚢ = ᚦᚢ" {
    run runic-calculator.sh --archaeologist=lea_rheingold add ᚦ.ᚢ 

    echo "$output"

    [[ "${output}" == "ᚦᚢ" ]]
}

@test "Addition | Lea Rheingold | Runic number | Left longer than right : ᚠᚠᚨᚦ.ᚢᚢ = ᚠᚠᚨᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=lea_rheingold add ᚠᚠᚨᚦ.ᚢᚢ 

    echo "$output"

    [[ "${output}" == "ᚠᚠᚨᚢᚦᚢ" ]]
}

@test "Addition | Lea Rheingold | Runic number | Left shorter than right : ᚢᚢ.ᚠᚠᚨᚦ = ᚠᚠᚢᚨᚢᚦ" {
    run runic-calculator.sh --archaeologist=lea_rheingold add ᚢᚢ.ᚠᚠᚨᚦ

    echo "$output"

    [[ "${output}" == "ᚠᚠᚢᚨᚢᚦ" ]]
}

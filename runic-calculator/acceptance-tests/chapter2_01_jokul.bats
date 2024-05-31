function setup() {
    PATH="${PROJECT_DIR:-$PWD}:${PATH}"
}

@test "Convert | Jokul | Right to left : ᚱᚦᚨᚠᚠ = 28" {
    run runic-calculator.sh convert ᚱᚦᚨᚠᚠ 

    echo "$output"

    [[ "${output}" == "28" ]]
}

@test "Convert | Jokul | Left to right : ᚠᚠᚨᚦᚱ  = 28" {
    run runic-calculator.sh convert ᚠᚠᚨᚦᚱ

    echo "$output"

    [[ "${output}" == "28" ]]
}

@test "Addition | Jokul | Right to left : ᚱᚠᚠᚨᚦ.ᚱᚢᚢ = ᚱᚠᚠᚨᚢᚦᚢ" {
    run runic-calculator.sh add ᚱᚠᚠᚨᚦ.ᚱᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚱᚠᚠᚨᚢᚦᚢ" ]]
}

@test "Addition | Jokul | Left to right : ᚠᚠᚨᚦᚱ.ᚢᚢᚱ = ᚢᚠᚢᚠᚨᚦᚱ" {
    run runic-calculator.sh add ᚠᚠᚨᚦᚱ.ᚢᚢᚱ

    echo "$output"

    [[ "${output}" == "ᚢᚠᚢᚠᚨᚦᚱ" ]]
}

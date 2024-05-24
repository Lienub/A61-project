function setup() {
    PATH="${PROJECT_DIR:-$PWD}:${PATH}"
}

@test "ᚠ = 1" {
    run runic-calculator.sh convert ᚠ

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "ᚢ = 1" {
    run runic-calculator.sh convert ᚢ

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "ᚦ = 1" {
    run runic-calculator.sh convert ᚦ 

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "ᚨ = 1" {
    run runic-calculator.sh convert ᚨ

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "ᚠᚠᚨᚦ = 22" {
    run runic-calculator.sh convert ᚠᚠᚨᚦ 

    echo "$output"

    [[ "${output}" == "22" ]]
}

@test "ᚠᚠᚨᚦ.ᚢᚢ = ᚠᚠᚨᚢᚦᚢ" {
    run runic-calculator.sh add ᚠᚠᚨᚦ.ᚢᚢ 

    echo "$output"

    [[ "${output}" == "ᚠᚠᚨᚢᚦᚢ" ]]
}
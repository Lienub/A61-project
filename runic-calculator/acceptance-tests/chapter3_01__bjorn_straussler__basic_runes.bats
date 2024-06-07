function setup() {
    PATH="${PROJECT_DIR:-$PWD}:${PATH}"
}

@test "Convert | Bjorn Straussler | Single rune (1) : ᚠ = 1" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚠ

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "Convert | Bjorn Straussler | Single rune (2) : ᚢ = 1" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚢ

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "Convert | Bjorn Straussler | Single rune (3) : ᚦ = 1" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚦ 

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "Convert | Bjorn Straussler | Single rune (4) : ᚨ = 1" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚨ

    echo "$output"

    [[ "${output}" == "1" ]]
}

@test "Convert | Bjorn Straussler | Runic number | Same runes : ᚠᚠᚠᚠ = 34" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚠᚠᚠᚠ

    echo "$output"

    [[ "${output}" == "34" ]]
}

@test "Convert | Bjorn Straussler | Runic number | Slide example : ᚠᚠᚨᚦ = 22" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚠᚠᚨᚦ

    echo "$output"

    [[ "${output}" == "22" ]]
}

@test "Convert | Bjorn Straussler | Runic number | With each rune : ᚠᚢᚦᚨᚨ = 26" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚠᚢᚦᚨᚨ

    echo "$output"

    [[ "${output}" == "26" ]]
}

@test "Addition | Bjorn Straussler | Single rune : ᚦ.ᚢ = ᚢ" {
    run runic-calculator.sh --archaeologist=bjorn_straussler add ᚦ.ᚢ 

    echo "$output"

    [[ "${output}" == "ᚦᚢ" ]]
}

@test "Addition | Bjorn Straussler | Runic number | Left longer than right : ᚠᚠᚨᚦ.ᚢᚢ = ᚠᚠᚨᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=bjorn_straussler add ᚠᚠᚨᚦ.ᚢᚢ 

    echo "$output"

    [[ "${output}" == "ᚠᚠᚨᚢᚦᚢ" ]]
}

@test "Addition | Bjorn Straussler | Runic number | Left shorter than right : ᚢᚢ.ᚠᚠᚨᚦ = ᚠᚠᚢᚨᚢᚦ" {
    run runic-calculator.sh --archaeologist=bjorn_straussler add ᚢᚢ.ᚠᚠᚨᚦ

    echo "$output"

    [[ "${output}" == "ᚠᚠᚢᚨᚢᚦ" ]]
}

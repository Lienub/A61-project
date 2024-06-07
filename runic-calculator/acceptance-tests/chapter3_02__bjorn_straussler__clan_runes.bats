function setup() {
    PATH="${PROJECT_DIR:-$PWD}:${PATH}"
}

@test "Convert | Bjorn Straussler | Jokul | Right to left : ᚱᚦᚨᚠᚠ = 28" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚱᚦᚨᚠᚠ

    echo "$output"

    [[ "${output}" == "28" ]]
}

@test "Convert | Bjorn Straussler | Jokul | Left to right : ᚠᚠᚨᚦᚱ  = 28" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚠᚠᚨᚦᚱ

    echo "$output"

    [[ "${output}" == "28" ]]
}

@test "Addition | Bjorn Straussler | Jokul | Right to left : ᚱᚠᚠᚨᚦ.ᚱᚢᚢ = ᚱᚠᚠᚨᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=bjorn_straussler add ᚱᚠᚠᚨᚦ.ᚱᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚱᚠᚠᚨᚢᚦᚢ" ]]
}

@test "Addition | Bjorn Straussler | Jokul | Left to right : ᚠᚠᚨᚦᚱ.ᚢᚢᚱ = ᚢᚠᚢᚠᚨᚦᚱ" {
    run runic-calculator.sh --archaeologist=bjorn_straussler add ᚠᚠᚨᚦᚱ.ᚢᚢᚱ

    echo "$output"

    [[ "${output}" == "ᚢᚠᚢᚠᚨᚦᚱ" ]]
}

@test "Convert | Bjorn Straussler | Kormak | Simple runic number (1) : ᚲᚠᚠ = 12" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚲᚠᚠ

    echo "$output"

    [[ "${output}" == "12" ]]
}

@test "Convert | Bjorn Straussler | Kormak | Simple runic number (2) : ᚲᚢᚢ = 8" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚲᚢᚢ 

    echo "$output"

    [[ "${output}" == "8" ]]
}

@test "Convert | Bjorn Straussler | Kormak | Simple runic number (3) : ᚲᚦᚦ = 5" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚲᚦᚦ

    echo "$output"

    [[ "${output}" == "5" ]]
}

@test "Convert | Bjorn Straussler | Kormak | Simple runic number (4) : ᚲᚨᚨ = 4" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚲᚨᚨ

    echo "$output"

    [[ "${output}" == "4" ]]
}

@test "Convert | Bjorn Straussler | Kormak | Runic number (1) : ᚲᚠᚠᚨᚦ = 27" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚲᚠᚠᚨᚦ

    echo "$output"

    [[ "${output}" == "27" ]]
}

@test "Convert | Bjorn Straussler | Kormak | Runic number (2) : ᚠᚲᚠᚦᚨᚢᚦ = 65" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚠᚲᚠᚦᚨᚢᚦ

    echo "$output"

    [[ "${output}" == "65" ]]
}

@test "Addition | Bjorn Straussler | Kormak | Keep Kormak rune attached (1) : ᚠᚲᚠᚨᚦ.ᚢᚦᚢᚢ = ᚠᚢᚲᚠᚦᚨᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=bjorn_straussler add ᚠᚲᚠᚨᚦ.ᚢᚦᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚢᚲᚠᚦᚨᚢᚦᚢ" ]]
}

@test "Addition | Bjorn Straussler | Kormak | Keep Kormak rune attached (2) : ᚠᚠᚲᚨᚦ.ᚢᚦᚢᚢ = ᚠᚢᚠᚦᚲᚨᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=bjorn_straussler add ᚠᚠᚲᚨᚦ.ᚢᚦᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚢᚠᚦᚲᚨᚢᚦᚢ" ]]
}

@test "Addition | Bjorn Straussler | Kormak | Keep Kormak rune attached (3) : ᚠᚠᚨᚦ.ᚢᚦᚲᚢᚢ = ᚠᚢᚠᚦᚨᚲᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=bjorn_straussler add ᚠᚠᚨᚦ.ᚢᚦᚲᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚢᚠᚦᚨᚲᚢᚦᚢ" ]]
}

@test "Convert | Bjorn Straussler | Thorlaug | Simple runic number (1) : ᚷᚠᚠ = 14" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚷᚠᚠ

    echo "$output"

    [[ "${output}" == "14" ]]
}

@test "Convert | Bjorn Straussler | Thorlaug | Simple runic number (2) : ᚷᚢᚢ = 10" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚷᚢᚢ

    echo "$output"

    [[ "${output}" == "10" ]]
}

@test "Convert | Bjorn Straussler | Thorlaug | Simple runic number (3) : ᚷᚦᚦ = 6" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚷᚦᚦ

    echo "$output"

    [[ "${output}" == "6" ]]
}

@test "Convert | Bjorn Straussler | Thorlaug | Simple runic number (4) : ᚷᚨᚨ = 6" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚷᚨᚨ

    echo "$output"

    [[ "${output}" == "6" ]]
}

@test "Convert | Bjorn Straussler | Thorlaug | Runic number (1) : ᚠᚠᚷᚨᚦ = 27" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚠᚠᚷᚨᚦ

    echo "$output"

    [[ "${output}" == "27" ]]
}

@test "Convert | Bjorn Straussler | Thorlaug | Runic number (2) : ᚷᚠᚠᚨᚦ = 41" {
    run runic-calculator.sh --archaeologist=bjorn_straussler convert ᚷᚠᚠᚨᚦ

    echo "$output"

    [[ "${output}" == "41" ]]
}

@test "Addition | Bjorn Straussler | Thorlaug | Keep Thorlaug rune attached (1) : ᚠᚷᚠᚨᚦ.ᚢᚦᚢᚢ = ᚠᚢᚷᚠᚦᚨᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=bjorn_straussler add ᚠᚷᚠᚨᚦ.ᚢᚦᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚢᚷᚠᚦᚨᚢᚦᚢ" ]]
}

@test "Addition | Bjorn Straussler | Thorlaug | Keep Thorlaug rune attached (2) : ᚠᚠᚷᚨᚦ.ᚢᚦᚢᚢ = ᚠᚢᚠᚦᚷᚨᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=bjorn_straussler add ᚠᚠᚷᚨᚦ.ᚢᚦᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚢᚠᚦᚷᚨᚢᚦᚢ" ]]
}

@test "Addition | Bjorn Straussler | Thorlaug | Keep Thorlaug rune attached (3) : ᚠᚠᚨᚦ.ᚢᚦᚷᚢᚢ = ᚠᚢᚠᚦᚨᚷᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=bjorn_straussler add ᚠᚠᚨᚦ.ᚢᚦᚷᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚢᚠᚦᚨᚷᚢᚦᚢ" ]]
}

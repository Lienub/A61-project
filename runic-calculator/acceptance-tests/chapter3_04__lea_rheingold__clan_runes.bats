function setup() {
    PATH="${PROJECT_DIR:-$PWD}:${PATH}"
}

@test "Convert | Lea Rheingold | Jokul | Left to right : ᚱᚦᚨᚠᚠ = 109" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚱᚦᚨᚠᚠ 

    echo "$output"

    [[ "${output}" == "109" ]]
}

@test "Convert | Lea Rheingold | Jokul | Right to left: ᚠᚠᚨᚦᚱ  = 109" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚠᚠᚨᚦᚱ

    echo "$output"

    [[ "${output}" == "109" ]]
}

@test "Addition | Lea Rheingold | Jokul | Left to right : ᚱᚠᚠᚨᚦ.ᚱᚢᚢ = ᚱᚢᚠᚢᚠᚨᚦ" {
    run runic-calculator.sh --archaeologist=lea_rheingold add ᚱᚠᚠᚨᚦ.ᚱᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚱᚢᚠᚢᚠᚨᚦ" ]]
}

@test "Addition | Lea Rheingold | Jokul | Right to left: ᚠᚠᚨᚦᚱ.ᚢᚢᚱ = ᚠᚠᚨᚢᚦᚢᚱ" {
    run runic-calculator.sh --archaeologist=lea_rheingold add ᚠᚠᚨᚦᚱ.ᚢᚢᚱ

    echo "$output"

    [[ "${output}" == "ᚠᚠᚨᚢᚦᚢᚱ" ]]
}

@test "Convert | Lea Rheingold | Kormak | Simple runic number (1) : ᚲᚢᚨ = 10" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚲᚢᚨ

    echo "$output"

    [[ "${output}" == "10" ]]
}

@test "Convert | Lea Rheingold | Kormak | Simple runic number (2) : ᚲᚠᚠ = 8" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚲᚠᚠ

    echo "$output"

    [[ "${output}" == "8" ]]
}

@test "Convert | Lea Rheingold | Kormak | Runic number (1) : ᚲᚠᚠᚨᚦ = 30" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚲᚠᚠᚨᚦ 

    echo "$output"

    [[ "${output}" == "30" ]]
}

@test "Convert | Lea Rheingold | Kormak | Runic number (2) : ᚠᚲᚠᚦᚨᚢᚦ = 95" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚠᚲᚠᚦᚨᚢᚦ 

    echo "$output"

    [[ "${output}" == "95" ]]
}

@test "Addition | Lea Rheingold | Kormak | Do not keep Kormak rune attached (1) : ᚠᚲᚠᚨᚦ.ᚢᚦᚢᚢ = ᚠᚲᚢᚠᚦᚨᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=lea_rheingold add ᚠᚲᚠᚨᚦ.ᚢᚦᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚲᚢᚠᚦᚨᚢᚦᚢ" ]]
}

@test "Addition | Lea Rheingold | Kormak | Do not keep Kormak rune attached (2) : ᚠᚠᚲᚨᚦ.ᚢᚦᚢᚢ = ᚠᚠᚢᚲᚦᚨᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=lea_rheingold add ᚠᚠᚲᚨᚦ.ᚢᚦᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚠᚢᚲᚦᚨᚢᚦᚢ" ]]
}

@test "Addition | Lea Rheingold | Kormak | Do not keep Kormak rune attached (3) : ᚠᚠᚨᚦ.ᚢᚦᚲᚢᚢ = ᚢᚠᚦᚠᚲᚨᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=lea_rheingold add ᚠᚠᚨᚦ.ᚢᚦᚲᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚢᚠᚦᚠᚲᚨᚢᚦᚢ" ]]
}

@test "Convert | Lea Rheingold | Thorlaug | Simple runic number (1) : ᚷᚠᚠ = 9" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚷᚠᚠ

    echo "$output"

    [[ "${output}" == "9" ]]
}

@test "Convert | Lea Rheingold | Thorlaug | Simple runic number (2) : ᚷᚷᚠᚠ = 19" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚷᚷᚠᚠ

    echo "$output"

    [[ "${output}" == "19" ]]
}

@test "Convert | Lea Rheingold | Thorlaug | Is first rune : ᚦᚷ = 13" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚦᚷ

    echo "$output"

    [[ "${output}" == "13" ]]
}

@test "Convert | Lea Rheingold | Thorlaug | Runic number (1) : ᚷᚠᚷᚠᚷᚨᚦ = 78" {
    run runic-calculator.sh --archaeologist=lea_rheingold convert ᚷᚠᚷᚠᚷᚨᚦ

    echo "$output"

    [[ "${output}" == "78" ]]
}

@test "Addition | Lea Rheingold | Kormak | Do not keep Kormak rune attached (1) : ᚠᚷᚠᚨᚦ.ᚢᚦᚢᚢ = ᚠᚷᚢᚠᚦᚨᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=lea_rheingold add ᚠᚷᚠᚨᚦ.ᚢᚦᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚷᚢᚠᚦᚨᚢᚦᚢ" ]]
}

@test "Addition | Lea Rheingold | Kormak | Do not keep Kormak rune attached (2) : ᚠᚠᚷᚨᚦ.ᚢᚦᚢᚢ = ᚠᚠᚢᚷᚦᚨᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=lea_rheingold add ᚠᚠᚷᚨᚦ.ᚢᚦᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚠᚠᚢᚷᚦᚨᚢᚦᚢ" ]]
}

@test "Addition | Lea Rheingold | Kormak | Do not keep Kormak rune attached (3) : ᚠᚠᚨᚦ.ᚢᚦᚷᚢᚢ = ᚢᚠᚦᚠᚷᚨᚢᚦᚢ" {
    run runic-calculator.sh --archaeologist=lea_rheingold add ᚠᚠᚨᚦ.ᚢᚦᚷᚢᚢ

    echo "$output"

    [[ "${output}" == "ᚢᚠᚦᚠᚷᚨᚢᚦᚢ" ]]
}

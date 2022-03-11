// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<any>): number {

    return nums.reduce((acc, el) => acc + el)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    const ArrayNumbers = [a, b, c]
    const MaxNumber = Math.max(a, b, c)
    const MaxNumberIndex = ArrayNumbers.indexOf(MaxNumber)
    // const RestNumbersArray = ArrayNumbers.splice(MaxNumberIndex,1)
    delete ArrayNumbers[MaxNumberIndex]
    const RestNumbersSum = ArrayNumbers.reduce((acc, el) => acc + el)

    const triangleByTrue = () => RestNumbersSum > MaxNumber


    if (a === b && a === c) return "10"
    else if (a === b && a !== c && triangleByTrue()) return "01"
    else if (a === c && c !== b && triangleByTrue()) return "01"
    else if (b === a && b !== c && triangleByTrue()) return "01"
    else if (b === c && b !== a && triangleByTrue()) return "01"
    else if (triangleByTrue()) return "11"
    else return "00"
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    const NumbersString = number.toString()
    let sum = 0
    for (let i = 0; i < NumbersString.length; i++) {
        sum += Number(NumbersString[i])

    }
    return sum
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let evenNumbersSum = arr[0]
    let oddNumbersSum = 0
    for (let i = 1; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenNumbersSum += arr[i]
        } else if (i % 2 !== 0) {
            oddNumbersSum += arr[i]
        }
    }

    return evenNumbersSum > oddNumbersSum
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {

    const filteredArray = array.filter(n => Number.isInteger(n) && n > 0)

    return filteredArray.map(n => n * n)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    let p = 0
    let sum = 0
    while (p <= N) {

        sum += p
        p++
    }
    return sum
}


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let newAmountOfMoney = amountOfMoney
    let newArray: Array<number> = []
    while (newAmountOfMoney > 0) {
        for (let i = 0; i < banknotes.length; i++) {
            if ((newAmountOfMoney - banknotes[i]) === 0) {
                newAmountOfMoney = newAmountOfMoney - banknotes[i]
                newArray.push(banknotes[i]) } //finish
            else if ((newAmountOfMoney - banknotes[i]) > 0) {
                newAmountOfMoney = newAmountOfMoney - banknotes[i]
                newArray.push(banknotes[i])
                while (newAmountOfMoney > banknotes[i]) {
                    newAmountOfMoney = newAmountOfMoney - banknotes[i]
                    newArray.push(banknotes[i])}
            }

}}
    return newArray
}
function calc(expression: string): void {
    const tokens = expression.trim().split(/\s+/).reverse(); // Разбиение на токены и переворот массива

    const evaluate = (tokens: string[]): number => {
        const token = tokens.pop();

        if (!token) {
            throw new Error("Неправильное выражение");
        }

        // Если это число, возвращаем его
        const num = parseFloat(token);
        if (!isNaN(num)) {
            return num;
        }

        // Если токен - это открывающая скобка, то вызываем evaluate рекурсивно
        if (token === '(') {
            const result = evaluate(tokens);
            if (tokens.pop() !== ')') {
                throw new Error("Несоответствующая скобка");
            }
            return result;
        }

        // Извлекаем операнды
        const operand1 = evaluate(tokens);
        const operand2 = evaluate(tokens);

        switch (token) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '*':
                return operand1 * operand2;
            case '/':
                if (operand2 === 0) {
                    throw new Error("Деление на ноль");
                }
                return operand1 / operand2;
            default:
                throw new Error(`Неправильный оператор: ${token}`);
        }
    };

    try {
        const result = evaluate(tokens);
        console.log(`Результат: ${result}`);
    } catch (error) {
        console.error(error.message);
    }
}

// Примеры использования
calc("+ 3 4"); // Результат: 7
calc("( + 2 3 )"); // Результат: 5
calc("* ( - 5 6 ( 7"); // Несоответствующая скобка
calc("* ( - 5 6 ) 7"); // Результат -7
calc("* ( - 5 ( /  28 7 ) ) 7"); // Результат: 7
calc("+ 1 / 2 0"); // Деление на ноль
calc("+ 5"); // Неправильное выражение
calc("d vs"); // Неправильное выражение

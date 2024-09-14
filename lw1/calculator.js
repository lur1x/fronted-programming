function calc(expression) {
    var tokens = expression.trim().split(/\s+/).reverse(); // Разбиение на токены и переворот массива
    var evaluate = function (tokens) {
        var token = tokens.pop();
        if (!token) {
            throw new Error("Неправильное выражение");
        }
        // Если это число, возвращаем его
        var num = parseFloat(token);
        if (!isNaN(num)) {
            return num;
        }
        // Если токен - это открывающая скобка, то вызываем evaluate рекурсивно
        if (token === '(') {
            var result = evaluate(tokens);
            if (tokens.pop() !== ')') {
                throw new Error("Несоответствующая скобка");
            }
            return result;
        }
        // Извлекаем операнды
        var operand1 = evaluate(tokens);
        var operand2 = evaluate(tokens);
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
                throw new Error("\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440: ".concat(token));
        }
    };
    try {
        var result = evaluate(tokens);
        console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(result));
    }
    catch (error) {
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

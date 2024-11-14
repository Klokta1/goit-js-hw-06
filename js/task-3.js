class StringBuilder {
    #value; // Оголошення приватної властивості

    constructor(initialValue) {
        this.#value = initialValue; // Ініціалізація приватної властивості
    }

    // Метод для отримання поточного значення value
    getValue() {
        return this.#value;
    }

    // Метод для додавання рядка в кінець
    padEnd(str) {
        this.#value += str; // Додаємо str в кінець значення
    }

    // Метод для додавання рядка на початок
    padStart(str) {
        this.#value = str + this.#value; // Додаємо str на початок значення
    }

    // Метод для додавання рядка на початок і кінець
    padBoth(str) {
        this.padStart(str); // Додаємо на початок
        this.padEnd(str);   // Додаємо в кінець
    }
}

// Приклад використання:
const builder = new StringBuilder(".");

console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

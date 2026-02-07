var services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн",

    price() {
        let sum = 0;
        for (let key in this) {
            if (typeof this[key] === "string") {
                sum += parseInt(this[key]);
            }
        }
        return sum;
    },

    minPrice() {
        let min = Infinity;

        for (let key in this) {
            let price = parseInt(this[key]);
            if (price < min) {
                min = price;
            }
        }
        return min;
    },

    maxPrice() {
        let max = 0;

        for (let key in this) {
            let price = parseInt(this[key]);
            if (price > max) {
                max = price;
            }
        }
        return max;
    }
};


services["Розбити скло"] = "20 грн";


console.log('Загальна вартість послуг: ' + services.price());   
console.log('Мінімальна ціна: ' + services.minPrice()); 
console.log('Максимальна ціна: ' + services.maxPrice()); 

process.stdin.read();
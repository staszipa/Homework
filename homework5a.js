var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "<dmitro.porohov@yahoo.com>" // При перевіці випаде через стрілочки, вирішив не прибирати їх  
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

let email_f = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
let email_t = [];
let i = 0;

for (let user of arr) {
    if (user.email && email_f.test(user.email)) {
        email_t[i] = user.email;
        i++;
    }
}

console.log(email_t);

process.stdin.read();

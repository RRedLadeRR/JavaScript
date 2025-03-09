let day;

function checkDay() {
    day = prompt("Перевірити день тижня (введіть число від 1 до 7)");

    day = Number(day);

    if (day >= 1 && day <= 5) {
        alert("Не вихідний (робочий день)");
    } else if (day === 6 || day === 7) {
        alert("Вихідний день!");
    } else {
        alert("Помилка! Введіть число від 1 до 7.");
    }
}
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
if (age < 14 || age > 90) {
    alert ('true');
} else {
    alert ('false');
};

if (!(age >= 14 && age <= 90)) {
    alert ('true');
} else {
    alert ('false');
};
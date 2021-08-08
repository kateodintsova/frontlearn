function topSalary(salaries) {
    let maxSalary = 0;
    let maxSalaryName;
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxSalaryName = name;
        }
    }

    return maxSalaryName;
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(topSalary(salaries));
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

alert(getSumSalaries(salaries));

function getSumSalaries(salaries) {
    let sumSalaries = 0;
    for (let person in salaries) {
        sumSalaries += salaries[person];
    }

    return sumSalaries;
}
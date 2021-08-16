// the execution: catch -> then
new Promise((resolve, reject) => {

    throw new Error("Ошибка!");

}).catch(function (error) {

    alert("Ошибка обработана, продолжить работу");

}).then(() => alert("Управление перейдёт в следующий then"));
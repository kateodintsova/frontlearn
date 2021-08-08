let user = {
    name: "Иван",
    age: 30
};

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);

// теперь user = { name: "Иван", canView: true, canEdit: true }
console.log(user);

// просто клонирует указанный объект
let clone = Object.assign({}, user);
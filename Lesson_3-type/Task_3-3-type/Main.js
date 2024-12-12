var users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
/*--------------------    user.status true  -----------------------------*/
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user.status) {
        console.log(user);
    }
}
console.log('');
/*--------------------   user.status false --------------------------*/
for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
    var user = users_2[_a];
    if (!user.status) {
        console.log(user);
    }
}
console.log('');
/*--------------------------  user.status age ---------------------------------*/
for (var _b = 0, users_3 = users; _b < users_3.length; _b++) {
    var user = users_3[_b];
    if (user.age > 30) {
        console.log(user);
    }
}

import UserProfileManager from'../index.js'

const profileManager = new UserProfileManager();

profileManager.addUser({ name: "Alice", email: "alice@example.com" });
profileManager.addUser({ name: "Bob", email: "bob@example.com" });


console.log(profileManager.getAllUsers(), 'all users added'); // Выводит информацию о Alice и Bob

profileManager.updateUser(1, { name: "Alicia" }); // Обновляет имя Alice на Alicia
profileManager.removeUser(2); // Удаляет Bob

console.log(profileManager.getAllUsers(), 'all users after remove and update');

console.log(profileManager.findUserByName("Ali"), 'findByName Ali'); // Находит Alicia

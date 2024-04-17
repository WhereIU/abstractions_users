// const randomNum = (rangeLen, minNumber = 1) => Math.floor(Math.random()
//* rangeLen + minNumber);
const getUserId = (user) => user.id;
const getUserName = (user) => user.name;
const getUnuquieId = (users) => (users.at(-1) ? getUserId(users.at(-1)) + 1 : 1);
// const savedId = users.map((user) => getUserId(user));
// let id = randomNum(10000);
// for (let i = 0; savedId.length > i; i += 1) {
//  if (savedId[i] === id) {
// id = randomNum(10000);
//    i = 0;
//  }
// }

class UserProfileManager {
  constructor() {
    this.users = [];
  }
}

(function () {
  this.addUser = function (user) {
    const uniqueId = getUnuquieId(this.users);
    this.users.push({ id: uniqueId, ...user });
  };

  this.removeUser = function (id) {
    this.users = this.users.filter((user) => getUserId(user) !== id);
  };

  this.updateUser = function (id, newInfo) {
    const { users } = this;
    for (let i = 0; users.length > i; i += 1) {
      if (getUserId(users[i]) === id) {
        users[i] = { ...users[i], ...newInfo };
        break;
      }
    }
  };

  this.findUserByName = function (name) {
    return this.users.filter((user) => getUserName(user).includes(name));
  };

  this.getAllUsers = function () {
    return this.users;
  };
}).call(UserProfileManager.prototype);

export default UserProfileManager;

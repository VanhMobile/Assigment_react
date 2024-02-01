/* eslint-disable prettier/prettier */
// Singleton.js
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
      this.user = null; // Khởi tạo user ban đầu là null
    }

    return Singleton.instance;
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }
}

export default Singleton;

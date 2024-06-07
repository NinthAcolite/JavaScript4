class Email {
  constructor(email) {
    this._email = email;
  }

  get isValid() {
    const forbiddenChars = ['*', '#', '$', '%', '^'];
    const [login, domain] = this._email.split('@');
    const domainZone = domain.split('.')[1];

    if (forbiddenChars.some(char => login.includes(char))) {
      return false;
    }

    if (domainZone.length > 3) {
      return false;
    }

    return true;
  }

  set setEmail([login, domain, zone]) {
    this._email = `${login}@${domain}.${zone}`;
  }
}

let email1 = new Email('test@gmail.com');
console.log(email1.isValid);

email1.setEmail = ['newEmail', 'gmail', 'com'];
console.log(email1.isValid);

let email2 = new Email('test*#@$gmail.com');
console.log(email2.isValid);

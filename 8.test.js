class TestEmail {
  static run() {
    const testCases = [
      { email: 'test@gmail.com', expected: true },
      { email: 'newEmail@gmail.com', expected: true },
      { email: 'test*#@$gmail.com', expected: false },
      { email: 'longdomainzone@gmail.commm', expected: false },
    ];

    for (const testCase of testCases) {
      const email = new Email(testCase.email);
      console.assert(email.isValid === testCase.expected, `Failed: ${testCase.email}`);
    }

    console.log('All tests passed!');
  }
}

TestEmail.run();

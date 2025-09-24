UnitTesting Project

This project demonstrates basic JavaScript arithmetic functions inside a custom library, and how to test them using Mocha + Chai with all three assertion styles: Assert, Expect, and Should.
📂 Project Structure
UnitTesting/
├── main.js                  # Main program using mylib
├── mylib.js                 # Wrapper library (imports math functions)
├── src/
│   └── math.js              # Core arithmetic library
├── test/
│   ├── mylib.test.js        # Assert style tests
│   ├── mylib.expect.test.js # Expect style tests
│   └── mylib.should.test.js # Should style tests
├── package.json             # NPM configuration
├── package-lock.json
└── .gitignore
⚙️ Installation

1.Clone the repository or unzip the archive.

2.Navigate into the project folder:
cd UnitTesting
3.Install dependencies:
npm install
▶️ Running the Main Program
To execute the sample program:
node main.js
Expected Output:
Add: 15
Subtract: 5
Multiply: 50
Divide: 2
Is 10 even?: true
🧪 Running Unit Tests

This project uses Mocha as the test runner and Chai as the assertion library.

Run all tests with:
npm test

✅ Test Coverage

add(a, b)

Adds two numbers.

Throws error if inputs are not numbers.

subtract(a, b)

Subtracts b from a.

multiply(a, b)

Multiplies two numbers.

divide(a, b)

Divides a by b.

Throws error if divisor is zero.

isEven(n)

Returns true if number is even.

Returns false if odd.

Throws error if input is not a number.

Each test file demonstrates a different Chai style:

mylib.test.js → assert

mylib.expect.test.js → expect

mylib.should.test.js → should

Also includes:

before() and after() hooks that run before and after test suites.

A test for division by zero that expects an error.

📘 Notes

.gitignore ensures node_modules/ and other unnecessary files are not included in version control.

This project is self-contained and requires only Node.js with npm.

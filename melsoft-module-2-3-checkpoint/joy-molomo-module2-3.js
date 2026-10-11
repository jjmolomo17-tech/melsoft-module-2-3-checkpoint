// ======================================================
// CHALLENGE 1 - Variables, Types, and the typeof Trap
// ======================================================

// 1. String holding my full name.
// const is used because the value should not change.
const fullName = "Joy Molomo";

// 2. Number holding my age.
// let is used because age changes over time.
let age = 28;

// 3. Boolean indicating whether I enjoy JavaScript.
// const because the current answer is fixed for this example.
const enjoysJavaScript = true;

// 4. Decimal number holding favourite temperature.
// const because this value is not changing.
const favouriteTemperature = 22.5;

// 5. NaN created using Number().
const notANumber = Number("not a number");

// 6. Infinity value.
const infinityValue = 1 / 0;

// 7. Maximum safe integer.
const maxSafeInteger = Number.MAX_SAFE_INTEGER;

// 8. Explicitly set to null.
const emptyValue = null;

// 9. Explicitly set to undefined.
const undefinedValue = undefined;

// 10. Template literal using previous variables.
const introduction = `My name is ${fullName} and I am ${age} years old.`;

// ------------------------------------------------------
// Part B - typeof checks
// ------------------------------------------------------

console.log("fullName:", typeof fullName);
console.log("age:", typeof age);
console.log("enjoysJavaScript:", typeof enjoysJavaScript);
console.log("favouriteTemperature:", typeof favouriteTemperature);
console.log("notANumber:", typeof notANumber);
console.log("infinityValue:", typeof infinityValue);
console.log("maxSafeInteger:", typeof maxSafeInteger);
console.log("emptyValue:", typeof emptyValue);
console.log("undefinedValue:", typeof undefinedValue);
console.log("introduction:", typeof introduction);

// ------------------------------------------------------
// Additional typeof cases
// ------------------------------------------------------

// Prediction: object
console.log("typeof null =", typeof null);

// Prediction: number
console.log("typeof NaN =", typeof NaN);

// Prediction: undefined
console.log("typeof undefined =", typeof undefined);

// Prediction: string
console.log('typeof "42" =', typeof "42");

// Prediction: string
console.log("typeof (typeof 42) =", typeof (typeof 42));

// Prediction: object
console.log("typeof [1,2,3] =", typeof [1, 2, 3]);

// Prediction: function
console.log(
  "typeof function() {} =",
  typeof function () {}
);

/*
----------------------------------------------------------
Why does typeof null return "object"?

This is a historical bug from the earliest implementation
of JavaScript. Values were tagged internally, and null
was accidentally given the same tag used for objects.
The behaviour was never changed because it would break
existing code on the web.

Why does typeof NaN return "number"?

NaN stands for "Not a Number", but it is still a special
numeric value used by JavaScript to represent the result
of impossible mathematical operations. Since NaN belongs
to the Number data type, typeof NaN returns "number".
----------------------------------------------------------
*/




// ======================================================
// CHALLENGE 2 - Type Conversion Workshop
// ======================================================

// ------------------------------------------------------
// Part A - Explicit Conversion
// ------------------------------------------------------

const values = [
  "123",
  "3.14",
  "hello",
  "42abc",
  "",
  0,
  null,
  undefined
];

values.forEach((value) => {
  console.log("=================================");
  console.log("Original Value:", value);
  console.log("Original Type:", typeof value);

  console.log(
    "Number:",
    Number(value),
    "| Type:",
    typeof Number(value)
  );

  console.log(
    "parseInt:",
    parseInt(value),
    "| Type:",
    typeof parseInt(value)
  );

  console.log(
    "parseFloat:",
    parseFloat(value),
    "| Type:",
    typeof parseFloat(value)
  );

  console.log(
    "Boolean:",
    Boolean(value),
    "| Type:",
    typeof Boolean(value)
  );

  console.log(
    "String:",
    String(value),
    "| Type:",
    typeof String(value)
  );
});

// ------------------------------------------------------
// Part B - Implicit Coercion
// ------------------------------------------------------

// 1
console.log('"5" + 3 =', "5" + 3, "| Type:", typeof ("5" + 3));
// JavaScript converts 3 into a string and concatenates.

// 2
console.log('"5" - 3 =', "5" - 3, "| Type:", typeof ("5" - 3));
// JavaScript converts "5" into a number then subtracts.

// 3
console.log('"5" * "2" =', "5" * "2", "| Type:", typeof ("5" * "2"));
// Both strings are converted to numbers.

// 4
console.log("true + 1 =", true + 1, "| Type:", typeof (true + 1));
// true becomes 1.

// 5
console.log('true + "1" =', true + "1", "| Type:", typeof (true + "1"));
// true becomes the string "true" during concatenation.

// 6
console.log(
  "false + null =",
  false + null,
  "| Type:",
  typeof (false + null)
);
// false becomes 0 and null becomes 0.

// 7
console.log(
  "null + undefined =",
  null + undefined,
  "| Type:",
  typeof (null + undefined)
);
// undefined causes the result to become NaN.

// 8
console.log("1 / 0 =", 1 / 0, "| Type:", typeof (1 / 0));
// Division by zero returns Infinity.

// 9
console.log("0 / 0 =", 0 / 0, "| Type:", typeof (0 / 0));
// Invalid division returns NaN.

// 10
console.log(
  '"abc" - 1 =',
  "abc" - 1,
  "| Type:",
  typeof ("abc" - 1)
);
// "abc" cannot be converted to a number.

// 11
console.log("[] + 0 =", [] + 0, "| Type:", typeof ([] + 0));
// Empty array becomes an empty string then concatenates.

// 12
console.log(
  "[1] + [2] =",
  [1] + [2],
  "| Type:",
  typeof ([1] + [2])
);
// Arrays become strings and concatenate.



/*
=========================================================
PART C - THEORY ANSWERS
=========================================================

1. Difference between Number("42abc") and parseInt("42abc")

Number("42abc")
returns NaN because the entire string must be a valid
number.

parseInt("42abc")
returns 42 because parseInt reads from left to right
until it finds a non-numeric character.

Exact Results:
Number("42abc") -> NaN
parseInt("42abc") -> 42


2. When would you use parseFloat instead of parseInt?

A banking or shopping application may receive a value
such as "19.99" from a form.

parseInt("19.99") returns 19
parseFloat("19.99") returns 19.99

Using parseInt would silently remove the cents and could
cause financial losses when calculating totals,
discounts, VAT, or interest.


3. What does Number("") return and why is it dangerous?

Number("") returns 0.

This can cause production bugs because a blank form
field may be treated as an actual numeric value instead
of missing input.

Example:

A user leaves the "Deposit Amount" field empty.

Number("") becomes 0.

The application may incorrectly process the transaction
instead of displaying a validation error.
=========================================================
*/





// ======================================================
// CHALLENGE 3 - Operators Masterclass
// ======================================================

// ------------------------------------------------------
// 1. Arithmetic Operators
// Calculate monthly net salary
// ------------------------------------------------------

const grossSalary = 45000;
const tax = grossSalary * 0.25;
const uif = grossSalary * 0.01;
const medicalAid = 2500;

const totalDeductions = tax + uif + medicalAid;
const netSalary = grossSalary - totalDeductions;

console.log("Gross Salary:", grossSalary);
console.log("Tax:", tax);
console.log("UIF:", uif);
console.log("Medical Aid:", medicalAid);
console.log("Total Deductions:", totalDeductions);
console.log("Net Salary:", netSalary);

// Modulo example
console.log("Salary remainder when divided by 1000:", grossSalary % 1000);


// ------------------------------------------------------
// 2. Assignment Operators
// Shopping cart using compound assignments
// ------------------------------------------------------

let cartTotal = 0;

cartTotal += 150;
cartTotal += 85;
cartTotal += 220;

console.log("Cart after items:", cartTotal);

cartTotal *= 0.9; // 10% discount
console.log("After discount:", cartTotal);

cartTotal *= 1.15; // 15% VAT
console.log("After VAT:", cartTotal);


// ------------------------------------------------------
// 3. Comparison Operators
// Signup form validation
// ------------------------------------------------------

const userAge = 22;
const password = "StrongPass123";
const email = "joy@example.com";
const confirmEmail = "joy@example.com";

const ageValid = userAge >= 18;
const passwordValid = password.length >= 8;
const emailsMatch = email === confirmEmail;

console.log("Age Valid:", ageValid);
console.log("Password Valid:", passwordValid);
console.log("Emails Match:", emailsMatch);


// ------------------------------------------------------
// 4. Logical Operators
// Premium dashboard access
// ------------------------------------------------------

const isLoggedIn = true;
const emailVerified = true;
const isAdmin = false;

const canAccessDashboard =
  (isLoggedIn && emailVerified) || isAdmin;

console.log("Can Access Dashboard:", canAccessDashboard);


// ------------------------------------------------------
// 5. Unary Operators
// Convert string to number and toggle boolean
// ------------------------------------------------------

const ageInput = "25";

const convertedAge = +ageInput;

console.log("Converted Age:", convertedAge);
console.log("Converted Age Type:", typeof convertedAge);

let isDarkMode = false;

isDarkMode = !isDarkMode;

console.log("Dark Mode:", isDarkMode);


// ------------------------------------------------------
// 6. Ternary Operator
// Membership badge system
// ------------------------------------------------------

const membershipType = "premium";

const membershipBadge =
  membershipType === "premium"
    ? "Premium Member"
    : membershipType === "trial"
    ? "Trial Member"
    : "Free Member";

console.log("Membership Badge:", membershipBadge);


// ------------------------------------------------------
// 7. String Concatenation
// Build greeting two different ways
// ------------------------------------------------------

const firstName = "Thabo";
const lastName = "Nkosi";
const userCurrentAge = 28;

// Using +
const greetingPlus =
  "Welcome back " +
  firstName +
  " " +
  lastName +
  ", you are " +
  userCurrentAge +
  " years old.";

// Using template literals
const greetingTemplate =
  `Welcome back ${firstName} ${lastName}, you are ${userCurrentAge} years old.`;

console.log(greetingPlus);
console.log(greetingTemplate);

/*
Template literals are generally better because
they are easier to read, easier to maintain,
and reduce mistakes when combining variables
and text.
*/


/*
=========================================================
INTERVIEW ANSWER 1
Prefix (++x) vs Postfix (x++)
=========================================================

let x = 5;

console.log(++x); // 6
// Prefix increments first, then returns value.

let y = 5;

console.log(y++); // 5
// Postfix returns current value, then increments.

console.log(y); // 6

=========================================================
INTERVIEW ANSWER 2
Three Real-World Uses for Modulo
=========================================================

1. Determining whether a number is even or odd.
   Example: number % 2 === 0

2. Rotating through days of the week,
   months, or menu items in a cycle.

3. Assigning users across servers using
   load-balancing logic:
   serverNumber = userId % totalServers

=========================================================
INTERVIEW ANSWER 3
Nested Ternaries
=========================================================

Nested ternaries are acceptable for very small,
simple decisions such as grade or membership
classification.

They should be avoided when logic becomes
complex because they quickly become difficult
to read and maintain. In larger applications,
if/else statements are usually clearer.
=========================================================
*/


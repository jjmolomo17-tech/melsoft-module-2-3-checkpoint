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




// ======================================================
// CHALLENGE 4 - THE EQUALITY DEEP DIVE
// ======================================================

// ------------------------------------------------------
// PART A - Predict and Verify
// ------------------------------------------------------

// 1
// Prediction: true
console.log("1:", 0 == false);
// Reason: false is converted to 0.

// 2
// Prediction: false
console.log("2:", 0 === false);
// Reason: different types (number vs boolean).

// 3
// Prediction: true
console.log("3:", "" == 0);
// Reason: empty string becomes 0.

// 4
// Prediction: false
console.log("4:", "" === 0);
// Reason: string and number are different types.

// 5
// Prediction: true
console.log("5:", "0" == 0);
// Reason: string "0" is converted to number 0.

// 6
// Prediction: false
console.log("6:", "0" === 0);
// Reason: string and number have different types.

// 7
// Prediction: true
console.log("7:", null == undefined);
// Reason: loose equality treats them as equal.

// 8
// Prediction: false
console.log("8:", null === undefined);
// Reason: different types.

// 9
// Prediction: false
console.log("9:", null == 0);
// Reason: null is only loosely equal to undefined.

// 10
// Prediction: true
console.log("10:", null >= 0);
// Reason: null is converted to 0 during relational comparison.

// 11
// Prediction: false
console.log("11:", null > 0);
// Reason: 0 > 0 is false.

// 12
// Prediction: false
console.log("12:", NaN == NaN);
// Reason: NaN is never equal to itself.

// 13
// Prediction: false
console.log("13:", NaN === NaN);
// Reason: NaN is never equal to itself.

// 14
// Prediction: true
console.log("14:", Object.is(NaN, NaN));
// Reason: Object.is correctly identifies NaN equals NaN.

// 15
// Prediction: true
console.log("15:", +0 === -0);
// Reason: strict equality treats them as equal.

// 16
// Prediction: false
console.log("16:", Object.is(+0, -0));
// Reason: Object.is distinguishes between +0 and -0.

// 17
// Prediction: true
console.log("17:", [1, 2, 3] == "1,2,3");
// Reason: array converts to string.

// 18
// Prediction: true
console.log("18:", [] == false);
// Reason: both become 0 during coercion.

// 19
// Prediction: true
console.log("19:", [] == 0);
// Reason: [] becomes "" then 0.

// 20
// Prediction: true
console.log("20:", [0] == false);
// Reason: [0] becomes "0", then 0.



/*
=========================================================
WHY IS null >= 0 TRUE BUT null > 0 FALSE?
=========================================================

For relational comparisons, JavaScript converts
null into the number 0.

null >= 0 becomes:
0 >= 0
which is true.

null > 0 becomes:
0 > 0
which is false.

This is one of JavaScript's most famous comparison
quirks.
=========================================================
*/



// ------------------------------------------------------
// PART B - PASSWORD RESET VALIDATOR
// ------------------------------------------------------

console.log("\n==============================");
console.log("TEST CASE 1 - SHOULD PASS");
console.log("==============================");

const testCase1 = {
  newPassword: "SecurePass123",
  confirmPassword: "SecurePass123",
  currentEmail: "joy@example.com",
  confirmEmail: "joy@example.com"
};

console.log(
  "Passwords Match:",
  testCase1.newPassword === testCase1.confirmPassword
    ? "PASS"
    : "FAIL"
);

console.log(
  "Emails Match:",
  testCase1.currentEmail === testCase1.confirmEmail
    ? "PASS"
    : "FAIL"
);

console.log(
  "Password Not Email:",
  testCase1.newPassword !== testCase1.currentEmail
    ? "PASS"
    : "FAIL"
);

console.log(
  "Password Length:",
  testCase1.newPassword.length >= 8
    ? "PASS"
    : "FAIL"
);



console.log("\n==============================");
console.log("TEST CASE 2 - SHOULD FAIL");
console.log("==============================");

const testCase2 = {
  newPassword: "short",
  confirmPassword: "different",
  currentEmail: "user@example.com",
  confirmEmail: "wrong@example.com"
};

console.log(
  "Passwords Match:",
  testCase2.newPassword === testCase2.confirmPassword
    ? "PASS"
    : "FAIL"
);

console.log(
  "Emails Match:",
  testCase2.currentEmail === testCase2.confirmEmail
    ? "PASS"
    : "FAIL"
);

console.log(
  "Password Not Email:",
  testCase2.newPassword !== testCase2.currentEmail
    ? "PASS"
    : "FAIL"
);

console.log(
  "Password Length:",
  testCase2.newPassword.length >= 8
    ? "PASS"
    : "FAIL"
);



/*
=========================================================
FINAL QUESTION
=========================================================

I used the strict equality operator (===).

=== checks both value and data type.

For password validation we do not want JavaScript
performing automatic type conversion because it could
allow values that look equal after coercion but are
actually different data types.

Using === makes validation more predictable,
secure, and easier to debug.
=========================================================
*/




// ======================================================
// CHALLENGE 5 - OPERATOR PRECEDENCE
// ======================================================

// ------------------------------------------------------
// 1
// Prediction: 13
// Order: 3 * 4 = 12, then 2 + 12 = 14, then 14 - 1 = 13
// ------------------------------------------------------

console.log("1:", 2 + 3 * 4 - 1);

// ------------------------------------------------------
// 2
// Prediction: 15
// Order: (2 + 3) = 5, (4 - 1) = 3, then 5 * 3 = 15
// ------------------------------------------------------

console.log("2:", (2 + 3) * (4 - 1));

// ------------------------------------------------------
// 3
// Prediction: 4
// Order: left to right
// 10 - 4 = 6
// 6 - 2 = 4
// ------------------------------------------------------

console.log("3:", 10 - 4 - 2);

// ------------------------------------------------------
// 4
// Prediction: 512
// Order:
// 3 ** 2 = 9
// 2 ** 9 = 512
// Exponentiation is right-associative
// ------------------------------------------------------

console.log("4:", 2 ** 3 ** 2);

// ------------------------------------------------------
// 5
// Prediction: 3
// Order:
// 10 % 3 = 1
// 1 * 2 = 2
// 2 + 1 = 3
// ------------------------------------------------------

console.log("5:", 10 % 3 * 2 + 1);

// ------------------------------------------------------
// 6
// Prediction: 5
// Order:
// 100 / 4 = 25
// 25 / 5 = 5
// ------------------------------------------------------

console.log("6:", 100 / 4 / 5);

// ------------------------------------------------------
// 7
// Prediction: true
// Order:
// 5 + 2 = 7
// 7 > 6 = true
// 3 < 4 = true
// true && true = true
// ------------------------------------------------------

console.log("7:", 5 + 2 > 6 && 3 < 4);

// ------------------------------------------------------
// 8
// Prediction: true
// Order:
// true && false = false
// true && true = true
// false || true = true
// ------------------------------------------------------

console.log("8:", true && false || true && true);

// ------------------------------------------------------
// 9
// Prediction: false
// Order:
// !false = true
// !!0 = false
// true && false = false
// ------------------------------------------------------

console.log("9:", !false && !!0);

// ------------------------------------------------------
// 10
// Prediction: true
// Order:
// 5 > 3 = true
// 10 < 20 = true
// 2 === "2" = false
// !false = true
// true && true = true
// true || true = true
// ------------------------------------------------------

console.log("10:", 5 > 3 && 10 < 20 || !(2 === "2"));

// ------------------------------------------------------
// 11
// Prediction: 1035
// Order:
// 1000 * 1.15 = 1150
// 1150 * 0.9 = 1035
// ------------------------------------------------------

console.log("11:", 1000 * 1.15 * 0.9);

// ------------------------------------------------------
// 12
// Prediction: "number1"
// Order:
// typeof 5 = "number"
// "number" + 1 = "number1"
// ------------------------------------------------------

console.log("12:", typeof 5 + 1);

// ------------------------------------------------------
// 13
// Prediction: "number"
// Order:
// 5 + 1 = 6
// typeof 6 = "number"
// ------------------------------------------------------

console.log("13:", typeof (5 + 1));

// ------------------------------------------------------
// 14
// Prediction: "56"
// Order:
// 3 * 2 = 6
// "5" + 6 = "56"
// ------------------------------------------------------

console.log("14:", "5" + 3 * 2);

// ------------------------------------------------------
// 15
// Prediction: 4
// Order:
// "5" - 3 = 2
// 2 + 2 = 4
// ------------------------------------------------------

console.log("15:", "5" - 3 + 2);



/*
=========================================================
INTERVIEW ANSWER
=========================================================

You should add parentheses whenever they make the
intent of the code clearer for other developers,
even when operator precedence would already produce
the correct result.

Readable code is easier to maintain, debug, and review.
Most production teams prefer clear expressions with
parentheses rather than expecting developers to
memorize every precedence rule.
=========================================================
*/




// ======================================================
// CHALLENGE 6 - TERNARY AND SHORT-CIRCUIT PATTERNS
// ======================================================

// ------------------------------------------------------
// PART A - TERNARY CHAIN FOR GRADE CONVERSION
// ------------------------------------------------------

console.log("========== PART A ==========");

const percentages = [95, 82, 73, 65, 54, 42, 0, 100];

percentages.forEach((mark) => {
  const grade =
    mark >= 90 ? "A" :
    mark >= 80 ? "B" :
    mark >= 70 ? "C" :
    mark >= 60 ? "D" :
    mark >= 50 ? "E" :
    "F";

  console.log(`Percentage: ${mark} -> Grade: ${grade}`);
});


// ------------------------------------------------------
// PART B - SHORT-CIRCUIT DEFAULTS
// ------------------------------------------------------

console.log("\n========== PART B ==========");

// User with all properties missing
const user1 = {};

// User with empty string and zero
const user2 = {
  displayName: "Joy",
  theme: "",
  notificationCount: 0
};

// User 1 defaults
const displayName1 = user1.displayName || "Guest User";
const theme1 = user1.theme || "light";
const maxResults1 = user1.maxResults || 10;
const lastLogin1 = user1.lastLogin ?? "Never";
const notificationCount1 = user1.notificationCount ?? 0;

console.log("User 1:");
console.log("Display Name:", displayName1);
console.log("Theme:", theme1);
console.log("Max Results:", maxResults1);
console.log("Last Login:", lastLogin1);
console.log("Notification Count:", notificationCount1);

// User 2 defaults
const displayName2 = user2.displayName || "Guest User";
const theme2 = user2.theme || "light";
const maxResults2 = user2.maxResults || 10;
const lastLogin2 = user2.lastLogin ?? "Never";
const notificationCount2 = user2.notificationCount ?? 0;

console.log("\nUser 2:");
console.log("Display Name:", displayName2);
console.log("Theme:", theme2);
console.log("Max Results:", maxResults2);
console.log("Last Login:", lastLogin2);
console.log("Notification Count:", notificationCount2);

/*
Why || and ?? behave differently:

|| treats all falsy values as missing.

Falsy values include:
0
""
false
null
undefined

Therefore:
"" || "light"
returns "light"

?? only checks for:
null
undefined

Therefore:
0 ?? 10
returns 0

notificationCount remains 0 because
0 is not null or undefined.
*/


// ------------------------------------------------------
// PART C - GUARD CLAUSES WITH && AND OPTIONAL CHAINING
// ------------------------------------------------------

console.log("\n========== PART C ==========");

const fullUser = {
  address: {
    city: "Johannesburg"
  }
};

const missingAddressUser = {};

const nullUser = null;


// ---------- User with city ----------

console.log(
  "Full User &&:",
  fullUser &&
  fullUser.address &&
  fullUser.address.city
);

console.log(
  "Full User ?.:",
  fullUser?.address?.city
);

console.log(
  "Full User Default:",
  fullUser?.address?.city ?? "Unknown city"
);


// ---------- User missing address ----------

console.log(
  "Missing Address &&:",
  missingAddressUser &&
  missingAddressUser.address &&
  missingAddressUser.address.city
);

console.log(
  "Missing Address ?.:",
  missingAddressUser?.address?.city
);

console.log(
  "Missing Address Default:",
  missingAddressUser?.address?.city ?? "Unknown city"
);


// ---------- Null User ----------

console.log(
  "Null User &&:",
  nullUser &&
  nullUser.address &&
  nullUser.address.city
);

console.log(
  "Null User ?.:",
  nullUser?.address?.city
);

console.log(
  "Null User Default:",
  nullUser?.address?.city ?? "Unknown city"
);


// ------------------------------------------------------
// PART D - PREDICT THE OUTPUT
// ------------------------------------------------------

console.log("\n========== PART D ==========");

// 1
// Prediction: "finally"
// Type: string
console.log(
  "1:",
  null || undefined || 0 || "" || "finally",
  "| Type:",
  typeof (null || undefined || 0 || "" || "finally")
);

// 2
// Prediction: 0
// Type: number
console.log(
  "2:",
  null ?? undefined ?? 0 ?? "" ?? "finally",
  "| Type:",
  typeof (null ?? undefined ?? 0 ?? "" ?? "finally")
);

// 3
// Prediction: "first truthy"
// Type: string
console.log(
  "3:",
  0 || "first truthy",
  "| Type:",
  typeof (0 || "first truthy")
);

// 4
// Prediction: 0
// Type: number
console.log(
  "4:",
  0 ?? "first non-nullish",
  "| Type:",
  typeof (0 ?? "first non-nullish")
);

// 5
// Prediction: false
// Type: boolean
console.log(
  "5:",
  true && false && "never reached",
  "| Type:",
  typeof (true && false && "never reached")
);

// 6
// Prediction: "third"
// Type: string
console.log(
  "6:",
  "first" && "second" && "third",
  "| Type:",
  typeof ("first" && "second" && "third")
);

// 7
// Prediction: "yes"
// Type: string
console.log(
  "7:",
  false || (true && "yes"),
  "| Type:",
  typeof (false || (true && "yes"))
);

// 8
// Prediction: "yes"
// Type: string
console.log(
  "8:",
  (false || true) && "yes",
  "| Type:",
  typeof ((false || true) && "yes")
);

// 9
// Prediction: 3
// Type: number
console.log(
  "9:",
  1 && 2 && 3,
  "| Type:",
  typeof (1 && 2 && 3)
);

// 10
// Prediction: undefined
// Type: undefined
console.log(
  "10:",
  null?.foo?.bar?.baz,
  "| Type:",
  typeof null?.foo?.bar?.baz
);





// ======================================================
// CHALLENGE 7 - typeof, instanceof, delete
// ======================================================


// ======================================================
// PART A - typeof Mastery
// ======================================================

console.log("\n========== PART A ==========");

console.log("1:", typeof 42);
console.log("2:", typeof "hello");
console.log("3:", typeof true);
console.log("4:", typeof undefined);
console.log("5:", typeof null);
console.log("6:", typeof {});
console.log("7:", typeof []);
console.log("8:", typeof function () {});
console.log("9:", typeof NaN);
console.log("10:", typeof undeclaredVariable);

/*
typeof undeclaredVariable returns "undefined"
instead of throwing an error.
*/

const myArray = [1, 2, 3];
const myObject = { name: "Joy" };

console.log("Array Check:", Array.isArray(myArray));
console.log("Object Check:", Array.isArray(myObject));

/*
Reliable array detection:

Array.isArray(value)

This correctly distinguishes arrays from objects.
*/


// ===========================*==========================
// PART*B - instanceof
// ======================================================

console.log("\n========== PART B ==========");

console.log("1:", [] instanceof Array);
console.log("2:", [] instanceof Object);
console.log("3:", {} instanceof Object);
console.log("4:", "hello" instanceof String);
console.log("5:", new String("hello") instanceof String);
console.log("6:", false); // 42 instanceof Number would crash
console.log("7:", new Date() instanceof Date);
console.log("8:", /abc/ instanceof RegExp);

/*
Why is "hello" instanceof String false?

Because "hello" is a primitive string,
not a String object.

Why is new String("hello") instanceof String true?

Because it creates a String object.
*/


/*
typeof is correct when:

Checking primitive types:

typeof "hello" === "string"


instanceof is correct when:

Checking constructed objects:

value instanceof Date
value instanceof Array
*/


// =====================*================================
/* PART C - delete and its gotchas
/* =================================*====================

console.log(*\n========== PART C ==========");
*
// ------------------------------*-----------------------
// 1 Delet* property from object
// ---------*----------------------------------*---------

const user = {
  name: *Lerato",
  age: 25,
  role: "student"
};

console.log("Before Delete:", user);

delete user.role;

console.log("After Delete:", user);


// ------------------------------------------------------
// 2 delete works on object properties
// ------------------------------------------------------

const demoObject = {
  value: 5
};

console.log("Before Delete:", demoObject);

const deleteResult = delete demoObject.value;

console.log("Delete Result:", deleteResult);
console.log("After Delete:", demoObject);

/*
delete removes object properties.

Trying delete on variables declared
with let, const, or var is not allowed
in strict mode.
*/


// ------------------------------------------------------
// 3 Delete and arrays
// ------------------------------------------------------

const arr = [1, 2, 3, 4];

console.log("Before:", arr);

delete arr[1];

console.log("After:", arr);
console.log("Length:", arr.length);
console.log("Index 1:", arr[1]);

/*
Arrays become:

[1, empty, 3, 4]

Length remains 4.

This is why delete is dangerous for arrays.
*/


// ------------------------------------------------------
// 4 Non-configurable property
// ------------------------------------------------------

const deletePiResult = delete Math.PI;

console.log("Delete Math.PI:", deletePiResult);
console.log("Math.PI:", Math.PI);

/*
Math.PI is non-configurable.

JavaScript prevents it from being deleted.
*/


/*
=========================================================
WHAT IS A NON-CONFIGURABLE PROPERTY?
=========================================================

A non-configurable property cannot be deleted
or reconfigured.

Many built-in JavaScript properties are protected
this way.

=========================================================
FINAL QUESTION
=========================================================

Do NOT use delete to remove items from arrays.

delete leaves an empty slot and keeps the
original length.

Use:

arr.splice(index, 1)

or

arr.filter(...)

These methods properly remove elements and keep
the array structure clean.
=========================================================
*/




// ======================================================
// CHALLENGE 8 - BITWISE PERMISSION SYSTEM
// ======================================================

// Permission flags
const READ = 1;      // 0001
const WRITE = 2;     // 0010
const DELETE = 4;    // 0100
const ADMIN = 8;     // 1000

console.log("========== BITWISE PERMISSIONS ==========");

// ------------------------------------------------------
// 1. Create a user with READ + WRITE
// ------------------------------------------------------

let userPermissions = READ | WRITE;

console.log(
  "User Permissions (READ + WRITE):",
  userPermissions
);

// ------------------------------------------------------
// 2. Create admin user with ALL permissions
// ------------------------------------------------------

const adminPermissions =
  READ | WRITE | DELETE | ADMIN;

console.log(
  "Admin Permissions:",
  adminPermissions
);

// ------------------------------------------------------
// 3. Check READ permission
// ------------------------------------------------------

console.log(
  "Has READ?",
  (userPermissions & READ)
    ? "Yes"
    : "No"
);

// ------------------------------------------------------
// 4. Check DELETE permission
// ------------------------------------------------------

console.log(
  "Has DELETE?",
  (userPermissions & DELETE)
    ? "Yes"
    : "No"
);

// ------------------------------------------------------
// 5. Grant DELETE permission
// ------------------------------------------------------

userPermissions |= DELETE;

console.log(
  "After Granting DELETE:",
  userPermissions
);

console.log(
  "Has DELETE Now?",
  (userPermissions & DELETE)
    ? "Yes"
    : "No"
);

// ------------------------------------------------------
// 6. Revoke WRITE permission
// ------------------------------------------------------

userPermissions &= ~WRITE;

console.log(
  "After Removing WRITE:",
  userPermissions
);

console.log(
  "Has WRITE?",
  (userPermissions & WRITE)
    ? "Yes"
    : "No"
);

// ------------------------------------------------------
// 7. Toggle ADMIN using XOR (^)
// ------------------------------------------------------

let staffPermissions = READ | WRITE;

console.log(
  "Before Toggle ADMIN:",
  staffPermissions
);

// Turn ADMIN on
staffPermissions ^= ADMIN;

console.log(
  "Toggle ADMIN ON:",
  staffPermissions
);

// Turn ADMIN off
staffPermissions ^= ADMIN;

console.log(
  "Toggle ADMIN OFF:",
  staffPermissions
);

// ------------------------------------------------------
// 8. Create SUPER_ADMIN using left shift
// ------------------------------------------------------

const SUPER_ADMIN = ADMIN << 1;

console.log(
  "SUPER_ADMIN:",
  SUPER_ADMIN
);

console.log(
  "SUPER_ADMIN Binary Value Created From ADMIN << 1"
);



// ======================================================
// INTERVIEW ANSWERS
// ======================================================

/*
=========================================================
QUESTION 1
Why use bitwise flags instead of an array such as
['read', 'write']?
=========================================================

1. Performance

Bitwise operations are extremely fast because they
operate directly on binary values.

Example:

permissions & READ

is faster than searching through an array.

2. Memory Efficiency

One number can store many permissions.

Example:

15

can represent:

READ
WRITE
DELETE
ADMIN

using only a single integer.
=========================================================
*/


/*
=========================================================
QUESTION 2
What is the downside of bitwise permissions?
=========================================================

Bitwise values are harder for humans to read.

Seeing:

13

does not immediately tell you which permissions
a user has.

For very small applications an array such as:

['read', 'write']

may be easier to understand and maintain.
=========================================================
*/


/*
=========================================================
QUESTION 3
Difference between &, &&, | and ||
=========================================================

&  = Bitwise AND
&& = Logical AND

|  = Bitwise OR
|| = Logical OR

Example:

const hasPermission = permissions & READ;

This checks bits inside a number.

Example:

const canLogin = isLoggedIn && isVerified;

This checks boolean conditions.

Using && instead of & in a permissions system
would produce incorrect permission checks and
cause silent security bugs.
=========================================================
*/
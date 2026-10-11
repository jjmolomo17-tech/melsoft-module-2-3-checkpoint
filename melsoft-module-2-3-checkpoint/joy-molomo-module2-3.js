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




hg
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





import { validateCreditCard, validateCVV } from "../../utils/creditCard.js";

test("234 is not a valid credit card", () => {
  expect(validateCreditCard(234)).toBe(false);
});

test("Empty is not a valid credit card", () => {
  expect(validateCreditCard()).toBe(false);
});

test("Empty string is not a valid credit card", () => {
  expect(validateCreditCard("")).toBe(false);
});

test("4024007120261648 is a valid visa card", () => {
  expect(validateCreditCard("4024007120261648")).toBe(true);
});

test("5187487350320951 is a valid visa card", () => {
  expect(validateCreditCard("5187487350320951")).toBe(true);
});

test("6011501336914867 is a valid discover card", () => {
  expect(validateCreditCard("6011501336914867")).toBe(true);
});

test("376999919281187 is a valid american express card", () => {
  expect(validateCreditCard("376999919281187")).toBe(true);
});

test("4024007120261648 (number) is a valid visa card", () => {
  expect(validateCreditCard(4024007120261648)).toBe(true);
});

test("5187487350320951 (number) is a valid visa card", () => {
  expect(validateCreditCard(5187487350320951)).toBe(true);
});

test("6011501336914867 (number) is a valid discover card", () => {
  expect(validateCreditCard(6011501336914867)).toBe(true);
});

test("376999919281187 (number) is a valid american express card", () => {
  expect(validateCreditCard(376999919281187)).toBe(true);
});

test("234 is a valid CVV", () => {
  expect(validateCVV(234)).toBe(true);
});

test("Empty is not a valid CVV", () => {
  expect(validateCVV()).toBe(false);
});

test("Empty string is not a valid CVV", () => {
  expect(validateCVV("")).toBe(false);
});

test("2342 is a valid CVV", () => {
  expect(validateCVV(2342)).toBe(true);
});

test("234223 is not a valid CVV", () => {
  expect(validateCVV(234223)).toBe(false);
});

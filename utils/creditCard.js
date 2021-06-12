import { CREDIT_CARD_REGULAR_EXPRESSION } from "./constants";

export const validateCreditCard = (number) => {
  return CREDIT_CARD_REGULAR_EXPRESSION.test(number);
};

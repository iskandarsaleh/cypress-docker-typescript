import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

let code = "";
let variableToVerify = ""; // we are assigning this through eval

When("I use DocString for code like this:", (dataString: string) => {
  code = dataString;
});

When("I ran it and verify that it executes it", () => {
  eval(code);
  expect(variableToVerify).to.equal("hello world");
});

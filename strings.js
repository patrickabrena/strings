//embedding javascript//

const name = "daddy";
const greeting = `Hello ${name}`;

document.getElementById("embedded-js").innerHTML = greeting;
console.log(greeting);

//using embedded js to join two variables together//

const what_is_up = "¿Qué pasa ";
const daddy = "papi";
const oh_papi = `${what_is_up}${daddy}`;

document.getElementById("joint").innerHTML = oh_papi;
console.log(oh_papi);

//embedded js in string concatenation example//

const button_1 = document.querySelector("#btn_1");
let concat_in_context = document.getElementById("press-me-1");

function greet() {
  const name_btn = prompt("What is your name?");
  const greeting_btn = document.querySelector("#conc-context-output");
  greeting_btn.textContent = `Hello ${name_btn}, nice to meet you!!`;
}

button_1.addEventListener("click", greet);
button_1.addEventListener("click", () => {
  let visibility = concat_in_context.getAttribute("data-visible");
  if (visibility === "false") {
    concat_in_context.setAttribute("data-visible", true);
    concat_in_context.style.opacity = "100%";
  } else if (visibility === "true") {
    concat_in_context.setAttribute("data-visible", false);
    concat_in_context.style.opacity = "0%";
  }
});
//concatenantion vs template literals

const name_con = "Chris";
const greeting_con = "Hello";
console.log(greeting_con + " , " + name_con);

const name_tem = "John";
const greeting_tem = "Hello";
console.log(`${name_tem}, ${greeting_tem}`);

const button_2 = document.querySelector("#btn_2");

let concat_text_blob = document.getElementById("press-me-2");
let inner_text_blob = document.getElementsByClassName("code-text");

button_2.addEventListener("click", () => {
  let visibility = concat_text_blob.getAttribute("data-visible");
  // concat_text_blob.style.opacity = "100";
  if (visibility === "false") {
    concat_text_blob.setAttribute("data-visible", true);
    concat_text_blob.style.opacity = "100%";
  } else if (visibility === "true") {
    concat_text_blob.setAttribute("data-visible", false);
    concat_text_blob.style.opacity = "0%";
  }
});

//Expressions in Strings//

const song = "Camden Arc - 'I Don't Wanna Fall in Love'";
const score = 9.6;
const highestScore = 10;
const output = ` The song, ${song} slaps. I give it ${
  (score / highestScore) * 100
}%`;
console.log(output);

const button_3 = document.querySelector("#btn_3");

let expression_in_strings_examples = document.getElementById("press-me-3");
let expressions_code_text = document.getElementsByClassName("code_text");

button_3.addEventListener("click", () => {
  let visibility = expression_in_strings_examples.getAttribute("data-visible");
  if (visibility === "false") {
    expression_in_strings_examples.setAttribute("data-visible", true);
    expressions_code_text.style.opacity = "0%";
  } else if (visibility === "true") {
    expression_in_strings_examples.setAttribute("data-visible", false);
    expressions_code_text.style.opacity = "100%";
  }
});

//Multiline String//
const newline = `One day you finally knew 
what you had to do, and began,`;
console.log(newline);

const button_4 = document.querySelector("#btn_4");

let multiline_string_example = document.getElementById("press-me-4");
let multiline_code_text = document.getElementsByClassName("code_text");

button_4.addEventListener("click", () => {
  let visibility = multiline_string_example.getAttribute("data-visible");
  if (visibility === "false") {
    multiline_string_example.setAttribute("data-visible", true);
    multiline_code_text.style.opacity = "0%";
  } else if (visibility === "true") {
    multiline_string_example.setAttribute("data-visible", false);
    multiline_code_text.style.opacity = "100%";
  }
});

//Numbers vs Strings
const name_NvS = "Front ";
const number_NvS = 242;
console.log(name_NvS + number_NvS);
const button_5 = document.querySelector("#btn_5");
button_5.addEventListener("click", () => {
  let numbers_vs_strings_example = document.getElementById("press-me-5");
  let numbers_vs_strings_code_text =
    document.getElementsByClassName("code_text");
  let visibility = numbers_vs_strings_example.getAttribute("data-visible");
  if (visibility === "false") {
    numbers_vs_strings_example.setAttribute("data-visible", true);
    numbers_vs_strings_code_text.style.opacity = "0%";
  } else if (visibility === "true") {
    numbers_vs_strings_example.setAttribute("data-visible", false);
    numbers_vs_strings_code_text.style.opacity = "100%";
  }
});

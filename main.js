const containerDiv = document.querySelector(".container");

const faqs = [
  {
    question: "What is JavaScript, and why is it used?",
    answer:
      "JavaScript is a programming language primarily used for creating interactive and dynamic content on websites. It allows developers to make web pages responsive to user actions, like clicks and form inputs, enhancing the user experience.",
  },
  {
    question: "How is JavaScript different from HTML and CSS?",
    answer:
      "HTML is used for structuring content on a webpage, and CSS is used for styling it. JavaScript, on the other hand, adds interactivity, enabling the web page to respond to user actions.",
  },
  {
    question: "What are arrays in JavaScript?",
    answer:
      "Arrays are data structures in JavaScript used to store multiple values in a single variable. They are useful for keeping a list of items and can hold various data types, such as numbers, strings, or even other arrays.",
  },
];

faqs.map((faq) => {
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  h3.innerText = faq.question;
  p.innerText = faq.answer

  p.classList.add("answer")

  p.style.display = "none"

  h3.addEventListener("click", () => {
    if (p.style.display == "block") {
      p.style.display = "none";
    }

    if (p.style.display == "none") {
      p.style.display = "block";
    }
  })

  containerDiv.append(h3)
  containerDiv.append(p);
});

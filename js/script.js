"strict mode";
const rate = document.querySelector(".rate");
const span = document.querySelectorAll(".rate span");
const button = document.querySelector("button");
const select = document.querySelector(".select-rate");
const thinks = document.querySelector(".thinks-message");
const rateNumber = document.querySelector(".rate-number");

rate.addEventListener("click", (e) => {
  span.forEach((span) => span.classList.remove("active"));
  e.target.closest("span").classList.add("active");

  rateNumber.textContent = `you selected ${
    e.target.closest("span").textContent
  } of 5`;
});

button.addEventListener("click", () => {
  select.classList.add("hidden");
  thinks.classList.remove("hidden");
});

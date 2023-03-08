const submit = document.querySelector('.submit')
const main1 = document.querySelector('.main-1')
const main2 = document.querySelector('.main-2')
const selection = document.querySelector("#num-choice");
const ratings = document.querySelectorAll(".rate");

submit.addEventListener('click', function() {
 main2.classList.remove('hidden')
  main1.classList.add('hidden')
})

ratings.forEach((rate) => {
  rate.addEventListener("click", function () {
    selection.innerHTML = rate.innerHTML;
  });
});

// Show & hide Column-1 & Column-2
let columnOne = document.querySelector(".column-1");
let columnTwo = document.querySelector(".column-2");
let serialEl = document.querySelector(".column-2 h3")
let card = document.querySelector(".card");

let btnNext = document.getElementById("next");
let btnBack = document.getElementById("back");

btnNext.addEventListener('click', () => {
    columnOne.classList.add("hide");
    columnTwo.classList.add("show");
    card.classList.add("flip");

    let characters = "1234567890";
    let charsCount = 10;
    let randomSerial = "";
    for (let i = 0; i < charsCount; i++) {
        randomSerial += characters[Math.floor(Math.random() * characters.length)];
    };
    serialEl.innerHTML = randomSerial;
});
btnBack.addEventListener('click', () => {
    columnOne.classList.remove("hide");
    columnTwo.classList.remove("show");
    card.classList.remove("flip");
});

// Full Card
let henum = document.querySelector(".henumber");
let heName = document.querySelector(".hename");
let data = document.querySelector(".valid-date h5");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let formNumber = document.querySelector("#formNum");
let formName = document.querySelector("#forName");

formNumber.oninput = () => {
    let numValue = `${formNumber.value}`;
    henum.textContent = numValue;
};
formName.oninput = () => {
    let namValue = `${formName.value}`;
    heName.textContent = namValue;
};
month.addEventListener('input', () => {
    let monthValue = `${month.value}`;
    data.textContent = `${monthValue} / 00`;
    year.addEventListener('input', () => {
        let yearValue = `${year.value}`;
    data.textContent = `${monthValue} / ${yearValue}`;
    });
});
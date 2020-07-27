"use strict";

class Clothes {
  constructor(sex, size, color, style) {
    this.sex = sex;
    this.size = size;
    this.color = color;
    this.style = style;
  }
}

const clothes = [
  new Clothes("man", "small size", "blue", "t"),
  new Clothes("man", "large size", "blue", "t"),
  new Clothes("man", "small size", "yellow", "t"),
  new Clothes("man", "large size", "yellow", "t"),
  new Clothes("man", "small size", "pink", "t"),
  new Clothes("man", "large size", "pink", "t"),
  new Clothes("man", "small size", "blue", "p"),
  new Clothes("man", "large size", "blue", "p"),
  new Clothes("man", "small size", "yellow", "p"),
  new Clothes("man", "large size", "yellow", "p"),
  new Clothes("man", "small size", "pink", "p"),
  new Clothes("man", "large size", "pink", "p"),
  new Clothes("man", "small size", "blue", "s"),
  new Clothes("man", "large size", "blue", "s"),
  new Clothes("man", "small size", "yellow", "s"),
  new Clothes("man", "large size", "yellow", "s"),
  new Clothes("man", "small size", "pink", "s"),
  new Clothes("man", "large size", "pink", "s"),
  new Clothes("female", "small size", "blue", "t"),
  new Clothes("female", "large size", "blue", "t"),
  new Clothes("female", "small size", "yellow", "t"),
  new Clothes("female", "large size", "yellow", "t"),
  new Clothes("female", "small size", "pink", "t"),
  new Clothes("female", "large size", "pink", "t"),
  new Clothes("female", "small size", "blue", "p"),
  new Clothes("female", "large size", "blue", "p"),
  new Clothes("female", "small size", "yellow", "p"),
  new Clothes("female", "large size", "yellow", "p"),
  new Clothes("female", "small size", "pink", "p"),
  new Clothes("female", "large size", "pink", "p"),
  new Clothes("female", "small size", "blue", "s"),
  new Clothes("female", "large size", "blue", "s"),
  new Clothes("female", "small size", "yellow", "s"),
  new Clothes("female", "large size", "yellow", "s"),
  new Clothes("female", "small size", "pink", "s"),
  new Clothes("female", "large size", "pink", "s"),
];

const choice = document.querySelector(".main");
const ran = () => clothes.sort(() => 0.5 - Math.random());
for (let clotheAll of ran()) {
  choice.innerHTML += `<div class="choice__clothes">
    <img src="imgs/${clotheAll.color}_${clotheAll.style}.png" alt="" />
    <span>${clotheAll.sex},</span>
    <span>${clotheAll.size}</span>
    </div>
    `;
}

const blueClothes = document.querySelector(".Blue__button");
const yellowClothes = document.querySelector(".Yellow__button");
const pinkClothes = document.querySelector(".Pink__button");
const tClothes = document.querySelector(".navbar img:nth-child(1)");
const pClothes = document.querySelector(".navbar img:nth-child(2)");
const sClothes = document.querySelector(".navbar img:nth-child(3)");

const foundBlue = clothes.filter((clothes) => clothes.color === "blue");
blueClothes.addEventListener("click", () => {
  choice.innerHTML = "";
  for (let blue of foundBlue) {
    choice.innerHTML += `<div class="choice__clothes">
    <img src="imgs/${blue.color}_${blue.style}.png" alt="" />
    <span>${blue.sex},</span>
    <span>${blue.size}</span>
    </div>
    `;
  }
});

const foundYellow = clothes.filter((clothes) => clothes.color === "yellow");
yellowClothes.addEventListener("click", () => {
  choice.innerHTML = "";
  for (let yellow of foundYellow) {
    choice.innerHTML += `<div class="choice__clothes">
    <img src="imgs/${yellow.color}_${yellow.style}.png" alt="" />
    <span>${yellow.sex},</span>
    <span>${yellow.size}</span>
    </div>
    `;
  }
});

const foundPink = clothes.filter((clothes) => clothes.color === "pink");
pinkClothes.addEventListener("click", () => {
  choice.innerHTML = "";
  for (let pink of foundPink) {
    choice.innerHTML += `<div class="choice__clothes">
    <img src="imgs/${pink.color}_${pink.style}.png" alt="" />
    <span>${pink.sex},</span>
    <span>${pink.size}</span>
    </div>
    `;
  }
});

const foundT = clothes.filter((clothes) => clothes.style === "t");
tClothes.addEventListener("click", () => {
  choice.innerHTML = "";
  for (let t of foundT) {
    choice.innerHTML += `<div class="choice__clothes">
    <img src="imgs/${t.color}_${t.style}.png" alt="" />
    <span>${t.sex},</span>
    <span>${t.size}</span>
    </div>
    `;
  }
});

const foundP = clothes.filter((clothes) => clothes.style === "p");
pClothes.addEventListener("click", () => {
  choice.innerHTML = "";
  for (let p of foundP) {
    choice.innerHTML += `<div class="choice__clothes">
    <img src="imgs/${p.color}_${p.style}.png" alt="" />
    <span>${p.sex},</span>
    <span>${p.size}</span>
    </div>
    `;
  }
});

const foundS = clothes.filter((clothes) => clothes.style === "s");
sClothes.addEventListener("click", () => {
  choice.innerHTML = "";
  for (let s of foundS) {
    choice.innerHTML += `<div class="choice__clothes">
    <img src="imgs/${s.color}_${s.style}.png" alt="" />
    <span>${s.sex},</span>
    <span>${s.size}</span>
    </div>
    `;
  }
});

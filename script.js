function generateNumber() {
  if (i[Math.floor(Math.random() * i.length)] == 0) {
    satu = parseInt(Math.random() * 9) + satu;
  } else {
    satu = "-" + satu;
  }
  if (i[Math.floor(Math.random() * i.length)] == 0) {
    dua = parseInt(Math.random() * 9) + dua;
  } else {
    dua = "-" + dua;
  }
  if (i[Math.floor(Math.random() * i.length)] == 0) {
    tiga = parseInt(Math.random() * 9) + tiga;
  } else {
    tiga = "-" + tiga;
  }

  line1.innerHTML = satu;
  line2.innerHTML = dua;
  line3.innerHTML = tiga;

  if (line1.getBoundingClientRect().right > bt1.getBoundingClientRect().left + 5) {
    satu = satu.slice(0, -1);
  }
  if (line2.getBoundingClientRect().right > bt2.getBoundingClientRect().left + 5) {
    dua = dua.slice(0, -1);
  }
  if (line3.getBoundingClientRect().right > bt3.getBoundingClientRect().left + 5) {
    tiga = tiga.slice(0, -1);
  }
}

let speed = 300; //ms

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

const bt1 = document.getElementById("1");
const bt2 = document.getElementById("2");
const bt3 = document.getElementById("3");

const lv1 = document.getElementById("lv1");
const lv2 = document.getElementById("lv2");
const lv3 = document.getElementById("lv3");

let satu = "";
let dua = "";
let tiga = "";

let i = ["-", "-", "-", 0, "-", 0, "-", 0, "-", "-"];
let val = "-";
let nilai = 0;
let target = 10;
let skor = 0;

let interval = setInterval(generateNumber, speed);

bt1.addEventListener("click", function () {
  val = satu[satu.length - 1];
  if (val != "-") {
    nilai += parseInt(val);
    document.getElementById("nilai").innerHTML = nilai;
    if (nilai == target) {
      target += 10;
      document.getElementById("target").innerHTML = target;
      skor += 1;
      document.getElementById("skor").innerHTML = skor;
    }
  }
});
bt2.addEventListener("click", function () {
  val = dua[dua.length - 1];
  if (val != "-") {
    nilai = nilai - parseInt(val);
    document.getElementById("nilai").innerHTML = nilai;
    if (nilai == target) {
      target += 10;
      document.getElementById("target").innerHTML = target;
      skor += 1;
      document.getElementById("skor").innerHTML = skor;
    }
  }
});
bt3.addEventListener("click", function () {
  val = tiga[tiga.length - 1];
  if (val != "-") {
    nilai = nilai * parseInt(val);
    document.getElementById("nilai").innerHTML = nilai;
    if (nilai == target) {
      target += 10;
      document.getElementById("target").innerHTML = target;
      skor += 1;
      document.getElementById("skor").innerHTML = skor;
    }
  }
});

lv1.addEventListener("click", function () {
  speed = 700;
  clearInterval(interval);
  line1.innerHTML = "";
  line2.innerHTML = "";
  line3.innerHTML = "";
  level.innerHTML = "Level 1";
  setTimeout(function () {
    level.innerHTML = "";
    interval = setInterval(generateNumber, speed);
  }, 500);
});
lv2.addEventListener("click", function () {
  speed = 300;
  clearInterval(interval);
  line1.innerHTML = "";
  line2.innerHTML = "";
  line3.innerHTML = "";
  level.innerHTML = "Level 2";
  setTimeout(function () {
    level.innerHTML = "";
    interval = setInterval(generateNumber, speed);
  }, 500);
});
lv3.addEventListener("click", function () {
  speed = 100;
  clearInterval(interval);
  line1.innerHTML = "";
  line2.innerHTML = "";
  line3.innerHTML = "";
  level.innerHTML = "Level 3";
  setTimeout(function () {
    level.innerHTML = "";
    interval = setInterval(generateNumber, speed);
  }, 500);
});

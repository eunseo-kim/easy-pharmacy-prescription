var a = "";
var b = "";
var num = [];
var ans;

function sendNum(digit) {
  num.push(digit);

  if (num.length != 1) {
    a = "";
    document.querySelector(".screen").innerHTML = a;
  }

  for (i = 0; i < num.length; i++) {
    a = a + num[i];
  }

  document.querySelector(".screen").innerHTML = a;
}

function equalTo() {
  document.querySelector(".screen").innerHTML = "";
  b = "";
  for (i = 0; i < num.length; i++) {
    b += num[i];
  }

  document.querySelector(".expression").innerHTML = b;

  try {
    ans = eval(b);
    document.querySelector(".screen").innerHTML = ans || "";
  } catch {
    ans = 0;
    document.querySelector(".screen").innerHTML = "수식 오류!";
  }

  while (num.length > 0) {
    console.log("pop");
    num.pop();
  }
  try {
    num.push(ans.toString());
  } catch {}
}

function clearScr() {
  document.querySelector(".screen").innerHTML = "";
  document.querySelector(".expression").innerHTML = "";

  while (num.length > 0) {
    num.pop();
  }

  a = "";
  b = "";
}

function deleteScr() {
  const currentScr = document.querySelector(".screen").innerHTML;
  document.querySelector(".screen").innerHTML = currentScr.substr(0, currentScr.length - 1);
  num.pop();
}

function offCalculater() {
  document.querySelector(".calculater").classList.toggle("hidden");
}

function onCalculater() {
  document.querySelector(".calculater").classList.remove("hidden");
}

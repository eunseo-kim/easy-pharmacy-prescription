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
    a = ans;
    document.querySelector(".screen").innerHTML = ans || "";
  } catch {
    ans = "";
    clearScr();
    document.querySelector(".expression").innerHTML = "수식 오류!";
  }

  while (num.length > 0) {
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
  const newScr = currentScr.substr(0, currentScr.length - 1);
  document.querySelector(".screen").innerHTML = newScr;
  a = newScr;
  num = [newScr];
}

function offCalculater() {
  document.querySelector(".calculater").classList.toggle("hidden");
}

function onCalculater() {
  document.querySelector(".calculater").classList.remove("hidden");
}

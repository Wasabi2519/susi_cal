let total = 0;
let otherTotal = 0;  // その他のみの合計を追跡するための新しい変数
let button1Clicks = 0;
let button2Clicks = 0;
let button3Clicks = 0;

document.getElementById("button1").addEventListener("click", function() {
  total += 120;
  button1Clicks++;
  updateDisplay();
});

document.getElementById("button2").addEventListener("click", function() {
  total += 180;
  button2Clicks++;
  updateDisplay();
});

document.getElementById("button3").addEventListener("click", function() {
  total += 360;
  button3Clicks++;
  updateDisplay();
});

document.getElementById("addButton").addEventListener("click", function() {
  let inputVal = Number(document.getElementById("inputBox").value);
  total += inputVal;
  otherTotal += inputVal;  // 入力された数値を「その他」の合計に追加
  updateDisplay();
});

document.getElementById("addButton").addEventListener("click", function() {
    let inputVal = Number(document.getElementById("inputBox").value);
    if (inputVal < 0) {
      alert("値は0以上である必要があります！");
    } else {
      total += inputVal;
      otherTotal += inputVal;  // 入力された数値を「その他」の合計に追加
      updateDisplay();
    }
    document.getElementById("addButton").addEventListener("click", function() {
  let inputVal = Number(document.getElementById("inputBox").value);
  if (inputVal > 0) {
    total += inputVal;
    otherTotal += inputVal;  // 入力された数値を「その他」の合計に追加
    updateDisplay();
  }
});

  });
  

function updateDisplay() {
  document.getElementById("result").innerHTML = `
  合計: ${total} <br/>
  その他の合計: ${otherTotal} <br/>
  黄皿 🟡 : ${button1Clicks}皿<br/>
  赤皿 🔴: ${button2Clicks}皿<br/>
  黒皿 ⚫️: ${button3Clicks}皿`;
}

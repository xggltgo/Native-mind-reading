//简化代码
function $(selector) {
  return document.querySelector(selector);
}
//随机值
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//获取dom元素
var startGameBtn = $(".startGame");
var c_right = $(".c-right");
var result = $(".result");
var index;
//初始化页面元素
function init() {
  c_right.innerHTML = "";
  index = getRandom(0, 16);
  for (var i = 0; i < 100; i++) {
    var span = document.createElement("span");
    span.innerText = i;
    var div = document.createElement("div");
    div.appendChild(span);
    div.className = "game-item";
    if (i % 9 === 0) {
      div.style.background = `url(./images/values/${index}.png)`;
      div.style.backgroundSize = "cover";
    } else {
      div.style.background =
        "url(./images/values/" + getRandom(0, 16) + ".png)";
      div.style.backgroundSize = "cover";
    }
    c_right.appendChild(div);
  }
}
init();
var isGameOver = false;
var deg = 0
// 注册事件
startGameBtn.addEventListener("click", function () {
  if (!isGameOver) {
    deg = deg===3600?0:3600;
    isGameOver = true;
    this.style.transform = "rotate("+ deg +"deg)";
    this.addEventListener("transitionend", function () {
      result.style.background = `url(./images/values/${index}.png)`;
      result.style.backgroundSize = "cover";
      result.style.width = "100px";
      result.style.height = "100px";
    });
  } else {
    if (window.confirm("您是否还要再玩一次")) {
      init();
      isGameOver = false;
      result.style.background = `url(./images/round.png)`;
      result.style.backgroundSize = "cover";
      result.style.width = "156px";
      result.style.height = "156px";
    }
  }
});

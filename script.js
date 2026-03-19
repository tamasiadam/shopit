// hozzaadas
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var spanText = document.createElement("span");
  spanText.className = "task-text";
  spanText.textContent = inputValue;
  li.appendChild(spanText);
  if (inputValue === '') {
    alert("írj ide vmit");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

// torles X

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function (e) {
      e.stopPropagation();
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 

// bezarja
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function (e) {
    e.stopPropagation();
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// kipipálja
var list = document.querySelector('#myUL');

list.addEventListener('click', function (ev) {
  var li = ev.target.closest("li");
  if (li && !ev.target.classList.contains("close")) {
    li.classList.toggle("checked");
  }
});
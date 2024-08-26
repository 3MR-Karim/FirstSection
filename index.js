document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".ItemBody .item");
  var indicators = document.querySelectorAll(".carousel-indicators li");
  var currentIndex = 0;

  function showItem(index) {
    items[currentIndex].classList.remove("active");
    indicators[currentIndex].classList.remove("active");
    currentIndex = index;
    items[currentIndex].classList.add("active");
    indicators[currentIndex].classList.add("active");
  }

  function nextItem() {
    var newIndex = (currentIndex + 1) % items.length;
    showItem(newIndex);
  }

  function prevItem() {
    var newIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(newIndex);
  }

  // Auto-change every 5 seconds
  setInterval(nextItem, 5000);

  document.querySelector(".left-arrow").addEventListener("click", prevItem);
  document.querySelector(".right-arrow").addEventListener("click", nextItem);

  indicators.forEach(function (indicator, index) {
    indicator.addEventListener("click", function () {
      showItem(index);
    });
  });
});
// _______________________________________________________________________
let close = document.querySelector(".close");

close.addEventListener("click", () => {
  document.querySelector(".itemmmm").style.display = "none"; // استخدم النقطة مع الفئة
});

let List = document.querySelector(".Lists");
List.addEventListener("click", () => {
  document.querySelector(".itemmmm").style.display = "flex"; // استخدم النقطة مع الفئة
});

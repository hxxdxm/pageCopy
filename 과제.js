const readyLater = ["nav-about", "nav-talents", "nav-goods", "nav-guideline"];

const navContact = document.getElementById("nav-contact");

navContact.addEventListener("click", function (e) {
  e.preventDefault();

  const message = prompt("문의내용을 입력해주세요.");

  if (message === null) {
    // 취소 버튼 누른 경우 -> 아무것도 안 함
    return;
  }

  if (message.trim() === "") {
    alert("문의 내용을 입력해주세요!");
    return;
  }

  alert("문의가 전송되었습니다.\n\n[내용]\n" + message);
});

readyLater.forEach(function (id) {
  const el = document.getElementById(id);
  el.addEventListener("click", function (e) {
    e.preventDefault(); // 페이지 이동 막기
    alert("준비중인 탭입니다..!");
  });
});

// 실제로 이동해야 하는 탭들 (news, music)
const navNews = document.getElementById("nav-news");
const navMusic = document.getElementById("nav-music");

navNews.addEventListener("click", function (e) {
  e.preventDefault();
  const target = document.getElementById("news-section");
  target.scrollIntoView({ behavior: "smooth" });
});

navMusic.addEventListener("click", function (e) {
  e.preventDefault();
  const target = document.getElementById("music-section");
  target.scrollIntoView({ behavior: "smooth" });
});

const snsIcons = document.querySelectorAll(".sns-icon");

snsIcons.forEach(function (icon) {
  icon.addEventListener("mouseenter", function () {
    icon.style.transform = "translateY(-8px)";
    icon.style.transition = "transform 0.2s ease";
  });

  icon.addEventListener("mouseleave", function () {
    icon.style.transform = "translateY(0)";
  });
});

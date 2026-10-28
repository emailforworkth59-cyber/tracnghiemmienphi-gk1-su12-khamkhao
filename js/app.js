// ===== khởi động quiz =====

document.addEventListener("DOMContentLoaded", () => {
  renderQuiz();

  const bubble = document.getElementById("progressBubble");
  const panel = document.getElementById("progressPanel");

  if (bubble) {
    bubble.onclick = () => {
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    };
  }
});
// ===== WELCOME / TERMS POPUP =====
// ===== WELCOME / TERMS POPUP (Hiện mỗi lần mở web) =====
document.addEventListener("DOMContentLoaded", () => {
  const welcomeModal = document.getElementById("welcomeModal");
  const acceptBtn = document.getElementById("acceptTerms");

  // Luôn hiển thị popup mỗi khi load trang
  if (welcomeModal) {
    welcomeModal.style.display = "flex";
  }

  if (acceptBtn) {
    acceptBtn.onclick = function () {
      if (welcomeModal) {
        welcomeModal.style.display = "none";
      }
    };
  }
});
// ===== nộp bài =====
const submitBtn = document.getElementById("submit");
const submitModal = document.getElementById("submitModal");

if (submitBtn) {
  submitBtn.onclick = function () {
    submitModal.style.display = "flex";
  };
}

const cancelSubmitBtn = document.getElementById("cancelSubmit");
if (cancelSubmitBtn) {
  cancelSubmitBtn.onclick = function () {
    submitModal.style.display = "none";
  };
}

const confirmSubmitBtn = document.getElementById("confirmSubmit");
if (confirmSubmitBtn) {
  confirmSubmitBtn.onclick = function () {
    submitModal.style.display = "none";

    let correct = gradeQuiz();
    let total = document.querySelectorAll(".question").length;

    let resultEl = document.getElementById("result");
    resultEl.innerHTML = `Kết quả: Đúng ${correct}/${total} câu ( ${(
      (correct / total) *
      100
    ).toFixed(1)}% )`;

    resultEl.scrollIntoView({ behavior: "smooth" });
  };
}

// ===== làm lại =====

const retryBtn = document.getElementById("retry");
const modal = document.getElementById("retryModal");

retryBtn.onclick = function () {
  modal.style.display = "flex";
};

document.getElementById("cancelRetry").onclick = function () {
  modal.style.display = "none";
};

document.getElementById("confirmRetry").onclick = function () {
  modal.style.display = "none";

  renderQuiz();
  document.getElementById("result").innerHTML = "";
};
// ===== dark mode =====

const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.innerText = "SÁNG";
  } else {
    themeToggle.innerText = "TỐI";
  }
};

// ===== xem ảnh phóng to =====

function openImage(img) {
  const modal = document.getElementById("imgModal");
  const preview = document.getElementById("imgPreview");

  preview.src = img.src;
  modal.style.display = "flex";
}

function closeImage() {
  document.getElementById("imgModal").style.display = "none";
}

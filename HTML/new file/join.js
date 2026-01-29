const form = document.getElementById("form");

// 유효성 검사 함수
function validateId(id) {
  return /^[a-zA-Z0-9]{6,16}$/.test(id);
}

function validatePassword(pw) {
  return pw.length >= 8 && /[a-zA-Z]/.test(pw) && /[0-9]/.test(pw);
}

function validatePhone(phone) {
  return /^01[0-9]-\d{3,4}-\d{4}$/.test(phone);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userId = e.target.id;
  const pw1 = e.target.pw1;
  const pw2 = e.target.pw2;
  const userName = e.target.name;
  const phone = e.target.phone;
  const email = e.target.email;

  let isValid = true;

  // 아이디
  if (!validateId(userId.value)) {
    userId.classList.add("is-invalid");
    isValid = false;
  } else {
    userId.classList.remove("is-invalid");
    userId.classList.add("is-valid");
  }

  // 비밀번호
  if (!validatePassword(pw1.value)) {
    pw1.classList.add("is-invalid");
    isValid = false;
  } else {
    pw1.classList.remove("is-invalid");
    pw1.classList.add("is-valid");
  }

  // 비밀번호 확인
  if (pw1.value !== pw2.value || !pw2.value) {
    pw2.classList.add("is-invalid");
    isValid = false;
  } else {
    pw2.classList.remove("is-invalid");
    pw2.classList.add("is-valid");
  }

  // 이름
  if (!userName.value.trim()) {
    userName.classList.add("is-invalid");
    isValid = false;
  } else {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
  }

  // 전화번호
  if (!validatePhone(phone.value)) {
    phone.classList.add("is-invalid");
    isValid = false;
  } else {
    phone.classList.remove("is-invalid");
    phone.classList.add("is-valid");
  }

  // 이메일
  if (!email.value || !email.checkValidity()) {
    email.classList.add("is-invalid");
    isValid = false;
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  }

  if (!isValid) return;

  // 성공 시 알림 + 페이지 이동
  alert(
`회원가입 완료!

아이디: ${userId.value}
이름: ${userName.value}
전화번호: ${phone.value}
이메일: ${email.value}`
  );

  window.location.href = "welcome.html";
});

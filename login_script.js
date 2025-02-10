const idInput = document.getElementById("id_input");
const pwInput = document.getElementById("password_input");
const loginButton = document.getElementById("login_button");
const signupIdInput = document.getElementById("signup_id_input");
const signupPwInput = document.getElementById("signup_password_input");
const signupButton = document.getElementById("signup_button");
const checkButton = document.getElementById("check_button");

let users = {}; // 사용자 정보를 저장할 객체

function signupButtonPressed() {
  const signupId = signupIdInput.value;
  const signupPw = signupPwInput.value;
  if (signupId === "" || signupPw === "") {
    alert("아이디와 비밀번호를 입력해주세요.");
  } else {
    if (users[signupId]) {
      alert("이미 존재하는 아이디입니다.");
    } else {
      users[signupId] = signupPw;
      alert("회원가입이 완료되었습니다.");
      signupIdInput.value = "";
      signupPwInput.value = "";
    }
  }
}

function loginButtonPressed() {
  const id = idInput.value;
  const pw = pwInput.value;
  if (id === "" || pw === "") {
    alert("아이디와 비밀번호를 입력해주세요.");
  } else {
    if (!users[id]) {
      alert("존재하지 않는 아이디입니다.");
    } else if (users[id] !== pw) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      alert("로그인이 완료되었습니다.");
      idInput.value = "";
      pwInput.value = "";
      checkButton.style.display = "block"; // 출석 체크 버튼 표시
    }
  }
}

function checkButtonPressed() {
  alert("출석 체크가 완료되었습니다.");
}

signupButton.addEventListener("click", signupButtonPressed); // 이벤트 리스너 등록
loginButton.addEventListener("click", loginButtonPressed); // 이벤트 리스너 등록
checkButton.addEventListener("click", checkButtonPressed); // 이벤트 리스너 등록
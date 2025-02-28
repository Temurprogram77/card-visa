let username = document.querySelector("#username");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let address = document.querySelector("#address");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let btn = document.querySelector("#btn");
let formInp = document.querySelectorAll(".form input");

// wrong text

let wrong1 = document.querySelector(".wrong1");
let wrong2 = document.querySelector(".wrong2");
let wrong3 = document.querySelector(".wrong3");
let wrong4 = document.querySelector(".wrong4");
let wrong5 = document.querySelector(".wrong5");
let wrong6 = document.querySelector(".wrong6");
let wrong7 = document.querySelector(".wrong7");

// RegEx

let userNameRegex = /[a-zA-Z]/;
let emailRegex = /[a-z0-9]{8,12}@gmail/;
let phoneRegex = /\+998[0-9]/;
let passwordRegex = /[0-9]{8,10}/;

btn.addEventListener("click", () => {
  if (
    !username.value == "" &&
    !email.value == "" &&
    !password.value == "" &&
    !confirmPassword.value == "" &&
    !phone.value == "" &&
    !address.value == ""
  ) {
    if (
      userNameRegex.test(username.value) &&
      emailRegex.test(email.value) &&
      password.value === confirmPassword.value &&
      passwordRegex.test(password.value) &&
      passwordRegex.test(confirmPassword.value) &&
      phoneRegex.test(phone.value)
    ) {
      console.log("tog'ri");

      for (let i = 0; i < formInp.length; i++) {
        formInp[i].style.border = "2px solid green";
      }
      wrong7.classList.remove("hidden");
      wrong7.style.color = "green";
      wrong7.style.textAlign = "center";
      wrong7.textContent = "Thank You! ";
      Toastify({
        text: "Login successful!",
        duration: 2000,
        close: true,
        gravity: "top",
        position: "center",
        backgroundColor: "green",
        borderRadius: "25px",
      }).showToast();
      setTimeout(() => {
        for (let i = 0; i < formInp.length; i++) {
          formInp[i].style.border = "2px solid #ffffff7a";
          formInp[i].value = "";
        }
        wrong7.classList.add("hidden");
        window.location.href = "/public/home.html";
      }, 1500);
    } else {
      console.log("error");
      wrong7.classList.remove("hidden");
      wrong7.textContent = "Iltimos to'g'ri kiriting!";
      for (let i = 0; i < formInp.length; i++) {
        formInp[i].style.border = "2px solid red";
      }
    }
  } else {
    console.log("to'liq yuq");
    wrong7.classList.remove("hidden");
    wrong7.style.textAlign = "center";
    Toastify({
      text: "Iltimos avval to'ldiring!",
      duration: 2000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: "red",
      borderRadius: "25px",
    }).showToast();
  }
});

username.addEventListener("input", () => {
  if (!username.value == "") {
    if (userNameRegex.test(username.value)) {
      console.log(username.value);
      wrong1.classList.add("hidden");
    }
  } else {
    console.log("error");
    wrong1.classList.remove("hidden");
    wrong1.style.textAlign = "center";
    wrong1.textContent = "Username faqat harflar bilan yoziladi!";
  }
});

email.addEventListener("input", () => {
  if (!email.value == "") {
    if (emailRegex.test(email.value)) {
      console.log(email.value);
      wrong2.classList.add("hidden");
    } else {
      wrong2.classList.remove("hidden");
      wrong2.style.textAlign = "center";
      wrong2.textContent = "Iltimos emailni 8-12 belgi, harf b/n yozing";
    }
  } else {
    console.log("error");
    wrong2.classList.remove("hidden");
    wrong2.style.textAlign = "center";
    wrong2.textContent = "Iltimos to'ldiring!";
  }
});

phone.addEventListener("input", () => {
  if (!phone.value == "") {
    if (phoneRegex.test(phone.value)) {
      console.log(phone.value);
      wrong3.classList.add("hidden");
    } else {
      wrong3.classList.remove("hidden");
      wrong3.style.textAlign = "center";
      wrong3.textContent = "Raqam b/n yozing va boshiga +998 qo'ying";
    }
  } else {
    console.log("error");
    wrong3.classList.remove("hidden");
    wrong3.style.textAlign = "center";
    wrong3.textContent = "Iltimos to'ldiring!";
  }
});

address.addEventListener("input", () => {
  if (!address.value == "") {
    wrong4.classList.add("hidden");
  } else {
    console.log("error");
    wrong4.classList.remove("hidden");
    wrong4.style.textAlign = "center";
    wrong4.textContent = "Iltimos to'ldiring!";
  }
});

password.addEventListener("input", () => {
  if (!password.value == "") {
    if (passwordRegex.test(password.value)) {
      console.log(password.value);
      wrong5.classList.add("hidden");
    } else {
      wrong5.classList.remove("hidden");
      wrong5.style.textAlign = "center";
      wrong5.textContent = "Raqam b/n yozing 8 tadan ko'proq yozng.";
    }
  } else {
    console.log("error");
    wrong5.classList.remove("hidden");
    wrong5.style.textAlign = "center";
    wrong5.textContent = "Iltimos to'ldiring!";
  }
});

confirmPassword.addEventListener("input", () => {
  if (!confirmPassword.value == "") {
    if (confirmPassword.value === password.value) {
      console.log(confirmPassword.value);
      wrong6.classList.add("hidden");
    } else {
      wrong6.classList.remove("hidden");
      wrong6.style.textAlign = "center";
      wrong6.textContent = "Passwordga to'g'ri kelmayapti qayta urinig.";
    }
  } else {
    console.log("error");
    wrong6.classList.remove("hidden");
    wrong6.style.textAlign = "center";
    wrong6.textContent = "Iltimos to'ldiring!";
  }
});

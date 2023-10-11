var arr = JSON.parse(localStorage.getItem("leaves")) || [];
var rejected = JSON.parse(localStorage.getItem("rejected")) || [];
console.log(arr);
var dashboard = document.querySelector("#dashboard");
function updateDisplay(array) {
  dashboard.innerHTML = "";
  array.forEach((element, index) => {
    if (element.status == "pending") {
      var card = document.createElement("div");
      var name = document.createElement("h3");
      var overseer = document.createElement("h3");
      var startDate = document.createElement("h3");
      var endDate = document.createElement("h3");
      var days = document.createElement("h1");

      name.textContent = element.name;
      overseer.textContent = element.overseer;
      startDate.textContent = element.startDate;
      endDate.textContent = element.endDate;

      var reject = document.createElement("button");
      reject.setAttribute("class", "red");
      reject.innerHTML = "Reject Leave";
      var grant = document.createElement("button");
      grant.setAttribute("class", "green");
      grant.innerHTML = "Grant Leave";
      var OTP = document.createElement("input");
      OTP.setAttribute("style", "display:none");
      OTP.setAttribute("id", "otp");
      OTP.setAttribute("placeholder", "Enter OTP");
      var verify = document.createElement("button");
      verify.innerHTML = "Verify";
      verify.setAttribute("class", "verify");
      verify.setAttribute("style", "display:none");
      card.appendChild(name);
      card.appendChild(overseer);
      card.appendChild(startDate);
      card.appendChild(endDate);
      card.appendChild(days);

      card.append(reject, grant, OTP, verify);
      dashboard.append(card);

      reject.addEventListener("click", function () {
        element.status = "rejected";

        localStorage.setItem("leaves", JSON.stringify(arr));
        updateDisplay(arr);
      });

      grant.addEventListener("click", function () {
        var otp = generateOTP();
        alert(otp);
        reject.setAttribute("style", "display:none");
        grant.setAttribute("style", "display:none");
        OTP.setAttribute("style", "display:block");
        verify.setAttribute("style", "display:block");
        localStorage.setItem("otp", otp);
      });
      verify.addEventListener("click", function () {
        let otp = OTP.value;
        console.log(otp);
        let num = localStorage.getItem("otp");
        console.log(num);
        if (num == otp) {
          element.status = "granted";

          localStorage.setItem("leaves", JSON.stringify(arr));
          updateDisplay(arr);
          window.location.href = "../Pages/Status.html";
        }
      });
    }
    // console.log(card, name, overseer, startDate, endDate, days);
  });
}
function generateOTP() {
  return Math.floor(5000 + Math.random() * 5000);
}

updateDisplay(arr);
s;

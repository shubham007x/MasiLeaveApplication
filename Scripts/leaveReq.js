var arr = JSON.parse(localStorage.getItem("leaves")) || [];
console.log(arr);
var form = document.querySelector("form");
form.addEventListener("submit", function () {
  event.preventDefault();
  const UniqueId = Date.now();
  const name = form.name.value;
  const reason = form.reason.value;
  const designation = form.designation.value;
  const startDate = form.startDate.value;
  const endDate = form.endDate.value;
  const overseer = form.overseer.value;
  const status = "pending";
  console.log(UniqueId, reason, designation, startDate, endDate, overseer);

  if (
    name != "" ||
    reason != "" ||
    designation != "" ||
    startDate != "" ||
    endDate != "" ||
    overseer != ""
  ) {
    let obj = {
      UniqueId: UniqueId,
      name: name,
      reason: reason,
      designation: designation,
      startDate: startDate,
      endDate: endDate,
      overseer: overseer,
      status: status,
    };
    console.log(obj);
    arr.push(obj);
    localStorage.setItem("leaves", JSON.stringify(arr));
    console.log(arr);
    window.location.href = "../Pages/Dashboard.html";
  } else alert("Enter all details");
});

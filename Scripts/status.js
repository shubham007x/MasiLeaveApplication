var arr = JSON.parse(localStorage.getItem("leaves"));
function calculate(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
function populateTable(filter) {
  const tableBody = document.getElementById("status");
  tableBody.innerHTML = "";

  arr.forEach((element) => {
    if (filter === "all" || element.status.toLowerCase() === filter) {
      const daysOfLeave = calculate(element.startDate, element.endDate);
      const row = document.createElement("tr");
      row.innerHTML = `
              <td>${element.UniqueId}</td>
              <td>${element.name}</td>
              <td>${daysOfLeave}</td>
              <td>${element.overseer}</td>
              <td>${element.status}</td>
          `;
      tableBody.appendChild(row);
    }
  });
}
populateTable("all");

document.getElementById("filter").addEventListener("change", function () {
  const selectedStatus = this.value;
  populateTable(selectedStatus);
});

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function completeRow(btn) {
  btn.closest("tr").classList.toggle("row-completed");
  updateTotal();
}

function deleteRow(btn) {
  btn.closest("tr").remove();
  updateTotal();
}

function submitData() {
  const p1 = document.getElementById("termek").value;
  const p2 = Number(document.getElementById("mennyiseg").value);
  const p3 = Number(document.getElementById("egysegar").value);
  const total = p2 * p3;
  if (!p1 || Number.isNaN(p2) || Number.isNaN(p3)) {
    alert("Kérlek töltsd ki az összes mezőt.");
    return;
  }

  const price = Number(p3);
  if (Number.isNaN(price)) {
    alert("Az egységár mezőnek számnak kell lennie.");
    return;
  }

  const tableBody = document.getElementById("myTableBody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${p1}</td>
    <td>${p2}</td>
    <td>${price} ft</td>
    <td>${total} ft</td>
    <td class="row-actions">
      <button class="btn-complete" onclick="completeRow(this)" title="Kész">✓</button>
      <button class="btn-delete" onclick="deleteRow(this)" title="Törlés">✕</button>
    </td>
  `;
  tableBody.appendChild(row);
  updateTotal();

  document.getElementById("termek").value = "";
  document.getElementById("mennyiseg").value = "";
  document.getElementById("egysegar").value = "";
  closeModal();
}

function updateTotal() {
  const rows = document.querySelectorAll("#myTableBody tr");
  let total = 0;
  let paid = 0;

  rows.forEach((row) => {
    const totalCell = row.children[3];
    const value = Number(totalCell.textContent.replace(" ft", ""));

    if (!Number.isNaN(value)) {
      total += value;

      if (row.classList.contains("row-completed")) {
        paid += value;
      }
    }
  });

  const remaining = total - paid;

  document.getElementById("paidAmount").textContent = paid;
  document.getElementById("remainingAmount").textContent = remaining;
}

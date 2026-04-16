function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function completeRow(btn) {
  btn.closest("tr").classList.toggle("row-completed");
}

function deleteRow(btn) {
  btn.closest("tr").remove();
}

function submitData() {
  const p1 = document.getElementById("termek").value;
  const p2 = document.getElementById("mennyiseg").value;
  const p3 = document.getElementById("ar").value;
  if (!p1 || !p2 || !p3) {
    alert("Kérlek töltsd ki az összes mezőt.");
    return;
  }

  const price = Number(p3);
  if (Number.isNaN(price)) {
    alert("Az ár mezőnek számnak kell lennie.");
    return;
  }

  const tableBody = document.getElementById("myTableBody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${p1}</td>
    <td>${p2}</td>
    <td>${price} ft</td>
    <td class="row-actions">
      <button class="btn-complete" onclick="completeRow(this)" title="Kész">✓</button>
      <button class="btn-delete" onclick="deleteRow(this)" title="Törlés">✕</button>
    </td>
  `;
  tableBody.appendChild(row);

  document.getElementById("termek").value = "";
  document.getElementById("mennyiseg").value = "";
  document.getElementById("ar").value = "";

  closeModal();
}

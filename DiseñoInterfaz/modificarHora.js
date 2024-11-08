function openEditModal(name, schedule) {
    document.getElementById("editName").value = name;
    document.getElementById("editSchedule").value = schedule;
    document.getElementById("editModal").style.display = "flex";
}

function closeEditModal() {
    document.getElementById("editModal").style.display = "none";
}

function saveEdit() {
    const name = document.getElementById("editName").value;
    const schedule = document.getElementById("editSchedule").value;
    if (name && schedule) {
        alert(`Cambios guardados para: ${name} con horario ${schedule}`);
        closeEditModal();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

function openAddModal() {
    document.getElementById("addModal").style.display = "flex";
}

function closeAddModal() {
    document.getElementById("addModal").style.display = "none";
}

function addDoctor() {
    const name = document.getElementById("newName").value;
    const schedule = document.getElementById("newSchedule").value;
    const email = document.getElementById("newEmail").value;
    const password = document.getElementById("newPassword").value;

    if (name && schedule && email && password) {
        alert(`Médico añadido: ${name} con horario ${schedule}`);
        closeAddModal();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

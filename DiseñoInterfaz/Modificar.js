function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function addSpecialty() {
    const specialtyName = document.getElementById("specialtyName").value;
    if (specialtyName) {
        alert(`Nueva especialidad añadida: ${specialtyName}`);
        closeModal();
    } else {
        alert("Por favor, ingresa el nombre de la especialidad.");
    }
}

function toggleEdit(id) {
    const input = document.getElementById(id);
    if (input.readOnly) {
        input.readOnly = false;
        input.focus();
        input.style.backgroundColor = "#ffffff"; // White when editable
        input.style.border = "1px solid #a52424"; // Highlight border
    } else {
        input.readOnly = true;
        input.style.backgroundColor = "#f9f9f9"; // Revert to default color
        input.style.border = "1px solid #ccc"; // Revert to default border
    }
}
document.getElementById('fileUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// ProximaCita.js

// Datos simulados para la cita
const citaData = {
    dia: "15/10/2024",
    hora: "2:00 pm",
    especialidad: "Medicina general",
    doctor: "Mauricio Ramos Cordoba"
};

// Función para cargar los datos de la cita en los elementos HTML
function cargarCita() {
    document.getElementById('cita-dia').textContent = citaData.dia;
    document.getElementById('cita-hora').textContent = citaData.hora;
    document.getElementById('cita-especialidad').textContent = citaData.especialidad;
    document.getElementById('cita-doctor').textContent = citaData.doctor;
}

// Evento para el botón "Cancelar Cita"
document.getElementById('btn-cancelar').addEventListener('click', function() {
    alert("La cita ha sido cancelada."); // Reemplazar con lógica de cancelación de base de datos
});
// Evento para el botón "Reprogramar"
document.getElementById('btn-reprogramar').addEventListener('click', function() {
    alert("Reprogramar cita activado."); // Esto luego se reemplazará con la lógica de reprogramación
});
// Cargar datos de la cita al cargar la página
document.addEventListener('DOMContentLoaded', cargarCita);

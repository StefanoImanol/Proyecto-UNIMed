// Cargar datos dinámicos del paciente (Ejemplo)
document.getElementById("nombrePaciente").value = "Nombre del Paciente"; // Debería cargarse dinámicamente
document.getElementById("apellidoPaciente").value = "Apellido del Paciente";

// Inicializar Pikaday para el calendario fijo
new Pikaday({
    field: document.getElementById('calendar-container'),
    bound: false,
    onSelect: function(date) {
        console.log("Fecha seleccionada:", date);
        // Aquí puedes actualizar horarios disponibles basados en la fecha seleccionada
    }
});

// Funcionalidad para selección de horarios
document.querySelectorAll(".time-slot").forEach(button => {
    button.addEventListener("click", function() {
        // Remover selección previa
        document.querySelectorAll(".time-slot").forEach(btn => btn.classList.remove("selected"));
        // Añadir selección al botón actual
        button.classList.add("selected");
        console.log("Horario seleccionado:", button.innerText);
    });
});

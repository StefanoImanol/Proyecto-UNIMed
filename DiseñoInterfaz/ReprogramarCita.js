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


// Botón Confirmar
document.getElementById("btn-confirmar").addEventListener("click", function() {
    const selectedDate = document.getElementById('calendar-container').value;
    const selectedTime = document.querySelector(".time-slot.selected")?.innerText;
    if (selectedDate && selectedTime) {
        alert("Cita reprogramada para " + selectedDate + " a las " + selectedTime);
    } else {
        alert("Por favor selecciona una fecha y un horario.");
    }
});

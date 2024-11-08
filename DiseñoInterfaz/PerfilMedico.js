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

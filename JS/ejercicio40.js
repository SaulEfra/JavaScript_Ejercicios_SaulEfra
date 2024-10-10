document.getElementById('myForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (!name || !email || !password) {
        errorMessage.textContent = 'Por favor, completa todos los campos.';
    } else {
        errorMessage.textContent = '';
        alert('Formulario enviado con éxito!');
    }
});
const form = document.querySelector('form');
form.addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();
  const email = document.querySelector('#correo').value;
  const password = document.querySelector('#contrasena').value;
  
  // Validar el correo electrónico
  if (!email) {
    alert('Por favor ingresa tu correo electrónico');
    return false;
  }

  if (email.length == "") {
    alert('ingrese un correo electronico');
    return false;
  }
  
  // Validar la contraseña
  if (!password) {
    alert('Por favor ingresa tu contraseña');
    return false;
  }
  if (password.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres');
    return false;
  }
  
  
  window.location.href = 'dashboard.html';
}

// dashboard 

function showOptionTab() {
  let optionTab = document.getElementById("option-tab");
  if (optionTab.style.display === "block") {
     optionTab.style.display = "none";
  } else {
     optionTab.style.display = "block";
  }
}

function goToFile(file) {
 window.location.href = file;
}



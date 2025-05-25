// Guardar datos en registro
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Guardamos en localStorage
      localStorage.setItem('user', JSON.stringify({ username, email, password }));
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      window.location.href = 'index.html';
    });
  }


 if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const empresa = document.getElementById('empresa').value;
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;

      // Guardamos en localStorage
      localStorage.setItem('user', JSON.stringify({ empresa, fecha, hora }));
      alert('agendamiendo registrado correctamente.');
      window.location.href = 'registro exitoso.html';
    });
  }




  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Inicio de sesión exitoso');
        window.location.href = 'pagina.html';
      } else {
        alert('Correo o contraseña incorrectos');
      }
    });
  }
});

const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const empresa = document.getElementById("empresa").value;
  const usuario = document.getElementById("usuario").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Crear usuario en Authentication
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const userId = userCredential.user.uid;

      // Guardar info adicional en la base de datos
      firebase.database().ref("usuarios/" + userId).set({
        empresa: empresa,
        usuario: usuario,
        email: email
      });

      alert("Registro exitoso");
      form.reset();
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});

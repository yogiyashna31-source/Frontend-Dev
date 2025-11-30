const API_URL = 'http://localhost:3008/users';
const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    messageDiv.textContent = '';
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if(!name || !email) {
        messageDiv.textContent = 'Please fill all fields.';
        return;
    }

    // Check if email already exists
    axios.get(`${API_URL}?email=${email}`)
        .then(res => {
            if(res.data.length > 0) {
                messageDiv.textContent = 'Email already registered.';
            } else {
                // POST new user
                axios.post(API_URL, { name, email })
                    .then(postRes => {
                        messageDiv.textContent = 'Registration successful!';
                        messageDiv.classList.add('success');
                        form.reset();
                    })
                    .catch(err => {
                        messageDiv.textContent = 'Error registering user.';
                    });
            }
        })
        .catch(err => {
            messageDiv.textContent = 'Error checking email.';
        });
});

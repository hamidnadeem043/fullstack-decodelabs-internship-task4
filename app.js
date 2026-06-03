// API ka base URL
    // Yahan tumhara Project 3 ka server chal raha hai
    const API_URL = 'http://localhost:3000/api/users';

    // ========================================
    // GET — Sab users fetch karo aur dikhao
    // Yeh function page load hone par
    // automatically chalta hai
    // ========================================
    async function loadUsers() {
      try {
        // fetch() browser ka built-in function hai
        // API ko GET request bhejta hai
        const response = await fetch(API_URL);
        const result = await response.json();

        // Stats update karo
        document.getElementById('totalUsers').textContent = result.count;

        if (result.count > 0) {
          // Last added user ka naam dikhao
          const last = result.data[result.data.length - 1];
          document.getElementById('lastAdded').textContent = 
            last.name.split(' ')[0];
        }

        // Users table banao
        displayUsers(result.data);

      } catch (err) {
        document.getElementById('usersContainer').innerHTML = `
          <div class="empty">
            <p>⚠️ Server se connect nahi ho saka</p>
            <p style="font-size:12px; margin-top:8px;">
              Make sure Project 3 server chal raha hai: 
              node server.js
            </p>
          </div>
        `;
      }
    }

    // ========================================
    // Users ko table mein dikhao
    // ========================================
    function displayUsers(users) {
      if (users.length === 0) {
        document.getElementById('usersContainer').innerHTML = `
          <div class="empty">
            <p>Koi user nahi hai abhi</p>
            <p style="font-size:12px;">Upar form se naya user add karo!</p>
          </div>
        `;
        return;
      }

      // Har user ke liye ek row banao
      let rows = users.map(user => {
        // Avatar ke liye naam ka pehla letter
        const initials = user.name.charAt(0).toUpperCase();

        return `
          <tr>
            <td>
              <span class="avatar">${initials}</span>
              ${user.name}
            </td>
            <td>${user.email}</td>
            <td>${user.age || '—'}</td>
            <td>
              <button 
                class="btn btn-red" 
                onclick="deleteUser('${user._id}', '${user.name}')">
                Delete
              </button>
            </td>
          </tr>
        `;
      }).join('');

      document.getElementById('usersContainer').innerHTML = `
        <table class="users-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      `;
    }

    // ========================================
    // POST — Naya user add karo
    // Form ka data leke API ko bhejo
    // ========================================
    async function addUser() {
      // Form se values lo
      const name  = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const age   = document.getElementById('age').value;

      // Basic validation
      if (!name || !email) {
        showMessage('Name aur Email zaroor bharein!', 'error');
        return;
      }

      try {
        // POST request bhejo API ko
        // method: 'POST' — naya data banana hai
        // headers — batao ke JSON bhej rahe hain
        // body — actual data JSON mein
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name:  name,
            email: email,
            age:   age ? parseInt(age) : undefined
          })
        });

        const result = await response.json();

        if (response.ok) {
          showMessage(`✅ ${result.data.name} add ho gaya!`, 'success');
          // Form clear karo
          document.getElementById('name').value  = '';
          document.getElementById('email').value = '';
          document.getElementById('age').value   = '';
          // List refresh karo
          loadUsers();
        } else {
          showMessage(`❌ ${result.message}`, 'error');
        }

      } catch (err) {
        showMessage('❌ Server se connect nahi ho saka!', 'error');
      }
    }

    // ========================================
    // DELETE — User mitao
    // ========================================
    async function deleteUser(id, name) {
      // Confirm karo pehle
      if (!confirm(`"${name}" ko delete karna chahte ho?`)) return;

      try {
        // DELETE request bhejo
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'DELETE'
        });

        const result = await response.json();

        if (response.ok) {
          // List refresh karo
          loadUsers();
        } else {
          alert('Delete nahi hua: ' + result.message);
        }

      } catch (err) {
        alert('Server se connect nahi ho saka!');
      }
    }

    // ========================================
    // Helper — Message dikhao
    // ========================================
    function showMessage(text, type) {
      const msg = document.getElementById('formMessage');
      msg.textContent = text;
      msg.className = `message ${type}`;
      // 3 second baad hide karo
      setTimeout(() => {
        msg.className = 'message';
      }, 3000);
    }

    // ========================================
    // Page load hone par users fetch karo
    // ========================================
    loadUsers();
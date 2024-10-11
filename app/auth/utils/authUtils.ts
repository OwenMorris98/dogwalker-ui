

export async function handleLogin(data: { email: string; password: string }) {
    try {
     console.log('authUtils triggered')
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      console.log(response.url);
      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        return { success: true, token };
      } else {
        console.error('Login failed');
        return { success: false, error: 'Login failed' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'An error occurred during login' };
    }
  }
  
  export async function handleRegister(data: { email: string; password: string }) {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        return { success: true };
      } else {
        console.error('Registration failed');
        return { success: false, error: 'Registration failed' };
      }
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: 'An error occurred during registration' };
    }
  }
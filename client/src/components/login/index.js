import React from 'react';

export default function LoginForm() {
  return (
    <div>
      <form>
      <input
        placeholder="email"
        />
        <input
        placeholder="username"
        />
        <input
        placeholder="password"
        />
        <button>Login</button>
      </form>
    </div>
  )
}
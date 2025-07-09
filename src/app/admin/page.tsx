'use client'

import { useState } from 'react'

export default function AdminPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const envUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME
    const envPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

    if (username === envUsername && password === envPassword) {
      setAuthenticated(true)
      setError('')
    } else {
      setError('Sai thông tin đăng nhập!')
    }
  }

  if (authenticated) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Chào mừng Admin</h1>
        <p>Đây là khu vực quản trị.</p>
        <button
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => window.location.href = '/admin/post'}
        >
            Quản lý bài viết
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">Đăng nhập quản trị</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Đăng nhập
      </button>
    </form>
  )
}

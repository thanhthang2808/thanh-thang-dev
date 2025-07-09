"use client";

import { useState } from "react";

export default function NewPostPage() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/admin/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${process.env.NEXT_PUBLIC_ADMIN_USERNAME}:${process.env.NEXT_PUBLIC_ADMIN_PASSWORD}`),
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Đăng bài thành công!");
      setForm({ title: "", slug: "", description: "", content: "" });
    } else {
      alert("Lỗi khi đăng bài.");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Đăng bài viết mới</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border p-2"
          placeholder="Tiêu đề"
        />
        <input
          name="slug"
          value={form.slug}
          onChange={handleChange}
          required
          className="w-full border p-2"
          placeholder="Slug (URL)"
        />
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2"
          placeholder="Mô tả ngắn"
        />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          required
          rows={10}
          className="w-full border p-2"
          placeholder="Nội dung Markdown"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Đăng bài
        </button>
      </form>
    </div>
  );
}

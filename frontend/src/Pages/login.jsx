import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../lib/axios";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await api.post("/auth/login", form);
      login(res.data);
      toast.success("Logged in successfully");
      navigate("/");
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to login. Please try again.";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-md mx-auto mt-16 bg-base-200/60 backdrop-blur rounded-xl p-8 shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center text-primary">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
              minLength={6}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={submitting}
          >
            {submitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="link link-primary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;


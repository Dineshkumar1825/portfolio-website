import React, { useState } from "react";
import axiosClient from "../api/axiosClient.js";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) {
      errs.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      errs.message = "Message should be at least 10 characters";
    }
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await axiosClient.post("/contact", form);
      setStatus({
        type: "success",
        message: res.data.message || "Message sent successfully!",
      });
      setForm(initialForm);
    } catch (err) {
      const msg =
        err.response?.data?.errors?.map((e) => e.message).join(", ") ||
        err.response?.data?.message ||
        "Something went wrong. Please try again later.";
      setStatus({ type: "error", message: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title text-accent">Contact Me</h2>
          <p className="section-subtitle">
            Let's build something great together
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="custom-card h-100">
              <h5 className="mb-4">Contact Information</h5>
              <p className="mb-3">
                <i className="bi bi-telephone-fill text-accent me-2"></i>
                <a href="tel:9087065451" className="text-decoration-none">
                  9087065451
                </a>
              </p>
              <p className="mb-3">
                <i className="bi bi-envelope-fill text-accent me-2"></i>
                <a
                  href="mailto:dineshkumar18251@gmail.com"
                  className="text-decoration-none"
                >
                  dineshkumar18251@gmail.com
                </a>
              </p>
              <p className="mb-0">
                <i className="bi bi-geo-alt-fill text-accent me-2"></i>
                Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="custom-card">
              {status.message && (
                <div
                  className={`alert ${
                    status.type === "success" ? "alert-success" : "alert-danger"
                  }`}
                  role="alert"
                >
                  {status.message}
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className={`form-control form-control-custom ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control form-control-custom ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="col-12">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className={`form-control form-control-custom ${
                        errors.subject ? "is-invalid" : ""
                      }`}
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && (
                      <div className="invalid-feedback">{errors.subject}</div>
                    )}
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      className={`form-control form-control-custom ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary px-4 py-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send-fill me-2"></i>Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

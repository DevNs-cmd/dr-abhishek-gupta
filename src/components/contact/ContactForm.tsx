"use client";

import { useState } from "react";
import { Send, CheckCircle2, Building, Sparkles } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General Academic Inquiry",
    affiliation: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="ios-glass-card rounded-[32px] p-8 md:p-12 text-center shadow-lg animate-in fade-in zoom-in-95 duration-400">
        <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-5 text-emerald-600 shadow-sm">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-extrabold text-zinc-950 mb-2">
          Message Received
        </h3>
        <p className="text-zinc-600 text-sm max-w-md mx-auto leading-relaxed mb-6">
          Thank you for reaching out,{" "}
          <strong className="text-zinc-900 font-semibold">{formData.name}</strong>.
          Your inquiry regarding{" "}
          <span className="text-zinc-900 font-medium">{formData.category}</span>{" "}
          has been logged. Academic and counseling correspondences are routed through
          official institutional channels.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              category: "General Academic Inquiry",
              affiliation: "",
              message: "",
            });
          }}
          className="text-xs font-semibold text-zinc-900 bg-white/80 hover:bg-white border border-white/90 px-5 py-2.5 rounded-full shadow-sm active:scale-95 transition-all"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="ios-glass-card rounded-[32px] p-7 sm:p-10 shadow-lg space-y-6"
    >
      <div className="space-y-1.5 pb-2 border-b border-black/[0.05]">
        <h2 className="text-xl font-extrabold text-zinc-950 flex items-center gap-2">
          <Sparkles size={18} className="text-indigo-600" />
          Direct Academic & Consultation Dispatch
        </h2>
        <p className="text-xs text-zinc-500">
          Direct all queries for academic coursework, IGNOU distance learning counseling,
          campus placements, or technical advisory.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-2.5 bg-white/60 focus:bg-white border border-black/[0.06] rounded-2xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xs"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. rahul@example.com"
            className="w-full px-4 py-2.5 bg-white/60 focus:bg-white border border-black/[0.06] rounded-2xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Category */}
        <div>
          <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
            Nature of Inquiry <span className="text-rose-500">*</span>
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2.5 bg-white/60 focus:bg-white border border-black/[0.06] rounded-2xl text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer shadow-xs"
          >
            <option value="General Academic Inquiry">General Academic Inquiry</option>
            <option value="IGNOU Counseling Request">IGNOU Counseling Session Request</option>
            <option value="Placement & Career Guidance">Placement & Corporate Career Guidance</option>
            <option value="Technical Consultation">Technical Consultation / Industry Advisory</option>
            <option value="Guest Lecture / Seminar">Guest Lecture / Academic Seminar</option>
            <option value="Research Collaboration">Research & Springer Paper Inquiry</option>
          </select>
        </div>

        {/* Institution / Student ID */}
        <div>
          <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
            Affiliation / Organization / Enrollment ID
          </label>
          <input
            type="text"
            value={formData.affiliation}
            onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
            placeholder="e.g. NDIM Student / IGNOU Enrollee / Industry"
            className="w-full px-4 py-2.5 bg-white/60 focus:bg-white border border-black/[0.06] rounded-2xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xs"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
          Detailed Message / Question <span className="text-rose-500">*</span>
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe your academic query, counseling requirement, or topic of discussion in detail..."
          className="w-full px-4 py-3 bg-white/60 focus:bg-white border border-black/[0.06] rounded-2xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none shadow-xs"
        />
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <Building size={14} />
          <span>Routed via NDIM Academic Affairs</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#1d1d1f] hover:bg-black text-white text-xs font-semibold rounded-full shadow-md active:scale-95 transition-all disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Transmitting...</span>
          ) : (
            <>
              <span>Submit Inquiry</span>
              <Send size={14} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

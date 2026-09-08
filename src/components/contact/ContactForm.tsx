"use client";

import { useState } from "react";
import { Send, CheckCircle2, Building, Sparkles, MessageCircle, ExternalLink } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/SocialIcons";

const WHATSAPP_NUMBER = "919971616353";
const WHATSAPP_DISPLAY = "+91 9971616353";

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

  const formatWhatsAppMessage = (data: typeof formData) => {
    const parts = [
      `🎓 *New Academic & Advisory Inquiry*`,
      `----------------------------------------`,
      `👤 *Name:* ${data.name.trim()}`,
      `📧 *Email:* ${data.email.trim()}`,
      `📋 *Nature of Inquiry:* ${data.category}`,
      data.affiliation.trim() ? `🏛️ *Affiliation/ID:* ${data.affiliation.trim()}` : null,
      `----------------------------------------`,
      `💬 *Message:*`,
      data.message.trim(),
      `----------------------------------------`,
      `_Sent via Dr. Abhishek Gupta Academic Platform_`,
    ].filter(Boolean);

    return parts.join("\n");
  };

  const getWhatsAppUrl = (data: typeof formData) => {
    const text = encodeURIComponent(formatWhatsAppMessage(data));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappUrl = getWhatsAppUrl(formData);

    // Open WhatsApp in a new tab/app
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  if (submitted) {
    const retryUrl = getWhatsAppUrl(formData);
    return (
      <div className="ios-glass-card rounded-[32px] p-8 md:p-12 text-center shadow-lg animate-in fade-in zoom-in-95 duration-400">
        <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-5 text-emerald-600 shadow-sm">
          <CheckCircle2 size={32} />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold mb-3">
          <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
          Dispatched to WhatsApp: {WHATSAPP_DISPLAY}
        </div>
        <h3 className="text-2xl font-extrabold text-zinc-950 mb-2">
          Inquiry Ready on WhatsApp
        </h3>
        <p className="text-zinc-600 text-sm max-w-md mx-auto leading-relaxed mb-6">
          Thank you, <strong className="text-zinc-900 font-semibold">{formData.name}</strong>.
          Your inquiry has been formatted and opened in WhatsApp directly for{" "}
          <strong className="text-zinc-900">Dr. Abhishek Gupta ({WHATSAPP_DISPLAY})</strong>.
          If WhatsApp didn&apos;t open automatically, use the button below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={retryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-full shadow-md active:scale-95 transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Open WhatsApp ({WHATSAPP_DISPLAY})</span>
            <ExternalLink size={13} />
          </a>

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
            className="text-xs font-semibold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 px-5 py-3 rounded-full shadow-xs active:scale-95 transition-all"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="ios-glass-card rounded-[32px] p-7 sm:p-10 shadow-lg space-y-6"
    >
      <div className="space-y-2 pb-2 border-b border-black/[0.05]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-extrabold text-zinc-950 flex items-center gap-2">
            <Sparkles size={18} className="text-indigo-600" />
            Direct Academic & Consultation Dispatch
          </h2>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[0.72rem] font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
            WhatsApp: {WHATSAPP_DISPLAY}
          </span>
        </div>
        <p className="text-xs text-zinc-500">
          Submissions route instantly to Dr. Abhishek Gupta&apos;s verified WhatsApp on{" "}
          <strong className="text-zinc-700">{WHATSAPP_DISPLAY}</strong> for course questions, IGNOU distance learning, campus placements, and technical advisory.
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
            className="w-full px-4 py-2.5 bg-white/60 focus:bg-white border border-black/[0.06] rounded-2xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-xs"
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
            className="w-full px-4 py-2.5 bg-white/60 focus:bg-white border border-black/[0.06] rounded-2xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-xs"
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
            className="w-full px-4 py-2.5 bg-white/60 focus:bg-white border border-black/[0.06] rounded-2xl text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer shadow-xs"
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
            className="w-full px-4 py-2.5 bg-white/60 focus:bg-white border border-black/[0.06] rounded-2xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-xs"
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
          className="w-full px-4 py-3 bg-white/60 focus:bg-white border border-black/[0.06] rounded-2xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none shadow-xs"
        />
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <Building size={14} />
          <span>NDIM Academic & Placement Affairs &bull; {WHATSAPP_DISPLAY}</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-full shadow-md active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? (
            <span>Opening WhatsApp...</span>
          ) : (
            <>
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Submit to WhatsApp ({WHATSAPP_DISPLAY})</span>
              <Send size={13} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}


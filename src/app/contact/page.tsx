import type { Metadata } from "next";
import { Mail, Building, GraduationCap, Briefcase, HelpCircle, CheckCircle } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Academic & Career Consultation",
  description:
    "Direct academic dispatch for coursework inquiries, IGNOU distance learning counseling, placement advisory, and technical consulting with Dr. Abhishek Gupta at NDIM.",
  openGraph: {
    title: "Academic & Career Consultation | Dr. Abhishek Gupta",
    description:
      "Connect with Dr. Abhishek Gupta for academic counseling, placement guidance, and technical advisory.",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-28 pb-24 space-y-16">
      {/* Header */}
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-700 text-xs font-semibold mb-3">
          <Mail size={13} />
          Academic & Advisory Contact
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
          Academic & Career Consultation
        </h1>
        <p className="text-zinc-500 text-sm md:text-base mt-2.5 leading-relaxed">
          Reach out for university coursework queries, distance learning counseling under IGNOU,
          campus recruitment mentoring, or industry technical consultations.
        </p>
      </div>

      {/* Grid: Form & Institutional Information */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form: 7 cols */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Institutional Directory & Hours: 5 cols */}
        <div className="lg:col-span-5 space-y-6">
          {/* Institutional Card */}
          <div className="bg-white rounded-[24px] border border-zinc-200/80 p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
              Institutional Offices
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <Building size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900">
                    New Delhi Institute of Management (NDIM)
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Placement Cell & Academic Department &bull; New Delhi, India
                  </p>
                  <span className="inline-block mt-1.5 text-[0.7rem] bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded-md">
                    Placement Head & Academician
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900">
                    Indira Gandhi National Open University (IGNOU)
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    School of Computer & Information Sciences &bull; Academic Counseling
                  </p>
                  <span className="inline-block mt-1.5 text-[0.7rem] bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-md">
                    Certified Academic Counsellor
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Pillars Card */}
          <div className="bg-white rounded-[24px] border border-zinc-200/80 p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
              Engagement Domains
            </h2>

            <ul className="space-y-2.5 text-xs text-zinc-600">
              <li className="flex items-center gap-2.5">
                <CheckCircle size={15} className="text-emerald-600 shrink-0" />
                <span>Placement readiness & technical interview reviews</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle size={15} className="text-emerald-600 shrink-0" />
                <span>Coursework doubts in Python, DBMS, IoT & C++</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle size={15} className="text-emerald-600 shrink-0" />
                <span>IGNOU distance learning guidance & project evaluation</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle size={15} className="text-emerald-600 shrink-0" />
                <span>Enterprise tech consulting in Data & AI systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Frequently Answered Questions */}
      <section className="bg-white rounded-[28px] border border-zinc-200/80 p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
            <HelpCircle size={14} />
            Common Inquiries
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-zinc-50/80 border border-zinc-100 space-y-2">
            <h3 className="text-sm font-bold text-zinc-900">
              How can IGNOU learners schedule a counseling session?
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Use the inquiry dispatch above selecting “IGNOU Counseling Session Request” along with your enrollment number and course code. Session schedules are verified against regional center guidelines.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50/80 border border-zinc-100 space-y-2">
            <h3 className="text-sm font-bold text-zinc-900">
              Can students seek placement and resume mentorship?
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Yes. As Placement Head at NDIM, Dr. Gupta regularly conducts technical interview reviews, coding assessment strategy sessions, and core CS alignment for final-year graduating students.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50/80 border border-zinc-100 space-y-2">
            <h3 className="text-sm font-bold text-zinc-900">
              Are study notes and video lectures free to access?
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              All curriculum modules, lecture slides, and YouTube streams curated on this academic portal are openly accessible to students, educators, and technology learners.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50/80 border border-zinc-100 space-y-2">
            <h3 className="text-sm font-bold text-zinc-900">
              How are technical advisory and guest lecture requests handled?
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Universities and corporate organizations can submit invitations for seminars, FDPs (Faculty Development Programs), or tech consulting through the dispatch form.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

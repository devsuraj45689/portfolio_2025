"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

import {
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ContactUsPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
  const WHATSAPP_NUMBER = "916205830094";

  const validateForm = useCallback(() => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    else if (form.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email))
      newErrors.email = "Please enter a valid email";

    const phoneRegex = /^[0-9]{10,15}$/;
    if (form.phone && !phoneRegex.test(form.phone.replace(/\s/g, "")))
      newErrors.phone = "Please enter a valid phone number";

    if (!form.subject.trim()) newErrors.subject = "Subject is required";

    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form]);

  // ---------------------
  // FORM HANDLERS
  // ---------------------
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));

      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors]
  );

  // Build Google Form payload
  const googlePayload = useMemo(() => {
    const fd = new FormData();
    fd.append("entry.1234567890", form.name);
    fd.append("entry.0987654321", form.email);
    fd.append("entry.1122334455", form.phone);
    fd.append("entry.5544332211", form.subject);
    fd.append("entry.9988776655", form.message);
    return fd;
  }, [form]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: googlePayload,
      });

      setSubmitSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      console.error("Submission error:", err);
      setErrors({ submit: "Failed to submit. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------------------
  // WhatsApp Message
  // ---------------------
  const whatsappText = useMemo(
    () =>
      `Hi, I'm ${form.name}.\n\n${form.message}\n\nEmail: ${
        form.email || "Not provided"
      }\nPhone: ${form.phone || "Not provided"}`,
    [form]
  );

  const handleWhatsApp = () => {
    if (!form.name.trim() || !form.message.trim()) {
      setErrors((prev) => ({
        ...prev,
        whatsapp:
          "Please fill in your name and message before sending via WhatsApp",
      }));
      return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappText
    )}`;

    router.push(url);
  };

  return (
    <section className="w-full min-h-screen py-20 bg-[var(--background-base)] font-[var(--font-family)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-[var(--text-heading)]">
            Let&apos;s Work Together
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-[var(--text-body)] leading-relaxed">
            Have a project in mind, a role to discuss, or need help owning frontend features?
            I’m open to <strong>remote or hybrid opportunities, contract work, and collaborations on product-focused teams.</strong>
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <Card className="border hover:shadow-lg hover:-translate-y-1 transition-all bg-[var(--background-surface)] border-[var(--border-default)] rounded-xl shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[var(--overlay-soft)]">
                <Mail size={32} className="text-[var(--primary)]" />
              </div>

              <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-2">
                Email
              </h3>
              <p className="text-sm text-[var(--text-body)] mb-3">
                For roles, projects, or detailed discussions
                <br /><strong>Response within 24 hours</strong>
              </p>

              <Link
                href="https://mail.google.com/mail/u/0/?tf=cm&to=devsuraj45689@gmail.com"
                target="_blank"
                className="text-[var(--primary)] font-semibold hover:underline text-sm"
              >
                devsuraj45689@gmail.com
              </Link>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="border hover:shadow-lg hover:-translate-y-1 transition-all bg-[var(--background-surface)] border-[var(--border-default)] rounded-xl shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[var(--overlay-soft)]">
                <Phone size={32} className="text-[var(--primary)]" />
              </div>

              <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-2">
                Call Me
              </h3>
              <p className="text-sm text-[var(--text-body)] mb-3">
                Available Mon–Fri, 9am–6pm IST
              </p>

              <Link
                href="tel:+916205830094"
                className="text-[var(--primary)] font-semibold hover:underline text-sm"
              >
                +916205830094
              </Link>
            </CardContent>
          </Card>

          {/* WhatsApp */}
          <Card className="border hover:shadow-lg hover:-translate-y-1 transition-all bg-[var(--background-surface)] border-[var(--border-default)] rounded-xl shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[var(--overlay-soft)]">
                <MessageCircle size={32} className="text-[var(--primary)]" />
              </div>

              <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-2">
                WhatsApp
              </h3>
              <p className="text-sm text-[var(--text-body)] mb-3">
                Quick questions or initial conversations
              </p>

              <button
                onClick={handleWhatsApp}
                className="text-[var(--primary)] hover:underline font-semibold text-sm"
              >
                Start Chat
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Form */}
        <Card className="border bg-[var(--background-surface)] border-[var(--border-default)] rounded-xl shadow-md">
          <CardContent className="p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-8 text-[var(--text-heading)]">
              Send Me a Message
            </h2>

            {/* Success */}
            {submitSuccess && (
              <div className="mb-6 p-4 flex items-start gap-3 bg-[var(--overlay-soft)] border-l-4 border-[var(--primary)] rounded-md">
                <CheckCircle
                  size={24}
                  className="text-[var(--primary)] shrink-0"
                />
                <p className="text-[var(--text-heading)]">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            {/* Global Errors */}
            {errors.submit && (
              <div className="mb-6 p-4 flex items-start gap-3 bg-red-100 border-l-4 border-red-600 rounded-md">
                <AlertCircle size={24} className="text-red-600 shrink-0" />
                <p className="text-red-600">{errors.submit}</p>
              </div>
            )}

            {errors.whatsapp && (
              <div className="mb-6 p-4 flex items-start gap-3 bg-red-100 border-l-4 border-red-600 rounded-md">
                <AlertCircle size={24} className="text-red-600 shrink-0" />
                <p className="text-red-600">{errors.whatsapp}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Full Name <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.name ? "border-red-600" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="xx@gamail.com"
                    className={errors.email ? "border-red-600" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXXX"
                    className={errors.phone ? "border-red-600" : ""}
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">
                    Subject <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Frontend role / Project inquiry"
                    className={errors.subject ? "border-red-600" : ""}
                  />
                  {errors.subject && (
                    <p className="text-red-600 text-sm">{errors.subject}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-red-600">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`min-h-[160px] ${
                    errors.message ? "border-red-600" : ""
                  }`}
                  placeholder="Briefly describe your role, project, or requirements."
                />
                {errors.message && (
                  <p className="text-red-600 text-sm">{errors.message}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="default"
                  className="h-12 text-base font-semibold flex items-center justify-center gap-2 transition shadow-lg bg-[var(--primary)] text-white hover:bg-yellow-800"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </Button>

                <Button
                  type="button"
                  onClick={handleWhatsApp}
                  className="h-12 text-base font-semibold flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20BD5A] transition"
                >
                  Send via WhatsApp
                  <MessageCircle size={18} />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <p className="text-center text-sm text-[var(--text-body)] mt-12">
            Your information is safe with me. I don’t share personal details with third parties.
        </p>
      </div>
    </section>
  );
}

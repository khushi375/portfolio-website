import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { AlertCircle, ArrowUpRight, CheckCircle2, LoaderCircle, Mail } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const initialErrors = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState(initialErrors)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })
  const submissionInProgress = useRef(false)

  const validate = () => {
    const nextErrors = { ...initialErrors }
    const name = formData.name.trim()
    const email = formData.email.trim()
    const subject = formData.subject.trim()
    const message = formData.message.trim()

    if (!name) nextErrors.name = 'Your name is required.'
    if (!email) {
      nextErrors.email = 'Your email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!subject) nextErrors.subject = 'Please add a subject.'
    if (!message) nextErrors.message = 'Message cannot be empty.'

    setErrors(nextErrors)
    return !Object.values(nextErrors).some(Boolean)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submissionInProgress.current) return

    if (!validate()) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields and try again.' })
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message:
          'EmailJS is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in your .env file.',
      })
      return
    }

    submissionInProgress.current = true
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name.trim(),
          reply_to: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
        publicKey,
      )

      setFormData(initialState)
      setErrors(initialErrors)
      setStatus({ type: 'success', message: 'Your message is on its way. Thanks for reaching out — I’ll be in touch soon.' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'We couldn’t send your message. Please check your connection and try again.',
      })
      console.error('EmailJS error:', error)
    } finally {
      submissionInProgress.current = false
      setIsSubmitting(false)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setStatus({ type: '', message: '' })
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Create Something Meaningful."
          description="Have an idea, opportunity or interesting project? I’d love to hear from you."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.2),transparent_30%),linear-gradient(180deg,#0f172a,#111827)] p-6">
            <div className="mb-5 inline-flex rounded-2xl border border-violet-400/30 bg-violet-500/10 p-3 text-violet-200">
              <Mail size={20} />
            </div>
            <h3 className="text-2xl font-semibold text-white">Let&apos;s build something valuable.</h3>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Whether you are planning a product, looking for an intern or exploring opportunities, I would love to hear about what you are building.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</p>
                <p className="mt-2 font-medium text-white">kj979794@gmail.com</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Availability</p>
                <p className="mt-2 font-medium text-emerald-200">Open to internships & opportunities</p>
              </div>
            </div>
          </div>

          <form noValidate onSubmit={handleSubmit} className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-[0_18px_56px_rgba(15,23,42,0.45)]">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-violet-400/60"
                  placeholder="Your name"
                />
                {errors.name ? <p id="name-error" className="mt-2 text-xs text-rose-300">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-violet-400/60"
                  placeholder="you@example.com"
                />
                {errors.email ? <p id="email-error" className="mt-2 text-xs text-rose-300">{errors.email}</p> : null}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-sm text-slate-300">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-violet-400/60"
                placeholder="Project inquiry, internship, or collaboration"
              />
              {errors.subject ? <p id="subject-error" className="mt-2 text-xs text-rose-300">{errors.subject}</p> : null}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="6"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-violet-400/60"
                placeholder="Tell me a bit about your idea or opportunity."
              />
              {errors.message ? <p id="message-error" className="mt-2 text-xs text-rose-300">{errors.message}</p> : null}
            </div>

            {status.message ? (
              <div
                role={status.type === 'error' ? 'alert' : 'status'}
                aria-live="polite"
                className={`mt-5 flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 text-emerald-100 shadow-[0_0_24px_rgba(16,185,129,0.08)]'
                    : 'border-rose-400/30 bg-rose-500/10 text-rose-200'
                }`}
              >
                {status.type === 'success' ? <CheckCircle2 size={18} className="mt-0.5 shrink-0" /> : <AlertCircle size={18} className="mt-0.5 shrink-0" />}
                {status.message}
              </div>
            ) : null}

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full border border-violet-500/50 bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle size={16} className="animate-spin" />
                    Sending your message...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

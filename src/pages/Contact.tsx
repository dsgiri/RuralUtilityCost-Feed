export function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 flex-1 w-full">
      <h1 className="text-3xl font-bold text-slate-text mb-6 tracking-tight">Contact Us</h1>
      
      <div className="bg-white border border-slate-200 rounded-xl p-8 text-sm leading-relaxed text-slate-sub">
        <p className="mb-8">
          We welcome your feedback and questions regarding the Feed app and the wider Rural Utility Cost ecosystem.
        </p>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-[13px] font-bold text-slate-text mb-1">Name</label>
            <input type="text" name="name" id="name" className="w-full bg-white border border-slate-300 rounded-md p-2.5 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow text-slate-text" placeholder="Jane Doe" />
          </div>
          <div>
            <label htmlFor="email" className="block text-[13px] font-bold text-slate-text mb-1">Email</label>
            <input type="email" name="email" id="email" className="w-full bg-white border border-slate-300 rounded-md p-2.5 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow text-slate-text" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-[13px] font-bold text-slate-text mb-1">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full bg-white border border-slate-300 rounded-md p-2.5 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow text-slate-text" placeholder="How can we help?"></textarea>
          </div>
          <button type="button" className="inline-flex justify-center py-2.5 px-6 border border-transparent rounded-md shadow-sm text-[13px] font-semibold text-white bg-brand-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors mt-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

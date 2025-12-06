import { Mail, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Əlaqə</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Sual, təklif və ya bir layihə haqqında danışmaq istəsəniz:
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@emildost.com"
                className="flex items-center gap-3 p-4 border border-border-subtle rounded-lg hover:border-primary transition group"
              >
                <Mail className="w-5 h-5 group-hover:text-foreground transition" />
                <div>
                  <p className="text-sm text-text-tertiary">E-mail</p>
                  <p className="font-medium">hello@emildost.com</p>
                </div>
              </a>
              <a
                href="https://t.me/emildost"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-border-subtle rounded-lg hover:border-primary transition group"
              >
                <Send className="w-5 h-5 group-hover:text-foreground transition" />
                <div>
                  <p className="text-sm text-text-tertiary">Telegram</p>
                  <p className="font-medium">@emildost</p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-bg-muted p-8 rounded-lg border border-border-subtle opacity-0">
            <h3 className="font-semibold mb-4">Tez Cevab Almaq Üçün:</h3>
            <ul className="text-sm text-text-secondary space-y-3">
              <li className="flex gap-2">
                <span className="font-medium">→</span>
                <span>Telegram ən sürətli cavab yoludur</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium">→</span>
                <span>E-mailə 24 saat içində cavab verilir</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium">→</span>
                <span>Kurslar, layihələr və s. haqqında soruşa bilərsiniz</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

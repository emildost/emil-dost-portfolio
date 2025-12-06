import { BsInstagram, BsLinkedin, BsYoutube, BsBehance } from "react-icons/bs";

export function Social() {
  const socials = [
    {
      platform: "Instagram",
      url: "https://instagram.com/emilldost",
      icon: BsInstagram,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/emildost",
      icon: BsLinkedin,
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/@emildost",
      icon: BsYoutube,
    },
    {
      platform: "Behance",
      url: "https://behance.net/emildost",
      icon: BsBehance,
    },
  ]

  return (
    <section className="py-20 px-6 bg-bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Sosialda mən </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border-subtle rounded-lg hover:border-primary hover:bg-background transition flex flex-col items-center gap-2 bg-card py-6"
              >
                <Icon className="w-6 h-6" />
                <span className="text-sm font-medium">{social.platform}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

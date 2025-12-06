"use client"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4 md:text-5xl">{"UX/UI Dizayner və Təlimçi"}</h1>
            <p className="text-xl text-text-secondary mb-6 leading-relaxed">
              Dizayner. Sadə həllər yaratmağı sevən biri.
            </p>
            <p className="text-sm italic mb-8 p-4 border-l-2 border-border-subtle text-muted-foreground">
              Hər şey istifadəçidən başlayır
            </p>
            <div className="flex gap-4">
              <a
                href="#courses"
                className="px-6 py-3 bg-primary text-primary-foreground rounded hover:opacity-80 transition rounded-2xl"
              >
                Kurslara bax
              </a>
              <a href="#contact" className="px-6 py-3 border border-primary rounded hover:bg-bg-muted transition rounded-2xl">
                Əlaqə Saxla
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full aspect-square bg-bg-muted rounded-4xl flex items-center justify-center">
              <img
                src="/images/20250930-152026.jpg"
                alt="Emil Dost"
                className="w-full h-full object-cover rounded-4xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

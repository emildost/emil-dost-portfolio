export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background z-50 border-b border-border-subtle opacity-90">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center opacity-100">
        <a href="#" className="text-xl font-bold">
          Emil Dost
        </a>
        <div className="flex gap-8">
          <a href="#about" className="text-sm hover:opacity-60 transition">
            Haqqımda
          </a>
          <a href="#courses" className="text-sm hover:opacity-60 transition">
            Kurs
          </a>
          <a href="#contact" className="text-sm hover:opacity-60 transition">
            Əlaqə
          </a>
        </div>
      </div>
    </nav>
  )
}

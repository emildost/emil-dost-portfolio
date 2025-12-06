export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Haqqımda</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-text-secondary leading-relaxed text-lg mb-6">
              3 ildən çoxdu bu sahədəyəm. Layihələrdə sürət, sadəlik və müştərilərin ehtiyaclarına önəm verirəm. Sahəni öyrənmək istəyənlər üçün dərslər, videolar və praktiki tapşırıqlar hazırlayıram. 
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Bilirəm:</h3>
                <ul className="text-text-secondary space-y-1">
                  <li>UX Design</li>
                  <li>UI Design</li>
                  <li>Figma</li>
                  <li>Adobe CC</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-background p-6 rounded-lg border border-border-subtle">
            <h3 className="font-semibold mb-4">Edirəm</h3>
            <ul className="text-sm text-text-secondary space-y-2">
              <li>• Vebsyat</li>
              <li>• Tətbiq</li>
              <li>• Konsultasiya</li>
              <li>• Tədris</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

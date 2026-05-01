import { useState } from "react";
import { ChevronDown, ArrowRight, Apple, Menu, X, Shield, Leaf, Zap, Star, Check } from "lucide-react";

function OliveLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="19" cy="22" rx="12" ry="14" fill="#3d6b1e" />
        <ellipse cx="19" cy="21" rx="9" ry="11" fill="#4d8a26" />
        <path d="M19 10 Q22 4 27 6" stroke="#3d6b1e" strokeWidth="2" strokeLinecap="round" fill="none" />
        <ellipse cx="27" cy="5.5" rx="4" ry="2.5" fill="#5aab2e" transform="rotate(-20 27 5.5)" />
        <circle cx="16" cy="19" r="2" fill="rgba(255,255,255,0.2)" />
        <circle cx="22" cy="24" r="1.2" fill="rgba(255,255,255,0.15)" />
        <circle cx="16" cy="25" r="1" fill="rgba(0,0,0,0.1)" />
        <circle cx="22" cy="20" r="1.5" fill="rgba(0,0,0,0.08)" />
      </svg>
      <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '22px', color: '#1f3d0c', letterSpacing: '-0.3px' }}>
        olive
      </span>
    </div>
  );
}

function NavDropdown({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1 text-[15px] font-medium text-gray-800 hover:text-gray-900 transition-colors px-1 py-1">
      {label}
      <ChevronDown size={14} className="text-gray-500 mt-0.5" />
    </button>
  );
}

function NavLink({ label }: { label: string }) {
  return (
    <button className="text-[15px] font-medium text-gray-800 hover:text-gray-900 transition-colors px-1 py-1">
      {label}
    </button>
  );
}

function AvatarStack() {
  const avatarColors = [
    { bg: "#f4c5a0", initials: "A" },
    { bg: "#c5d4f0", initials: "B" },
    { bg: "#d4f0c5", initials: "C" },
    { bg: "#f0c5d4", initials: "D" },
  ];

  return (
    <div className="flex items-center gap-2.5">
      <div className="flex items-center">
        {avatarColors.map((av, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-600"
            style={{ backgroundColor: av.bg, marginLeft: i > 0 ? '-8px' : '0', zIndex: avatarColors.length - i }}
          >
            {av.initials}
          </div>
        ))}
        <div
          className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-600 bg-gray-200"
          style={{ marginLeft: '-8px' }}
        >
          5k+
        </div>
      </div>
      <span className="text-[14px] text-gray-600 font-medium">
        Trusted by thousands of healthy families
      </span>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: '280px' }}>
      <div
        className="relative bg-white rounded-[40px] overflow-hidden"
        style={{
          border: '8px solid #e8e8e8',
          boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 10px 30px rgba(0,0,0,0.10)',
          minHeight: '520px'
        }}
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

        <div className="relative pt-10">
          <div className="flex gap-1.5 px-2 overflow-hidden" style={{ height: '100px' }}>
            {[
              { bg: 'linear-gradient(135deg, #e8d5c0, #d4c0a8)' },
              { bg: 'linear-gradient(135deg, #c5d4c0, #b0c4ac)', border: '3px solid #3d6b1e', active: true },
              { bg: 'linear-gradient(135deg, #d4c8e0, #c0b4cc)' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl flex-shrink-0 overflow-hidden relative"
                style={{
                  width: i === 1 ? '120px' : '80px',
                  height: '90px',
                  background: item.bg,
                  border: item.border || 'none',
                  opacity: i === 1 ? 1 : 0.55,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/30" />
                </div>
                {item.active && (
                  <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <Check size={12} color="white" strokeWidth={3} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="px-4 py-3 flex items-center gap-3">
            <div className="w-12 h-16 rounded-lg bg-gradient-to-b from-green-100 to-green-50 flex items-center justify-center flex-shrink-0 border border-green-100">
              <svg viewBox="0 0 24 40" width="20" height="34" fill="none">
                <ellipse cx="12" cy="20" rx="7" ry="16" fill="#48bb78" opacity="0.5" />
                <ellipse cx="12" cy="20" rx="5" ry="12" fill="#38a169" />
                <path d="M12 10 Q14 6 17 7" stroke="#276749" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-[12px] font-semibold text-gray-900 leading-tight">
                San Pellegrino Sparkling<br />Natural Mineral Water (...
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">Sanpellegrino</p>
              <div className="flex items-center gap-1 mt-1.5">
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="text-[12px] font-bold text-gray-800">52/100</span>
                <span className="text-[10px] text-gray-400">Limit</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#ccc" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          </div>

          <div className="px-4 space-y-2.5">
            {[
              { icon: '⚠️', label: 'Contaminants', value: '7', dot: 'red' },
              { icon: '💧', label: 'Fluoride', value: 'Yes', dot: 'red' },
              { icon: '🔬', label: 'PFAS', value: 'No', dot: 'green' },
              { icon: '🔵', label: 'Microplastics', value: 'Minimal', dot: 'green' },
              { icon: '📊', label: 'pH Level', value: '5.7', dot: 'gray' },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px]">{row.icon}</span>
                  <span className="text-[12px] text-gray-600">{row.label}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[12px] font-medium text-gray-800">{row.value}</span>
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    row.dot === 'red' ? 'bg-red-500' :
                    row.dot === 'green' ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 mt-4 mb-2">
            <p className="text-[13px] font-bold text-gray-900">Contaminants</p>
          </div>

          <div className="px-4 flex items-center justify-between pb-2">
            <span className="text-[12px] text-gray-600">Nitrate</span>
            <span className="text-[10px] font-semibold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">8x limit</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100/60">
      <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-4 text-green-700">
        {icon}
      </div>
      <h3 className="text-[17px] font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-[14px] text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

function StatBadge({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-[36px] font-extrabold text-green-800 leading-none">{number}</div>
      <div className="text-[14px] text-gray-500 mt-1">{label}</div>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#eef7ec' }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center">
        <AvatarStack />
      </div>

      <nav className="sticky top-0 z-50" style={{ backgroundColor: '#eef7ec' }}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <OliveLogo />

          <div className="hidden lg:flex items-center gap-6">
            <NavDropdown label="Solutions" />
            <NavLink label="Features" />
            <NavLink label="Pricing" />
            <NavDropdown label="Blog" />
            <NavLink label="Restaurants" />
            <NavDropdown label="Food" />
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="text-[15px] font-medium text-gray-800 hover:text-gray-900 transition-colors">
              Sign in
            </button>
            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-[15px] transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: '#1f3d0c' }}
            >
              Get Olive
              <ArrowRight size={16} />
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-green-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} color="#1f3d0c" /> : <Menu size={22} color="#1f3d0c" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-green-100 bg-white px-6 py-4 space-y-3">
            {['Solutions', 'Features', 'Pricing', 'Blog', 'Restaurants', 'Food'].map(item => (
              <button key={item} className="block w-full text-left text-[16px] font-medium text-gray-800 py-2 hover:text-green-800 transition-colors">
                {item}
              </button>
            ))}
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
              <button className="text-[15px] font-medium text-gray-800">Sign in</button>
              <button
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white font-semibold text-[15px]"
                style={{ backgroundColor: '#1f3d0c' }}
              >
                Get Olive <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-0 text-center">
        <h1
          className="text-[64px] sm:text-[72px] md:text-[80px] font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{ color: '#1f3d0c' }}
        >
          The Safest Way to<br />
          Shop for Groceries
        </h1>

        <p className="text-[18px] text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
          Use the Olive Food Scanner App to Instantly Eliminate<br className="hidden sm:block" />
          Harmful Ingredients from Your Family's Diet and Get<br className="hidden sm:block" />
          Expert-Backed Food Insights
        </p>

        <button
          className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-white font-semibold text-[16px] transition-all hover:opacity-90 active:scale-95 shadow-lg mb-[-40px] relative z-10"
          style={{ backgroundColor: '#1f3d0c' }}
        >
          <Apple size={20} />
          Download for iOS
        </button>
      </section>

      <section className="flex justify-center pt-12 pb-0 overflow-hidden">
        <div className="relative flex items-end justify-center gap-4">
          <div className="opacity-40 mb-8 hidden sm:block" style={{ transform: 'scale(0.75) translateY(30px)', transformOrigin: 'bottom center' }}>
            <div className="w-20 h-32 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #e8d5c0, #d4c0a8)' }}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/30" />
              </div>
            </div>
          </div>

          <PhoneMockup />

          <div className="opacity-40 mb-8 hidden sm:block" style={{ transform: 'scale(0.75) translateY(30px)', transformOrigin: 'bottom center' }}>
            <div className="w-20 h-32 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #d4c8e0, #c0b4cc)' }}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <StatBadge number="50k+" label="Products scanned" />
            <StatBadge number="200+" label="Harmful ingredients flagged" />
            <StatBadge number="4.8★" label="App Store rating" />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-[40px] font-extrabold tracking-tight mb-4" style={{ color: '#1f3d0c' }}>
            Know exactly what's in your food
          </h2>
          <p className="text-[17px] text-gray-500 max-w-lg mx-auto leading-relaxed">
            Olive gives your family the transparency you deserve at every grocery run.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Shield size={24} />}
            title="Instant ingredient scanning"
            description="Scan any barcode and get a complete breakdown of every ingredient, additive, and contaminant in seconds."
          />
          <FeatureCard
            icon={<Zap size={24} />}
            title="Expert-backed safety scores"
            description="Every product gets a safety score from 0–100 based on peer-reviewed science and nutrition experts."
          />
          <FeatureCard
            icon={<Leaf size={24} />}
            title="Personalized dietary filters"
            description="Set filters for your family's allergies, intolerances, and dietary preferences to get personalized alerts."
          />
          <FeatureCard
            icon={<Star size={24} />}
            title="Safer alternatives"
            description="When a product doesn't pass, Olive instantly suggests cleaner alternatives that match your preferences."
          />
          <FeatureCard
            icon={<Shield size={24} />}
            title="Contaminant detection"
            description="Identify PFAS, heavy metals, microplastics, fluoride levels, and 200+ other harmful substances."
          />
          <FeatureCard
            icon={<Leaf size={24} />}
            title="Family profiles"
            description="Create individual profiles for each family member with specific health needs, ages, and dietary goals."
          />
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#eef7ec' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[40px] font-extrabold tracking-tight mb-4" style={{ color: '#1f3d0c' }}>
            What families are saying
          </h2>
          <p className="text-[17px] text-gray-500 mb-14 max-w-lg mx-auto">
            Thousands of families trust Olive to keep their grocery carts clean.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                role: "Mom of 3",
                quote: "I've completely changed how we shop. I can't believe how many products we used to buy had PFAS in them. Olive is a game changer.",
              },
              {
                name: "James T.",
                role: "Health-conscious dad",
                quote: "The scoring system is so intuitive. Within a week, I had replaced half my pantry with cleaner options. My kids are eating so much better.",
              },
              {
                name: "Priya K.",
                role: "Nutritionist",
                quote: "I recommend Olive to every client. The science behind the scores is solid and the interface is incredibly easy to use.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-green-100/60 text-left">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-4">"{t.quote}"</p>
                <div>
                  <p className="text-[14px] font-bold text-gray-900">{t.name}</p>
                  <p className="text-[12px] text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-[40px] font-extrabold tracking-tight mb-4" style={{ color: '#1f3d0c' }}>
            Simple, transparent pricing
          </h2>
          <p className="text-[17px] text-gray-500 mb-14 max-w-lg mx-auto">
            Start free. Upgrade when you're ready.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-green-100 p-8 text-left">
              <p className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Free</p>
              <p className="text-[40px] font-extrabold text-gray-900 mb-1">$0</p>
              <p className="text-[14px] text-gray-400 mb-6">per month</p>
              <ul className="space-y-3 mb-8">
                {['10 scans per day', 'Basic safety scores', 'Allergen detection'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-[14px] text-gray-600">
                    <Check size={14} className="text-green-600 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-full border-2 font-semibold text-[15px] transition-all hover:bg-green-50" style={{ borderColor: '#1f3d0c', color: '#1f3d0c' }}>
                Get started
              </button>
            </div>
            <div className="rounded-2xl p-8 text-left text-white" style={{ backgroundColor: '#1f3d0c' }}>
              <p className="text-[13px] font-semibold text-green-300 uppercase tracking-wide mb-2">Premium</p>
              <p className="text-[40px] font-extrabold mb-1">$9.99</p>
              <p className="text-[14px] text-green-300 mb-6">per month</p>
              <ul className="space-y-3 mb-8">
                {['Unlimited scans', 'Full contaminant reports', 'Family profiles', 'Safer alternatives', 'Expert insights'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-[14px] text-green-100">
                    <Check size={14} className="text-green-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-full bg-white font-semibold text-[15px] transition-all hover:bg-green-50" style={{ color: '#1f3d0c' }}>
                Get Olive Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#1f3d0c' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-[40px] font-extrabold text-white mb-4">
            Start protecting your family today
          </h2>
          <p className="text-[17px] text-green-300 mb-10 max-w-xl mx-auto">
            Join thousands of healthy families who shop smarter with Olive.
          </p>
          <button
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white font-semibold text-[16px] transition-all hover:bg-green-50 active:scale-95"
            style={{ color: '#1f3d0c' }}
          >
            <Apple size={20} />
            Download for iOS
          </button>
        </div>
      </section>

      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div>
              <OliveLogo />
              <p className="text-[14px] text-gray-400 mt-3 max-w-xs leading-relaxed">
                The safest way to shop for groceries. Know exactly what's in your food.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { heading: 'Product', links: ['Features', 'Pricing', 'Download'] },
                { heading: 'Company', links: ['About', 'Blog', 'Careers'] },
                { heading: 'Solutions', links: ['For Families', 'For Restaurants', 'For Businesses'] },
                { heading: 'Legal', links: ['Privacy', 'Terms', 'Cookie Policy'] },
              ].map(col => (
                <div key={col.heading}>
                  <p className="text-[13px] font-bold text-gray-700 mb-3">{col.heading}</p>
                  <ul className="space-y-2">
                    {col.links.map(link => (
                      <li key={link}>
                        <a href="#" className="text-[13px] text-gray-400 hover:text-gray-700 transition-colors">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-100 mt-10 pt-6 text-center">
            <p className="text-[13px] text-gray-400">© 2024 Olive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

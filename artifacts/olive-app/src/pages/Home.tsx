import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight, Apple, Menu, X, Check, ChevronUp } from "lucide-react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/* ── helpers ── */
function img(path: string) {
  return `${BASE}${path}`;
}

/* ── Olive logo using the real SVG + wordmark ── */
function OliveLogo() {
  return (
    <a href="#" className="flex items-center gap-1.5">
      <img src={img("/olive-logo.svg")} alt="Olive icon" className="h-10 w-auto" />
      <span
        style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontWeight: 700,
          fontSize: "22px",
          color: "#1a3a0a",
          letterSpacing: "-0.3px",
          lineHeight: 1,
        }}
      >
        olive
      </span>
    </a>
  );
}

/* ── Nav ── */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-[#eef7ec] z-50">
      <div className="max-w-[1100px] mx-auto px-6 py-3 flex items-center justify-between">
        <OliveLogo />
        <div className="hidden lg:flex items-center gap-7">
          {["Solutions", "Features", "Pricing", "Blog", "Restaurants", "Food"].map((item) => {
            const hasDropdown = ["Solutions", "Blog", "Food"].includes(item);
            return (
              <button key={item} className="flex items-center gap-1 text-[15px] font-medium text-gray-800 hover:text-gray-900 transition-colors">
                {item}
                {hasDropdown && <ChevronDown size={13} className="text-gray-500 mt-0.5" />}
              </button>
            );
          })}
        </div>
        <div className="hidden lg:flex items-center gap-5">
          <button className="text-[15px] font-medium text-gray-800 hover:text-gray-900">Sign in</button>
          <a
            href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-[15px] hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#1a3a0a" }}
          >
            Get Olive <ArrowRight size={15} />
          </a>
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={22} color="#1a3a0a" /> : <Menu size={22} color="#1a3a0a" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-green-100 px-6 py-4 space-y-3">
          {["Solutions", "Features", "Pricing", "Blog", "Restaurants", "Food"].map((item) => (
            <button key={item} className="block w-full text-left text-[16px] font-medium text-gray-800 py-2">{item}</button>
          ))}
          <div className="pt-3 border-t border-gray-100 space-y-3">
            <button className="block text-[15px] font-medium text-gray-800">Sign in</button>
            <a href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white font-semibold text-[15px]"
              style={{ backgroundColor: "#1a3a0a" }}>
              Get Olive <ArrowRight size={15} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ── Trust Banner ── */
const AVATAR_URLS = [
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
];
function TrustBanner() {
  return (
    <div className="flex items-center justify-center gap-3 py-3">
      <div className="flex items-center">
        {AVATAR_URLS.map((url, i) => (
          <img
            key={i}
            src={url}
            alt="user"
            className="w-9 h-9 rounded-full border-2 border-white object-cover"
            style={{ marginLeft: i > 0 ? "-10px" : 0, zIndex: AVATAR_URLS.length - i }}
          />
        ))}
        <div
          className="w-9 h-9 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[11px] font-bold text-gray-600"
          style={{ marginLeft: "-10px" }}
        >
          3k+
        </div>
      </div>
      <span className="text-[14px] text-gray-600 font-medium">Trusted by thousands of healthy families</span>
    </div>
  );
}

/* ── Infinite Scroll Strip ── */
const PRODUCT_IMAGES = Array.from({ length: 10 }, (_, i) => ({
  src: img(`/slider/product-${i + 1}.png`),
  alt: ["Organic Bagels", "Cocao-nectar Bar", "Strawberry Vanilla Sparkling Tonic", "Fig and Olive Crackers",
    "San Pellegrino Sparkling Water", "Sea Salt & Vinegar Crisps", "Larabar Chocolate Chip Bar",
    "Sourlittles", "Gradea Raw Pure Jersey Milk", "Late July Organic Tortilla"][i],
}));

function InfiniteImageStrip({ direction = "left", speed = 40 }: { direction?: "left" | "right"; speed?: number }) {
  const items = [...PRODUCT_IMAGES, ...PRODUCT_IMAGES, ...PRODUCT_IMAGES];
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-3 ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}
        style={{ width: "max-content", animationDuration: `${speed}s` }}
      >
        {items.map((p, i) => (
          <img
            key={i}
            src={p.src}
            alt={p.alt}
            className="h-28 w-28 rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

/* ── Phone Mockup for Hero ── */
function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: "270px" }}>
      <div
        className="relative bg-white rounded-[44px] overflow-hidden"
        style={{
          border: "10px solid #d8d8d8",
          boxShadow: "0 50px 100px rgba(0,0,0,0.20), 0 15px 40px rgba(0,0,0,0.10)",
        }}
      >
        {/* dynamic island */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

        {/* product slider inside phone */}
        <div className="pt-12 pb-1 overflow-hidden">
          <div className="px-3 pb-2 overflow-x-hidden">
            <div className="flex gap-2 animate-scroll-left" style={{ width: "max-content", animationDuration: "18s" }}>
              {[...PRODUCT_IMAGES.slice(0, 5), ...PRODUCT_IMAGES.slice(0, 5)].map((p, i) => (
                <div key={i} className="relative flex-shrink-0">
                  <img src={p.src} alt={p.alt} className="h-20 w-20 rounded-xl object-cover" />
                  {i === 4 || i === 9 ? (
                    <div className="absolute bottom-1.5 right-1.5 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <Check size={10} color="white" strokeWidth={3} />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* product detail card */}
          <div className="mx-3 rounded-2xl overflow-hidden bg-white" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.10)" }}>
            <div className="px-3 pt-3 pb-2 flex items-start gap-2">
              <img src={img("/slider/product-5.png")} alt="San Pellegrino" className="w-12 h-16 object-contain flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold text-gray-900 leading-tight">San Pellegrino Sparkling<br />Natural Mineral Water (...</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Sanpellegrino</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="text-[12px] font-bold text-gray-900">52/100</span>
                  <span className="text-[10px] text-gray-400 ml-0.5">Limit</span>
                </div>
              </div>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ccc" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>

            <div className="px-3 pb-2 space-y-1.5 border-t border-gray-50 pt-2">
              {[
                { icon: "⚠️", label: "Contaminants", value: "7", dotColor: "bg-red-500" },
                { icon: "💧", label: "Fluoride", value: "Yes", dotColor: "bg-red-500" },
                { icon: "🔬", label: "PFAS", value: "No", dotColor: "bg-green-500" },
                { icon: "🔵", label: "Microplastics", value: "Minimal", dotColor: "bg-green-500" },
                { icon: "📊", label: "pH Level", value: "5.7", dotColor: "bg-gray-300" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px]">{row.icon}</span>
                    <span className="text-[11px] text-gray-500">{row.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-medium text-gray-800">{row.value}</span>
                    <div className={`w-2 h-2 rounded-full ${row.dotColor}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-50 px-3 pt-2 pb-2">
              <p className="text-[12px] font-bold text-gray-900 mb-1">Contaminants</p>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-gray-500">Nitrate</span>
                <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">8x limit</span>
              </div>
            </div>
          </div>
          <div className="h-4" />
        </div>
      </div>
    </div>
  );
}

/* ── How It Works Steps ── */
function HowItWorksSection() {
  const steps = [
    {
      title: "Scan & Detect",
      desc: "When you open Olive simply scan the barcode to instantly detect product ingredients. Olive's intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.",
      visual: (
        <div className="relative flex items-center justify-center">
          <img src={img("/barcode-image.png")} alt="Barcode" className="w-full max-w-xs rounded-2xl object-contain" />
        </div>
      ),
    },
    {
      title: "Data Analysis & Validation",
      desc: "After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.",
      visual: (
        <div className="space-y-2 overflow-hidden">
          <InfiniteImageStrip direction="left" speed={30} />
          <InfiniteImageStrip direction="right" speed={35} />
          <div className="flex justify-center pt-2">
            <div className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full text-[14px] font-semibold">
              <Check size={14} /> Safe to consume
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Actionable Insights & Recommendations",
      desc: "Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health & nutrition.",
      visual: (
        <div className="space-y-2">
          <div className="flex gap-2 overflow-hidden">
            <div className="flex gap-2 animate-scroll-left" style={{ width: "max-content", animationDuration: "22s" }}>
              {[...Array(3)].fill([
                img("/slider/product-2.png"),
                img("/slider/product-1.png"),
                img("/slider/product-3.png"),
              ]).flat().map((src, i) => (
                <img key={i} src={src} alt="product" className="h-24 w-24 object-cover rounded-xl flex-shrink-0" />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-3 animate-scroll-left" style={{ width: "max-content", animationDuration: "15s" }}>
              {[...Array(4)].fill(["Veggie Spaghetti Squash", "Chhole (Chickpea Curry)", "Lentil and Spinach Soup", "Stuffed Bell Peppers", "Mediterranean Quinoa"]).flat().map((item, i) => (
                <span key={i} className="bg-green-100 text-green-800 text-[12px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0">{item}</span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src={img("/title.png")} alt="" className="h-8 w-auto" />
          </div>
          <h2 className="text-[38px] sm:text-[44px] font-extrabold tracking-tight" style={{ color: "#1a3a0a" }}>
            How the Olive Food Scanner App Works
          </h2>
        </div>

        <div className="space-y-24">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-[13px] font-semibold px-3 py-1 rounded-full mb-4">
                  Step {i + 1}
                </div>
                <h3 className="text-[28px] font-bold mb-4" style={{ color: "#1a3a0a" }}>{step.title}</h3>
                <p className="text-[16px] text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
              <div className="flex-1 w-full">{step.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Health Benefits ── */
const POSITIVE_TAGS = ["Cholesterol-Free", "High Fibre", "No MSG", "Organic Ingredients", "Low PFAS", "Plant-Based", "Gluten-Free", "Non-GMO", "Rich in Antioxidants", "100% Whole Grain"];
const NEGATIVE_TAGS = ["Artificial Colors", "Sodium Nitrite", "TBHQ", "Monosodium Glutamate", "Potassium Sorbate", "BHA", "Carrageenan", "Aspartame", "Saccharin", "Palm Oil"];

function TagScroll({ tags, color, direction = "left", speed = 30 }: { tags: string[]; color: string; direction?: "left" | "right"; speed?: number }) {
  const doubled = [...tags, ...tags, ...tags];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-2 ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}
        style={{ width: "max-content", animationDuration: `${speed}s` }}
      >
        {doubled.map((tag, i) => (
          <span key={i} className={`text-[13px] font-semibold px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0 ${color}`}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

function ScoreCounter() {
  const [score, setScore] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const target = 88;
    const step = () => {
      setScore((prev) => {
        if (prev >= target) return target;
        return Math.min(prev + 2, target);
      });
    };
    const id = setInterval(step, 25);
    return () => clearInterval(id);
  }, [started]);

  return (
    <div ref={ref} className="bg-white rounded-3xl p-8 shadow-lg" style={{ border: "1px solid #e8f5e0" }}>
      <div className="flex items-start gap-4 mb-6">
        <img src={img("/slider/product-2.png")} alt="product" className="w-16 h-20 object-contain rounded-xl" />
        <img src={img("/slider/straus-ice-cream.png")} alt="straus" className="w-20 h-20 object-cover rounded-xl" />
        <img src={img("/slider/product-3.png")} alt="product" className="w-16 h-20 object-contain rounded-xl" />
      </div>
      <img src={img("/slider/straus-ice-cream-description.png")} alt="Straus Ice Cream" className="w-full rounded-xl mb-4 object-contain" style={{ maxHeight: "80px" }} />
      <div className="text-center">
        <p className="text-[13px] text-gray-400 mb-1">Straus Ice Cream</p>
        <div className="flex items-end justify-center gap-1">
          <span className="text-[60px] font-black leading-none" style={{ color: "#1a3a0a" }}>{score}</span>
          <span className="text-[28px] font-bold text-gray-400 mb-2">/100</span>
        </div>
        <div className="mt-1 text-[15px] font-bold text-green-700 bg-green-100 inline-block px-4 py-1 rounded-full">Excellent</div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-[13px]">
          <div className="bg-green-50 rounded-xl p-2 text-green-700 font-semibold">Positives</div>
          <div className="bg-red-50 rounded-xl p-2 text-red-600 font-semibold">Negatives</div>
        </div>
      </div>
    </div>
  );
}

function HealthBenefitsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#eef7ec" }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-[38px] sm:text-[44px] font-extrabold tracking-tight mb-4" style={{ color: "#1a3a0a" }}>
            Health Benefits of Using Olive
          </h2>
          <p className="text-[17px] text-gray-500 max-w-xl mx-auto">
            Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health.
          </p>
          <a href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-white font-semibold text-[15px]"
            style={{ backgroundColor: "#1a3a0a" }}>
            <Apple size={18} /> Download for iOS
          </a>
        </div>

        <div className="space-y-24 mt-16">
          {/* Nutritional Clarity */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h3 className="text-[28px] font-bold mb-5" style={{ color: "#1a3a0a" }}>Achieve Nutritional Clarity</h3>
              <ul className="space-y-4">
                {[
                  "Olive breaks down every ingredient into clear, actionable information.",
                  "Olive scores products out of 100 based on additives, seed oils, processing level, and detected toxins.",
                  "Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes.",
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-green-700" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full max-w-sm">
              <ScoreCounter />
            </div>
          </div>

          {/* Proactive Ingredient Filtering */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1">
              <h3 className="text-[28px] font-bold mb-5" style={{ color: "#1a3a0a" }}>Proactive Ingredient Filtering</h3>
              <ul className="space-y-4">
                {[
                  "Olive flags harmful additives and controversial ingredients before they become mainstream concerns.",
                  "Keeps you ahead of potential food safety concerns.",
                  "Gives busy parents the confidence to make safer food choices every time.",
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-green-700" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full space-y-3 overflow-hidden">
              <TagScroll tags={POSITIVE_TAGS} color="bg-green-100 text-green-800" direction="left" speed={25} />
              <TagScroll tags={POSITIVE_TAGS} color="bg-green-100 text-green-800" direction="right" speed={30} />
              <TagScroll tags={NEGATIVE_TAGS} color="bg-red-100 text-red-700" direction="left" speed={22} />
              <TagScroll tags={NEGATIVE_TAGS} color="bg-red-100 text-red-700" direction="right" speed={28} />
            </div>
          </div>

          {/* Real Health Outcomes */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h3 className="text-[28px] font-bold mb-5" style={{ color: "#1a3a0a" }}>Real Health Outcomes for Your Family</h3>
              <ul className="space-y-4">
                {[
                  "Empowers parents to feel more in control of their family's health.",
                  "Delivers personalized suggestions for healthier food choices.",
                  "Promotes long-term well-being through informed, balanced decisions.",
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-green-700" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full max-w-sm">
              <div className="grid grid-cols-3 gap-3">
                {["🧘", "🥗", "💪", "🌿", "🏃", "❤️"].map((emoji, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2 shadow-sm">
                    <span className="text-3xl">{emoji}</span>
                    <span className="text-[11px] text-gray-500 text-center">{["Wellness", "Nutrition", "Strength", "Natural", "Active", "Heart Health"][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function TestimonialsSection() {
  const reviews = [
    {
      name: "Megan L.",
      photo: img("/testimonials/meghan-l.png"),
      text: "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.",
    },
    {
      name: "Tina B.",
      photo: img("/testimonials/tina-b.png"),
      text: "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.",
    },
    {
      name: "Lila M.",
      photo: img("/testimonials/lila-m.png"),
      text: "After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly.",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[38px] sm:text-[44px] font-extrabold tracking-tight" style={{ color: "#1a3a0a" }}>
            Real Mothers&nbsp;&nbsp;Real Results
          </h2>
          <p className="text-[17px] text-gray-500 mt-3">
            Join thousands of satisfied parents who trust Olive to help them make healthier choices for their families.
          </p>
        </div>

        {/* Hero testimonials image */}
        <div className="rounded-3xl overflow-hidden mb-12 relative" style={{ maxHeight: "380px" }}>
          <img src={img("/testimonials/testimonials.png")} alt="Testimonials" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl p-6 border border-green-100" style={{ backgroundColor: "#f4fbf2" }}>
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} viewBox="0 0 20 20" fill="#f59e0b" className="w-4 h-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-5">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <img src={r.photo} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                <p className="text-[14px] font-bold text-gray-900">{r.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
            className="text-[15px] font-semibold underline" style={{ color: "#1a3a0a" }}>
            read all 3,147+ reviews
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Comparison Table ── */
function ComparisonSection() {
  const features = [
    "Detailed Product Breakdown",
    "Comprehensive Water Data",
    "Seed Oil Free Dining Map",
    "Seed Oil Flagging",
    "Certified Lab-Testing Data",
  ];
  const apps = ["Olive", "Yuka", "Open Food Facts", "Think Dirty"];

  return (
    <section className="py-20" style={{ backgroundColor: "#eef7ec" }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[38px] sm:text-[44px] font-extrabold tracking-tight" style={{ color: "#1a3a0a" }}>
            Olive Food Scanner App vs. The Rest
          </h2>
          <a href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-white font-semibold text-[15px]"
            style={{ backgroundColor: "#1a3a0a" }}>
            <Apple size={18} /> Download for iOS
          </a>
        </div>
        <div className="overflow-x-auto rounded-2xl" style={{ background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
          <table className="w-full text-[14px]">
            <thead>
              <tr>
                <th className="text-left px-6 py-5 text-gray-500 font-medium">Feature</th>
                {apps.map((app, i) => (
                  <th key={app} className={`px-4 py-5 text-center font-bold ${i === 0 ? "text-green-800" : "text-gray-600"}`}>
                    {i === 0 ? (
                      <div className="flex flex-col items-center gap-1">
                        <img src={img("/olive-logo.svg")} alt="Olive" className="h-8 w-auto" />
                        <span>Olive</span>
                      </div>
                    ) : app}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, fi) => (
                <tr key={fi} className={fi % 2 === 0 ? "bg-green-50/50" : ""}>
                  <td className="px-6 py-4 text-gray-700 font-medium">{feature}</td>
                  {apps.map((_, ai) => (
                    <td key={ai} className="px-4 py-4 text-center">
                      {ai === 0 || (ai === 1 && fi < 3) || (ai === 2 && fi < 2) ? (
                        <div className="flex justify-center">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${ai === 0 ? "bg-green-600" : "bg-gray-300"}`}>
                            <Check size={12} color="white" strokeWidth={3} />
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                            <X size={12} className="text-red-500" strokeWidth={3} />
                          </div>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ── */
function PricingSection() {
  const [tab, setTab] = useState<"monthly" | "yearly">("monthly");
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[38px] sm:text-[44px] font-extrabold tracking-tight" style={{ color: "#1a3a0a" }}>
            Healthy Choices&nbsp;&nbsp;Honest Pricing
          </h2>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex gap-1 bg-gray-100 p-1 rounded-full">
            {(["monthly", "yearly"] as const).map((t) => (
              <button
                key={t}
                className={`px-6 py-2 rounded-full text-[14px] font-semibold transition-all ${tab === t ? "bg-white shadow-sm text-gray-900" : "text-gray-500"}`}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
          {/* Monthly */}
          <div className={`flex-1 rounded-3xl border-2 p-8 ${tab === "monthly" ? "border-green-600" : "border-gray-100"}`}>
            <div className="flex items-center gap-2 mb-4">
              <img src={img("/olive-logo.svg")} alt="Olive" className="h-8 w-auto" />
              <span className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Monthly</span>
            </div>
            <div className="mb-6">
              <span className="text-[48px] font-extrabold text-gray-900">$14.99</span>
              <span className="text-[16px] text-gray-400">/monthly</span>
            </div>
            <ul className="space-y-3 mb-8">
              {["Unlimited Scans", "Unlimited Database Searches", "Comprehensive Lab-Testing Data"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-[14px] text-gray-600">
                  <Check size={14} className="text-green-600 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a href="https://signup.oliveapp.com/olive-onboarding/"
              className="block w-full py-3 text-center rounded-full font-semibold text-[15px] border-2 transition-all hover:bg-green-50"
              style={{ borderColor: "#1a3a0a", color: "#1a3a0a" }}>
              Subscribe
            </a>
          </div>

          {/* Yearly */}
          <div className="flex-1 rounded-3xl p-8 text-white relative overflow-hidden" style={{ backgroundColor: "#1a3a0a" }}>
            <div className="absolute top-3 right-3 bg-green-400 text-[11px] font-bold px-3 py-1 rounded-full text-green-900">60% Savings</div>
            <div className="flex items-center gap-2 mb-4">
              <img src={img("/olive-logo.svg")} alt="Olive" className="h-8 w-auto brightness-0 invert" />
              <span className="text-[13px] font-semibold text-green-300 uppercase tracking-wide">Yearly</span>
            </div>
            <div className="mb-1">
              <span className="text-[48px] font-extrabold">$69.99</span>
            </div>
            <div className="text-[14px] text-green-300 line-through mb-4">$179.88/yearly</div>
            <ul className="space-y-3 mb-8">
              {["Everything in monthly plan", "Get 7 months free", "60% Savings"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-[14px] text-green-100">
                  <Check size={14} className="text-green-400 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a href="https://signup.oliveapp.com/olive-onboarding/"
              className="block w-full py-3 text-center rounded-full bg-white font-semibold text-[15px] transition-all hover:bg-green-50"
              style={{ color: "#1a3a0a" }}>
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Background Slideshow CTA ── */
const BG_SLIDES = [
  "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2940&auto=format&fit=crop",
  img("/showcase.jpeg"),
];

function HeroCtaSection() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % BG_SLIDES.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[520px] overflow-hidden">
      {BG_SLIDES.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${src})`, opacity: i === current ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h2 className="text-[48px] sm:text-[60px] font-extrabold leading-tight mb-8">
          Protect Your Family<br />
          <span className="text-green-300">From Hidden Toxins</span>
        </h2>
        <a
          href="https://signup.oliveapp.com/olive-onboarding/"
          className="inline-flex items-center gap-3 bg-white text-[15px] font-bold px-8 py-4 rounded-full hover:bg-green-50 transition-colors"
          style={{ color: "#1a3a0a" }}
        >
          Sign up for Olive today <ArrowRight size={16} />
        </a>
        <div className="flex gap-2 mt-8">
          {BG_SLIDES.map((_, i) => (
            <button key={i} className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-5" : "bg-white/40"}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Independent section ── */
function IndependentSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#eef7ec" }}>
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <h2 className="text-[38px] sm:text-[48px] font-extrabold tracking-tight" style={{ color: "#1a3a0a" }}>
          100% Independent.<br />Always.
        </h2>
        <p className="text-[18px] text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
          We never monetize through brand deals, affiliate links, or ads — so you can trust our recommendations are always aligned with our users.
        </p>
      </div>
    </section>
  );
}

/* ── FAQ ── */
const FAQS = [
  {
    q: "What is the Food Scanner App and how does it work?",
    a: "Olive is a food scanner app that lets you scan any grocery product's barcode to instantly see a full breakdown of its ingredients, safety score, and any harmful substances. Our AI-powered database compares every ingredient against the latest scientific research.",
  },
  {
    q: "How does Olive ensure the accuracy of the Food Scanner App results?",
    a: "Our food database is maintained by registered holistic health experts and updated continuously with the latest peer-reviewed research. Every product score is based on rigorous data analysis and expert nutritional guidelines.",
  },
  {
    q: "Which products can I scan with the Food Scanner App?",
    a: "You can scan virtually any grocery product with a barcode. Our database covers hundreds of thousands of products across all major grocery categories, from beverages and snacks to dairy, produce, and packaged meals.",
  },
  {
    q: "Can the Food Scanner App be customized to my family's dietary needs?",
    a: "Yes! You can set up personalized profiles for each family member with specific allergies, intolerances, and dietary preferences. Olive will then flag products that don't meet your family's specific needs.",
  },
  {
    q: "Is my data secure when I use the Olive?",
    a: "Absolutely. We take data privacy extremely seriously. We never sell your personal data to third parties and use industry-standard encryption to protect all your information.",
  },
  {
    q: "When will the Android version of the Food Scanner App be available?",
    a: "We're working hard on the Android version. Sign up for our waitlist to be notified as soon as it's available.",
  },
];

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-shrink-0 text-center lg:text-left">
            <img src={img("/olive-faq.png")} alt="Olive FAQ" className="h-40 w-auto mx-auto lg:mx-0 mb-6" />
            <h2 className="text-[32px] font-extrabold leading-tight" style={{ color: "#1a3a0a" }}>
              Frequently Asked<br />Questions by Parents
            </h2>
            <a href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-white font-semibold text-[15px]"
              style={{ backgroundColor: "#1a3a0a" }}>
              <Apple size={18} /> Download for iOS
            </a>
          </div>
          <div className="flex-1 space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-green-100 rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-green-50/50 transition-colors"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <span className="text-[15px] font-semibold text-gray-900 pr-4">{faq.q}</span>
                  {openIdx === i ? <ChevronUp size={18} className="flex-shrink-0 text-gray-400" /> : <ChevronDown size={18} className="flex-shrink-0 text-gray-400" />}
                </button>
                {openIdx === i && (
                  <div className="px-6 pb-4 text-[14px] text-gray-500 leading-relaxed border-t border-green-50">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Bottom CTA ── */
function BottomCtaSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#eef7ec" }}>
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <h2 className="text-[38px] sm:text-[44px] font-extrabold tracking-tight mb-6" style={{ color: "#1a3a0a" }}>
          Keep your family safe with Olive
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8 text-[15px] text-gray-600">
          {["Effortless food scanning", "Peace of mind for parents", "Healthy product recommendations"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check size={14} className="text-green-600" /> {item}
            </div>
          ))}
        </div>
        <a href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-[16px] hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#1a3a0a" }}>
          <Apple size={20} /> Download for iOS
        </a>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-14">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          <div>
            <OliveLogo />
            <p className="text-[14px] text-gray-400 mt-3 max-w-xs leading-relaxed">
              The safest way to shop for groceries. Know exactly what's in your food.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { heading: "Product", links: ["Features", "Pricing", "Download"] },
              { heading: "Company", links: ["About", "Blog", "Careers"] },
              { heading: "Solutions", links: ["For Families", "For Restaurants", "For Businesses"] },
              { heading: "Legal", links: ["Privacy", "Terms", "Cookie Policy"] },
            ].map((col) => (
              <div key={col.heading}>
                <p className="text-[13px] font-bold text-gray-700 mb-3">{col.heading}</p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
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
  );
}

/* ── Main Page ── */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Sticky top bar: trust + nav */}
      <div className="sticky top-0 z-50 bg-[#eef7ec]">
        <TrustBanner />
        <Navbar />
      </div>

      {/* Hero */}
      <section className="bg-[#eef7ec] text-center pt-14 pb-0 px-6 overflow-hidden">
        <h1
          className="text-[60px] sm:text-[72px] md:text-[84px] font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{ color: "#1a3a0a", fontFamily: "'Georgia', serif" }}
        >
          The Safest Way to<br />Shop for Groceries
        </h1>
        <p className="text-[18px] text-gray-500 max-w-[520px] mx-auto leading-relaxed mb-10">
          Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights
        </p>
        <a
          href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
          className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-white font-semibold text-[16px] hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#1a3a0a" }}
        >
          <Apple size={20} /> Download for iOS
        </a>

        {/* Phone + side panels */}
        <div className="relative flex items-end justify-center gap-4 mt-10">
          {/* Left ghost panel */}
          <div className="hidden sm:block opacity-50 mb-6" style={{ transform: "scale(0.82)", transformOrigin: "bottom right" }}>
            <div className="w-36 h-52 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=400&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <PhoneMockup />

          {/* Right ghost panel */}
          <div className="hidden sm:block opacity-50 mb-6" style={{ transform: "scale(0.82)", transformOrigin: "bottom left" }}>
            <div className="w-36 h-52 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?q=80&w=400&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorksSection />

      {/* Health benefits */}
      <HealthBenefitsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Comparison */}
      <ComparisonSection />

      {/* Pricing */}
      <PricingSection />

      {/* Background CTA */}
      <HeroCtaSection />

      {/* Independent */}
      <IndependentSection />

      {/* FAQ */}
      <FaqSection />

      {/* Bottom CTA */}
      <BottomCtaSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

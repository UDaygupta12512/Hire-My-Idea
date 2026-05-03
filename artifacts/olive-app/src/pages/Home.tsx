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
          fontFamily: "pallFont, Arial, sans-serif",
          fontWeight: 700,
          fontSize: "24px",
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
          {["Olive Health", "Solutions", "Features", "Pricing", "Blog", "Restaurants", "Food"].map((item) => {
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
          {["Olive Health", "Solutions", "Features", "Pricing", "Blog", "Restaurants", "Food"].map((item) => (
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

/* ── Real oliveapp.com CDN base ── */
const OLIVE_CDN = "https://www.oliveapp.com/assets/images";

/* ── Infinite Scroll Strip ── */
const PRODUCT_IMAGES = [
  { src: `${OLIVE_CDN}/how-to/slider/product-1.png`, alt: "Organic Bagels" },
  { src: `${OLIVE_CDN}/how-to/slider/product-2.png`, alt: "Cocao-nectar Bar, Oregon Peppermint" },
  { src: `${OLIVE_CDN}/how-to/slider/product-3.png`, alt: "Strawberry Vanilla Sparkling Tonic" },
  { src: `${OLIVE_CDN}/how-to/slider/product-4.png`, alt: "Fig and Olive Crackers" },
  { src: `${OLIVE_CDN}/how-to/slider/product-5.png`, alt: "San Pellegrino Sparkling Natural Mineral Water" },
  { src: `${OLIVE_CDN}/how-to/slider/product-6.png`, alt: "Sea Salt & Vinegar Potato Crisps" },
  { src: `${OLIVE_CDN}/how-to/slider/product-7.png`, alt: "Larabar Chocolate Chip Cookie Dough Bar" },
  { src: `${OLIVE_CDN}/how-to/slider/product-8.png`, alt: "Sourlittles" },
  { src: `${OLIVE_CDN}/how-to/slider/product-9.png`, alt: "Gradea Raw Pure Jersey Milk" },
  { src: `${OLIVE_CDN}/how-to/slider/product-10.png`, alt: "Late July Snacks Thin and Crispy Organic Tortilla" },
];

function InfiniteImageStrip({ direction = "left", speed = 40, fade = true }: { direction?: "left" | "right"; speed?: number; fade?: boolean }) {
  const items = [...PRODUCT_IMAGES, ...PRODUCT_IMAGES, ...PRODUCT_IMAGES];
  return (
    <div
      className="overflow-hidden w-full"
      style={fade ? { maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)" } : {}}
    >
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
const PHONE_SLIDER_ITEMS = [
  ...PRODUCT_IMAGES.slice(0, 5),
  ...PRODUCT_IMAGES.slice(0, 5),
  ...PRODUCT_IMAGES.slice(0, 5),
];

function PhoneMockup() {
  const [activeIdx, setActiveIdx] = useState(2);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % 5);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const displayItems = PRODUCT_IMAGES.slice(0, 5);

  return (
    <div className="relative mx-auto" style={{ width: "290px" }}>
      <div
        className="relative bg-white rounded-[44px] overflow-hidden"
        style={{
          border: "10px solid #d0d0d0",
          boxShadow: "0 60px 120px rgba(0,0,0,0.22), 0 20px 50px rgba(0,0,0,0.12)",
        }}
      >
        {/* dynamic island */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

        {/* product carousel inside phone — 3 visible, center highlighted */}
        <div className="pt-12 pb-0 overflow-hidden">
          <div className="pb-3 overflow-hidden" style={{ position: "relative" }}>
            <div
              className="flex items-center transition-transform duration-500 ease-in-out"
              style={{
                gap: "8px",
                /* center = 135px (half of 270px phone interior).
                   item i center = 99 + i*80.  shift = 135 - (99+80i) = 36 - 80i */
                transform: `translateX(${36 - activeIdx * 80}px)`,
                width: "max-content",
                paddingLeft: "99px",
              }}
            >
              {displayItems.map((p, i) => {
                const isActive = i === activeIdx;
                const isAdjacent = Math.abs(i - activeIdx) === 1 ||
                  (activeIdx === 0 && i === 4) || (activeIdx === 4 && i === 0);
                const scale = isActive ? 1 : 0.8;
                const opacity = isActive ? 1 : isAdjacent ? 0.65 : 0.3;
                return (
                  <div
                    key={i}
                    className="relative flex-shrink-0 transition-all duration-500 ease-in-out"
                    style={{
                      transform: `scale(${scale})`,
                      opacity,
                      transformOrigin: "center center",
                      zIndex: isActive ? 2 : 1,
                    }}
                  >
                    <img
                      src={p.src}
                      alt={p.alt}
                      className="rounded-xl object-cover"
                      style={{ width: "72px", height: "72px" }}
                    />
                    {isActive && (
                      <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center" style={{ zIndex: 3 }}>
                        <Check size={10} color="white" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* product-5-details.png — the real app screenshot */}
          <img
            src={`${OLIVE_CDN}/how-to/slider/product-5-details.png`}
            alt="San Pellegrino product detail"
            className="w-full object-cover object-top"
            style={{ display: "block" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Product Strip Section (between hero and How It Works) ── */
function ProductStripSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <InfiniteImageStrip direction="left" speed={30} fade={true} />
    </section>
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
          <img src={`${OLIVE_CDN}/how-to/barcode-image.png`} alt="Barcode" className="w-full max-w-xs rounded-2xl object-contain" />
        </div>
      ),
    },
    {
      title: "Data Analysis & Validation",
      desc: "After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.",
      visual: (
        <div className="space-y-2 overflow-hidden">
          <InfiniteImageStrip direction="left" speed={30} fade={true} />
          <InfiniteImageStrip direction="right" speed={35} fade={true} />
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
                `${OLIVE_CDN}/how-to/slider/product-2.png`,
                `${OLIVE_CDN}/how-to/slider/product-1.png`,
                `${OLIVE_CDN}/how-to/slider/product-3.png`,
              ]).flat().map((src, i) => (
                <img key={i} src={src} alt="product" className="h-24 w-24 object-cover rounded-xl flex-shrink-0" />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-3 animate-scroll-left" style={{ width: "max-content", animationDuration: "15s" }}>
              {[...Array(4)].fill(["Veggie Spaghetti Squash", "Chhole (Chickpea Curry)", "Lentil and Spinach Soup", "Stuffed Bell Peppers with Rice", "Mediterranean Quinoa Salad"]).flat().map((item, i) => (
                <span key={i} className="bg-green-100 text-green-800 text-[12px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0">{item}</span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="md:my-24 my-8 max-w-7xl px-4 md:px-8 mx-auto">
      <div className="py-4 md:py-16 flex flex-col max-w-6xl mx-auto items-center">
        <div className="flex relative text-primary items-center justify-center mb-2">
          <h2 className="font-pall text-primary max-w-xl font-[500] text-2xl md:text-[3.2rem] text-center">
            How the Olive Food Scanner App Works
          </h2>
          <img src={`${OLIVE_CDN}/title.png`} alt="" className="h-16 md:h-24 w-auto absolute -right-8 md:-right-16 top-1/2 -translate-y-1/2 pointer-events-none" style={{ height: "6em" }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 pt-8 md:pt-24 gap-6 w-full">
          {steps.map((step, i) => (
            <div
              key={i}
              className="w-full mx-auto p-8 rounded-xl group flex flex-col gap-4"
              style={{
                border: "1px solid rgba(255,255,255,0.10)",
                backgroundColor: "#F5FAF6",
                boxShadow: "2px 4px 16px 0px rgba(248,248,248,0.06) inset",
              }}
            >
              <div className="flex-1 overflow-hidden rounded-xl mb-2">
                {step.visual}
              </div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-[13px] font-semibold px-3 py-1 rounded-full self-start">
                Step {i + 1}
              </div>
              <h3 className="text-[22px] font-bold" style={{ color: "#1a3a0a" }}>{step.title}</h3>
              <p className="text-sm font-medium text-neutral-600 max-w-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Health Benefits ── */
type TagItem = { icon: "check" | "cross"; text: string; direction: "left" | "right" };
const TAG_ROWS: TagItem[][] = [
  [
    {icon: "check", text: "Cholesterol-Free", direction: "left"},
    {icon: "check", text: "High Fibre", direction: "left"},
    {icon: "check", text: "No MSG", direction: "left"},
    {icon: "check", text: "Organic Ingredients", direction: "left"},
    {icon: "check", text: "Low PFAS", direction: "left"},
    {icon: "check", text: "Plant-Based", direction: "left"},
    {icon: "check", text: "Gluten-Free", direction: "left"},
  ],
  [
    {icon: "check", text: "100% Whole Grain", direction: "right"},
    {icon: "check", text: "Cholesterol-Free", direction: "right"},
    {icon: "check", text: "Gluten-Free", direction: "right"},
    {icon: "check", text: "Non-GMO", direction: "right"},
    {icon: "check", text: "Rich in Antioxidants", direction: "right"},
  ],
  [
    {icon: "cross", text: "Artificial Colors", direction: "left"},
    {icon: "cross", text: "Sodium Nitrite", direction: "left"},
    {icon: "cross", text: "TBHQ", direction: "left"},
    {icon: "cross", text: "Monosodium Glutamate", direction: "left"},
    {icon: "cross", text: "Potassium Sorbate", direction: "left"},
    {icon: "cross", text: "BHA", direction: "left"},
    {icon: "cross", text: "Carrageenan", direction: "left"},
  ],
  [
    {icon: "cross", text: "Potassium Bromate", direction: "right"},
    {icon: "cross", text: "Aspartame", direction: "right"},
    {icon: "cross", text: "Saccharin", direction: "right"},
    {icon: "cross", text: "Palm Oil", direction: "right"},
    {icon: "cross", text: "Sodium Benzoate", direction: "right"},
    {icon: "cross", text: "Xanthan Gum", direction: "right"},
  ],
  [
    {icon: "cross", text: "Potassium Bromate", direction: "left"},
    {icon: "cross", text: "Aspartame", direction: "left"},
    {icon: "cross", text: "Saccharin", direction: "left"},
    {icon: "cross", text: "Palm Oil", direction: "left"},
    {icon: "cross", text: "Sodium Benzoate", direction: "left"},
    {icon: "cross", text: "Xanthan Gum", direction: "left"},
  ],
];

function TagChip({ icon, text }: { icon: "check" | "cross"; text: string }) {
  return (
    <div className="flex items-center bg-black/10 px-3 py-2 rounded-full gap-2 whitespace-nowrap flex-shrink-0">
      {icon === "check" ? (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-700 flex-shrink-0">
          <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-red-600 flex-shrink-0">
          <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" />
        </svg>
      )}
      <span className="text-[13px] font-semibold text-gray-900">{text}</span>
    </div>
  );
}

function TagScroll({ tags, direction = "left", speed = 30 }: { tags: {icon: "check" | "cross"; text: string}[]; direction?: "left" | "right"; speed?: number }) {
  const doubled = [...tags, ...tags, ...tags];
  return (
    <div
      className="overflow-hidden"
      style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}
    >
      <div
        className={`flex gap-3 ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}
        style={{ width: "max-content", animationDuration: `${speed}s` }}
      >
        {doubled.map((tag, i) => (
          <TagChip key={i} icon={tag.icon} text={tag.text} />
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
    const target = 96;
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
        <img src={`${OLIVE_CDN}/how-to/slider/product-2.png`} alt="product" className="w-16 h-20 object-contain rounded-xl" />
        <img src={`${OLIVE_CDN}/how-to/slider/straus-ice-cream.png`} alt="straus" className="w-20 h-20 object-cover rounded-xl" />
        <img src={`${OLIVE_CDN}/how-to/slider/product-3.png`} alt="product" className="w-16 h-20 object-contain rounded-xl" />
      </div>
      <img src={`${OLIVE_CDN}/how-to/slider/straus-ice-cream-description.png`} alt="Straus Ice Cream" className="w-full rounded-xl mb-4 object-contain" style={{ maxHeight: "80px" }} />
      <div className="text-center">
        <p className="text-[13px] text-gray-400 mb-1">Straus Ice Cream</p>
        <div className="flex items-end justify-center gap-1">
          <span className="text-[60px] font-black leading-none" style={{ color: "#1a3a0a", fontFamily: "nueuFont, Arial, sans-serif" }}>{score}</span>
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
          <div className="flex relative text-primary items-center justify-center mb-4">
            <h2 className="font-pall text-primary max-w-xl font-[500] text-2xl md:text-[3.2rem] text-center">
              Health Benefits of Using Olive
            </h2>
          </div>
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
              {TAG_ROWS.map((row, idx) => (
                <TagScroll key={idx} tags={row} direction={row[0].direction} speed={22 + idx * 3} />
              ))}
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
      photo: `${OLIVE_CDN}/testimonials/meghan-l.png`,
      text: "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.",
    },
    {
      name: "Tina B.",
      photo: `${OLIVE_CDN}/testimonials/tina-b.png`,
      text: "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.",
    },
    {
      name: "Lila M.",
      photo: `${OLIVE_CDN}/testimonials/lila-m.png`,
      text: "After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly.",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex relative text-primary items-center justify-center mb-3">
            <h2 className="font-pall text-primary max-w-xl font-[500] text-2xl md:text-[3.2rem] text-center">
              Real Mothers
            </h2>
          </div>
          <p className="font-pall text-primary font-[500] text-2xl md:text-[3.2rem] text-center -mt-2 mb-2">
            Real Results
          </p>
          <p className="text-[17px] text-gray-500 mt-3">
            Join thousands of satisfied parents who trust Olive to help them make healthier choices for their families.
          </p>
        </div>

        {/* Hero testimonials image */}
        <div className="rounded-3xl overflow-hidden mb-12 relative" style={{ maxHeight: "380px" }}>
          <img src={`${OLIVE_CDN}/testimonials.png`} alt="Testimonials" className="w-full h-full object-cover" />
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
          <div className="flex relative text-primary items-center justify-center mb-4">
            <h2 className="font-pall text-primary max-w-xl font-[500] text-2xl md:text-[3.2rem] text-center">
              Olive Food Scanner App vs. The Rest
            </h2>
          </div>
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
  return (
    <section className="py-12 md:py-24 pb-72 px-4 relative overflow-hidden bg-white" id="pricing">
      <div className="absolute -bottom-12 -right-24 pointer-events-none select-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="650" viewBox="0 0 600 650" fill="none">
          <path fill="#EBF5ED" d="M221.489 89.862C209.906 48.662 225.623.594 275.544.594c49.927 0 65.644 48.067 54.061 89.268-8.556 30.426-31.848 102.041-43.448 137.418-1.326 4.049 1.294 8.301 5.225 9.938 3.93 1.637 8.666.418 10.588-3.378 16.816-33.219 50.985-100.338 66.452-127.899 20.943-37.325 66.045-60.2 101.345-24.899 35.304 35.304 12.429 80.405-24.896 101.349-27.563 15.464-94.679 49.636-127.895 66.451-3.799 1.923-5.019 6.658-3.382 10.589 1.637 3.93 5.889 6.551 9.935 5.224 35.381-11.599 106.996-34.894 137.421-43.448 41.201-11.582 89.269 4.134 89.269 54.056 0 49.927-48.068 65.644-89.269 54.061-30.425-8.556-102.04-31.848-137.421-43.448-4.046-1.326-8.298 1.294-9.935 5.224-1.637 3.931-.417 8.666 3.382 10.589 33.216 16.815 100.332 50.987 127.895 66.451 37.325 20.944 60.2 66.045 24.899 101.349-35.303 35.301-80.407 12.426-101.348-24.899-15.464-27.564-49.636-94.68-66.452-127.896-1.922-3.798-6.658-5.018-10.588-3.381-3.931 1.637-6.551 5.889-5.225 9.935 11.6 35.381 34.895 106.996 43.448 137.421 11.583 41.201-4.134 89.269-54.058 89.269-49.925 0-65.641-48.068-54.058-89.269 8.553-30.425 31.848-102.04 43.447-137.421 1.327-4.046-1.291-8.298-5.224-9.935-3.928-1.637-8.666-.417-10.589 3.381-16.815 33.216-50.984 100.332-66.451 127.896-20.941 37.325-66.045 60.2-101.346 24.899-35.303-35.304-12.428-80.405 24.897-101.349 27.563-15.464 94.679-49.636 127.895-66.451 3.799-1.923 5.018-6.658 3.379-10.589-1.635-3.93-5.887-6.55-9.933-5.224-35.377 11.6-106.995 34.895-137.42 43.448C48.942 340.907.874 325.19.874 275.266c0-49.925 48.068-65.641 89.268-54.059 30.426 8.554 102.041 31.849 137.419 43.448 4.048 1.327 8.3-1.291 9.937-5.224 1.637-3.928.421-8.666-3.378-10.589-33.219-16.815-100.338-50.987-127.898-66.451-37.326-20.944-60.2-66.045-24.9-101.349 35.304-35.3 80.408-12.426 101.349 24.899 15.464 27.564 49.636 94.68 66.451 127.896 1.923 3.799 6.658 5.018 10.589 3.378 3.931-1.634 6.551-5.886 5.224-9.932-11.599-35.38-34.894-106.995-43.447-137.42Z"/>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center max-w-xl mx-auto md:mb-24 mb-12">
          <div className="flex relative text-primary items-center justify-center">
            <h2 className="font-pall text-primary max-w-xl font-[500] text-2xl md:text-[3.2rem] mb-4">
              Healthy Choices <br/> Honest Pricing
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 px-4 md:px-0 gap-8 max-w-4xl mx-auto">
          {/* Monthly */}
          <div className="rounded-3xl p-8 flex flex-col gap-8 relative" style={{ backgroundColor: "#F0F7F2" }}>
            <div className="absolute -top-16 -left-8">
              <img src={img("/olive-logo.svg")} alt="Olive Icon" className="w-24" />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-medium capitalize">monthly</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold">$14.99</span>
                <span className="text-sm opacity-80">/monthly</span>
              </div>
            </div>
            <ul className="space-y-4">
              {["Unlimited Scans", "Unlimited Database Searches", "Comprehensive Lab-Testing Data"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-lg font-[500]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5 flex-shrink-0" style={{ color: "#386641" }}>
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href="https://signup.oliveapp.com/olive-onboarding/"
              className="inline-flex items-center justify-center w-full rounded-full px-6 py-3 text-base font-[600] text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#253612" }}>
              Subscribe
            </a>
          </div>

          {/* Yearly */}
          <div className="rounded-3xl p-8 flex flex-col gap-8 relative text-white" style={{ backgroundColor: "#386641" }}>
            <div className="space-y-1">
              <p className="text-lg font-medium capitalize">yearly</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold">$69.99</span>
                <span className="text-2xl font-medium line-through opacity-60">$179.88</span>
                <span className="text-sm opacity-80">/yearly</span>
              </div>
            </div>
            <ul className="space-y-4">
              {["Everything in monthly plan", "Get 7 months free", "60% Savings"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-lg font-[500]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5 text-white flex-shrink-0">
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href="https://signup.oliveapp.com/olive-onboarding/"
              className="inline-flex items-center justify-center w-full rounded-full px-6 py-3 text-base font-[600] transition-all hover:bg-gray-100"
              style={{ backgroundColor: "white", color: "#253612" }}>
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
  `${OLIVE_CDN}/showcase.jpeg`,
];

function HeroCtaSection() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % BG_SLIDES.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="md:my-24 my-8 max-w-6xl mx-auto px-4 md:px-8">
      <div className="relative w-full rounded-[1rem] md:rounded-t-[3.5rem] md:rounded-b-[3.5rem] overflow-hidden" style={{ backgroundColor: "#386641" }}>
        <div className="relative w-full rounded-[1rem] md:rounded-b-[50rem] overflow-hidden" style={{ backgroundColor: "#386641" }}>
          <div className="h-[300px] md:h-[800px] relative">
            <div className="absolute inset-0 w-full h-full">
              {BG_SLIDES.map((src, i) => (
                <div
                  key={i}
                  className="absolute inset-0 w-full h-full transition-opacity duration-1000"
                  style={{ opacity: i === current ? 1 : 0 }}
                >
                  <img src={src} alt={`Slide ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {BG_SLIDES.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === current ? "bg-white w-4" : "w-2 bg-white/50"}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-24 left-0 right-0 h-24 md:h-48" />
        </div>
        <div className="relative py-24 flex flex-col items-center justify-center text-center text-white px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-pall text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Protect Your Family <br/> From Hidden Toxins
            </h1>
            <a
              href="https://signup.oliveapp.com/olive-onboarding/"
              className="inline-flex items-center gap-3 px-4 md:px-8 py-5 md:py-4 rounded-full font-medium text-base md:text-lg transition-colors hover:bg-gray-100"
              style={{ backgroundColor: "white", color: "#386641" }}
            >
              Sign up for Olive today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Independent section ── */
function IndependentSection() {
  return (
    <div className="md:my-40 my-16 max-w-none mx-auto px-4 md:px-8">
      <div className="flex xl:items-start xl:justify-start flex-col max-w-7xl mx-auto">
        <div className="flex relative text-primary items-start justify-start">
          <h2 className="font-pall text-center font-bold text-3xl md:text-6xl xl:text-9xl max-w-none" style={{ color: "#FF9DB4" }}>
            100% Independent.
          </h2>
        </div>
        <div className="flex md:flex-row flex-col items-start md:items-baseline gap-2 md:gap-10 w-full flex-1">
          <p className="md:text-6xl xl:text-9xl text-center font-bold text-3xl max-w-none" style={{ color: "#FF9DB4" }}>
            Always.
          </p>
          <p className="text-xl md:text-base xl:text-3xl font-bold" style={{ color: "#386641" }}>
            We <span style={{ color: "#AEB93E" }}>never monetize</span> through brand deals, affiliate links, or ads — so
            <span style={{ color: "#AEB93E" }}> you can trust</span> our{" "}
            <span style={{ color: "#AEB93E" }}>recommendations</span> are always aligned with our users.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── FAQ ── */
const FAQS = [
  {
    q: "What is the Food Scanner App and how does it work?",
    a: "Olive is a comprehensive tool designed to help busy parents make informed food choices. By scanning product barcodes, it quickly identifies harmful ingredients and suggests safer alternatives, ensuring that you always stay ahead of potential health risks.",
  },
  {
    q: "How does Olive ensure the accuracy of the Food Scanner App results?",
    a: "Olive leverages an extensive, up-to-date food database and expert nutritional guidelines to offer precise feedback. The Food Scanner App cross-references real-world data with independent analyses to deliver reliable, actionable insights tailored for your family's needs.",
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
    a: "Yes, your privacy is our top priority. Olive's food scanner app employs robust security protocols to safeguard your personal information while delivering transparent and accurate nutritional insights, allowing you to rest easy with every scan.",
  },
  {
    q: "When will the Android version of the Food Scanner App be available?",
    a: "Olive is currently available on iOS, with plans to launch the Android version soon. We understand how crucial it is for every parent to access reliable nutritional data, and the food scanner app is constantly evolving to meet that need.",
  },
];

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="md:my-24 my-8 max-w-6xl mx-auto px-4 md:px-8">
      <section className="w-full rounded-[1rem] md:rounded-[3.5rem] overflow-hidden" style={{ backgroundColor: "#FFF9EB" }}>
        <div className="py-24 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex relative text-primary items-center justify-center mb-6">
                <h2 className="font-pall text-primary max-w-xl font-[500] text-2xl md:text-[3.2rem] text-center">
                  Frequently Asked Questions by Parents
                </h2>
                <img
                  src={`${OLIVE_CDN}/olive-faq.png`}
                  alt="Olive FAQ"
                  className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none"
                  style={{ width: "5em" }}
                />
              </div>
              <a href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-[15px]"
                style={{ backgroundColor: "#1a3a0a" }}>
                <Apple size={18} /> Download for iOS
              </a>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="border border-amber-100 rounded-2xl overflow-hidden bg-white/60">
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-amber-50/30 transition-colors"
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  >
                    <span className="text-[15px] font-semibold text-gray-900 pr-4">{faq.q}</span>
                    {openIdx === i ? <ChevronUp size={18} className="flex-shrink-0 text-gray-400" /> : <ChevronDown size={18} className="flex-shrink-0 text-gray-400" />}
                  </button>
                  {openIdx === i && (
                    <div className="px-6 pb-5 text-[14px] text-gray-600 leading-relaxed border-t border-amber-50">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Bottom CTA ── */
function BottomCtaSection() {
  return (
    <section className="py-20 text-white" style={{ backgroundColor: "#386641" }}>
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <h2 className="font-pall font-[500] text-2xl md:text-[3.2rem] text-center mb-10">
          Keep your family safe with Olive
        </h2>
        <div className="flex flex-col gap-4 mt-10 items-center">
          {["Effortless food scanning", "Peace of mind for parents", "Healthy product recommendations"].map((item) => (
            <div key={item} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full font-bold flex items-center justify-center flex-shrink-0">
                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2.5C7.201 2.5 2.5 7.201 2.5 13S7.201 23.5 13 23.5 23.5 18.799 23.5 13 18.799 2.5 13 2.5zm5.207 7.793l-6.5 6.5a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L11 14.086l5.793-5.793a1 1 0 0 1 1.414 1.414z" fill="white"/>
                </svg>
              </div>
              <p className="text-white text-2xl font-medium">{item}</p>
            </div>
          ))}
        </div>
        <a href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
          className="inline-flex items-center gap-3 px-8 py-5 rounded-full font-medium text-base md:text-lg mt-10 border border-white/30 hover:bg-white/10 transition-colors"
          style={{ backgroundColor: "white", color: "#386641" }}>
          <Apple size={20} /> Download for iOS
        </a>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <div className="md:mt-24 mt-8 max-w-7xl mx-auto px-4 md:px-8 pb-8">
      <footer className="w-full text-white rounded-[1rem] md:rounded-[3.5rem]" style={{ backgroundColor: "#386641" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-4">
              <h3 className="text-lg font-medium mb-4">Explore More Olive Tools</h3>
              <ul className="space-y-3">
                {[
                  { label: "Explore Foods", href: "/foods" },
                  { label: "Allergy Scanner App", href: "/allergy-scanner-app" },
                  { label: "Gluten Free Scanner", href: "/gluten-free-scanner" },
                  { label: "Dairy Free App", href: "/dairy-free-app" },
                  { label: "Food Ingredient Checker", href: "/food-ingredient-checker" },
                  { label: "Olive Health", href: "/health" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/80 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-lg font-medium mb-4">About</h3>
              <ul className="space-y-3">
                <li><a href="/blogs" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
                <li><a href="mailto:contact@oliveapp.com" className="text-white/80 hover:text-white transition-colors">Email us</a></li>
                <li><a href="/support" className="text-white/80 hover:text-white transition-colors">Contact us</a></li>
              </ul>
            </div>
            <div className="md:col-span-4 flex items-start">
              <img src={img("/olive-logo.svg")} alt="Olive" className="h-14 w-auto brightness-0 invert" />
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">© 2026 Olive Inc.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/terms-of-service" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="/privacy-policy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="/refund-policy" className="text-white/60 hover:text-white text-sm transition-colors">Refund Policy</a>
              <a href="/sign-in" className="text-white/60 hover:text-white text-sm transition-colors">Sign in</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
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
          className="font-pall font-[600] tracking-tight text-4xl md:text-7xl mb-6"
          style={{ color: "#1a3a0a" }}
        >
          The Safest Way to Shop for Groceries
        </h1>
        <p className="font-dm-sans text-xs text-neutral-600 max-w-[520px] mx-auto leading-relaxed mb-10 text-[18px]">
          Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights
        </p>
        <a
          href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
          className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-white font-semibold text-[16px] hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#1a3a0a" }}
        >
          <Apple size={20} /> Download for iOS
        </a>

        {/* Phone + ghostly side panels */}
        <div className="relative flex items-start justify-center mt-10">
          {/* Left side: ghostly bleed-out images */}
          <div
            className="hidden sm:flex gap-3"
            style={{
              paddingTop: "70px",
              opacity: 0.18,
              filter: "blur(3.5px)",
              width: "240px",
              flexShrink: 0,
              overflow: "hidden",
              maskImage: "linear-gradient(to left, transparent 0%, black 60%)",
              WebkitMaskImage: "linear-gradient(to left, transparent 0%, black 60%)",
            }}
          >
            {PRODUCT_IMAGES.slice(8, 10).map((p, i) => (
              <img key={i} src={p.src} alt={p.alt} className="rounded-2xl object-cover flex-shrink-0" style={{ width: "110px", height: "110px" }} />
            ))}
          </div>

          <PhoneMockup />

          {/* Right side: ghostly bleed-out images */}
          <div
            className="hidden sm:flex gap-3"
            style={{
              paddingTop: "70px",
              opacity: 0.18,
              filter: "blur(3.5px)",
              width: "240px",
              flexShrink: 0,
              overflow: "hidden",
              maskImage: "linear-gradient(to right, transparent 0%, black 60%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 60%)",
            }}
          >
            {PRODUCT_IMAGES.slice(5, 7).map((p, i) => (
              <img key={i} src={p.src} alt={p.alt} className="rounded-2xl object-cover flex-shrink-0" style={{ width: "110px", height: "110px" }} />
            ))}
          </div>
        </div>
      </section>

      {/* Product ticker strip section — bg-white py-12 md:py-48 */}
      <ProductStripSection />

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

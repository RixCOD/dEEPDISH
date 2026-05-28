import React from 'react';

export default function DeepDishHomepage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-orange-500 selection:text-white">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo Accent */}
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              DeepDish
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#features" className="hover:text-orange-500 transition-colors">Features</a>
            <a href="#stats" className="hover:text-orange-500 transition-colors">Impact</a>
            <a href="#prime" className="hover:text-orange-500 transition-colors">DeepDish Prime</a>
          </div>
          <button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5">
            Launch Web App
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative relative-overflow px-6 pt-20 pb-16 max-w-7xl mx-auto text-center">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-[300px] w-[300px] bg-orange-600/10 blur-[120px] rounded-full"></div>
          <div className="h-[200px] w-[200px] bg-red-600/10 blur-[100px] rounded-full"></div>
        </div>
        
        <span className="inline-block bg-neutral-900 border border-neutral-800 text-orange-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          🚀 The Future of Food Tech is Here
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          India’s New Food <br />
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Discovery App
          </span>
        </h1>
        
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Craving deep indulgence? Discover top-rated restaurants, track lightning-fast deliveries, and unlock elite dining rewards in one seamless ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded-xl font-bold transition-all shadow-xl">
            Explore Restaurants
          </button>
          <a href="#download" className="w-full sm:w-auto border border-neutral-700 bg-neutral-900/50 hover:bg-neutral-900 px-8 py-4 rounded-xl font-bold transition-all text-center block">
            Download App
          </a>
        </div>
      </header>

      {/* 3. STATS SECTION */}
      <section id="stats" className="border-y border-neutral-800 bg-neutral-900/30 backdrop-blur-sm px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2">12,000+</h3>
            <p className="text-neutral-400 uppercase tracking-widest text-xs font-semibold">Restaurants Onboarded</p>
          </div>
          <div className="p-4 border-y sm:border-y-0 sm:border-x border-neutral-800">
            <h3 className="text-4xl md:text-5xl font-black text-orange-500 mb-2">45+</h3>
            <p className="text-neutral-400 uppercase tracking-widest text-xs font-semibold">Cities Covered</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2">1M+</h3>
            <p className="text-neutral-400 uppercase tracking-widest text-xs font-semibold">Orders Delivered</p>
          </div>
        </div>
      </section>

      {/* 4. PROMOTIONS & DEEPDISH PRIME */}
      <section id="prime" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
            Premium Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6">
            Join <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">DeepDish Prime</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            Unlock free delivery, massive flat discounts up to 40% off on premium dining, and priority chef preparation status on every order.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mb-8 text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> Free Delivery on orders over ₹199
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> No surge fees during peak rain or rush hours
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> VIP access to exclusive culinary events
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> Up to 50% off on birthday & party planning
            </div>
          </div>

          <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-neutral-950 font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/10">
            Upgrade to Prime
          </button>
        </div>
      </section>

      {/* 5. APP DOWNLOAD QR CODE SECTION */}
      <section id="download" className="px-6 py-16 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-neutral-900/40 p-8 md:p-12 rounded-3xl border border-neutral-800">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4">Get the DeepDish App</h2>
            <p className="text-neutral-400 mb-6">
              Scan the QR code with your smartphone camera to download the customer app directly on iOS or Android.
            </p>
            <div className="flex gap-4">
              <div className="h-12 w-36 bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700 font-bold text-xs text-neutral-300">App Store</div>
              <div className="h-12 w-36 bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700 font-bold text-xs text-neutral-300">Google Play</div>
            </div>
          </div>
          
          {/* Simulated QR Code */}
          <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col items-center justify-center">
            <div className="w-40 h-40 bg-neutral-200 rounded-xl flex items-center justify-center border-4 border-dashed border-neutral-400">
              {/* Simple generic QR path placeholder */}
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-800">
                <rect x="2" y="2" width="6" height="6" />
                <rect x="16" y="2" width="6" height="6" />
                <rect x="2" y="16" width="6" height="6" />
                <path d="M16 16h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4-4h2v2h-2z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-neutral-900 mt-3">Scan to Download</span>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="border-t border-neutral-900 bg-neutral-950 text-neutral-500 text-sm px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">DeepDish</span>
            <p className="text-xs text-neutral-600 mt-1">© 2026 DeepDish Technologies Pvt. Ltd. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Partner With Us</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
/**
 * GABA CORPORATION - High-Performance Sportswear Manufacturing
 * Interactive Engineering Controller & Complete Button Functionality
 */

// Global Product Specifications Database
const PRODUCT_DATA = {
  'GB-CMP-09': {
    sku: 'GB-CMP-09',
    title: 'Compression Athletic Shirt',
    category: 'tops',
    categoryName: 'Compression Gear',
    gsm: '240 GSM',
    composition: '88% Recycled Poly / 12% Spandex',
    seamType: '4-Needle 6-Thread Flatlock',
    compressionLevel: 9,
    breathability: 8,
    durability: 10,
    leadTime: '15-20 Days',
    moq: '50 units / color',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoIc9tRFTjvO7rSjhkY_um83SOpVKW-WVcf2nk5JadoSw9mGGJoBXq76LYgmzXOcN8I47obGV19LL3K6lOiAFVPvmDNAmlsd4ix5qNcmYqOhphP_FQvQjv3nl5ODrpNYvnz2cGbEOw4JscVqYejaoOQirMrYBYNtti1YuMCydrHb2XA01jmrnBFpCQp7y6jKljjZ6k5k_c8SSZu-4owu6g9TSYQ6QEBzGHM5JNPw',
    description: 'Engineered for high-strain training and maximum lactate clearance. Features anatomical muscle zone mapping, moisture-wicking capillary channels, and laser-perforated scapular cooling vents.',
    features: [
      'Graduated targeted compression across latissimus and pectorals',
      'Anti-chafing bonded neck tape with tagless silicone heat-print',
      'OEKO-TEX 100 Class 1 antibacterial silver-ion treatment',
      '4-way 360-degree stretch memory recovery'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    colorways: ['Obsidian Black', 'Stealth Carbon', 'Voltage Lime', 'Arctic Navy']
  },
  'GB-TM-04': {
    sku: 'GB-TM-04',
    title: 'Custom Performance Team Jersey',
    category: 'tops',
    categoryName: 'Team Uniforms',
    gsm: '160 GSM',
    composition: '100% Interlock Micro-Mesh Poly',
    seamType: 'Overlock with Twin-Needle Hem',
    compressionLevel: 3,
    breathability: 10,
    durability: 9,
    leadTime: '12-16 Days',
    moq: '30 units / design',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkC5hpKTXbbC_ObZqvsLuLXOKK1-vwRFI82fFPfH6WJkDb3uBtv6pmTNwhxAmRfOAs8yPGjyzFwL-GCiR8msn71u3-YdMfCYPvKBiG5SB54IdmXeedJulu97yYLECGxvvOKaNqqUZjvrajh187xdTKOtSq6iYh_3nu9VRS_9prADrGwi8ArCq4FFfwIHjrbJigO21qTFk4GeSUsUj55rTAd5M4Vz3PzBGL_UXEOA',
    description: 'High-definition all-over sublimation engineered for elite team sports. Ultra-lightweight micro-pinhole mesh allows air permeability while maintaining deep vibrant color fastness through industrial wash cycles.',
    features: [
      'Genuine Italian Kiian sublimation inks guarantee zero fading',
      'Custom numbering, team crest, and sponsor logo integration',
      'Reinforced rib collar and ergonomic raglan armhole curves',
      'Anti-snag knit weave tested for rugby and soccer contact'
    ],
    sizes: ['Youth S-XL', 'Adult S', 'M', 'L', 'XL', '2XL', '4XL'],
    colorways: ['Custom Pantone Matched', 'Obsidian/Lime', 'Crimson/Black']
  },
  'GB-HD-12': {
    sku: 'GB-HD-12',
    title: 'Fleece Heavyweight Training Hoodie',
    category: 'outerwear',
    categoryName: 'Outerwear & Leisure',
    gsm: '420 GSM',
    composition: '80% Combed Compact Cotton / 20% Poly French Terry',
    seamType: 'Heavy 5-Thread Coverstitch',
    compressionLevel: 2,
    breathability: 7,
    durability: 10,
    leadTime: '18-24 Days',
    moq: '50 units / style',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6uZxlI-KEEIQUs1O58jabcXT9zRkuyk-7Ho6i97xXHeP84O0hgMSjIr6dVbnACBeqbibvo6T4kXzCJ6OBgDhdmrVHyGSkeMvt23H-p2lpS_72zycABOreVKPqxdwjjsoeoeh6YRiwMewIkbyexmvbLQwKWnd9HbZ6o17Ol1lRREczEiLWpZtbigxR1uUE4Oc8J7tdl9K9nTpyYojlrSg-xjaVq-mokXaXzqJy-w',
    description: 'Luxury streetwear silhouette crafted with technical athletic utility. High-density knit prevents wind chill while retaining thermal warmth. Features custom molded matte hardware and hidden tech pockets.',
    features: [
      'Ultra-dense 420 GSM pre-shrunk brushed back fleece',
      'Dual-layer 3-panel structured hood that sits upright',
      'Concealed internal zip pocket for phone and audio gear',
      'Bar-tacked stress reinforcements at kangaroo pocket corners'
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colorways: ['Matte Black', 'Heather Charcoal', 'Chalk Bone', 'Forest Shadow']
  },
  'GB-LG-08': {
    sku: 'GB-LG-08',
    title: 'Sculpt Seamless Compression Leggings',
    category: 'bottoms',
    categoryName: 'Fitness Wear',
    gsm: '280 GSM',
    composition: '90% Nylon 6.6 / 10% Spandex Circular Knit',
    seamType: 'Seamless Circular Knit with Bonded Gusset',
    compressionLevel: 9,
    breathability: 8,
    durability: 9,
    leadTime: '18-22 Days',
    moq: '100 units / style',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKSGcp0sRlw74pM31aI5Kkf84G5TuhIhiAbq8r3wca_BhOtP-2eAavDM6BBnFnJwigYYAVzT4eBopdEX2060Y4jzbmhCmSvHeZJkVtLh9am_DIsCEBocvAuk0JFoXHYxoCDXYI5Aj2JX4et12zvrDwQAMYqMVUDczDQI2LFO3UNHdIgVJWhgBlQuE8EPa_T-nMwAqSzUrGFIpNaHu4YOJ4ipZmoUL6ZgoXkcwoBw',
    description: 'Zero-transparency squat-tested seamless athletic tights. Engineered with graduated rib knit panels to sculpt, stabilize core temperature, and prevent roll-down during high-impact movement.',
    features: [
      '12cm double-layer compressive waistband with internal stay',
      '100% squat-proof lab-tested opacity under direct studio lighting',
      'Diamond gusset panel eliminating front seam friction',
      'Subtle anatomical contour shading knit directly into the yarn'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colorways: ['Obsidian Black', 'Iron Slate', 'Teal Shadow', 'Berry Eclipse']
  },
  'GB-TRK-03': {
    sku: 'GB-TRK-03',
    title: 'Hybrid Weatherproof Athletic Tracksuit',
    category: 'outerwear',
    categoryName: 'Tracksuits & Outerwear',
    gsm: '320 GSM',
    composition: '92% Technical Woven Poly / 8% Elastane + DWR',
    seamType: 'Fully Taped & Welded Seams',
    compressionLevel: 4,
    breathability: 8,
    durability: 10,
    leadTime: '20-25 Days',
    moq: '50 sets',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnnn_hQkrTR9Nj8c4F_p2aO79QByOpi5iQIXkH0sMa-ZVfX6Zfo_1_kyzvDvx6PSrXNDK_nrSiUrchKscuaUYLbZyDZq5qSACYJU-rSGDZuKim3_lc7Qws0IbNNxjQCpiqoWJwQmdsW9N4HvWjbNVEl_k4OFHXZAbQOc4vGKz_tA0opkpHTR5ILb1wHdCoqnQeGMEHtmsmB_vDS8wVsEJuocos1HdF3PpYVSzJOA',
    description: 'Multi-season athletic warmup suit combining waterproof exterior protection with breathable mechanical stretch. Equipped with waterproof inverted zippers, neon cord pullers, and tapered ankle cuffs.',
    features: [
      'Durable Water Repellent (DWR) surface finish level 4',
      'Articulated knees and elbows for unrestricted athlete mobility',
      'Laser-cut ventilation ports along lower spine and underarm zones',
      'Reflective 3M Scotchlite branding accents for night training'
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    colorways: ['Obsidian / Electric Lime', 'All Black Stealth', 'Gunmetal / White']
  },
  'GB-SH-11': {
    sku: 'GB-SH-11',
    title: '2-in-1 Performance Training Shorts',
    category: 'bottoms',
    categoryName: 'Bottoms',
    gsm: '180 GSM (Shell) / 220 GSM (Liner)',
    composition: 'Shell: 90% Poly / 10% Spandex; Liner: 85% Nylon / 15% Spandex',
    seamType: 'Flatlock Inner Liner + Laser Bonded Outer Hem',
    compressionLevel: 7,
    breathability: 9,
    durability: 9,
    leadTime: '15-20 Days',
    moq: '50 units / color',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCOYzu8CqeqgACUhBgIhrlz0XCgtUiFAycdyjR-ZdzsNsazIp0bypZG4OH-fxDs1Jw4SEScjlpVdVgvUjf2I4CXZ9DKqf7ezh9I7PqpckWHb8JP0FF-gZGmpWRPgzzKLv--VnxF0rS_pnjGoT3Iq_IrcBZ74H3u_kPgtQwPQsZNdnYz8WvutXdRZwh9YV1oXQ8AiBTga06X2a35qTs_l4a9511-CGB7V3pWVBhAA',
    description: 'The definitive hybrid training short. Lightweight 4-way stretch micro-weave exterior paired with an anti-friction compressive inner liner, bounce-free phone holster, and back shirt towel carrier.',
    features: [
      'Anti-chafing compression boxer liner with dedicated bounce-free phone slot',
      'Laser-vented side splits engineered for deep squats and sprints',
      'Internal drawcord with dipped silicone tips',
      'Rear utility waistband strap to secure gym towel or extra layer'
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colorways: ['Obsidian Black', 'Titanium Grey', 'Electric Lime Accents']
  }
};

// Global Store for Selected Attachments
let attachedFiles = [];

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initProductFilter();
  initScrollSpy();
  initQuoteCalculator();
  initTechPackUploader();
  initInquiryForm();
});

/**
 * HUD Toast Notification System
 */
function showToast(title, message, isError = false) {
  let container = document.getElementById('hudToastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'hudToastContainer';
    container.className = 'fixed top-24 right-4 z-[999] flex flex-col gap-2 max-w-sm pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `p-3 hairline-border ${
    isError 
      ? 'bg-red-950/90 text-red-200 border-red-500' 
      : 'bg-surface-container-high/95 text-on-surface border-tertiary glow-tertiary'
  } backdrop-blur-md shadow-2xl transition-all duration-300 transform translate-x-8 opacity-0 pointer-events-auto flex items-start gap-2.5 text-xs`;

  toast.innerHTML = `
    <span class="material-symbols-outlined text-[18px] ${isError ? 'text-red-400' : 'text-tertiary'} shrink-0 mt-0.5">
      ${isError ? 'warning' : 'check_circle'}
    </span>
    <div class="flex-grow">
      <div class="font-bold uppercase tracking-wider font-label-sm text-[11px] ${isError ? 'text-red-300' : 'text-tertiary'}">${title}</div>
      <div class="text-on-surface-variant leading-relaxed text-[11px]">${message}</div>
    </div>
    <button class="text-on-surface-variant hover:text-white p-0.5" onclick="this.parentElement.remove()">
      <span class="material-symbols-outlined text-[14px]">close</span>
    </button>
  `;

  container.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.remove('translate-x-8', 'opacity-0');
  });

  // Auto remove after 3.5s
  setTimeout(() => {
    toast.classList.add('translate-x-8', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/**
 * Smooth Scroll and Focus to Inquiry Form
 */
function scrollToQuote(initialCategory = null, initialNote = null) {
  const formSection = document.getElementById('contact');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
    
    if (initialCategory) {
      const catSelect = document.getElementById('categorySelect');
      if (catSelect) catSelect.value = initialCategory;
    }

    if (initialNote) {
      const detailsField = document.getElementById('projectDetails');
      if (detailsField) detailsField.value = initialNote;
    }

    setTimeout(() => {
      const firstInput = document.getElementById('fullName');
      if (firstInput) {
        firstInput.focus();
        firstInput.classList.add('ring-2', 'ring-tertiary');
        setTimeout(() => firstInput.classList.remove('ring-2', 'ring-tertiary'), 1500);
      }
    }, 600);
  }
}

/**
 * Mobile Navigation Drawer Controller
 */
function initMobileMenu() {
  const openBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeMobileMenuBtn');
  const drawer = document.getElementById('mobileMenuDrawer');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
}

/**
 * Filter Showcase Items
 */
function initProductFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterCategory = btn.getAttribute('data-category');

      filterButtons.forEach(b => {
        b.classList.remove('bg-tertiary', 'text-on-tertiary', 'glow-tertiary');
        b.classList.add('bg-surface-container', 'text-on-surface-variant');
      });
      btn.classList.add('bg-tertiary', 'text-on-tertiary', 'glow-tertiary');
      btn.classList.remove('bg-surface-container', 'text-on-surface-variant');

      let visibleCount = 0;
      productCards.forEach(card => {
        if (filterCategory === 'all' || card.getAttribute('data-category') === filterCategory) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      showToast('FILTER APPLIED', `Showing ${visibleCount} products in ${filterCategory.toUpperCase()}`);
    });
  });
}

/**
 * Explore Category from the 8 Main Cards
 */
function exploreCategory(categoryName, filterKey = null) {
  // If filter matches showcase, filter and scroll to showcase
  if (filterKey) {
    const filterBtn = document.querySelector(`.filter-btn[data-category="${filterKey}"]`);
    if (filterBtn) filterBtn.click();
    
    const showcase = document.getElementById('showcase');
    if (showcase) {
      showcase.scrollIntoView({ behavior: 'smooth' });
      showToast('CATEGORY SELECTED', `Viewing ${categoryName} production catalog.`);
      return;
    }
  }

  // Pre-fill and scroll to quote
  scrollToQuote(categoryName, `Inquiry for [${categoryName}] product line development.\nTarget volume: 100-500 units\nTarget delivery schedule: `);
  showToast('CATEGORY SELECTED', `${categoryName} locked into quote request matrix.`);
}

/**
 * Open Product Quick-View Technical Modal
 */
function openProductModal(sku) {
  const item = PRODUCT_DATA[sku];
  if (!item) return;

  const modal = document.getElementById('productDetailModal');
  const modalContent = document.getElementById('modalContent');
  if (!modal || !modalContent) return;

  function createGauge(val) {
    let html = '<div class="spec-gauge mt-1">';
    for (let i = 1; i <= 10; i++) {
      html += `<div class="spec-gauge-block ${i <= val ? 'active' : ''}"></div>`;
    }
    html += '</div>';
    return html;
  }

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
      
      <!-- Visual Viewport -->
      <div class="lg:col-span-5 bg-surface-container-lowest relative p-2 flex flex-col justify-between hairline-border">
        <div class="relative overflow-hidden bg-black/40">
          <img id="modalProductImg" src="${item.image}" alt="${item.title}" class="w-full h-80 object-cover object-center filter brightness-95">
          <div class="absolute top-3 left-3 bg-surface-container-high/90 px-2.5 py-1 hairline-border">
            <span class="font-label-sm uppercase tracking-widest text-tertiary text-xs">${item.sku}</span>
          </div>
          <button onclick="copySku('${item.sku}')" class="absolute top-3 right-3 bg-surface-container px-2 py-1 text-[11px] font-mono text-on-surface hover:text-tertiary hairline-border flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px]">content_copy</span> Copy SKU
          </button>
        </div>

        <!-- Colorway Selector -->
        <div class="pt-3">
          <span class="font-label-sm uppercase text-[11px] text-on-surface-variant block mb-1.5">Select Colorway Formulation:</span>
          <div class="flex flex-wrap gap-1.5" id="colorwayChips">
            ${item.colorways.map((c, idx) => `
              <button onclick="selectColorway(this, '${c}')" class="px-2 py-1 text-[11px] hairline-border ${idx === 0 ? 'bg-tertiary text-black font-bold' : 'bg-surface-container text-on-surface'} hover:border-tertiary transition-colors">
                ${c}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Size Matrix Selector -->
        <div class="pt-3">
          <span class="font-label-sm uppercase text-[11px] text-on-surface-variant block mb-1.5">Sample Size Grading:</span>
          <div class="flex flex-wrap gap-1" id="sizeChips">
            ${item.sizes.map((s, idx) => `
              <button onclick="selectSize(this, '${s}')" class="w-8 h-7 text-[11px] font-mono hairline-border ${idx === 2 ? 'bg-white text-black font-bold' : 'bg-surface-container text-on-surface'} hover:border-tertiary transition-colors flex items-center justify-center">
                ${s}
              </button>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- Specs & Technical Data -->
      <div class="lg:col-span-7 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-1">
            <span class="font-label-sm uppercase tracking-widest text-tertiary text-xs">${item.categoryName}</span>
            <span class="font-label-sm uppercase bg-surface-container-high px-2 py-0.5 text-on-surface text-xs hairline-border">${item.gsm}</span>
          </div>
          
          <h2 class="font-headline-md uppercase text-on-surface mb-2 text-xl">${item.title}</h2>
          <p class="font-body-sm text-on-surface-variant mb-4 text-xs leading-relaxed">${item.description}</p>

          <!-- Technical Gauges -->
          <div class="grid grid-cols-3 gap-space-sm mb-4 p-space-sm bg-surface-container-lowest hairline-border">
            <div>
              <span class="font-label-sm uppercase text-on-surface-variant text-[10px] block">Compression</span>
              ${createGauge(item.compressionLevel)}
            </div>
            <div>
              <span class="font-label-sm uppercase text-on-surface-variant text-[10px] block">Breathability</span>
              ${createGauge(item.breathability)}
            </div>
            <div>
              <span class="font-label-sm uppercase text-on-surface-variant text-[10px] block">Durability</span>
              ${createGauge(item.durability)}
            </div>
          </div>

          <!-- Feature Bullets -->
          <div class="space-y-1 mb-4">
            <span class="font-label-sm uppercase tracking-wider text-on-surface block text-xs font-semibold">Technical Highlights:</span>
            ${item.features.map(f => `
              <div class="flex items-start gap-2 text-xs text-on-surface-variant">
                <span class="material-symbols-outlined text-tertiary text-[16px] shrink-0 mt-0.5">check</span>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>

          <!-- Specification Table -->
          <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-xs p-space-sm bg-surface-container hairline-border mb-4">
            <div><span class="text-on-surface-variant">Fabric:</span> <span class="text-on-surface font-medium">${item.composition}</span></div>
            <div><span class="text-on-surface-variant">Seam:</span> <span class="text-on-surface font-medium">${item.seamType}</span></div>
            <div><span class="text-on-surface-variant">Sampling SLA:</span> <span class="text-tertiary font-bold">${item.leadTime}</span></div>
            <div><span class="text-on-surface-variant">Min. Order (MOQ):</span> <span class="text-tertiary font-bold">${item.moq}</span></div>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="flex flex-col sm:flex-row gap-space-sm pt-2">
          <button onclick="requestQuoteForSku('${item.sku}', '${item.title}')" class="flex-1 py-2.5 bg-tertiary text-on-tertiary font-label-md uppercase tracking-wider font-bold text-center hover:bg-white hover:text-black glow-tertiary transition-all text-xs">
            Inquire About This SKU
          </button>
          <button onclick="downloadTechSheet('${item.sku}')" class="py-2.5 px-4 bg-surface-container-high text-on-surface font-label-md uppercase tracking-wider hover:bg-surface-bright transition-colors text-xs flex items-center justify-center gap-1 hairline-border">
            <span class="material-symbols-outlined text-[16px]">download</span> Download Spec Sheet
          </button>
          <button onclick="closeProductModal()" class="py-2.5 px-4 bg-surface-container text-on-surface-variant hover:text-white transition-colors text-xs hairline-border">
            Close
          </button>
        </div>

      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  showToast('TECHNICAL SPEC LOADED', `Inspecting ${item.sku} - ${item.title}`);
}

function closeProductModal() {
  const modal = document.getElementById('productDetailModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function selectColorway(btn, colorName) {
  const container = document.getElementById('colorwayChips');
  if (container) {
    container.querySelectorAll('button').forEach(b => {
      b.className = 'px-2 py-1 text-[11px] hairline-border bg-surface-container text-on-surface hover:border-tertiary transition-colors';
    });
    btn.className = 'px-2 py-1 text-[11px] hairline-border bg-tertiary text-black font-bold transition-colors';
  }
  showToast('COLORWAY SELECTED', `Pantone formulation set to: ${colorName}`);
}

function selectSize(btn, sizeName) {
  const container = document.getElementById('sizeChips');
  if (container) {
    container.querySelectorAll('button').forEach(b => {
      b.className = 'w-8 h-7 text-[11px] font-mono hairline-border bg-surface-container text-on-surface hover:border-tertiary transition-colors flex items-center justify-center';
    });
    btn.className = 'w-8 h-7 text-[11px] font-mono hairline-border bg-white text-black font-bold transition-colors flex items-center justify-center';
  }
  showToast('SAMPLE SIZE', `Sample grading target set to: ${sizeName}`);
}

function copySku(sku) {
  navigator.clipboard.writeText(sku).then(() => {
    showToast('COPIED TO CLIPBOARD', `SKU [${sku}] copied.`);
  }).catch(() => {
    showToast('SKU REFERENCE', `SKU: ${sku}`);
  });
}

function downloadTechSheet(sku) {
  const item = PRODUCT_DATA[sku];
  if (!item) return;

  const content = `=====================================================
GABA CORPORATION - TECHNICAL APPAREL SPECIFICATION
=====================================================
SKU:               ${item.sku}
MODEL NAME:        ${item.title}
CATEGORY:          ${item.categoryName}
FABRIC GSM:        ${item.gsm}
COMPOSITION:       ${item.composition}
SEAM ARCHITECTURE: ${item.seamType}
SAMPLING SLA:      ${item.leadTime}
MIN ORDER (MOQ):   ${item.moq}
AVAILABLE SIZES:   ${item.sizes.join(', ')}
COLORWAYS:         ${item.colorways.join(', ')}

TECHNICAL HIGHLIGHTS:
${item.features.map(f => ' - ' + f).join('\n')}

CONFIDENTIAL & PROPRIETARY // ISO 9001:2015 ACCREDITED
Precision Complex 4, Industrial Textiles Export Zone, Sialkot
b2b@gabacorporation.com | www.gabacorporation.com
=====================================================`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `GABA_TECH_SPEC_${sku}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('SPEC SHEET DOWNLOADED', `File: GABA_TECH_SPEC_${sku}.txt`);
}

/**
 * Pre-fill Inquiry Form from SKU Quick View
 */
function requestQuoteForSku(sku, title) {
  closeProductModal();
  const item = PRODUCT_DATA[sku];
  
  let targetCategory = 'CustomBespoke';
  if (item) {
    if (item.category === 'tops') targetCategory = 'Sportswear';
    else if (item.category === 'bottoms') targetCategory = 'GymWear';
    else if (item.category === 'outerwear') targetCategory = 'Tracksuits';
  }

  const note = `Inquiry regarding SKU [${sku}] - ${title}.\nTarget Order Quantity: 100 units\nRequested Fabric: ${item ? item.composition : 'OEM Specification'}\nTarget Delivery Date: `;
  scrollToQuote(targetCategory, note);
  showToast('SKU ATTACHED TO RFQ', `Inquiry matrix ready for SKU ${sku}`);
}

/**
 * Interactive B2B MOQ & Price Estimator
 */
function initQuoteCalculator() {
  const garmentSelect = document.getElementById('calcGarment');
  const qtyInput = document.getElementById('calcQty');
  const qtyDisplay = document.getElementById('calcQtyDisplay');
  const techCheckboxes = document.querySelectorAll('.calc-tech-option');
  
  const unitPriceEl = document.getElementById('calcEstimatedUnit');
  const totalCostEl = document.getElementById('calcEstimatedTotal');
  const turnaroundEl = document.getElementById('calcTurnaround');

  if (!garmentSelect || !qtyInput) return;

  function calculate() {
    const basePrices = {
      'compression': 14.50,
      'seamless_leggings': 16.00,
      'sublimated_jersey': 11.50,
      'fleece_hoodie': 21.00,
      'tracksuit': 28.50,
      'training_shorts': 12.00
    };

    const selectedGarment = garmentSelect.value;
    const base = basePrices[selectedGarment] || 15.00;
    const qty = parseInt(qtyInput.value, 10);
    qtyDisplay.textContent = `${qty.toLocaleString()} Units`;

    // Embellishment add-ons
    let addon = 0;
    techCheckboxes.forEach(cb => {
      if (cb.checked) {
        addon += parseFloat(cb.getAttribute('data-price') || 0);
      }
    });

    // Volume discount tiers
    let volumeMultiplier = 1.0;
    let days = 22;

    if (qty <= 100) {
      volumeMultiplier = 1.25;
      days = 14;
    } else if (qty <= 300) {
      volumeMultiplier = 1.05;
      days = 18;
    } else if (qty <= 1000) {
      volumeMultiplier = 0.88;
      days = 25;
    } else {
      volumeMultiplier = 0.76;
      days = 32;
    }

    const calculatedUnitPrice = (base + addon) * volumeMultiplier;
    const minUnit = (calculatedUnitPrice * 0.93).toFixed(2);
    const maxUnit = (calculatedUnitPrice * 1.07).toFixed(2);
    const totalMin = Math.round(minUnit * qty).toLocaleString();
    const totalMax = Math.round(maxUnit * qty).toLocaleString();

    unitPriceEl.textContent = `$${minUnit} - $${maxUnit} USD`;
    totalCostEl.textContent = `$${totalMin} - $${totalMax} USD`;
    turnaroundEl.textContent = `${days} - ${days + 6} Business Days`;
  }

  garmentSelect.addEventListener('change', calculate);
  qtyInput.addEventListener('input', calculate);
  techCheckboxes.forEach(cb => cb.addEventListener('change', calculate));
  calculate();
}

/**
 * Apply Calculator values to Inquiry Form
 */
function applyCalculatorToForm() {
  const garmentSelect = document.getElementById('calcGarment');
  const qtyInput = document.getElementById('calcQty');
  const garmentName = garmentSelect.options[garmentSelect.selectedIndex].text;
  const qty = qtyInput.value;

  const categorySelect = document.getElementById('categorySelect');
  const moqSelect = document.getElementById('moqSelect');

  let catVal = 'CustomBespoke';
  if (garmentSelect.value === 'compression') catVal = 'Compression';
  else if (garmentSelect.value === 'sublimated_jersey') catVal = 'Uniforms';
  else if (garmentSelect.value === 'fleece_hoodie' || garmentSelect.value === 'tracksuit') catVal = 'Tracksuits';
  else catVal = 'GymWear';

  if (categorySelect) categorySelect.value = catVal;

  if (moqSelect) {
    const q = parseInt(qty, 10);
    if (q <= 100) moqSelect.value = '50-100';
    else if (q <= 500) moqSelect.value = '100-500';
    else if (q <= 2000) moqSelect.value = '500-2000';
    else moqSelect.value = '2000+';
  }

  const note = `[B2B Cost Estimator Specs Transferred]\n- Garment Silhouette: ${garmentName}\n- Quantity: ${qty} units\n- Target Production Turnaround required.`;
  scrollToQuote(catVal, note);
  showToast('ESTIMATOR TRANSFERRED', `${qty} units of ${garmentSelect.value.toUpperCase()} synced to RFQ.`);
}

/**
 * Tech Pack Uploader with Drag-and-Drop and File Removal
 */
function initTechPackUploader() {
  const dropZone = document.getElementById('techPackDropZone');
  const fileInput = document.getElementById('techPackFileInput');
  const fileList = document.getElementById('techPackFileList');

  if (!dropZone || !fileInput) return;

  dropZone.addEventListener('click', () => fileInput.click());

  ['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropZone.classList.add('border-tertiary', 'bg-surface-container-highest');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropZone.classList.remove('border-tertiary', 'bg-surface-container-highest');
    });
  });

  dropZone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    if (dt && dt.files.length) {
      handleFiles(dt.files);
    }
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length) {
      handleFiles(fileInput.files);
    }
  });

  function handleFiles(files) {
    Array.from(files).forEach(file => {
      attachedFiles.push(file);
    });
    renderFileList();
    showToast('TECH PACK ATTACHED', `${files.length} design file(s) queued for encryption.`);
  }
}

function renderFileList() {
  const fileList = document.getElementById('techPackFileList');
  if (!fileList) return;

  if (attachedFiles.length === 0) {
    fileList.innerHTML = '';
    fileList.classList.add('hidden');
    return;
  }

  fileList.classList.remove('hidden');
  fileList.innerHTML = '';

  attachedFiles.forEach((file, index) => {
    const sizeKB = (file.size / 1024).toFixed(1);
    const chip = document.createElement('div');
    chip.className = 'flex items-center justify-between p-2 bg-surface-container-high hairline-border text-xs';
    chip.innerHTML = `
      <div class="flex items-center gap-2 truncate">
        <span class="material-symbols-outlined text-tertiary text-[18px]">attachment</span>
        <span class="font-mono text-on-surface truncate">${file.name}</span>
        <span class="text-on-surface-variant font-mono">(${sizeKB} KB)</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-tertiary font-bold uppercase text-[10px] tracking-wider">Ready for NDA</span>
        <button type="button" onclick="removeAttachedFile(${index})" class="text-on-surface-variant hover:text-red-400 p-0.5">
          <span class="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>
    `;
    fileList.appendChild(chip);
  });
}

function removeAttachedFile(index) {
  if (attachedFiles[index]) {
    const removedName = attachedFiles[index].name;
    attachedFiles.splice(index, 1);
    renderFileList();
    showToast('FILE REMOVED', `${removedName} removed.`);
  }
}

/**
 * Web3Forms Native Integration
 * Action: https://api.web3forms.com/submit
 * Key: ebf1fa59-544f-423b-ac3c-97ed0f85019e
 */
const WEB3FORMS_ACCESS_KEY = 'ebf1fa59-544f-423b-ac3c-97ed0f85019e';

function initInquiryForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  // Ensure native Web3Forms form action and method
  form.action = "https://api.web3forms.com/submit";
  form.method = "POST";

  // When submitting, update button state to indicate dispatch
  form.addEventListener('submit', () => {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.innerHTML = `
        <span class="inline-block animate-spin mr-2">⚙</span>
        <span>Submitting to Web3Forms...</span>
      `;
    }
    // Native submission proceeds directly to https://api.web3forms.com/submit
  });
}

function showSuccessState() {
  const form = document.getElementById('inquiryForm');
  const success = document.getElementById('formSuccessState');
  if (form && success) {
    form.classList.add('hidden');
    success.classList.remove('hidden');
  }
}

function resetFormState() {
  const form = document.getElementById('inquiryForm');
  const success = document.getElementById('formSuccessState');
  if (form && success) {
    form.reset();
    attachedFiles = [];
    renderFileList();
    form.classList.remove('hidden');
    success.classList.add('hidden');
    showToast('FORM RESET', 'Ready for new production inquiry.');
  }
}

function copyReferenceId() {
  const refDisplay = document.getElementById('inquiryRefDisplay');
  const ref = refDisplay ? refDisplay.textContent : 'GB-2026-9842';
  navigator.clipboard.writeText(ref).then(() => {
    showToast('REFERENCE COPIED', `Reference ID ${ref} copied to clipboard!`);
  }).catch(() => {
    showToast('REFERENCE ID', ref);
  });
}

function downloadInquiryReceipt() {
  const inq = window.lastInquiry || {
    refNum: 'GB-2026-9842',
    fullName: 'Client Director',
    company: 'Athletic Brand',
    email: 'client@brand.com',
    country: 'International',
    category: 'Sportswear',
    moq: '100-500',
    details: 'Custom Activewear Collection',
    date: new Date().toLocaleString(),
    attachments: []
  };

  const receipt = `=====================================================
GABA CORPORATION - B2B OFFICIAL RFQ RECEIPT
=====================================================
TRACKING REF ID:   ${inq.refNum}
DATE SUBMITTED:    ${inq.date}
STATUS:            QUEUED FOR NDA & SENIOR MERCHANDISER REVIEW
24H SLA DEADLINE:  CONFIRMED

CLIENT DETAILS:
 - Contact Name:   ${inq.fullName}
 - Brand/Company:  ${inq.company}
 - Business Email: ${inq.email}
 - Destination:    ${inq.country}

ORDER SPECIFICATIONS:
 - Product Line:   ${inq.category}
 - Estimated MOQ:  ${inq.moq}
 - Requirements:   ${inq.requirements || 'Standard OEM Specs'}
 - Tech Pack Files:${inq.attachments.length > 0 ? inq.attachments.join(', ') : 'None attached'}

PROJECT SCOPE:
${inq.details}

MANUFACTURING ACCREDITATIONS:
 - ISO 9001:2015 Quality Management Certified
 - OEKO-TEX Standard 100 Class 1 (Chemical Safety)
 - Worldwide Responsible Accredited Production (WRAP)

DIRECT B2B CONTACTS:
 - Head Office:    Precision Complex 4, Industrial Textiles Zone, Sialkot
 - Direct Email:   b2b@gabacorporation.com
 - Phone / WhatsApp: +1 (800) 422-2677 / +92 300 0000000
=====================================================`;

  const blob = new Blob([receipt], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `GABA_RFQ_RECEIPT_${inq.refNum}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('RECEIPT DOWNLOADED', `File: GABA_RFQ_RECEIPT_${inq.refNum}.txt`);
}

/**
 * ScrollSpy Active Navigation Highlighter
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[data-target]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-tertiary', 'font-bold');
      if (link.getAttribute('data-target') === currentId) {
        link.classList.add('text-tertiary', 'font-bold');
      }
    });
  });
}

/**
 * Direct WhatsApp Quick Launch with Dynamic Message
 */
function openWhatsAppChat(customMessage = null) {
  const phone = '923000000000'; // Official Sialkot Export Hub Number
  const inq = window.lastInquiry;
  
  let msgText = customMessage;
  if (!msgText) {
    if (inq && inq.refNum) {
      msgText = `Hello GABA CORPORATION. Following up on RFQ Ref: ${inq.refNum} for ${inq.company}. Please share our formal proposal.`;
    } else {
      msgText = 'Hello GABA CORPORATION. I am interested in custom sportswear manufacturing and would like to request an OEM/ODM catalog and quotation.';
    }
  }

  const msg = encodeURIComponent(msgText);
  window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${msg}`, '_blank');
  showToast('WHATSAPP LAUNCHED', 'Connecting with senior export merchandiser...');
}

/**
 * Quick Contact Modal (WhatsApp, Phone, Email, Direct Call)
 */
function openQuickContactModal() {
  const modal = document.getElementById('contactOptionsModal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeQuickContactModal() {
  const modal = document.getElementById('contactOptionsModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/**
 * Compliance & Factory Audit Modal
 */
function openComplianceModal(type = 'iso') {
  const modal = document.getElementById('complianceModal');
  const titleEl = document.getElementById('complianceModalTitle');
  const bodyEl = document.getElementById('complianceModalBody');

  if (!modal || !titleEl || !bodyEl) return;

  const docs = {
    'privacy': {
      title: 'NON-DISCLOSURE AGREEMENT & PRIVACY POLICY',
      content: `GABA CORPORATION enforces strict intellectual property protection across all OEM and ODM manufacturing partnerships:
1. All client tech packs, 3D vector files, grading tables, and custom artwork are bound by non-disclosure protocols immediately upon receipt.
2. Proprietary fabric blends and branded trim formulations are never cross-utilized or shared with external private labels.
3. Production overruns, reject garments, or prototype samples bearing your trademarks are destroyed under supervised scrap audits or recycled.`
    },
    'terms': {
      title: 'TERMS OF SUPPLY & B2B CONTRACT MATRIX',
      content: `Standard Commercial Terms for International Wholesale Export:
1. SAMPLING: Physical pre-production prototypes completed in 7-10 business days upon CAD vector lock.
2. MOQ POLICY: Agile batch runs starting at 50 units per colorway up to full container load (FCL) freight.
3. PAYMENT TERMS: 50% deposit upon pro-forma invoice sign-off; 50% balance against Bill of Lading (B/L) and inline inspection clearance.
4. FREIGHT: Worldwide DDP, CIF, or FOB terms with DHL Express, FedEx, Air Cargo, or Ocean Freight.`
    },
    'compliance': {
      title: 'FACTORY AUDIT & SOCIAL COMPLIANCE STANDARDS',
      content: `Our manufacturing facilities in the Sialkot Export Textiles Zone operate under global ethical compliance standards:
- ISO 9001:2015: Certified Quality Management Systems covering pattern precision and inline tensile inspection.
- OEKO-TEX Standard 100: Tested against harmful substances, ensuring skin-safe non-toxic Italian sublimation inks.
- WRAP (Worldwide Responsible Accredited Production): Strict compliance with fair labor wages, zero child labor, ergonomic work floors, and environmental sustainability.`
    }
  };

  const selected = docs[type] || docs['compliance'];
  titleEl.textContent = selected.title;
  bodyEl.innerHTML = selected.content.split('\n').map(p => `<p class="mb-2">${p}</p>`).join('');

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeComplianceModal() {
  const modal = document.getElementById('complianceModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

const sectionTitles = {
  home: "الرئيسية",
  venues: "حجز الملاعب",
  pickup: "دور على ماتش",
  fantasy: "الفانتازي",
  training: "التمارين",
  store: "المتجر",
  schedule: "الجداول",
};

const fieldPhotos = {
  nightArena: "https://images.unsplash.com/photo-1735736158949-a22521878828?auto=format&fit=crop&w=1600&q=80",
  playerPitch: "https://images.unsplash.com/photo-1728908053209-7e476c7aa30b?auto=format&fit=crop&w=1600&q=80",
  aerialPitch: "https://images.unsplash.com/photo-1712168539418-0aa66404ee0d?auto=format&fit=crop&w=1600&q=80",
  turfClose: "https://images.unsplash.com/photo-1671209151455-86980f5bf293?auto=format&fit=crop&w=1200&q=80",
  fogPitch: "https://images.unsplash.com/photo-1612607696387-f139f76bdd6c?auto=format&fit=crop&w=1600&q=80",
  greenArena: "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?auto=format&fit=crop&w=1600&q=80",
  stadiumLights: "https://images.unsplash.com/photo-1624880357913-a8539238245b?auto=format&fit=crop&w=1600&q=80",
  trainingPitch: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1600&q=80",
};

const venues = [
  {
    id: "palm",
    name: "ملعب النخيل",
    city: "القاهرة",
    area: "مدينة نصر",
    location: "شارع مصطفى النحاس، مدينة نصر",
    rating: 4.8,
    price: 520,
    type: "5 ضد 5",
    image: fieldPhotos.nightArena,
    slots: [
      { time: "18:00 - 19:00", available: true },
      { time: "19:00 - 20:00", available: false },
      { time: "20:00 - 21:00", available: true },
      { time: "22:00 - 23:00", available: true },
    ],
  },
  {
    id: "arena",
    name: "Arena 90",
    city: "القاهرة",
    area: "المعادي",
    location: "كورنيش المعادي، بجوار نادي المعادي",
    rating: 4.6,
    price: 680,
    type: "7 ضد 7",
    image: fieldPhotos.playerPitch,
    slots: [
      { time: "17:00 - 18:30", available: true },
      { time: "18:30 - 20:00", available: true },
      { time: "20:00 - 21:30", available: false },
      { time: "21:30 - 23:00", available: true },
    ],
  },
  {
    id: "club",
    name: "Club House",
    city: "الجيزة",
    area: "الشيخ زايد",
    location: "الحي السادس، الشيخ زايد",
    rating: 4.9,
    price: 750,
    type: "11 ضد 11",
    image: fieldPhotos.aerialPitch,
    slots: [
      { time: "16:00 - 18:00", available: false },
      { time: "18:00 - 20:00", available: true },
      { time: "20:00 - 22:00", available: true },
      { time: "22:00 - 00:00", available: true },
    ],
  },
  {
    id: "victory",
    name: "Victory Turf",
    city: "القاهرة",
    area: "التجمع الخامس",
    location: "شارع التسعين الشمالي، التجمع الخامس",
    rating: 4.7,
    price: 610,
    type: "6 ضد 6",
    image: fieldPhotos.greenArena,
    slots: [
      { time: "16:00 - 17:00", available: true },
      { time: "17:00 - 18:00", available: true },
      { time: "18:00 - 19:00", available: false },
      { time: "21:00 - 22:00", available: true },
    ],
  },
  {
    id: "delta",
    name: "Delta Stadium",
    city: "الإسكندرية",
    area: "سموحة",
    location: "طريق النادي، سموحة",
    rating: 4.5,
    price: 590,
    type: "7 ضد 7",
    image: fieldPhotos.stadiumLights,
    slots: [
      { time: "15:00 - 16:30", available: false },
      { time: "16:30 - 18:00", available: true },
      { time: "18:00 - 19:30", available: true },
      { time: "22:30 - 00:00", available: true },
    ],
  },
  {
    id: "pro",
    name: "Pro Eleven",
    city: "الجيزة",
    area: "الدقي",
    location: "شارع التحرير، الدقي",
    rating: 4.4,
    price: 820,
    type: "11 ضد 11",
    image: fieldPhotos.trainingPitch,
    slots: [
      { time: "14:00 - 16:00", available: true },
      { time: "16:00 - 18:00", available: true },
      { time: "18:00 - 20:00", available: false },
      { time: "20:00 - 22:00", available: true },
    ],
  },
];

const pickupMatches = [
  {
    id: "m1",
    name: "ماتش مدينة نصر الليلي",
    venue: "ملعب النخيل",
    time: "اليوم 9:00 مساء",
    level: "متوسط",
    team: "Team A",
    openSlots: 3,
    cost: 95,
  },
  {
    id: "m2",
    name: "ماتش المعادي السريع",
    venue: "Arena 90",
    time: "غدا 7:30 مساء",
    level: "متقدم",
    team: "Team B",
    openSlots: 2,
    cost: 120,
  },
  {
    id: "m3",
    name: "تقسيمة الجمعة",
    venue: "Club House",
    time: "الجمعة 6:00 مساء",
    level: "مبتدئ",
    team: "Team A",
    openSlots: 5,
    cost: 80,
  },
];

const players = [
  { id: 1, name: "محمد الشناوي", position: "GK", club: "الأهلي", price: 6.5, points: 48, form: 7.1, status: "جاهز" },
  { id: 2, name: "محمد عواد", position: "GK", club: "الزمالك", price: 5.5, points: 41, form: 6.4, status: "جاهز" },
  { id: 3, name: "أحمد الشناوي", position: "GK", club: "بيراميدز", price: 5.8, points: 44, form: 6.8, status: "جاهز" },
  { id: 4, name: "محمود جاد", position: "GK", club: "المصري", price: 5.0, points: 42, form: 6.1, status: "جاهز" },
  { id: 5, name: "محمد هاني", position: "DEF", club: "الأهلي", price: 6.0, points: 52, form: 6.7, status: "جاهز" },
  { id: 6, name: "كريم فؤاد", position: "DEF", club: "الأهلي", price: 6.0, points: 54, form: 7.4, status: "جاهز" },
  { id: 7, name: "أحمد فتوح", position: "DEF", club: "الزمالك", price: 7.0, points: 51, form: 6.5, status: "شكوك" },
  { id: 8, name: "محمود علاء", position: "DEF", club: "الزمالك", price: 5.5, points: 39, form: 5.9, status: "جاهز" },
  { id: 9, name: "أسامة جلال", position: "DEF", club: "بيراميدز", price: 5.8, points: 47, form: 6.6, status: "جاهز" },
  { id: 10, name: "كريم العراقي", position: "DEF", club: "المصري", price: 5.2, points: 43, form: 6.2, status: "جاهز" },
  { id: 11, name: "علي جبر", position: "DEF", club: "بيراميدز", price: 5.7, points: 45, form: 6.0, status: "جاهز" },
  { id: 12, name: "إمام عاشور", position: "MID", club: "الأهلي", price: 9.0, points: 72, form: 8.3, status: "جاهز" },
  { id: 13, name: "عبدالله السعيد", position: "MID", club: "الزمالك", price: 8.5, points: 68, form: 7.8, status: "جاهز" },
  { id: 14, name: "مهند لاشين", position: "MID", club: "بيراميدز", price: 6.5, points: 47, form: 6.5, status: "جاهز" },
  { id: 15, name: "مروان عطية", position: "MID", club: "الأهلي", price: 7.0, points: 57, form: 7.0, status: "جاهز" },
  { id: 16, name: "رمضان صبحي", position: "MID", club: "بيراميدز", price: 8.0, points: 63, form: 7.3, status: "مصاب" },
  { id: 17, name: "ناصر ماهر", position: "MID", club: "الزمالك", price: 7.2, points: 55, form: 6.9, status: "جاهز" },
  { id: 18, name: "حسين فيصل", position: "MID", club: "المصري", price: 6.0, points: 46, form: 6.4, status: "جاهز" },
  { id: 19, name: "وسام أبو علي", position: "FWD", club: "الأهلي", price: 10.0, points: 82, form: 8.6, status: "جاهز" },
  { id: 20, name: "سيف الجزيري", position: "FWD", club: "الزمالك", price: 8.2, points: 61, form: 7.1, status: "جاهز" },
  { id: 21, name: "فيستون مايلي", position: "FWD", club: "بيراميدز", price: 9.5, points: 78, form: 8.1, status: "جاهز" },
  { id: 22, name: "مروان حمدي", position: "FWD", club: "المصري", price: 7.5, points: 58, form: 6.8, status: "جاهز" },
  { id: 23, name: "صلاح محسن", position: "FWD", club: "المصري", price: 6.8, points: 50, form: 6.1, status: "جاهز" },
  { id: 24, name: "كهربا", position: "FWD", club: "الأهلي", price: 8.0, points: 56, form: 6.9, status: "شكوك" },
];

const sessions = [
  {
    id: "speed",
    name: "سرعة وانطلاق",
    duration: 28,
    level: "متوسط",
    progress: 35,
    exercises: ["Sprint 10x", "تغيير اتجاه", "استشفاء قصير"],
  },
  {
    id: "touch",
    name: "تحكم بالكرة",
    duration: 35,
    level: "مبتدئ",
    progress: 45,
    exercises: ["Cone Dribble", "لمسة واحدة", "تمرير قصير"],
  },
  {
    id: "finish",
    name: "تسديد وإنهاء",
    duration: 42,
    level: "متقدم",
    progress: 60,
    exercises: ["تسديد من الحركة", "One touch", "ركلات حرة"],
  },
];

const products = [
  {
    id: "boot",
    name: "حذاء Turf Pro",
    desc: "ثبات ممتاز للملاعب الخماسية والنجيلة الصناعية.",
    price: 1450,
    image: "assets/store-gear.svg",
  },
  {
    id: "kit",
    name: "طقم تدريب DryFit",
    desc: "خفيف، سريع الجفاف، ومناسب للحصص الطويلة.",
    price: 620,
    image: "assets/store-gear.svg",
  },
  {
    id: "ball",
    name: "كرة Match Size 5",
    desc: "ملمس احترافي ومسار ثابت للتدريب والماتشات.",
    price: 780,
    image: "assets/store-gear.svg",
  },
];

const state = {
  selectedVenueId: null,
  selectedSlot: null,
  selectedVenueModalId: null,
  selectedPickupId: null,
  squad: [],
  captainId: "",
  cart: [],
  walletBalance: 1240,
  payment: {
    context: null,
    method: "wallet",
  },
  fantasy: {
    registered: false,
    teamName: "",
    captainSlot: "",
    activeSlotId: "",
    activeSlotType: "starter",
    pendingReplaceSlot: "",
    starters: {
      gk1: null,
      def1: null,
      def2: null,
      def3: null,
      def4: null,
      mid1: null,
      mid2: null,
      mid3: null,
      fwd1: null,
      fwd2: null,
      fwd3: null,
    },
    bench: {
      bench1: null,
      bench2: null,
      bench3: null,
      bench4: null,
    },
    groups: [
      { name: "KoraMania", code: "EGPL-90", rank: 7, members: 42 },
      { name: "صحاب الجمعة", code: "FRI-11", rank: 2, members: 12 },
    ],
    tournaments: [
      { id: "cup50", name: "كأس الجولة", fee: 50, prize: 2400, joined: false },
      { id: "gold100", name: "بطولة الذهب", fee: 100, prize: 7200, joined: false },
      { id: "pro250", name: "Pro League", fee: 250, prize: 18000, joined: false },
    ],
  },
};

const formatMoney = (value) => `EGP ${value.toLocaleString("en-US")}`;

function uniqueValues(items) {
  return [...new Set(items.filter(Boolean))];
}

function getSelectedVenue() {
  return venues.find((item) => item.id === state.selectedVenueId);
}

function getBookingTotals() {
  const venue = getSelectedVenue();
  const price = venue && state.selectedSlot ? venue.price : 0;
  const fee = Math.round(price * 0.01);
  return { price, fee, total: price + fee };
}

function syncWalletUi() {
  document.querySelectorAll("[data-wallet-balance]").forEach((node) => {
    node.textContent = formatMoney(state.walletBalance);
  });
}

function showSection(sectionId) {
  document.querySelectorAll(".app-section").forEach((section) => {
    section.classList.toggle("active", section.id === sectionId);
  });

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.section === sectionId);
  });

  document.getElementById("page-title").textContent = sectionTitles[sectionId] || "الرئيسية";
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (sectionId === "fantasy") {
    renderFantasyPeach();
    updateFantasyCountdown();
    if (!state.fantasy.registered) {
      setTimeout(openFantasyRegistration, 180);
    }
  }
}

function setSidebarOpen(isOpen) {
  document.body.classList.toggle("sidebar-open", isOpen);
  const toggle = document.querySelector(".sidebar-toggle");
  if (toggle) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "إغلاق القائمة" : "فتح القائمة");
  }
}

function renderVenueFilters() {
  const cityFilter = document.getElementById("city-filter");
  const areaFilter = document.getElementById("area-filter");
  if (!cityFilter || !areaFilter) return;

  const currentCity = cityFilter.dataset.ready ? cityFilter.value : "all";
  const currentArea = areaFilter.dataset.ready ? areaFilter.value : "all";
  const cities = uniqueValues(venues.map((venue) => venue.city));
  const areas = uniqueValues(
    venues
      .filter((venue) => currentCity === "all" || venue.city === currentCity)
      .map((venue) => venue.area),
  );

  cityFilter.innerHTML = `<option value="all">كل المحافظات</option>${cities
    .map((city) => `<option value="${city}" ${city === currentCity ? "selected" : ""}>${city}</option>`)
    .join("")}`;

  const nextArea = areas.includes(currentArea) ? currentArea : "all";
  areaFilter.innerHTML = `<option value="all">كل المناطق</option>${areas
    .map((area) => `<option value="${area}" ${area === nextArea ? "selected" : ""}>${area}</option>`)
    .join("")}`;
  cityFilter.dataset.ready = "true";
  areaFilter.dataset.ready = "true";
}

function filteredVenues() {
  const city = document.getElementById("city-filter")?.value || "all";
  const area = document.getElementById("area-filter")?.value || "all";
  return venues.filter((venue) => {
    const cityMatch = city === "all" || venue.city === city;
    const areaMatch = area === "all" || venue.area === area;
    return cityMatch && areaMatch;
  });
}

function renderVenues() {
  const list = document.getElementById("venue-list");
  if (!list) return;

  const visibleVenues = filteredVenues();
  if (!visibleVenues.length) {
    list.innerHTML = `<article class="empty-state venue-empty">لا توجد ملاعب مطابقة للفلاتر الحالية</article>`;
    return;
  }

  list.innerHTML = visibleVenues
    .map((venue) => {
      const availableCount = venue.slots.filter((slot) => slot.available).length;
      const bookedCount = venue.slots.length - availableCount;
      return `
        <article class="venue-card booking-venue-card ${state.selectedVenueId === venue.id ? "selected" : ""}" data-venue-id="${venue.id}">
          <div class="venue-visual">
            <img src="${venue.image}" alt="${venue.name}" />
            <span>${venue.type}</span>
          </div>
          <div class="card-title-row">
            <div>
              <h3>${venue.name}</h3>
              <span class="meta-line">${venue.city} · ${venue.area} · ${venue.rating}★</span>
            </div>
            <strong>${formatMoney(venue.price)}</strong>
          </div>
          <p class="venue-location">${venue.location}</p>
          <div class="venue-availability">
            <span><b>${availableCount}</b> مواعيد متاحة</span>
            <span><b>${bookedCount}</b> محجوز</span>
          </div>
          <button class="primary-button full" type="button" data-open-venue="${venue.id}">احجز الآن</button>
        </article>
      `;
    })
    .join("");
}

function updateBookingSummary() {
  const venue = getSelectedVenue();
  const { price, fee, total } = getBookingTotals();
  document.getElementById("selected-venue").textContent = venue ? venue.name : "اختار ملعب";
  document.getElementById("selected-slot").textContent = state.selectedSlot || "لم يتم الاختيار";
  document.getElementById("booking-price").textContent = formatMoney(price);
  document.getElementById("booking-fee").textContent = formatMoney(fee);
  document.getElementById("booking-total").textContent = formatMoney(total);
  document.getElementById("confirm-booking").disabled = !(venue && state.selectedSlot);
  syncWalletUi();
}

function closeBookingModals() {
  document.querySelectorAll(".booking-modal").forEach((modal) => modal.classList.add("hidden"));
  document.body.classList.remove("fantasy-modal-open");
}

function showBookingModal(modalId) {
  closeBookingModals();
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove("hidden");
  document.body.classList.add("fantasy-modal-open");
}

function openVenueDetails(venueId) {
  const venue = venues.find((item) => item.id === venueId);
  if (!venue) return;
  state.selectedVenueModalId = venue.id;
  const availableSlots = venue.slots.filter((slot) => slot.available);
  const bookedSlots = venue.slots.filter((slot) => !slot.available);
  const details = document.getElementById("venue-details-content");
  if (!details) return;

  details.innerHTML = `
    <div class="venue-modal-hero">
      <img src="${venue.image}" alt="${venue.name}" />
      <div>
        <p class="eyebrow">تفاصيل الملعب</p>
        <h2 id="venue-details-title">${venue.name}</h2>
        <p>${venue.location}</p>
        <div class="venue-modal-badges">
          <span>${venue.city}</span>
          <span>${venue.area}</span>
          <span>${venue.type}</span>
          <span>${venue.rating}★</span>
        </div>
      </div>
    </div>
    <div class="venue-details-grid">
      <span><b>${formatMoney(venue.price)}</b> سعر الساعة</span>
      <span><b>${availableSlots.length}</b> مواعيد متاحة</span>
      <span><b>${bookedSlots.length}</b> مواعيد محجوزة</span>
    </div>
    <section class="venue-hours-panel">
      <div>
        <p class="eyebrow">Available Hours</p>
        <h3>اختار وقت الحجز</h3>
      </div>
      <div class="venue-hours-list">
        ${venue.slots
          .map(
            (slot) => `
              <button class="venue-hour ${slot.available ? "" : "booked"}" type="button" data-detail-slot="${slot.time}" ${slot.available ? "" : "disabled"}>
                <strong>${slot.time}</strong>
                <small>${slot.available ? "متاح للحجز" : "محجوز"}</small>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;

  showBookingModal("venue-details-modal");
}

function openVenuePayment(venueId, slotTime) {
  const venue = venues.find((item) => item.id === venueId);
  const slot = venue?.slots.find((item) => item.time === slotTime && item.available);
  if (!venue || !slot) return;

  state.selectedVenueId = venue.id;
  state.selectedSlot = slot.time;
  updateBookingSummary();
  openPaymentModal({
    type: "venue-booking",
    title: venue.name,
    meta: `${venue.location} · ${venue.type} · ${slot.time}`,
    subtotal: venue.price,
    fee: Math.round(venue.price * 0.01),
    successText: "تم تأكيد حجز الملعب",
  });
}

function openPaymentModal(context) {
  state.payment.context = {
    ...context,
    total: context.subtotal + context.fee,
  };
  state.payment.method = "wallet";
  renderPaymentModal();
  showBookingModal("booking-payment-modal");
}

function renderPaymentModal() {
  const context = state.payment.context;
  if (!context) return;

  document.getElementById("payment-context-title").textContent = context.title;
  document.getElementById("payment-context-meta").textContent = context.meta;
  document.getElementById("payment-subtotal").textContent = formatMoney(context.subtotal);
  document.getElementById("payment-fee").textContent = formatMoney(context.fee);
  document.getElementById("payment-total").textContent = formatMoney(context.total);
  document.getElementById("payment-wallet-balance").textContent = formatMoney(state.walletBalance);

  document.querySelectorAll("[data-payment-method]").forEach((button) => {
    button.classList.toggle("active", button.dataset.paymentMethod === state.payment.method);
  });

  const note = document.getElementById("payment-method-note");
  const confirm = document.getElementById("payment-confirm");
  const walletSelected = state.payment.method === "wallet";
  const enoughWallet = state.walletBalance >= context.total;

  if (walletSelected && !enoughWallet) {
    note.textContent = "رصيد المحفظة غير كافي لإتمام الحجز. اختار فيزا أو فودافون كاش.";
    confirm.disabled = true;
  } else if (walletSelected) {
    note.textContent = "سيتم خصم المبلغ من محفظتك بعد نافذة التأكيد.";
    confirm.disabled = false;
  } else {
    note.textContent = "سيتم تأكيد الحجز فور إتمام الدفع التجريبي.";
    confirm.disabled = false;
  }
}

function openWalletConfirmation() {
  const context = state.payment.context;
  if (!context) return;
  document.getElementById("wallet-confirm-total").textContent = formatMoney(context.total);
  document.getElementById("wallet-confirm-balance").textContent = formatMoney(state.walletBalance);
  showBookingModal("wallet-confirm-modal");
}

function completePayment() {
  const context = state.payment.context;
  if (!context) return;

  if (state.payment.method === "wallet") {
    if (state.walletBalance < context.total) return;
    state.walletBalance -= context.total;
  }

  if (context.type === "venue-booking") {
    finalizeVenueBooking();
  }
}

function finalizeVenueBooking() {
  const venue = getSelectedVenue();
  if (!venue || !state.selectedSlot) return;
  const slot = venue.slots.find((item) => item.time === state.selectedSlot);
  if (slot) slot.available = false;

  const code = `SH-${Math.floor(1000 + Math.random() * 9000)}`;
  document.getElementById("booking-code").textContent = code;
  document.getElementById("booking-success").classList.remove("hidden");
  closeBookingModals();
  renderVenues();
  updateBookingSummary();
}

function renderPickupMatches() {
  const list = document.getElementById("pickup-list");
  list.innerHTML = pickupMatches
    .map(
      (match) => `
        <article class="pickup-card group rounded-app border border-white/70 shadow-glass backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-sport ${state.selectedPickupId === match.id ? "selected" : ""}">
          <div class="stack">
            <div class="card-title-row">
              <div>
                <h3>${match.name}</h3>
                <span class="meta-line">${match.venue} · ${match.time} · ${match.level}</span>
              </div>
              <strong>${formatMoney(match.cost)}</strong>
            </div>
            <div class="team-slots">
              <span>${match.team}</span>
              <span>${match.openSlots} أماكن فاضية</span>
            </div>
          </div>
          <button class="primary-button" type="button" data-pickup-id="${match.id}">انضم</button>
        </article>
      `,
    )
    .join("");
}

function updatePickupSummary() {
  const match = pickupMatches.find((item) => item.id === state.selectedPickupId);
  document.getElementById("pickup-name").textContent = match ? match.name : "اختار ماتش";
  document.getElementById("pickup-team").textContent = match ? match.team : "لم يتم الاختيار";
  document.getElementById("pickup-cost").textContent = formatMoney(match ? match.cost : 0);
  document.getElementById("confirm-pickup").disabled = !match;
}

function renderHome() {
  const homeVenues = document.getElementById("home-venues");
  const homePickups = document.getElementById("home-pickups");
  const homeProducts = document.getElementById("home-products");

  if (homeVenues) {
    homeVenues.innerHTML = venues
      .slice(0, 3)
      .map((venue) => {
        const firstSlot = venue.slots.find((slot) => slot.available);
        return `
          <article class="home-venue-card group rounded-app border border-white/70 shadow-glass backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-sport">
            <div class="home-card-media">
              <img src="${venue.image}" alt="${venue.name}" />
            </div>
            <div class="home-card-body">
              <div>
                <h3>${venue.name}</h3>
                <span>${venue.area} / ${venue.type}</span>
              </div>
              <div class="home-card-meta">
                <strong>${formatMoney(venue.price)}</strong>
                <small>${firstSlot ? firstSlot.time : "لا يوجد مواعيد"}</small>
              </div>
              <button class="small-button" type="button" data-home-venue="${venue.id}">احجز</button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  if (homePickups) {
    homePickups.innerHTML = pickupMatches
      .slice(0, 3)
      .map(
        (match) => `
          <article class="home-pickup-card group rounded-app border border-white/70 shadow-glass backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-sport">
            <div>
              <h3>${match.name}</h3>
              <span>${match.venue} / ${match.time}</span>
            </div>
            <div class="home-pickup-side">
              <strong>${match.openSlots} أماكن</strong>
              <button class="small-button" type="button" data-home-pickup="${match.id}">انضم</button>
            </div>
          </article>
        `,
      )
      .join("");
  }

  if (homeProducts) {
    homeProducts.innerHTML = products
      .slice(0, 3)
      .map(
        (product) => `
          <article class="home-product-card group rounded-app border border-white/70 shadow-glass backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-sport">
            <img src="${product.image}" alt="${product.name}" />
            <div>
              <h3>${product.name}</h3>
              <strong>${formatMoney(product.price)}</strong>
            </div>
            <button class="small-button" type="button" data-product-id="${product.id}">أضف للسلة</button>
          </article>
        `,
      )
      .join("");
  }
}

const fantasyPositionLabels = {
  GK: "حارس",
  DEF: "دفاع",
  MID: "وسط",
  FWD: "هجوم",
};

const fantasyStarterLines = [
  { key: "gk", element: "fantasy-line-gk", slots: [{ id: "gk1", position: "GK", label: "GK" }] },
  {
    key: "def",
    element: "fantasy-line-def",
    slots: [
      { id: "def1", position: "DEF", label: "DEF" },
      { id: "def2", position: "DEF", label: "DEF" },
      { id: "def3", position: "DEF", label: "DEF" },
      { id: "def4", position: "DEF", label: "DEF" },
    ],
  },
  {
    key: "mid",
    element: "fantasy-line-mid",
    slots: [
      { id: "mid1", position: "MID", label: "MID" },
      { id: "mid2", position: "MID", label: "MID" },
      { id: "mid3", position: "MID", label: "MID" },
    ],
  },
  {
    key: "fwd",
    element: "fantasy-line-fwd",
    slots: [
      { id: "fwd1", position: "FWD", label: "FWD" },
      { id: "fwd2", position: "FWD", label: "FWD" },
      { id: "fwd3", position: "FWD", label: "FWD" },
    ],
  },
];

const fantasyBenchSlots = [
  { id: "bench1", position: "GK", label: "GK" },
  { id: "bench2", position: "DEF", label: "DEF" },
  { id: "bench3", position: "MID", label: "MID" },
  { id: "bench4", position: "FWD", label: "FWD" },
];

const fantasyFixtures = [
  "الأهلي vs المصري - الجمعة 7:00",
  "الزمالك vs إنبي - السبت 8:00",
  "بيراميدز vs سيراميكا - الأحد 6:30",
];

const fantasyScoutItems = [
  "ترشيح: إمام عاشور بسبب فورمة 8.3 وماتش على ملعبه.",
  "مصاب: رمضان صبحي يحتاج متابعة قبل الغلق.",
  "خبر: وسام أبو علي متوقع يبدأ أساسيا هذا الأسبوع.",
  "Differential: مهند لاشين سعره مناسب ونسبة اختياره قليلة.",
];

const fantasyWinners = [
  "فريق Cairo Kings كسب EGP 2,400 في كأس الجولة.",
  "فريق Ultras XI كسب EGP 7,200 في بطولة الذهب.",
];

const getFantasyPlayer = (playerId) => players.find((player) => player.id === Number(playerId));

function getFantasySelectedIds() {
  return [
    ...Object.values(state.fantasy.starters),
    ...Object.values(state.fantasy.bench),
  ].filter(Boolean).map(Number);
}

function getFantasySlot(slotId) {
  return fantasyStarterLines.flatMap((line) => line.slots).find((slot) => slot.id === slotId)
    || fantasyBenchSlots.find((slot) => slot.id === slotId);
}

function isStarterSlot(slotId) {
  return Object.prototype.hasOwnProperty.call(state.fantasy.starters, slotId);
}

function fantasySpend() {
  return getFantasySelectedIds().reduce((sum, playerId) => {
    const player = getFantasyPlayer(playerId);
    return sum + (player ? player.price : 0);
  }, 0);
}

function fantasyStarterPoints() {
  return Object.entries(state.fantasy.starters).reduce((sum, [slotId, playerId]) => {
    const player = getFantasyPlayer(playerId);
    if (!player) return sum;
    const captainBonus = state.fantasy.captainSlot === slotId ? player.points : 0;
    return sum + player.points + captainBonus;
  }, 0);
}

function fantasySlotCard(slot, type = "starter") {
  const playerId = type === "starter" ? state.fantasy.starters[slot.id] : state.fantasy.bench[slot.id];
  const player = getFantasyPlayer(playerId);
  const isCaptain = state.fantasy.captainSlot === slot.id;
  if (!player) {
    return `
      <button class="fantasy-empty-slot" type="button" data-fantasy-slot="${slot.id}" data-slot-type="${type}" data-position="${slot.position}">
        <span>${slot.label}</span>
        <b>+</b>
        <small>${fantasyPositionLabels[slot.position]}</small>
      </button>
    `;
  }

  return `
    <button class="fantasy-player-token ${isCaptain ? "captain" : ""}" type="button" data-fantasy-detail="${slot.id}" data-slot-type="${type}">
      <span class="shirt">${player.club.slice(0, 2)}</span>
      <strong>${player.name}</strong>
      <small>${player.club} / ${player.points} نقطة</small>
      ${isCaptain ? '<em>C</em>' : ""}
    </button>
  `;
}

function renderFantasyPeach() {
  const app = document.getElementById("fantasy-peach-app");
  if (!app) return;

  document.getElementById("fantasy-team-name").textContent = state.fantasy.teamName || "سجّل فريقك";

  fantasyStarterLines.forEach((line) => {
    const lineElement = document.getElementById(line.element);
    if (!lineElement) return;
    lineElement.innerHTML = line.slots.map((slot) => fantasySlotCard(slot, "starter")).join("");
  });

  const bench = document.getElementById("fantasy-bench");
  if (bench) {
    bench.innerHTML = fantasyBenchSlots.map((slot) => fantasySlotCard(slot, "bench")).join("");
  }

  const totalPoints = fantasyStarterPoints();
  const weekPoints = Math.round(totalPoints * 0.42);
  const budgetLeft = Math.max(0, 100 - fantasySpend());
  document.getElementById("fantasy-total-points").textContent = totalPoints;
  document.getElementById("fantasy-week-points").textContent = weekPoints;
  document.getElementById("fantasy-status-week-points").textContent = weekPoints;
  document.getElementById("fantasy-budget-left").textContent = budgetLeft.toFixed(1);
  document.getElementById("fantasy-team-rank").textContent = totalPoints ? `#${Math.max(1, 975 - totalPoints)}` : "--";

  renderFantasyGroups();
  renderFantasyTournaments();
  renderFantasyStatusFeeds();
  renderFantasyLeaderboard();
}

function renderFantasyGroups() {
  const list = document.getElementById("fantasy-groups-list");
  if (!list) return;
  list.innerHTML = state.fantasy.groups
    .map(
      (group) => `
        <article class="${group.fresh ? "new" : ""}">
          <div>
            <strong>${group.name}</strong>
            <small>كود: ${group.code} / ${group.members} لاعب</small>
          </div>
          <b>#${group.rank}</b>
        </article>
      `,
    )
    .join("");
}

function renderFantasyTournaments() {
  const list = document.getElementById("fantasy-tournaments");
  if (!list) return;
  list.innerHTML = state.fantasy.tournaments
    .map(
      (cup) => `
        <article class="${cup.joined ? "joined" : ""}">
          <div>
            <strong>${cup.name}</strong>
            <small>اشتراك ${formatMoney(cup.fee)} / جائزة ${formatMoney(cup.prize)}</small>
          </div>
          <button class="small-button" type="button" data-join-tournament="${cup.id}">
            ${cup.joined ? "مشترك" : "اشترك"}
          </button>
        </article>
      `,
    )
    .join("");
}

function renderFantasyStatusFeeds() {
  const fixtures = document.getElementById("fantasy-fixtures");
  const scout = document.getElementById("fantasy-scout-feed");
  const winners = document.getElementById("fantasy-winners-feed");
  if (fixtures) fixtures.innerHTML = fantasyFixtures.map((item) => `<article>${item}</article>`).join("");
  if (scout) scout.innerHTML = fantasyScoutItems.map((item) => `<article>${item}</article>`).join("");
  if (winners) winners.innerHTML = fantasyWinners.map((item) => `<article>${item}</article>`).join("");
}

function renderFantasyLeaderboard() {
  const board = document.getElementById("fantasy-main-leaderboard");
  if (!board) return;
  const rows = [
    { rank: 1, name: "Cairo Kings", points: 438 },
    { rank: 2, name: "Ultras XI", points: 421 },
    { rank: 3, name: state.fantasy.teamName || "فريقك", points: fantasyStarterPoints() },
    { rank: 4, name: "Delta FC", points: 389 },
  ];
  board.innerHTML = rows
    .map(
      (row) => `
        <article class="${row.name === state.fantasy.teamName ? "you" : ""}">
          <b>#${row.rank}</b>
          <span>${row.name}</span>
          <strong>${row.points}</strong>
        </article>
      `,
    )
    .join("");
}

function showFantasyModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove("hidden");
  document.body.classList.add("fantasy-modal-open");
}

function closeFantasyModals() {
  document.querySelectorAll(".fantasy-modal").forEach((modal) => modal.classList.add("hidden"));
  document.body.classList.remove("fantasy-modal-open");
}

function openFantasyRegistration() {
  const input = document.getElementById("fantasy-team-input");
  if (input) input.value = state.fantasy.teamName || "";
  showFantasyModal("fantasy-register-modal");
  setTimeout(() => input?.focus(), 50);
}

function openFantasyPlayerPicker(slotId, type = "starter") {
  const slot = getFantasySlot(slotId);
  if (!slot) return;
  state.fantasy.activeSlotId = slotId;
  state.fantasy.activeSlotType = type;
  const modalTitle = document.getElementById("fantasy-player-modal-title");
  const list = document.getElementById("fantasy-player-list");
  const selectedIds = getFantasySelectedIds();
  const currentPlayerId = type === "bench" ? state.fantasy.bench[slotId] : state.fantasy.starters[slotId];
  const currentPlayer = getFantasyPlayer(currentPlayerId);
  const availableBudget = 100 - fantasySpend() + (currentPlayer ? currentPlayer.price : 0);
  if (modalTitle) modalTitle.textContent = `اختار ${fantasyPositionLabels[slot.position]}`;
  if (list) {
    list.innerHTML = players
      .filter((player) => player.position === slot.position)
      .map((player) => {
        const alreadySelected = selectedIds.includes(player.id)
          && state.fantasy.starters[slotId] !== player.id
          && state.fantasy.bench[slotId] !== player.id;
        const overBudget = player.price > availableBudget;
        return `
          <button class="fantasy-picker-row" type="button" data-select-fantasy-player="${player.id}" ${alreadySelected || overBudget ? "disabled" : ""}>
            <span class="shirt">${player.club.slice(0, 2)}</span>
            <span>
              <strong>${player.name}</strong>
              <small>${player.club} / ${fantasyPositionLabels[player.position]} / ${player.status}${overBudget ? " / خارج الميزانية" : ""}</small>
            </span>
            <b>${player.price.toFixed(1)}</b>
          </button>
        `;
      })
      .join("");
  }
  showFantasyModal("fantasy-player-modal");
}

function assignFantasyPlayer(playerId) {
  const slotId = state.fantasy.activeSlotId;
  if (!slotId) return;
  const slot = getFantasySlot(slotId);
  const player = getFantasyPlayer(playerId);
  if (!slot || !player || player.position !== slot.position) return;
  const target = state.fantasy.activeSlotType === "bench" ? state.fantasy.bench : state.fantasy.starters;
  const currentPlayer = getFantasyPlayer(target[slotId]);
  const alreadySelected = getFantasySelectedIds().includes(Number(playerId)) && target[slotId] !== Number(playerId);
  const availableBudget = 100 - fantasySpend() + (currentPlayer ? currentPlayer.price : 0);
  if (alreadySelected || player.price > availableBudget) return;
  target[slotId] = Number(playerId);
  closeFantasyModals();
  renderFantasyPeach();
}

function openFantasyPlayerDetails(slotId, type = "starter") {
  const playerId = type === "bench" ? state.fantasy.bench[slotId] : state.fantasy.starters[slotId];
  const player = getFantasyPlayer(playerId);
  if (!player) {
    openFantasyPlayerPicker(slotId, type);
    return;
  }

  state.fantasy.activeSlotId = slotId;
  state.fantasy.activeSlotType = type;
  state.fantasy.pendingReplaceSlot = slotId;
  const details = document.getElementById("fantasy-player-details");
  if (!details) return;
  details.innerHTML = `
    <div class="fantasy-details-head">
      <span class="shirt large">${player.club.slice(0, 2)}</span>
      <div>
        <p class="eyebrow">${fantasyPositionLabels[player.position]}</p>
        <h2 id="fantasy-details-title">${player.name}</h2>
        <p>${player.club} / سعر ${player.price.toFixed(1)} / فورمة ${player.form}</p>
      </div>
    </div>
    <div class="fantasy-details-grid">
      <span><b>${player.points}</b> نقاط</span>
      <span><b>${player.status}</b> الحالة</span>
      <span><b>${player.price.toFixed(1)}</b> السعر</span>
    </div>
    <div class="fantasy-details-actions">
      <button class="primary-button" type="button" data-replace-current>بدّل اللاعب</button>
      <button class="ghost-button" type="button" data-captain-current ${type === "bench" ? "disabled" : ""}>خليه كابتن</button>
    </div>
  `;
  showFantasyModal("fantasy-details-modal");
}

function createFantasyGroup() {
  const code = `EGP-${Math.floor(100 + Math.random() * 900)}`;
  state.fantasy.groups.unshift({ name: `جروب ${code}`, code, rank: 1, members: 1, fresh: true });
  renderFantasyGroups();
}

function joinFantasyGroup(code) {
  const cleanCode = code.trim().toUpperCase();
  if (!cleanCode) return;
  state.fantasy.groups.unshift({ name: `جروب ${cleanCode}`, code: cleanCode, rank: 12, members: 24 });
  closeFantasyModals();
  renderFantasyGroups();
}

function updateFantasyCountdown() {
  const target = new Date();
  target.setDate(target.getDate() + ((5 - target.getDay() + 7) % 7 || 7));
  target.setHours(20, 30, 0, 0);
  const diff = Math.max(0, target - new Date());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const output = `${days}ي ${hours}س ${minutes}د`;
  const node = document.getElementById("fantasy-deadline-countdown");
  if (node) node.textContent = output;
}

function filteredPlayers() {
  const position = document.getElementById("position-filter").value;
  const club = document.getElementById("club-filter").value;
  const price = document.getElementById("price-filter").value;

  return players.filter((player) => {
    const positionMatch = position === "all" || player.position === position;
    const clubMatch = club === "all" || player.club === club;
    const priceMatch =
      price === "all" ||
      (price === "budget" && player.price < 8) ||
      (price === "premium" && player.price >= 8);
    return positionMatch && clubMatch && priceMatch;
  });
}

function currentSpend() {
  return state.squad.reduce((sum, id) => {
    const player = players.find((item) => item.id === id);
    return sum + (player ? player.price : 0);
  }, 0);
}

function renderPlayers() {
  const budgetLeft = 100 - currentSpend();
  document.getElementById("budget-left").textContent = budgetLeft.toFixed(1);
  document.getElementById("players-table").innerHTML = filteredPlayers()
    .map((player) => {
      const selected = state.squad.includes(player.id);
      const blocked = !selected && (state.squad.length >= 7 || player.price > budgetLeft);
      return `
        <tr>
          <td>${player.name}</td>
          <td>${player.position}</td>
          <td>${player.club}</td>
          <td>${player.price.toFixed(1)}</td>
          <td>${player.points}</td>
          <td>
            <button
              class="small-button ${selected ? "remove" : ""}"
              type="button"
              data-player-id="${player.id}"
              ${blocked ? "disabled" : ""}
            >
              ${selected ? "حذف" : "إضافة"}
            </button>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderSquad() {
  const squadList = document.getElementById("squad-list");
  const captainSelect = document.getElementById("captain-select");
  const selectedPlayers = state.squad.map((id) => players.find((player) => player.id === id)).filter(Boolean);

  document.getElementById("squad-count").textContent = `${selectedPlayers.length}/7`;

  if (!selectedPlayers.length) {
    squadList.className = "squad-list empty-state";
    squadList.textContent = "اختار لاعبين من الجدول";
  } else {
    squadList.className = "squad-list";
    squadList.innerHTML = selectedPlayers
      .map(
        (player) => `
          <div class="squad-player">
            <div>
              <strong>${player.name}${String(player.id) === state.captainId ? " (C)" : ""}</strong>
              <small>${player.position} · ${player.club} · ${player.price.toFixed(1)}</small>
            </div>
            <button class="small-button remove" type="button" data-player-id="${player.id}">حذف</button>
          </div>
        `,
      )
      .join("");
  }

  captainSelect.innerHTML = `<option value="">لم يتم الاختيار</option>${selectedPlayers
    .map((player) => `<option value="${player.id}" ${String(player.id) === state.captainId ? "selected" : ""}>${player.name}</option>`)
    .join("")}`;

  const score = selectedPlayers.reduce((sum, player) => sum + player.points, 0);
  const captain = selectedPlayers.find((player) => String(player.id) === state.captainId);
  document.getElementById("user-score").textContent = captain ? score + captain.points : score;
}

function renderFantasy() {
  renderFantasyPeach();
  updateFantasyCountdown();
  renderPlayers();
  renderSquad();
}

function renderTraining() {
  document.getElementById("training-list").innerHTML = sessions
    .map(
      (session) => `
        <article class="training-card rounded-app border border-white/70 shadow-glass backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-sport">
          <div class="card-title-row">
            <div>
              <h3>${session.name}</h3>
              <span class="meta-line">${session.duration} دقيقة · ${session.level}</span>
            </div>
            <span class="status-pill">${session.progress}%</span>
          </div>
          <ul class="exercise-list">
            ${session.exercises.map((exercise) => `<li>${exercise}</li>`).join("")}
          </ul>
          <button class="primary-button full" type="button" data-session-id="${session.id}">ابدأ</button>
        </article>
      `,
    )
    .join("");
}

function setActiveSession(sessionId) {
  const session = sessions.find((item) => item.id === sessionId);
  if (!session) return;
  document.getElementById("session-name").textContent = session.name;
  document.getElementById("session-duration").textContent = `${session.duration} دقيقة`;
  document.getElementById("session-level").textContent = session.level;
  document.getElementById("session-progress").style.width = `${session.progress}%`;
}

function renderProducts() {
  document.getElementById("product-list").innerHTML = products
    .map(
      (product) => `
        <article class="product-card rounded-app border border-white/70 shadow-glass backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-sport">
          <div class="product-visual">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="price-row">
            <strong>${formatMoney(product.price)}</strong>
            <button class="small-button" type="button" data-product-id="${product.id}">أضف للسلة</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderCart() {
  const cartList = document.getElementById("cart-list");
  const items = state.cart.map((id) => products.find((product) => product.id === id)).filter(Boolean);
  const total = items.reduce((sum, product) => sum + product.price, 0);
  document.getElementById("cart-count").textContent = String(items.length);
  document.getElementById("cart-total").textContent = formatMoney(total);

  if (!items.length) {
    cartList.className = "cart-list empty-state";
    cartList.textContent = "السلة فارغة";
    return;
  }

  cartList.className = "cart-list";
  cartList.innerHTML = items
    .map(
      (item, index) => `
        <div class="cart-item">
          <span>${item.name}</span>
          <button class="small-button remove" type="button" data-cart-index="${index}">حذف</button>
        </div>
      `,
    )
    .join("");
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const toggleButton = event.target.closest(".sidebar-toggle");
    if (toggleButton) {
      setSidebarOpen(!document.body.classList.contains("sidebar-open"));
      return;
    }

    if (event.target.closest(".sidebar-overlay")) {
      setSidebarOpen(false);
      return;
    }

    const sectionButton = event.target.closest("[data-section]");
    if (sectionButton) {
      showSection(sectionButton.dataset.section);
      setSidebarOpen(false);
    }

    if (event.target.closest("#open-fantasy-register")) {
      openFantasyRegistration();
      return;
    }

    if (event.target.closest("[data-close-booking-modal]") || event.target.classList.contains("booking-modal")) {
      closeBookingModals();
      return;
    }

    const openVenueButton = event.target.closest("[data-open-venue]");
    if (openVenueButton) {
      openVenueDetails(openVenueButton.dataset.openVenue);
      return;
    }

    const detailSlotButton = event.target.closest("[data-detail-slot]");
    if (detailSlotButton && !detailSlotButton.disabled) {
      openVenuePayment(state.selectedVenueModalId, detailSlotButton.dataset.detailSlot);
      return;
    }

    const paymentMethodButton = event.target.closest("[data-payment-method]");
    if (paymentMethodButton) {
      state.payment.method = paymentMethodButton.dataset.paymentMethod;
      renderPaymentModal();
      return;
    }

    if (event.target.closest("#payment-confirm")) {
      if (state.payment.method === "wallet") {
        openWalletConfirmation();
      } else {
        completePayment();
      }
      return;
    }

    if (event.target.closest("#wallet-confirm-pay")) {
      completePayment();
      return;
    }

    if (event.target.closest("[data-close-fantasy-modal]") || event.target.classList.contains("fantasy-modal")) {
      closeFantasyModals();
      return;
    }

    const fantasySlotButton = event.target.closest("[data-fantasy-slot]");
    if (fantasySlotButton) {
      if (!state.fantasy.registered) {
        openFantasyRegistration();
        return;
      }
      openFantasyPlayerPicker(fantasySlotButton.dataset.fantasySlot, fantasySlotButton.dataset.slotType || "starter");
      return;
    }

    const fantasyDetailButton = event.target.closest("[data-fantasy-detail]");
    if (fantasyDetailButton) {
      openFantasyPlayerDetails(fantasyDetailButton.dataset.fantasyDetail, fantasyDetailButton.dataset.slotType || "starter");
      return;
    }

    const fantasyPlayerButton = event.target.closest("[data-select-fantasy-player]");
    if (fantasyPlayerButton && !fantasyPlayerButton.disabled) {
      assignFantasyPlayer(fantasyPlayerButton.dataset.selectFantasyPlayer);
      return;
    }

    if (event.target.closest("[data-replace-current]")) {
      const slotId = state.fantasy.activeSlotId;
      const slotType = state.fantasy.activeSlotType || "starter";
      closeFantasyModals();
      openFantasyPlayerPicker(slotId, slotType);
      return;
    }

    if (event.target.closest("[data-captain-current]")) {
      if (state.fantasy.activeSlotType !== "bench" && state.fantasy.activeSlotId) {
        state.fantasy.captainSlot = state.fantasy.activeSlotId;
        closeFantasyModals();
        renderFantasyPeach();
      }
      return;
    }

    if (event.target.closest("[data-create-fantasy-group]")) {
      createFantasyGroup();
      return;
    }

    if (event.target.closest("[data-open-group-code]")) {
      const input = document.getElementById("fantasy-group-code-input");
      if (input) input.value = "";
      showFantasyModal("fantasy-group-code-modal");
      setTimeout(() => input?.focus(), 50);
      return;
    }

    const joinTournamentButton = event.target.closest("[data-join-tournament]");
    if (joinTournamentButton) {
      const cup = state.fantasy.tournaments.find((item) => item.id === joinTournamentButton.dataset.joinTournament);
      if (cup && !cup.joined) {
        cup.joined = true;
        state.fantasy.groups.unshift({
          name: `${cup.name} - بطولة`,
          code: cup.id.toUpperCase(),
          rank: 1,
          members: 96,
        });
      }
      renderFantasyPeach();
      return;
    }

    const slotButton = event.target.closest("[data-venue-slot]");
    if (slotButton && !slotButton.disabled) {
      state.selectedVenueId = slotButton.dataset.venueSlot;
      state.selectedSlot = slotButton.dataset.slot;
      document.getElementById("booking-success").classList.add("hidden");
      renderVenues();
      updateBookingSummary();
    }

    const pickupButton = event.target.closest("[data-pickup-id]");
    if (pickupButton) {
      state.selectedPickupId = pickupButton.dataset.pickupId;
      document.getElementById("pickup-success").classList.add("hidden");
      renderPickupMatches();
      updatePickupSummary();
    }

    const homeVenueButton = event.target.closest("[data-home-venue]");
    if (homeVenueButton) {
      state.selectedVenueId = homeVenueButton.dataset.homeVenue;
      state.selectedSlot = null;
      renderVenues();
      updateBookingSummary();
      showSection("venues");
    }

    const homePickupButton = event.target.closest("[data-home-pickup]");
    if (homePickupButton) {
      state.selectedPickupId = homePickupButton.dataset.homePickup;
      renderPickupMatches();
      updatePickupSummary();
      showSection("pickup");
    }

    const playerButton = event.target.closest("[data-player-id]");
    if (playerButton) {
      const playerId = Number(playerButton.dataset.playerId);
      if (state.squad.includes(playerId)) {
        state.squad = state.squad.filter((id) => id !== playerId);
        if (state.captainId === String(playerId)) state.captainId = "";
      } else if (state.squad.length < 7) {
        state.squad.push(playerId);
      }
      renderFantasy();
    }

    const sessionButton = event.target.closest("[data-session-id]");
    if (sessionButton) {
      setActiveSession(sessionButton.dataset.sessionId);
    }

    const productButton = event.target.closest("[data-product-id]");
    if (productButton) {
      state.cart.push(productButton.dataset.productId);
      renderCart();
    }

    const cartButton = event.target.closest("[data-cart-index]");
    if (cartButton) {
      state.cart.splice(Number(cartButton.dataset.cartIndex), 1);
      renderCart();
    }

    const tab = event.target.closest("[data-tab]");
    if (tab) {
      document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("active", item === tab));
      document.querySelectorAll(".tab-panel").forEach((panel) => {
        panel.classList.toggle("active", panel.id === `tab-${tab.dataset.tab}`);
      });
    }
  });

  document.querySelectorAll(".payment-choice").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".payment-choice").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
    });
  });

  document.getElementById("confirm-booking").addEventListener("click", () => {
    if (!state.selectedVenueId || !state.selectedSlot) return;
    const venue = getSelectedVenue();
    const totals = getBookingTotals();
    openPaymentModal({
      type: "venue-booking",
      title: venue.name,
      meta: `${venue.location} · ${venue.type} · ${state.selectedSlot}`,
      subtotal: totals.price,
      fee: totals.fee,
      successText: "تم تأكيد حجز الملعب",
    });
  });

  document.getElementById("confirm-pickup").addEventListener("click", () => {
    if (!state.selectedPickupId) return;
    document.getElementById("pickup-success").classList.remove("hidden");
  });

  document.getElementById("complete-session").addEventListener("click", () => {
    document.getElementById("session-progress").style.width = "100%";
  });

  ["city-filter", "area-filter", "booking-date"].forEach((id) => {
    document.getElementById(id).addEventListener("change", () => {
      if (id === "city-filter") renderVenueFilters();
      renderVenues();
    });
  });

  ["position-filter", "club-filter", "price-filter"].forEach((id) => {
    document.getElementById(id).addEventListener("change", renderPlayers);
  });

  document.getElementById("captain-select").addEventListener("change", (event) => {
    state.captainId = event.target.value;
    renderFantasy();
  });

  const fantasyRegisterForm = document.getElementById("fantasy-register-form");
  if (fantasyRegisterForm) {
    fantasyRegisterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.getElementById("fantasy-team-input");
      state.fantasy.teamName = input?.value.trim() || "فريقي";
      state.fantasy.registered = true;
      closeFantasyModals();
      renderFantasyPeach();
    });
  }

  const fantasyGroupCodeForm = document.getElementById("fantasy-group-code-form");
  if (fantasyGroupCodeForm) {
    fantasyGroupCodeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      joinFantasyGroup(document.getElementById("fantasy-group-code-input")?.value || "");
      renderFantasyPeach();
    });
  }
}

function boot() {
  const today = new Date().toISOString().slice(0, 10);
  document.getElementById("booking-date").value = today;
  renderVenueFilters();
  renderVenues();
  renderHome();
  updateBookingSummary();
  renderPickupMatches();
  updatePickupSummary();
  renderFantasy();
  updateFantasyCountdown();
  setInterval(updateFantasyCountdown, 60000);
  renderTraining();
  renderProducts();
  renderCart();
  bindEvents();
}

boot();

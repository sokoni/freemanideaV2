/**
 * Pathway AI × Chicago State University
 * Resource Navigator Engine (resources.js)
 * Data-driven resource store, dynamic search, category filtering,
 * modal detail view, and persistent saved resources.
 */

// =========================================================
// 1. SEED / DEMO RESOURCE DATA (Backend API Schema Ready)
// =========================================================

const SAMPLE_RESOURCES = [
  {
    id: "res-food-1",
    institutionId: "csu-chicago",
    title: "CSU Food Pantry & Basic Needs",
    category: "food",
    categoryLabel: "Food & Basic Needs",
    icon: "♨",
    description: "Access nutritious food items, non-perishable goods, hygiene products, and emergency meal voucher support on campus.",
    tags: ["Food Assistance", "Basic Needs", "Campus Pantry"],
    eligibility: "Currently enrolled CSU undergraduate & graduate students (Sample Criteria)",
    location: "Student Union Building - Lower Level Room 102 (Sample Location)",
    contact: "CSU Student Affairs | pantry@csu.edu | (773) 995-2000 (Sample Contact)",
    url: "https://www.csu.edu/studentaffairs/",
    instructions: "Bring a valid CSU Student ID card during open pantry hours. No prior appointment required.",
    availability: "Monday – Thursday: 10:00 AM – 3:30 PM (Sample Hours)",
    deadline: "Ongoing Availability",
    universityOrCommunity: "Campus Resource",
    updatedAt: "2026-08-01"
  },
  {
    id: "res-housing-1",
    institutionId: "csu-chicago",
    title: "Student Housing & Emergency Relief",
    category: "housing",
    categoryLabel: "Housing",
    icon: "⌂",
    description: "Explore on-campus residence assistance, emergency temporary lodging support, and off-campus housing counseling.",
    tags: ["Housing", "Emergency Relief", "Residence Life"],
    eligibility: "CSU students facing sudden housing displacement or emergency transition (Sample Criteria)",
    location: "Residence Life Office - Cordell Hull Hall (Sample Location)",
    contact: "Housing & Residence Life | housing@csu.edu | (773) 995-3676 (Sample Contact)",
    url: "https://www.csu.edu/housing/",
    instructions: "Fill out the online Emergency Housing Request form or visit the Residence Life office for immediate consultation.",
    availability: "Monday – Friday: 8:30 AM – 5:00 PM (Sample Hours)",
    deadline: "Immediate Emergency Referral",
    universityOrCommunity: "Campus Resource",
    updatedAt: "2026-08-01"
  },
  {
    id: "res-financial-1",
    institutionId: "csu-chicago",
    title: "CSU Emergency Student Aid Grant",
    category: "financial",
    categoryLabel: "Financial Support",
    icon: "$",
    description: "One-time micro-grants for students experiencing unexpected financial hardships, books/supplies needs, or medical emergencies.",
    tags: ["Emergency Aid", "Financial Wellness", "Student Grants"],
    eligibility: "Degree-seeking students with documented financial emergency (Sample Criteria)",
    location: "Office of Financial Aid - Cook Administration Bldg Room 100 (Sample Location)",
    contact: "Financial Aid Office | csu-finaid@csu.edu | (773) 995-2304 (Sample Contact)",
    url: "https://www.csu.edu/financialaid/",
    instructions: "Submit an emergency grant request with documentation of unexpected financial hardship.",
    availability: "Applications reviewed weekly (Sample Availability)",
    deadline: "Priority review on 1st of each month",
    universityOrCommunity: "Campus Resource",
    updatedAt: "2026-08-02"
  },
  {
    id: "res-health-1",
    institutionId: "csu-chicago",
    title: "Student Health Center & Wellness Services",
    category: "health",
    categoryLabel: "Health & Wellness",
    icon: "+",
    description: "Comprehensive primary healthcare services, immunizations, preventative screenings, health education, and wellness workshops.",
    tags: ["Health", "Wellness", "Medical Services"],
    eligibility: "Registered CSU students with current health fee clearance (Sample Criteria)",
    location: "Cook Administration Building - Room 131 (Sample Location)",
    contact: "CSU Health Center | healthcenter@csu.edu | (773) 995-2011 (Sample Contact)",
    url: "https://www.csu.edu/healthcenter/",
    instructions: "Walk-ins accepted for urgent needs; appointments recommended for routine care.",
    availability: "Monday – Friday: 8:30 AM – 4:30 PM (Sample Hours)",
    deadline: "Year-Round Access",
    universityOrCommunity: "Campus Resource",
    updatedAt: "2026-08-01"
  },
  {
    id: "res-counseling-1",
    institutionId: "csu-chicago",
    title: "Counseling Center & Mental Health Support",
    category: "counseling",
    categoryLabel: "Counseling",
    icon: "☯",
    description: "Free confidential personal counseling, crisis intervention, stress management, group therapy, and mental health resources.",
    tags: ["Counseling", "Mental Health", "Wellness"],
    eligibility: "All actively enrolled Chicago State University students (Sample Criteria)",
    location: "CSU Counseling Center - CRUB Room 190 (Sample Location)",
    contact: "Counseling Center | counseling@csu.edu | (773) 995-2383 (Sample Contact)",
    url: "https://www.csu.edu/counseling/",
    instructions: "Call or email to schedule an intake session. 24/7 crisis telehealth options available.",
    availability: "Monday – Friday: 9:00 AM – 5:00 PM (Sample Hours)",
    deadline: "Immediate Support Available",
    universityOrCommunity: "Campus Resource",
    updatedAt: "2026-08-03"
  },
  {
    id: "res-academic-1",
    institutionId: "csu-chicago",
    title: "Academic Advising & Graduation Planning",
    category: "academic",
    categoryLabel: "Academic Support",
    icon: "A",
    description: "Personalized degree mapping, course registration guidance, major selection coaching, and academic progress monitoring.",
    tags: ["Academic Advising", "Degree Planning", "Student Success"],
    eligibility: "All undergraduate & graduate CSU students (Sample Criteria)",
    location: "Leo Student Success Center - 2nd Floor (Sample Location)",
    contact: "Academic Advising | advising@csu.edu | (773) 995-4500 (Sample Contact)",
    url: "https://www.csu.edu/advising/",
    instructions: "Schedule an appointment through the CSU Student Portal or visit drop-in hours.",
    availability: "Monday – Friday: 8:00 AM – 5:00 PM (Sample Hours)",
    deadline: "Pre-registration deadlines apply each semester",
    universityOrCommunity: "Campus Resource",
    updatedAt: "2026-08-01"
  },
  {
    id: "res-tutoring-1",
    institutionId: "csu-chicago",
    title: "Learning Assistance & Peer Tutoring Center",
    category: "tutoring",
    categoryLabel: "Tutoring",
    icon: "✎",
    description: "Free peer tutoring in Math, Writing, Sciences, Accounting, and General Education courses, plus study skills workshops.",
    tags: ["Tutoring", "Math & Writing", "Peer Coaching"],
    eligibility: "Enrolled CSU students seeking academic reinforcement (Sample Criteria)",
    location: "CSU Library - 1st Floor Learning Center (Sample Location)",
    contact: "Tutoring Center | tutoring@csu.edu | (773) 995-2273 (Sample Contact)",
    url: "https://www.csu.edu/learningcenter/",
    instructions: "Book 1-on-1 tutoring appointments online or drop in during scheduled subject hours.",
    availability: "Monday – Thursday: 9:00 AM – 7:00 PM | Fri: 9:00 AM – 4:00 PM (Sample Hours)",
    deadline: "Continuous Semester Support",
    universityOrCommunity: "Campus Resource",
    updatedAt: "2026-08-01"
  },
  {
    id: "res-tech-1",
    institutionId: "csu-chicago",
    title: "Technology Access & Laptop Loaner Program",
    category: "technology",
    categoryLabel: "Technology",
    icon: "◫",
    description: "Semester-long laptop loaners, Wi-Fi hotspot access, campus computer lab access, software licensing, and IT helpdesk support.",
    tags: ["Technology", "Laptop Loaner", "Digital Access"],
    eligibility: "CSU students enrolled in 6+ credit hours needing computer access (Sample Criteria)",
    location: "IT Services Desk - Douglas Hall Room 122 (Sample Location)",
    contact: "IT Helpdesk | helpdesk@csu.edu | (773) 995-3963 (Sample Contact)",
    url: "https://www.csu.edu/it/",
    instructions: "Submit an online device request form with proof of current course registration.",
    availability: "Monday – Friday: 8:00 AM – 6:00 PM (Sample Hours)",
    deadline: "First-come, first-served each semester",
    universityOrCommunity: "Campus Resource",
    updatedAt: "2026-08-01"
  },
  {
    id: "res-trans-1",
    institutionId: "csu-chicago",
    title: "CTA U-Pass & Transit Assistance",
    category: "transportation",
    categoryLabel: "Transportation",
    icon: "↔",
    description: "Chicago Transit Authority U-Pass distribution for unlimited CTA bus and train rides, plus campus parking permit information.",
    tags: ["Transportation", "CTA U-Pass", "Commuter Support"],
    eligibility: "Full-time undergraduate students (12+ hrs) & eligible graduate students (Sample Criteria)",
    location: "Student Financial Services - Cook Admin Bldg (Sample Location)",
    contact: "U-Pass Office | upass@csu.edu | (773) 995-2469 (Sample Contact)",
    url: "https://www.csu.edu/upass/",
    instructions: "Pick up or activate your Ventra U-Pass card at the start of each semester.",
    availability: "Monday – Friday: 9:00 AM – 4:00 PM (Sample Hours)",
    deadline: "First two weeks of semester",
    universityOrCommunity: "Campus Resource",
    updatedAt: "2026-08-01"
  },
  {
    id: "res-career-1",
    institutionId: "csu-chicago",
    title: "Career Development & Student Employment Center",
    category: "career",
    categoryLabel: "Career Support",
    icon: "◇",
    description: "Resume reviews, mock interviews, career fairs, campus job placement, internship matching, and professional clothing closet.",
    tags: ["Career Support", "Employment", "Internships"],
    eligibility: "All active CSU students and recent alumni (Sample Criteria)",
    location: "Career Development Center - Cordell Hull Hall Room 108 (Sample Location)",
    contact: "Career Center | careers@csu.edu | (773) 995-2327 (Sample Contact)",
    url: "https://www.csu.edu/career/",
    instructions: "Create a Handshake account with your CSU email to view jobs and book appointments.",
    availability: "Monday – Friday: 8:30 AM – 5:00 PM (Sample Hours)",
    deadline: "Year-Round Career Counseling",
    universityOrCommunity: "Campus Resource",
    updatedAt: "2026-08-02"
  },
  {
    id: "res-food-2",
    institutionId: "csu-chicago",
    title: "Greater Chicago Food Depository Partner Network",
    category: "food",
    categoryLabel: "Food & Basic Needs",
    icon: "♨",
    description: "Community food distributions, SNAP application assistance, and mobile food pantries operating in the South Side Chicago neighborhood.",
    tags: ["Food Assistance", "Community Pantry", "SNAP Help"],
    eligibility: "CSU students & local Chicago South Side residents (Sample Criteria)",
    location: "Community Partner Sites near CSU Campus (Sample Location)",
    contact: "Community Outreach | community@csu.edu | (312) 243-3663 (Sample Contact)",
    url: "https://www.chicagosfoodbank.org/",
    instructions: "Check community calendar for weekly mobile pantry locations and SNAP assistance hours.",
    availability: "Saturdays & Select Weekdays (Sample Schedule)",
    deadline: "Ongoing Community Program",
    universityOrCommunity: "Community Resource",
    updatedAt: "2026-08-04"
  },
  {
    id: "res-financial-2",
    institutionId: "csu-chicago",
    title: "Financial Literacy & Budget Coaching",
    category: "financial",
    categoryLabel: "Financial Support",
    icon: "$",
    description: "One-on-one financial wellness coaching, student loan counseling, credit score education, and budgeting tools powered by Pathway AI.",
    tags: ["Financial Wellness", "Budgeting", "Credit Education"],
    eligibility: "All Chicago State University students (Sample Criteria)",
    location: "Pathway AI Student Hub & Online (Sample Location)",
    contact: "Financial Wellness | pathway@csu.edu | (773) 995-2000 (Sample Contact)",
    url: "/budget.html",
    instructions: "Access interactive financial tools online anytime or schedule a 1-on-1 coaching session.",
    availability: "Online 24/7 | Coaching Mon-Fri: 9am-4pm (Sample Hours)",
    deadline: "Available anytime",
    universityOrCommunity: "Campus Resource",
    updatedAt: "2026-08-05"
  }
];


// =========================================================
// 2. STATE MANAGEMENT & SAVED RESOURCES STORAGE
// =========================================================

const STORAGE_KEY = 'pathway_csu_saved_resources';

function getSavedResourceIds() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.warn('LocalStorage unavailable:', e);
    return [];
  }
}

function saveResourceId(id) {
  try {
    const list = getSavedResourceIds();
    if (!list.includes(id)) {
      list.push(id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }
  } catch (e) {
    console.warn('Failed to save to localStorage:', e);
  }
}

function removeResourceId(id) {
  try {
    let list = getSavedResourceIds();
    list = list.filter(item => item !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn('Failed to remove from localStorage:', e);
  }
}


// =========================================================
// 3. UI CONTROLLER & EVENT LISTENERS
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  // DOM Elements
  const heroSearchInput = document.getElementById('heroSearchInput');
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  const directorySearchInput = document.getElementById('directorySearchInput');
  const categoryFilterSelect = document.getElementById('categoryFilterSelect');
  const sortSelect = document.getElementById('sortSelect');
  const categoryCards = document.querySelectorAll('.resource-category-card');
  const popularButtons = document.querySelectorAll('.popular-searches button');
  const resourceResultsContainer = document.getElementById('resourceResults');
  const resourceCountEl = document.getElementById('resourceCount');
  const noResultsEl = document.getElementById('noResults');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  // Modal Elements
  const modalOverlay = document.getElementById('resourceModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategoryTag = document.getElementById('modalCategoryTag');
  const modalScopeTag = document.getElementById('modalScopeTag');
  const modalIcon = document.getElementById('modalIcon');
  const modalDescription = document.getElementById('modalDescription');
  const modalEligibility = document.getElementById('modalEligibility');
  const modalLocation = document.getElementById('modalLocation');
  const modalContact = document.getElementById('modalContact');
  const modalAvailability = document.getElementById('modalAvailability');
  const modalInstructions = document.getElementById('modalInstructions');
  const modalDeadline = document.getElementById('modalDeadline');
  const modalUrlLink = document.getElementById('modalUrlLink');
  const modalSaveBtn = document.getElementById('modalSaveBtn');

  // Current Filter State
  let currentState = {
    searchQuery: '',
    category: 'all',
    sort: 'recommended',
    currentModalResourceId: null
  };

  // Render initial list
  renderResources();

  // --- SEARCH HANDLERS ---
  if (heroSearchBtn && heroSearchInput) {
    heroSearchBtn.addEventListener('click', () => {
      currentState.searchQuery = heroSearchInput.value.trim().toLowerCase();
      if (directorySearchInput) directorySearchInput.value = heroSearchInput.value;
      renderResources();
      scrollToDirectory();
    });

    heroSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        currentState.searchQuery = heroSearchInput.value.trim().toLowerCase();
        if (directorySearchInput) directorySearchInput.value = heroSearchInput.value;
        renderResources();
        scrollToDirectory();
      }
    });
  }

  if (directorySearchInput) {
    directorySearchInput.addEventListener('input', (e) => {
      currentState.searchQuery = e.target.value.trim().toLowerCase();
      if (heroSearchInput) heroSearchInput.value = e.target.value;
      renderResources();
    });
  }

  // --- POPULAR CHIPS ---
  popularButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const searchTerm = btn.getAttribute('data-search') || btn.innerText;
      currentState.searchQuery = searchTerm.toLowerCase();
      if (heroSearchInput) heroSearchInput.value = searchTerm;
      if (directorySearchInput) directorySearchInput.value = searchTerm;
      renderResources();
      scrollToDirectory();
    });
  });

  // --- CATEGORY GRID BUTTONS ---
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const selectedCategory = card.getAttribute('data-category');
      currentState.category = selectedCategory;

      // Update Active Button State
      categoryCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      // Sync Category Select Dropdown
      if (categoryFilterSelect) categoryFilterSelect.value = selectedCategory;

      renderResources();
      scrollToDirectory();
    });
  });

  // --- CATEGORY DROPDOWN ---
  if (categoryFilterSelect) {
    categoryFilterSelect.addEventListener('change', (e) => {
      const selectedCategory = e.target.value;
      currentState.category = selectedCategory;

      // Sync Grid Buttons
      categoryCards.forEach(c => {
        if (c.getAttribute('data-category') === selectedCategory) {
          c.classList.add('active');
        } else {
          c.classList.remove('active');
        }
      });

      renderResources();
    });
  }

  // --- SORT DROPDOWN ---
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentState.sort = e.target.value;
      renderResources();
    });
  }

  // --- RESET FILTERS ---
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      currentState = {
        searchQuery: '',
        category: 'all',
        sort: 'recommended',
        currentModalResourceId: null
      };
      if (heroSearchInput) heroSearchInput.value = '';
      if (directorySearchInput) directorySearchInput.value = '';
      if (categoryFilterSelect) categoryFilterSelect.value = 'all';
      if (sortSelect) sortSelect.value = 'recommended';

      categoryCards.forEach(c => {
        if (c.getAttribute('data-category') === 'all') {
          c.classList.add('active');
        } else {
          c.classList.remove('active');
        }
      });

      renderResources();
    });
  }

  // =========================================================
  // 4. FILTERING & RENDERING LOGIC
  // =========================================================

  function renderResources() {
    const savedIds = getSavedResourceIds();

    let filtered = SAMPLE_RESOURCES.filter(item => {
      // Category Filter
      if (currentState.category !== 'all' && item.category !== currentState.category) {
        return false;
      }

      // Keyword Search Filter
      if (currentState.searchQuery) {
        const query = currentState.searchQuery;
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.categoryLabel.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);
        const matchesTags = item.tags.some(tag => tag.toLowerCase().includes(query));
        const matchesScope = item.universityOrCommunity.toLowerCase().includes(query);

        if (!matchesTitle && !matchesDesc && !matchesCategory && !matchesTags && !matchesScope) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    if (currentState.sort === 'az') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (currentState.sort === 'recent') {
      filtered.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }

    // Update Count Display
    if (resourceCountEl) resourceCountEl.textContent = filtered.length;

    // Toggle Empty State vs Results Grid
    if (filtered.length === 0) {
      if (resourceResultsContainer) resourceResultsContainer.style.display = 'none';
      if (noResultsEl) noResultsEl.hidden = false;
    } else {
      if (noResultsEl) noResultsEl.hidden = true;
      if (resourceResultsContainer) {
        resourceResultsContainer.style.display = 'grid';
        resourceResultsContainer.innerHTML = filtered.map(item => {
          const isSaved = savedIds.includes(item.id);
          return createResourceCardHTML(item, isSaved);
        }).join('');

        attachCardEventListeners();
      }
    }
  }

  function createResourceCardHTML(item, isSaved) {
    const heartIcon = isSaved ? '♥' : '♡';
    const savedClass = isSaved ? 'saved' : '';
    const ariaLabel = isSaved ? 'Remove saved resource' : 'Save resource';

    const tagsHTML = item.tags.map(tag => `<span>✓ ${tag}</span>`).join('');

    return `
      <article class="directory-resource-card" data-id="${item.id}" data-category="${item.category}">
        <div class="resource-card-top">
          <div class="large-resource-icon">${item.icon}</div>
          <button class="save-resource ${savedClass}" data-id="${item.id}" aria-label="${ariaLabel}">
            ${heartIcon}
          </button>
        </div>

        <span class="resource-tag">${item.categoryLabel.toUpperCase()}</span>

        <h3>${escapeHTML(item.title)}</h3>

        <p>${escapeHTML(item.description)}</p>

        <div class="resource-details">
          <span>✓ ${item.universityOrCommunity}</span>
          ${tagsHTML}
        </div>

        <button class="resource-details-button view-details-btn" data-id="${item.id}">
          View Resource <span>&rarr;</span>
        </button>
      </article>
    `;
  }

  function attachCardEventListeners() {
    // Save Buttons
    document.querySelectorAll('.save-resource').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const savedIds = getSavedResourceIds();

        if (savedIds.includes(id)) {
          removeResourceId(id);
          btn.classList.remove('saved');
          btn.innerHTML = '♡';
          btn.setAttribute('aria-label', 'Save resource');
        } else {
          saveResourceId(id);
          btn.classList.add('saved');
          btn.innerHTML = '♥';
          btn.setAttribute('aria-label', 'Remove saved resource');
        }
      });
    });

    // View Resource Details Buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openModal(id);
      });
    });
  }

  // =========================================================
  // 5. MODAL DIALOG LOGIC
  // =========================================================

  function openModal(resourceId) {
    const item = SAMPLE_RESOURCES.find(r => r.id === resourceId);
    if (!item || !modalOverlay) return;

    currentState.currentModalResourceId = resourceId;

    // Fill Modal Data
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalCategoryTag) modalCategoryTag.textContent = item.categoryLabel;
    if (modalScopeTag) modalScopeTag.textContent = item.universityOrCommunity;
    if (modalIcon) modalIcon.textContent = item.icon;
    if (modalDescription) modalDescription.textContent = item.description;
    if (modalEligibility) modalEligibility.textContent = item.eligibility;
    if (modalLocation) modalLocation.textContent = item.location;
    if (modalContact) modalContact.textContent = item.contact;
    if (modalAvailability) modalAvailability.textContent = item.availability;
    if (modalInstructions) modalInstructions.textContent = item.instructions;
    if (modalDeadline) modalDeadline.textContent = item.deadline;
    if (modalUrlLink) modalUrlLink.href = item.url;

    // Update Modal Save Button
    const savedIds = getSavedResourceIds();
    const isSaved = savedIds.includes(resourceId);
    updateModalSaveButtonState(isSaved);

    // Display Modal
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentState.currentModalResourceId = null;
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  if (modalSaveBtn) {
    modalSaveBtn.addEventListener('click', () => {
      const id = currentState.currentModalResourceId;
      if (!id) return;

      const savedIds = getSavedResourceIds();
      if (savedIds.includes(id)) {
        removeResourceId(id);
        updateModalSaveButtonState(false);
      } else {
        saveResourceId(id);
        updateModalSaveButtonState(true);
      }
      renderResources();
    });
  }

  function updateModalSaveButtonState(isSaved) {
    if (!modalSaveBtn) return;
    if (isSaved) {
      modalSaveBtn.classList.add('saved');
      modalSaveBtn.innerHTML = '♥ Saved to My Resources';
    } else {
      modalSaveBtn.classList.remove('saved');
      modalSaveBtn.innerHTML = '♡ Save Resource';
    }
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Smooth scroll helper
  function scrollToDirectory() {
    const directoryEl = document.getElementById('resourceDirectory');
    if (directoryEl) {
      directoryEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Escape HTML helper
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

});

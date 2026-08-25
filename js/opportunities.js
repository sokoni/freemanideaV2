/**
 * Pathway AI × Chicago State University
 * Opportunity Hub Engine (opportunities.js)
 * Data-driven opportunity store, multi-criteria filtering, rule-based matching,
 * modal detail view, reminder manager, and saved opportunities.
 */

// =========================================================
// 1. SEED / DEMO OPPORTUNITY DATA (Backend API Schema Ready)
// =========================================================

const SAMPLE_OPPORTUNITIES = [
  {
    id: "opp-scholarship-1",
    institutionId: "csu-chicago",
    title: "CSU Presidential Student Scholarship",
    organization: "Chicago State Foundation",
    description: "Merit-based financial assistance for enrolled Chicago State University undergraduate students demonstrating academic achievement and leadership.",
    type: "scholarship",
    typeLabel: "Scholarship",
    icon: "$",
    tags: ["Scholarship", "Financial Support", "Merit-Based"],
    eligibility: "Full-time CSU undergraduate student with GPA 3.0+ (Sample Criteria)",
    location: "CSU Campus / Financial Aid Office",
    campusOrCommunity: "Campus",
    url: "https://www.csu.edu/financialaid/scholarships/",
    applicationInstructions: "Submit the online CSU Foundation Scholarship application along with your unofficial transcript and a 500-word personal statement.",
    openDate: "2026-08-01",
    deadline: "2026-10-15",
    status: "Open",
    isFeatured: true,
    matchScore: "94%",
    matchReasons: [
      "Matches your academic profile (GPA 3.0+)",
      "Open to full-time undergraduate students",
      "Application is currently open"
    ],
    createdAt: "2026-08-01",
    updatedAt: "2026-08-05"
  },
  {
    id: "opp-job-1",
    institutionId: "csu-chicago",
    title: "Student Technology Assistant (Federal Work-Study)",
    organization: "CSU Information Technology Services",
    description: "Assist campus IT technicians with computer lab maintenance, student tech support, audio/visual setup, and software troubleshooting.",
    type: "job",
    typeLabel: "Campus Job",
    icon: "◇",
    tags: ["Campus Job", "Student Employment", "Technology"],
    eligibility: "Eligible for Federal Work-Study award, registered in 6+ credit hours (Sample Criteria)",
    location: "Douglas Hall IT Center - CSU Campus",
    campusOrCommunity: "Campus",
    url: "https://www.csu.edu/it/",
    applicationInstructions: "Apply through Handshake using your CSU student credentials or drop off your resume at Douglas Hall Room 122.",
    openDate: "2026-08-05",
    deadline: "No deadline provided",
    status: "Open",
    isFeatured: false,
    matchScore: "89%",
    matchReasons: [
      "Matches your career interests in IT & Tech",
      "Flexible schedule around class hours",
      "On-campus location"
    ],
    createdAt: "2026-08-05",
    updatedAt: "2026-08-06"
  },
  {
    id: "opp-intern-1",
    institutionId: "csu-chicago",
    title: "Chicago Innovation Fellowship & Internship",
    organization: "Chicago Corporate Partner Network",
    description: "10-week paid summer internship program in Business Operations, Marketing, Data Science, or Public Policy for rising juniors and seniors.",
    type: "internship",
    typeLabel: "Internship",
    icon: "↗",
    tags: ["Internship", "Paid Opportunity", "Career Development"],
    eligibility: "CSU Junior or Senior standing with GPA 2.8+ (Sample Criteria)",
    location: "Downtown Chicago & Hybrid (Community Partner)",
    campusOrCommunity: "Community",
    url: "https://www.csu.edu/career/",
    applicationInstructions: "Submit your updated resume and cover letter via the CSU Career Center portal.",
    openDate: "2026-08-01",
    deadline: "2026-11-01",
    status: "Open",
    isFeatured: true,
    matchScore: "91%",
    matchReasons: [
      "Matches your career goals & major",
      "Paid hands-on corporate experience",
      "Strong placement record for CSU alumni"
    ],
    createdAt: "2026-08-01",
    updatedAt: "2026-08-04"
  },
  {
    id: "opp-event-1",
    institutionId: "csu-chicago",
    title: "CSU Annual Fall Career & Internship Fair",
    organization: "CSU Career Development Center",
    description: "Connect with over 60 regional employers, healthcare organizations, government agencies, and non-profits seeking CSU students for jobs and internships.",
    type: "career-event",
    typeLabel: "Career Event",
    icon: "◎",
    tags: ["Career Event", "Networking", "Employers"],
    eligibility: "Open to all current CSU students, alumni, and community job seekers (Sample Criteria)",
    location: "Jacoby Dickens Center Gymnasium - CSU Campus",
    campusOrCommunity: "Campus",
    url: "https://www.csu.edu/career/events/",
    applicationInstructions: "Pre-register on Handshake for fast-track entry and to view the full employer list in advance.",
    openDate: "2026-08-10",
    deadline: "2026-09-25",
    status: "Open",
    isFeatured: true,
    matchScore: "87%",
    matchReasons: [
      "Open to all majors & classifications",
      "Direct employer networking",
      "Free professional headshots provided"
    ],
    createdAt: "2026-08-02",
    updatedAt: "2026-08-08"
  },
  {
    id: "opp-cert-1",
    institutionId: "csu-chicago",
    title: "Google Data Analytics Professional Certificate",
    organization: "Pathway AI × Coursera for Campus",
    description: "Self-paced professional certification program teaching SQL, R programming, Tableau, and data visualization. Fully sponsored for CSU students.",
    type: "certification",
    typeLabel: "Certification",
    icon: "✓",
    tags: ["Certification", "Skill Building", "Data Analytics"],
    eligibility: "Active Chicago State University students in good academic standing (Sample Criteria)",
    location: "Online / Self-Paced Access",
    campusOrCommunity: "Campus",
    url: "https://www.coursera.org/",
    applicationInstructions: "Activate your sponsored Coursera account through your CSU student portal link.",
    openDate: "2026-08-01",
    deadline: "No deadline provided",
    status: "Open",
    isFeatured: false,
    matchScore: "84%",
    matchReasons: [
      "No cost for CSU students",
      "Industry-recognized resume credential",
      "Flexible self-paced schedule"
    ],
    createdAt: "2026-08-01",
    updatedAt: "2026-08-02"
  },
  {
    id: "opp-lead-1",
    institutionId: "csu-chicago",
    title: "CSU Student Ambassador & Leadership Institute",
    organization: "Office of Student Affairs",
    description: "Develop executive leadership skills, assist with campus open houses, represent CSU at community events, and receive a term leadership stipend.",
    type: "leadership",
    typeLabel: "Leadership",
    icon: "♟",
    tags: ["Leadership", "Student Ambassador", "Stipend Provided"],
    eligibility: "Sophomores, Juniors, and Seniors with GPA 2.75+ (Sample Criteria)",
    location: "Student Union - Room 204",
    campusOrCommunity: "Campus",
    url: "https://www.csu.edu/studentaffairs/leadership/",
    applicationInstructions: "Complete the online leadership application and schedule a 15-minute peer interview.",
    openDate: "2026-08-01",
    deadline: "2026-09-15",
    status: "Open",
    isFeatured: false,
    matchScore: "86%",
    matchReasons: [
      "Stipend provided upon completion",
      "Builds public speaking & team management skills",
      "Direct university mentorship"
    ],
    createdAt: "2026-08-01",
    updatedAt: "2026-08-03"
  },
  {
    id: "opp-vol-1",
    institutionId: "csu-chicago",
    title: "South Side Youth STEM Mentorship Volunteer",
    organization: "CSU Community Engagement Center",
    description: "Volunteer as a STEM mentor for local Chicago middle school students during Saturday morning robotics and science workshops.",
    type: "volunteer",
    typeLabel: "Volunteer",
    icon: "♡",
    tags: ["Volunteer", "Community Service", "Mentorship"],
    eligibility: "Open to all CSU students interested in community outreach (Sample Criteria)",
    location: "CSU Science Center & Community Centers",
    campusOrCommunity: "Community",
    url: "https://www.csu.edu/community/",
    applicationInstructions: "Register with the Community Engagement Center and attend a brief orientation session.",
    openDate: "2026-08-01",
    deadline: "No deadline provided",
    status: "Open",
    isFeatured: false,
    matchScore: "80%",
    matchReasons: [
      "Flexible weekend commitment",
      "Earn community service hours",
      "Positive neighborhood impact"
    ],
    createdAt: "2026-08-01",
    updatedAt: "2026-08-01"
  },
  {
    id: "opp-scholarship-2",
    institutionId: "csu-chicago",
    title: "STEM & Health Sciences Retention Grant",
    organization: "CSU College of Health Sciences",
    description: "Financial grant designed to offset tuition and textbook costs for biology, nursing, public health, and pre-med majors.",
    type: "scholarship",
    typeLabel: "Scholarship",
    icon: "$",
    tags: ["Scholarship", "STEM", "Health Sciences"],
    eligibility: "Declared Health Sciences or STEM majors with 30+ completed credit hours (Sample Criteria)",
    location: "Business Health Sciences Building Room 104",
    campusOrCommunity: "Campus",
    url: "https://www.csu.edu/healthsciences/",
    applicationInstructions: "Submit academic transcript and letter of intent to the Health Sciences dean's office.",
    openDate: "2026-08-01",
    deadline: "2026-10-30",
    status: "Open",
    isFeatured: false,
    matchScore: "93%",
    matchReasons: [
      "Specific to your field of study",
      "Direct grant toward tuition balance",
      "Renewable for spring term"
    ],
    createdAt: "2026-08-01",
    updatedAt: "2026-08-02"
  }
];


// =========================================================
// 2. STATE STORAGE HELPERS (localStorage integration)
// =========================================================

const SAVED_OPP_KEY = 'pathway_csu_saved_opportunities';
const REMINDERS_OPP_KEY = 'pathway_csu_opportunity_reminders';

function getSavedOpportunityIds() {
  try {
    const data = localStorage.getItem(SAVED_OPP_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.warn('LocalStorage unavailable:', e);
    return [];
  }
}

function saveOpportunityId(id) {
  try {
    const list = getSavedOpportunityIds();
    if (!list.includes(id)) {
      list.push(id);
      localStorage.setItem(SAVED_OPP_KEY, JSON.stringify(list));
    }
  } catch (e) {
    console.warn('Failed to save to localStorage:', e);
  }
}

function removeOpportunityId(id) {
  try {
    let list = getSavedOpportunityIds();
    list = list.filter(item => item !== id);
    localStorage.setItem(SAVED_OPP_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn('Failed to remove from localStorage:', e);
  }
}

function getReminderIds() {
  try {
    const data = localStorage.getItem(REMINDERS_OPP_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function toggleReminderId(id) {
  try {
    let list = getReminderIds();
    if (list.includes(id)) {
      list = list.filter(i => i !== id);
    } else {
      list.push(id);
    }
    localStorage.setItem(REMINDERS_OPP_KEY, JSON.stringify(list));
    return list.includes(id);
  } catch (e) {
    return false;
  }
}


// =========================================================
// 3. UI CONTROLLER & FILTER ENGINE
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  // DOM Elements
  const heroSearchInput = document.getElementById('heroOpportunitySearch');
  const heroSearchButton = document.getElementById('heroSearchButton');
  const directorySearchInput = document.getElementById('opportunitySearch');
  const categoryFilterSelect = document.getElementById('opportunityCategoryFilter');
  const sortSelect = document.getElementById('opportunitySort');
  const categoryButtons = document.querySelectorAll('.opportunity-category');
  const popularButtons = document.querySelectorAll('.popular-opportunity-searches button');
  const filterChips = document.querySelectorAll('.filter-chip');
  const opportunityResultsContainer = document.getElementById('opportunityResults');
  const countDisplay = document.getElementById('opportunityCount');
  const noResultsEl = document.getElementById('opportunityNoResults');
  const clearFiltersBtn = document.getElementById('clearOpportunityFilters');

  // Modal Elements
  const modalOverlay = document.getElementById('opportunityModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalOrg = document.getElementById('modalOrg');
  const modalCategoryTag = document.getElementById('modalCategoryTag');
  const modalScopeTag = document.getElementById('modalScopeTag');
  const modalIcon = document.getElementById('modalIcon');
  const modalDescription = document.getElementById('modalDescription');
  const modalEligibility = document.getElementById('modalEligibility');
  const modalInstructions = document.getElementById('modalInstructions');
  const modalLocation = document.getElementById('modalLocation');
  const modalDeadline = document.getElementById('modalDeadline');
  const modalStatus = document.getElementById('modalStatus');
  const modalMatchScore = document.getElementById('modalMatchScore');
  const modalMatchReasonsList = document.getElementById('modalMatchReasonsList');
  const modalUrlLink = document.getElementById('modalUrlLink');
  const modalSaveBtn = document.getElementById('modalSaveBtn');
  const modalReminderBtn = document.getElementById('modalReminderBtn');

  // State
  let currentState = {
    searchQuery: '',
    category: 'all',
    sort: 'recommended',
    activeChip: null,
    currentModalId: null
  };

  // Render initial list
  renderOpportunities();

  // --- HERO SEARCH HANDLER ---
  if (heroSearchButton && heroSearchInput) {
    heroSearchButton.addEventListener('click', () => {
      currentState.searchQuery = heroSearchInput.value.trim().toLowerCase();
      if (directorySearchInput) directorySearchInput.value = heroSearchInput.value;
      renderOpportunities();
      scrollToDirectory();
    });

    heroSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        currentState.searchQuery = heroSearchInput.value.trim().toLowerCase();
        if (directorySearchInput) directorySearchInput.value = heroSearchInput.value;
        renderOpportunities();
        scrollToDirectory();
      }
    });
  }

  // --- DIRECTORY SEARCH HANDLER ---
  if (directorySearchInput) {
    directorySearchInput.addEventListener('input', (e) => {
      currentState.searchQuery = e.target.value.trim().toLowerCase();
      if (heroSearchInput) heroSearchInput.value = e.target.value;
      renderOpportunities();
    });
  }

  // --- POPULAR EXPLORE CHIPS ---
  popularButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.getAttribute('data-search') || btn.innerText;
      currentState.searchQuery = query.toLowerCase();
      if (heroSearchInput) heroSearchInput.value = query;
      if (directorySearchInput) directorySearchInput.value = query;
      renderOpportunities();
      scrollToDirectory();
    });
  });

  // --- CATEGORY GRID BUTTONS ---
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedCategory = btn.getAttribute('data-category');
      currentState.category = selectedCategory;

      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (categoryFilterSelect) categoryFilterSelect.value = selectedCategory;

      renderOpportunities();
      scrollToDirectory();
    });
  });

  // --- CATEGORY SELECT DROPDOWN ---
  if (categoryFilterSelect) {
    categoryFilterSelect.addEventListener('change', (e) => {
      const selectedCategory = e.target.value;
      currentState.category = selectedCategory;

      categoryButtons.forEach(b => {
        if (b.getAttribute('data-category') === selectedCategory) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      renderOpportunities();
    });
  }

  // --- SORT DROPDOWN ---
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentState.sort = e.target.value;
      renderOpportunities();
    });
  }

  // --- FILTER CHIPS (Open Now, Campus, Community, No Deadline, Recommended) ---
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const chipValue = chip.getAttribute('data-filter') || chip.innerText.trim();

      if (currentState.activeChip === chipValue) {
        currentState.activeChip = null;
        chip.classList.remove('active');
      } else {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentState.activeChip = chipValue;
      }

      renderOpportunities();
    });
  });

  // --- CLEAR FILTERS BUTTON ---
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      currentState = {
        searchQuery: '',
        category: 'all',
        sort: 'recommended',
        activeChip: null,
        currentModalId: null
      };

      if (heroSearchInput) heroSearchInput.value = '';
      if (directorySearchInput) directorySearchInput.value = '';
      if (categoryFilterSelect) categoryFilterSelect.value = 'all';
      if (sortSelect) sortSelect.value = 'recommended';

      categoryButtons.forEach(b => {
        if (b.getAttribute('data-category') === 'all') {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      filterChips.forEach(c => c.classList.remove('active'));

      renderOpportunities();
    });
  }

  // =========================================================
  // 4. RENDERING & FILTERING ENGINE
  // =========================================================

  function renderOpportunities() {
    const savedIds = getSavedResourceIds();

    let filtered = SAMPLE_OPPORTUNITIES.filter(item => {
      // Category Filter
      if (currentState.category !== 'all' && item.type !== currentState.category) {
        return false;
      }

      // Chip Filter
      if (currentState.activeChip) {
        const chip = currentState.activeChip.toLowerCase();
        if (chip.includes('open') && item.status.toLowerCase() !== 'open') return false;
        if (chip.includes('campus') && item.campusOrCommunity.toLowerCase() !== 'campus') return false;
        if (chip.includes('community') && item.campusOrCommunity.toLowerCase() !== 'community') return false;
        if (chip.includes('no deadline') && !item.deadline.toLowerCase().includes('no deadline')) return false;
        if (chip.includes('recommended') && !item.isFeatured) return false;
      }

      // Keyword Search Filter
      if (currentState.searchQuery) {
        const query = currentState.searchQuery;
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesOrg = item.organization.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesType = item.typeLabel.toLowerCase().includes(query) || item.type.toLowerCase().includes(query);
        const matchesTags = item.tags.some(tag => tag.toLowerCase().includes(query));
        const matchesEligibility = item.eligibility.toLowerCase().includes(query);

        if (!matchesTitle && !matchesOrg && !matchesDesc && !matchesType && !matchesTags && !matchesEligibility) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    if (currentState.sort === 'alphabetical') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (currentState.sort === 'newest') {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (currentState.sort === 'deadline') {
      filtered.sort((a, b) => {
        if (a.deadline.includes('No deadline')) return 1;
        if (b.deadline.includes('No deadline')) -1;
        return new Date(a.deadline) - new Date(b.deadline);
      });
    }

    // Update Count Display
    if (countDisplay) countDisplay.textContent = filtered.length;

    // Toggle Empty State vs Results Grid
    if (filtered.length === 0) {
      if (opportunityResultsContainer) opportunityResultsContainer.style.display = 'none';
      if (noResultsEl) noResultsEl.hidden = false;
    } else {
      if (noResultsEl) noResultsEl.hidden = true;
      if (opportunityResultsContainer) {
        opportunityResultsContainer.style.display = 'grid';
        opportunityResultsContainer.innerHTML = filtered.map(item => {
          const isSaved = savedIds.includes(item.id);
          return createOpportunityCardHTML(item, isSaved);
        }).join('');

        attachCardEventListeners();
      }
    }
  }

  function createOpportunityCardHTML(item, isSaved) {
    const heartIcon = isSaved ? '♥' : '♡';
    const savedClass = isSaved ? 'saved' : '';
    const ariaLabel = isSaved ? 'Remove saved opportunity' : 'Save opportunity';

    const featuredClass = item.isFeatured ? 'featured-opportunity' : '';
    const recommendedBadge = item.isFeatured ? `<span class="recommended-badge">Match Score ${item.matchScore}</span>` : '';

    return `
      <article class="hub-opportunity-card ${featuredClass}" data-id="${item.id}" data-category="${item.type}">
        <div class="opportunity-card-header">
          <span class="hub-opportunity-icon">${item.icon}</span>
          <button class="save-opportunity ${savedClass}" data-id="${item.id}" aria-label="${ariaLabel}">
            ${heartIcon}
          </button>
        </div>

        <div class="opportunity-label-row">
          <span class="hub-opportunity-tag">${item.typeLabel.toUpperCase()}</span>
          ${recommendedBadge}
        </div>

        <h3>${escapeHTML(item.title)}</h3>
        <p class="opportunity-org-label">${escapeHTML(item.organization)}</p>
        <p>${escapeHTML(item.description)}</p>

        <div class="opportunity-meta">
          <div>
            <small>TYPE</small>
            <strong>${escapeHTML(item.typeLabel)}</strong>
          </div>
          <div>
            <small>DEADLINE</small>
            <strong>${escapeHTML(item.deadline)}</strong>
          </div>
        </div>

        <div class="opportunity-card-footer">
          <button class="view-opportunity view-details-btn" data-id="${item.id}">
            View Opportunity
          </button>
          <button class="quick-save ${savedClass}" data-id="${item.id}" aria-label="${ariaLabel}">
            ${heartIcon}
          </button>
        </div>
      </article>
    `;
  }

  function attachCardEventListeners() {
    // Save Buttons
    document.querySelectorAll('.save-opportunity, .quick-save').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const savedIds = getSavedResourceIds();

        if (savedIds.includes(id)) {
          removeOpportunityId(id);
        } else {
          saveOpportunityId(id);
        }
        renderOpportunities();
      });
    });

    // View Details Buttons
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

  function openModal(opportunityId) {
    const item = SAMPLE_OPPORTUNITIES.find(o => o.id === opportunityId);
    if (!item || !modalOverlay) return;

    currentState.currentModalId = opportunityId;

    if (modalTitle) modalTitle.textContent = item.title;
    if (modalOrg) modalOrg.textContent = item.organization;
    if (modalCategoryTag) modalCategoryTag.textContent = item.typeLabel;
    if (modalScopeTag) modalScopeTag.textContent = item.campusOrCommunity;
    if (modalIcon) modalIcon.textContent = item.icon;
    if (modalDescription) modalDescription.textContent = item.description;
    if (modalEligibility) modalEligibility.textContent = item.eligibility;
    if (modalInstructions) modalInstructions.textContent = item.applicationInstructions;
    if (modalLocation) modalLocation.textContent = item.location;
    if (modalDeadline) modalDeadline.textContent = item.deadline;
    if (modalStatus) modalStatus.textContent = item.status;
    if (modalMatchScore) modalMatchScore.textContent = item.matchScore;
    if (modalUrlLink) modalUrlLink.href = item.url;

    // Match Reasons List
    if (modalMatchReasonsList) {
      modalMatchReasonsList.innerHTML = item.matchReasons.map(reason => `<li>✓ ${escapeHTML(reason)}</li>`).join('');
    }

    // Save & Reminder Button States
    const savedIds = getSavedResourceIds();
    const isSaved = savedIds.includes(opportunityId);
    updateModalSaveButton(isSaved);

    const reminderIds = getReminderIds();
    const isReminder = reminderIds.includes(opportunityId);
    updateModalReminderButton(isReminder);

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
    currentState.currentModalId = null;
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  if (modalSaveBtn) {
    modalSaveBtn.addEventListener('click', () => {
      const id = currentState.currentModalId;
      if (!id) return;

      const savedIds = getSavedResourceIds();
      if (savedIds.includes(id)) {
        removeOpportunityId(id);
        updateModalSaveButton(false);
      } else {
        saveOpportunityId(id);
        updateModalSaveButton(true);
      }
      renderOpportunities();
    });
  }

  if (modalReminderBtn) {
    modalReminderBtn.addEventListener('click', () => {
      const id = currentState.currentModalId;
      if (!id) return;

      const isSet = toggleReminderId(id);
      updateModalReminderButton(isSet);
    });
  }

  function updateModalSaveButton(isSaved) {
    if (!modalSaveBtn) return;
    if (isSaved) {
      modalSaveBtn.classList.add('saved');
      modalSaveBtn.innerHTML = '♥ Saved to My Opportunities';
    } else {
      modalSaveBtn.classList.remove('saved');
      modalSaveBtn.innerHTML = '♡ Save Opportunity';
    }
  }

  function updateModalReminderButton(isReminder) {
    if (!modalReminderBtn) return;
    if (isReminder) {
      modalReminderBtn.classList.add('active-reminder');
      modalReminderBtn.innerHTML = '🔔 Reminder Set';
    } else {
      modalReminderBtn.classList.remove('active-reminder');
      modalReminderBtn.innerHTML = '🔔 Set Reminder';
    }
  }

  // Close modal on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  function scrollToDirectory() {
    const directoryEl = document.getElementById('opportunity-directory');
    if (directoryEl) directoryEl.scrollIntoView({ behavior: 'smooth' });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

});

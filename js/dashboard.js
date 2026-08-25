/**
 * Pathway AI × Chicago State University
 * Dashboard page — mobile sidebar toggle
 */

document.addEventListener('DOMContentLoaded', () => {

  const sidebar = document.getElementById('dashboard-sidebar');
  const toggle = document.getElementById('sidebar-toggle');
  const backdrop = document.getElementById('dashboard-backdrop');

  function openSidebar() {
    sidebar.classList.add('open');
    backdrop.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    backdrop.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = sidebar.classList.contains('open');
      if (isOpen) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeSidebar);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });

});

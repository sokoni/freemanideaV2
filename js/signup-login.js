/**
 * Pathway AI × Chicago State University
 * Sign Up / Log In page — password visibility toggles + mode switch
 */

document.addEventListener('DOMContentLoaded', () => {

  // Password visibility toggles
  document.querySelectorAll('.password-toggle').forEach((button) => {
    const targetId = button.getAttribute('data-target');
    const input = document.getElementById(targetId);
    const eyeIcon = button.querySelector('.icon-eye');
    const eyeOffIcon = button.querySelector('.icon-eye-off');

    button.addEventListener('click', () => {
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      eyeIcon.classList.toggle('is-hidden', show);
      eyeOffIcon.classList.toggle('is-hidden', !show);
      button.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    });
  });

  // Sign up / Log in mode switch
  const page = document.querySelector('.auth-page');
  const modeToggle = document.getElementById('mode-toggle');
  const brandHeading = document.getElementById('brand-heading');
  const brandCopy = document.getElementById('brand-copy');
  const formHeading = document.getElementById('form-heading');
  const switchQuestion = document.getElementById('switch-question');
  const switchLabel = document.getElementById('switch-label');
  const switchArrow = document.querySelector('.switch-arrow');
  const dividerLabel = document.getElementById('divider-label');
  const signupForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');
  const brandPanel = document.querySelector('.auth-brand-panel');
  const formPanel = document.querySelector('.auth-form-panel');

  const copy = {
    signup: {
      brandHeading: 'Create Your Account',
      brandCopy: 'Start your journey to financial wellness and success.',
      formHeading: "Let's get started!",
      question: 'Already have an account?',
      label: 'Sign in here',
      divider: 'Sign up with'
    },
    login: {
      brandHeading: 'Welcome Back!',
      brandCopy: 'Log in to continue your journey to financial wellness.',
      formHeading: 'Log in to your account',
      question: "Don't have an account?",
      label: 'Sign up here',
      divider: 'Log in with'
    }
  };

  function setMode(mode) {
    const text = copy[mode];

    page.classList.toggle('mode-login', mode === 'login');
    switchArrow.classList.toggle('is-flipped', mode === 'login');
    brandPanel.classList.toggle('is-swapped', mode === 'login');
    formPanel.classList.toggle('is-swapped', mode === 'login');

    brandHeading.textContent = text.brandHeading;
    brandCopy.textContent = text.brandCopy;
    formHeading.textContent = text.formHeading;
    switchQuestion.textContent = text.question;
    switchLabel.textContent = text.label;
    dividerLabel.textContent = text.divider;

    signupForm.classList.toggle('is-hidden', mode !== 'signup');
    loginForm.classList.toggle('is-hidden', mode !== 'login');

    modeToggle.setAttribute('aria-label', mode === 'signup' ? 'Switch to log in' : 'Switch to sign up');
  }

  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      const nextMode = page.classList.contains('mode-login') ? 'signup' : 'login';
      setMode(nextMode);
    });
  }

  // Prevent actual submission (no backend)
  [signupForm, loginForm].forEach((form) => {
    if (form) {
      form.addEventListener('submit', (e) => e.preventDefault());
    }
  });

});

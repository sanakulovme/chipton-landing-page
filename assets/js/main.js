(function () {
  "use strict";

  // ===== wow js
  new WOW().init();

  /* ========  themeSwitcher start ========= */

  // themeSwitcher
  // const themeSwitcher = document.getElementById('themeSwitcher');

  // // Theme Vars
  // const userTheme = localStorage.getItem('theme');
  // const systemTheme = window.matchMedia('(prefers-color0scheme: dark)').matches;

  // // Initial Theme Check
  // const themeCheck = () => {
  //   if (userTheme === 'dark' || (!userTheme && systemTheme)) {
  //     document.documentElement.classList.add('dark');
  //     return;
  //   }
  // };

  // Manual Theme Switch
  // const themeSwitch = () => {
  //   if (document.documentElement.classList.contains('dark')) {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('theme', 'light');
  //     return;
  //   }

  //   document.documentElement.classList.add('dark');
  //   localStorage.setItem('theme', 'dark');
  // };

  // // call theme switch on clicking buttons
  // themeSwitcher.addEventListener('click', () => {
  //   themeSwitch();
  // });

  // // invoke theme check on initial load
  // themeCheck();
  /* ========  themeSwitcher End ========= */
})();

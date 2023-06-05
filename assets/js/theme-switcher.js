document.addEventListener('DOMContentLoaded', function() {
    var themeSwitcher = document.getElementById('theme-switcher');
    var icons = document.getElementById('icons');
    var moonIcon = document.getElementById('moon-icon');
    var sunIcon = document.getElementById('sun-icon');
    var body = document.body;
  
    themeSwitcher.addEventListener('mousedown', function() {
      setTimeout(function() {
        var isDarkMode = body.getAttribute('data-theme') === 'dark';
  
        if (isDarkMode) {
          body.setAttribute('data-theme', 'light');
          sunIcon.style.display = 'inline';
          moonIcon.style.display = 'none';
        } else {
          body.setAttribute('data-theme', 'dark');
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'inline';
        }
      }, 100);
    });
  });
  
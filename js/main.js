
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs');
  const panels = document.querySelectorAll('.planning');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selectedDay = tab.getAttribute('data-day');

      tabs.forEach((btn) => btn.classList.remove('active'));
      panels.forEach((panel) => panel.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(selectedDay);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
});
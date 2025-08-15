
// Gentle entrance animation on scroll for cards
document.addEventListener('scroll', () => {
  const items = document.querySelectorAll('.card, .p-4');
  const trigger = window.innerHeight * 0.9;
  items.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) el.classList.add('page-fade-in');
  });
});

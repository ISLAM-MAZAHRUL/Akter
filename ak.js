function show(id) {
  // সব পেজ লুকানো
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));

  // যে পেজে ক্লিক করা হয়েছে সেটি দেখানো
  const targetPage = document.getElementById(id);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // স্কিল অ্যানিমেশন
  const skills = document.querySelectorAll('.skill-fill');
  if (id === 'skills') {
    setTimeout(() => {
      skills.forEach(s => {
        s.style.width = s.dataset.w + '%';
      });
    }, 200);
  } else {
    skills.forEach(s => s.style.width = '0');
  }

  // স্ক্রল টপে নেওয়া
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

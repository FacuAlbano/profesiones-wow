(async function() {
  // Skip if we're on the support page (it has its own controller)
  if (window.location.pathname === '/support.html') {
    return;
  }

  // Enhanced supporter detection - check both cookie and actual ad-free status
  const hasCookie = document.cookie.includes('vip_pass=');
  const adsVisible = document.querySelector('.ad-related') !== null;
  
  const isActiveSupporter = hasCookie && !adsVisible;  // Cookie + no ads = active subscription
  const isExpiredSupporter = hasCookie && adsVisible; // Cookie + ads = expired/cancelled subscription

  if (isActiveSupporter) {
    // Hide global "Go Ad Free" elements for active supporters
    const elementsToHide = document.querySelectorAll('.hide-for-supporters-global');
    elementsToHide.forEach(element => {
      element.style.display = 'none';
    });
    
    // Show global supporter elements
    const elementsToShow = document.querySelectorAll('.show-for-supporters-global');
    elementsToShow.forEach(element => {
      element.style.display = 'block';
    });

    // Hide the "Go Ad-Free" button since they're already active
    const adFreeBtn = document.getElementById('go-ad-free-btn-container');
    if (adFreeBtn) adFreeBtn.style.display = 'none';
    
  } else if (isExpiredSupporter) {
    // Expired supporters: show "Go Ad-Free" button so they can resubscribe
    const adFreeBtn = document.getElementById('go-ad-free-btn-container');
    if (adFreeBtn) {
      adFreeBtn.style.display = 'block';
      // Could update button text to "Reactivate Subscription" here if needed
    }
    
  } else {
    // No cookie - regular user: show "Go Ad-Free" button
    const adFreeBtn = document.getElementById('go-ad-free-btn-container');
    if (adFreeBtn) adFreeBtn.style.display = 'block';
  }
})();
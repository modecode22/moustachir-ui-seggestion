
export const setupAnimations = () => {
  // Function to check if an element is in viewport
  const isInViewport = (element: Element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
      rect.bottom >= 0
    );
  };

  // Function to handle scroll animations
  const handleScrollAnimation = () => {
    const elements = document.querySelectorAll('.appear-animation');
    
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('active');
      }
    });
  };

  // Add event listener for scroll
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Initial check on page load
  setTimeout(handleScrollAnimation, 100);

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScrollAnimation);
  };
};

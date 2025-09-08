/**
 * Mashinc Realty - Main JavaScript
 * 
 * This file handles:
 * - Mobile navigation toggle
 * - Smooth scrolling for anchor links
 * - Form validation and submission
 * - Intersection Observer for scroll animations
 * - Property listing interactions
 * - Performance optimizations
 */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize all app functionality
function initializeApp() {
    initMobileNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initFormHandling();
    initPropertyInteractions();
    initPerformanceOptimizations();
}

// Mobile Navigation Toggle
function initMobileNavigation() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
            
            // Update aria-expanded
            const isExpanded = !mobileMenu.classList.contains('hidden');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        }
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Form Handling and Validation
function initFormHandling() {
    const contactForm = document.getElementById('contact-form');
    const propertyInquiryForms = document.querySelectorAll('.property-inquiry-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    propertyInquiryForms.forEach(form => {
        form.addEventListener('submit', handlePropertyInquiry);
    });
}

// Handle contact form submission
function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Basic client-side validation
    if (!validateForm(form)) {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
        return;
    }
    
    // Submit to Formspree (you'll need to add your Formspree endpoint)
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            showFormSuccess();
            form.reset();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        showFormError();
        console.error('Form submission error:', error);
    })
    .finally(() => {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    });
}

// Handle property inquiry forms
function handlePropertyInquiry(e) {
    e.preventDefault();
    
    const form = e.target;
    const propertyTitle = form.dataset.propertyTitle || 'Property Inquiry';
    
    // Pre-fill contact form with property information
    const contactPage = window.location.origin + '/contact.html';
    const subject = encodeURIComponent(`Inquiry about: ${propertyTitle}`);
    
    // Redirect to contact page with pre-filled subject
    window.location.href = `${contactPage}?subject=${subject}`;
}

// Form validation
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else {
            clearFieldError(field);
        }
    });
    
    // Email validation
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            showFieldError(emailField, 'Please enter a valid email address');
            isValid = false;
        }
    }
    
    // Phone validation
    const phoneField = form.querySelector('input[type="tel"]');
    if (phoneField && phoneField.value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(phoneField.value.replace(/\s/g, ''))) {
            showFieldError(phoneField, 'Please enter a valid phone number');
            isValid = false;
        }
    }
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    clearFieldError(field);
    
    field.classList.add('border-red-500');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    errorDiv.setAttribute('data-error-for', field.name);
    
    field.parentNode.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(field) {
    field.classList.remove('border-red-500');
    const existingError = field.parentNode.querySelector(`[data-error-for="${field.name}"]`);
    if (existingError) {
        existingError.remove();
    }
}

// Show form success message
function showFormSuccess() {
    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
}

// Show form error message
function showFormError() {
    showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Property Listing Interactions
function initPropertyInteractions() {
    // Property card hover effects
    const propertyCards = document.querySelectorAll('.property-card');
    
    propertyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('scale-105');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('scale-105');
        });
    });
    
    // Property image carousel (if implemented)
    initPropertyCarousels();
}

// Initialize property image carousels
function initPropertyCarousels() {
    const carousels = document.querySelectorAll('.property-carousel');
    
    carousels.forEach(carousel => {
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const images = carousel.querySelectorAll('.carousel-image');
        let currentIndex = 0;
        
        if (prevBtn && nextBtn && images.length > 1) {
            prevBtn.addEventListener('click', () => {
                currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                updateCarousel(images, currentIndex);
            });
            
            nextBtn.addEventListener('click', () => {
                currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                updateCarousel(images, currentIndex);
            });
        }
    });
}

// Update carousel display
function updateCarousel(images, activeIndex) {
    images.forEach((image, index) => {
        image.classList.toggle('hidden', index !== activeIndex);
    });
}

// Performance Optimizations
function initPerformanceOptimizations() {
    // Lazy load images that aren't already lazy loaded
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(handleScroll, 16); // ~60fps
    });
}

// Handle scroll events
function handleScroll() {
    // Navbar background change disabled - keeping fixed dark background
    // const scrolled = window.scrollY;
    // const navbar = document.querySelector('nav');
    
    // if (navbar) {
    //     if (scrolled > 100) {
    //         navbar.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-md');
    //     } else {
    //         navbar.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-md');
    //     }
    // }
}

// Utility function to handle URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Pre-fill contact form if subject parameter exists
window.addEventListener('load', function() {
    const subject = getUrlParameter('subject');
    const subjectField = document.getElementById('subject');
    
    if (subject && subjectField) {
        subjectField.value = decodeURIComponent(subject);
    }
});

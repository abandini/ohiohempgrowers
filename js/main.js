document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked answer if it wasn't active
            if (!isActive) {
                answer.classList.add('active');
            }
        });
    });
    
    // Form validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let valid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value.trim())) {
                    valid = false;
                    emailField.classList.add('error');
                }
            }
            
            if (valid) {
                // Get form data
                const formData = new FormData(contactForm);
                
                // Submit to Getform
                fetch('https://getform.io/f/bolmoqya', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        // Redirect to thank you page on success
                        window.location.href = '/thank-you.html';
                    } else {
                        alert('There was a problem submitting the form. Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was a problem submitting the form. Please try again later.');
                });
            } else {
                // Display error message
                alert('Please fill in all required fields correctly.');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('open')) {
                    nav.classList.remove('open');
                }
            }
        });
    });
    
    // Testimonial slider (simple version)
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
    }
    
    if (testimonialItems.length > 0) {
        // Initialize
        showTestimonial(currentTestimonial);
        
        // Auto rotate
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
    
    // Initialize any interactive maps
    const mapContainer = document.getElementById('ohio-map');
    
    if (mapContainer && window.google && window.google.maps) {
        // Center on Ohio
        const ohioCenter = { lat: 40.4173, lng: -82.9071 };
        
        const map = new google.maps.Map(mapContainer, {
            zoom: 7,
            center: ohioCenter,
            styles: [
                {
                    featureType: 'administrative',
                    elementType: 'geometry',
                    stylers: [{ visibility: 'on' }]
                },
                {
                    featureType: 'administrative.province',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#2C5F2D' }, { weight: 1.5 }]
                },
                {
                    featureType: 'landscape',
                    elementType: 'all',
                    stylers: [{ color: '#f2f2f2' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'all',
                    stylers: [{ visibility: 'off' }]
                },
                {
                    featureType: 'road',
                    elementType: 'all',
                    stylers: [{ saturation: -100 }, { lightness: 45 }]
                },
                {
                    featureType: 'transit',
                    elementType: 'all',
                    stylers: [{ visibility: 'off' }]
                },
                {
                    featureType: 'water',
                    elementType: 'all',
                    stylers: [{ color: '#46bcec' }, { visibility: 'on' }]
                }
            ]
        });
        
        // You could add markers for growing regions or processors here
        // Example:
        // const markers = [
        //     { position: { lat: 41.4822, lng: -81.6697 }, title: 'Cleveland Hemp Processing' },
        //     { position: { lat: 39.9612, lng: -82.9988 }, title: 'Columbus Hemp Farm' }
        // ];
        
        // markers.forEach(markerInfo => {
        //     new google.maps.Marker({
        //         position: markerInfo.position,
        //         map,
        //         title: markerInfo.title
        //     });
        // });
    }
});

// Handle thank you page redirect after form submission
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Check for success parameter and redirect if needed
if (getUrlParameter('success') === 'true' && !window.location.pathname.includes('thank-you')) {
    window.location.href = '/thank-you.html';
}

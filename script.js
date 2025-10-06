// JavaScript para Ventanitas del Sabor
document.addEventListener('DOMContentLoaded', function() {
    
    // Variables globales
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Reset hamburger animation
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.menu-category, .menu-item, .contact-grid > div');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Menu item hover effects
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add loading animation to page
    document.body.classList.add('loading');
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Animated counter for prices (if needed)
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            element.textContent = '$' + current.toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple effect CSS
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .nav-link.active {
            color: var(--primary-color);
        }
        
        .nav-link.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
    
    // Active navigation link highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Add typing effect to hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Initialize typing effect
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 150);
        }, 500);
    }
    
    // Add floating animation to food emojis
    const foodEmojis = document.querySelectorAll('.pizza-slice, .burger, .pasta');
    foodEmojis.forEach((emoji, index) => {
        emoji.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Add stagger animation to menu items
    const staggerMenuItems = () => {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    };
    
    // Trigger stagger animation when menu section is visible
    const menuSection = document.querySelector('.menu-section');
    if (menuSection) {
        const menuObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    staggerMenuItems();
                    menuObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        menuObserver.observe(menuSection);
    }
    
    // Add contact form validation (if needed)
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add form submission logic here
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.textContent = 'Enviado ✓';
                submitBtn.style.background = '#28a745';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 2000);
            }, 1500);
        });
    });
    
    
    // Add lazy loading for images (if any are added later)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(() => {
        updateActiveNavLink();
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // Menu filtering and search system
    initializeMenuFilters();
    
    console.log('Ventanitas del Sabor - Página cargada exitosamente! 🍕');
});

// Menu filtering and search functionality
function initializeMenuFilters() {
    const searchInput = document.getElementById('menuSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
    const menuItems = document.querySelectorAll('.menu-item');
    const resultsCount = document.getElementById('resultsCount');
    
    let currentFilter = 'all';
    let currentSearch = '';
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        currentSearch = this.value.toLowerCase().trim();
        filterMenu();
    });
    
    // Filter buttons functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-category');
            filterMenu();
        });
    });
    
    function filterMenu() {
        let visibleItems = 0;
        let visibleCategories = 0;
        
        menuCategories.forEach(category => {
            const categoryType = category.getAttribute('data-category');
            const categoryItems = category.querySelectorAll('.menu-item');
            let categoryHasVisibleItems = false;
            
            categoryItems.forEach(item => {
                const itemContent = item.textContent.toLowerCase();
                const shouldShow = shouldShowItem(categoryType, itemContent);
                
                if (shouldShow) {
                    item.classList.remove('hidden');
                    categoryHasVisibleItems = true;
                    visibleItems++;
                } else {
                    item.classList.add('hidden');
                }
            });
            
            // Show/hide category based on visible items
            if (categoryHasVisibleItems) {
                category.classList.remove('hidden');
                visibleCategories++;
            } else {
                category.classList.add('hidden');
            }
        });
        
        updateResultsInfo(visibleItems, visibleCategories);
    }
    
    function shouldShowItem(categoryType, itemContent) {
        // Check category filter
        const categoryMatch = currentFilter === 'all' || categoryType === currentFilter;
        
        // Check search filter
        let searchMatch = true;
        if (currentSearch) {
            // Exact search for specific terms
            const exactMatches = [
                'queso', 'jamón', 'salami', 'pollo', 'champiñones',
                'hamburguesa', 'brusqueta', 'pasta', 'lasagna', 'maizito',
                'carbonara', 'alfredo', 'bolognesa', 'bbq', 'mexicana',
                'hawaina', 'pepperoni', 'vegetales', 'artesanal'
            ];
            
            // Check for exact matches first
            const hasExactMatch = exactMatches.some(term => 
                itemContent.includes(term) && currentSearch.includes(term)
            );
            
            // Check for price search
            const priceMatch = currentSearch.match(/\d+/) && 
                itemContent.includes(currentSearch.replace(/[^\d]/g, ''));
            
            // Check for partial content match
            const contentMatch = itemContent.includes(currentSearch);
            
            searchMatch = hasExactMatch || priceMatch || contentMatch;
        }
        
        return categoryMatch && searchMatch;
    }
    
    function updateResultsInfo(itemCount, categoryCount) {
        let message = '';
        
        if (currentSearch && currentFilter !== 'all') {
            message = `Mostrando ${itemCount} platos de ${getCategoryName(currentFilter)} que coinciden con "${currentSearch}"`;
        } else if (currentSearch) {
            message = `Mostrando ${itemCount} platos que coinciden con "${currentSearch}"`;
        } else if (currentFilter !== 'all') {
            message = `Mostrando ${itemCount} platos de ${getCategoryName(currentFilter)}`;
        } else {
            message = `Mostrando todos los ${itemCount} platos`;
        }
        
        resultsCount.textContent = message;
    }
    
    function getCategoryName(category) {
        const names = {
            'menu-dia': 'Menú del Día',
            'pastas': 'Pastas',
            'asados': 'Asados',
            'pizzas': 'Pizzas',
            'lasagnas': 'Lasagnas',
            'maizitos': 'Maizitos'
        };
        return names[category] || category;
    }
    
    // Clear search when clicking "Todos"
    document.querySelector('[data-category="all"]').addEventListener('click', function() {
        searchInput.value = '';
        currentSearch = '';
    });
    
    // Add search suggestions
    const searchSuggestions = [
        'pizza queso', 'hamburguesa', 'pasta carbonara', 'pizza hawaina',
        'lasagna', 'maizitos', '13000', '17000', '23000'
    ];
    
    searchInput.addEventListener('focus', function() {
        if (!this.value) {
            this.placeholder = 'Ejemplos: pizza queso, hamburguesa, 13000...';
        }
    });
    
    searchInput.addEventListener('blur', function() {
        this.placeholder = 'Buscar platos, ingredientes o precios...';
    });
}

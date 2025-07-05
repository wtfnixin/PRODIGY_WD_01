function createParticles() {
            const bgAnimation = document.querySelector('.bg-animation');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                bgAnimation.appendChild(particle);
            }
        }

        // Scroll-triggered animations
        function handleScrollAnimations() {
            const elements = document.querySelectorAll('.section, .feature-card, .stat-item');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        // Navbar scroll effect
        function handleNavbarScroll() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Smooth scrolling for navigation links
        function initSmoothScroll() {
            const links = document.querySelectorAll('a[href^="#"]');
            
            links.forEach(link => {
                link.addEventListener('click', function(e) {
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

        // Counter animation for stats
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            
            counters.forEach(counter => {
                const target = parseInt(counter.textContent);
                const isPercentage = counter.textContent.includes('%');
                const isPlusSign = counter.textContent.includes('+');
                const isSlash = counter.textContent.includes('/');
                
                let current = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    
                    let displayValue = Math.floor(current);
                    if (isPercentage) displayValue += '%';
                    if (isPlusSign) displayValue += '+';
                    if (isSlash) displayValue += '/7';
                    
                    counter.textContent = displayValue;
                }, 20);
            });
        }

        // Initialize everything
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            initSmoothScroll();
            handleScrollAnimations();
            handleNavbarScroll();
            
            // Animate counters when they become visible
            const statsSection = document.querySelector('.stats');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        observer.disconnect();
                    }
                });
            });
            observer.observe(statsSection);
        });

        // Add scroll event listeners
        window.addEventListener('scroll', () => {
            handleScrollAnimations();
            handleNavbarScrol
            l();
        });

        // Add button click handlers
        document.querySelectorAll('.cta-button, .toggle-button').forEach(button => {
            button.addEventListener('click', function() {
                // Add ripple effect
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
                
                // Simulate action
                console.log('Button clicked:', this.textContent);
            });
        });
// Script para o site "Os Maridos"
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const heroSubmit = document.getElementById('hero-submit');
    const contactSubmit = document.getElementById('contact-submit');
    const confirmationModal = document.getElementById('confirmation-modal');
    const closeModal = document.getElementById('close-modal');
    
    // Toggle do menu mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Fechar menu mobile ao clicar em um link
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Mostrar modal de confirmação ao enviar formulário
    if (heroSubmit) {
        heroSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            showConfirmationModal();
        });
    }
    
    if (contactSubmit) {
        contactSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            showConfirmationModal();
        });
    }
    
    // Fechar modal de confirmação
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            confirmationModal.classList.add('hidden');
        });
    }
    
    // Função para mostrar o modal de confirmação
    function showConfirmationModal() {
        confirmationModal.classList.remove('hidden');
    }
    
    // Animação de elementos ao scroll
    const animatedElements = document.querySelectorAll('.animate-fadeIn');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
            }
        });
    }
    
    // Verificar elementos visíveis na carga inicial
    checkScroll();
    
    // Verificar elementos visíveis ao scroll
    window.addEventListener('scroll', checkScroll);
    
    // Scroll suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mudar estilo do menu ao rolar
    const nav = document.querySelector('nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            nav.classList.add('bg-blue-700');
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('bg-blue-700');
            nav.classList.remove('shadow-lg');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Validação básica de formulário
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '' && this.hasAttribute('required')) {
                    this.classList.add('border-red-500');
                } else {
                    this.classList.remove('border-red-500');
                }
            });
        });
    });
});

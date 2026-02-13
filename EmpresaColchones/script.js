// Script para la página de colchones
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada');
    
    // 1. MENÚ HAMBURGUESA
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    hamburger.setAttribute('aria-label', 'Menú');
    
    const nav = document.querySelector('nav');
    const navList = document.querySelector('nav ul');
    
    // Insertar hamburguesa antes del nav
    nav.parentNode.insertBefore(hamburger, nav);
    
    // Toggle del menú
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // 2. BOTÓN TEMA OSCURO
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    themeToggle.title = 'Cambiar tema';
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
    
    // 3. Marcar enlace activo
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // 4. Botones de compra
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent.includes('Comprar')) {
                e.preventDefault();
                alert('Producto agregado al carrito');
                
                // Animación
                const originalText = this.textContent;
                this.textContent = '¡Agregado!';
                this.style.backgroundColor = '#27ae60';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.backgroundColor = '';
                }, 2000);
            }
        });
    });
    
    // 5. Formularios
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const required = this.querySelectorAll('[required]');
            let valid = true;
            
            required.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.style.borderColor = 'red';
                }
            });
            
            if (!valid) {
                alert('Completa los campos requeridos');
                return;
            }
            
            // Mostrar éxito
            const success = document.createElement('div');
            success.style.cssText = `
                background: #d4edda;
                color: #155724;
                padding: 15px;
                margin-top: 20px;
                border-radius: 5px;
                border: 1px solid #c3e6cb;
            `;
            success.innerHTML = '<strong>¡Éxito!</strong> Mensaje enviado.';
            
            this.appendChild(success);
            this.reset();
            
            setTimeout(() => success.remove(), 5000);
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    function setActiveNav(currentId) {
        navItems.forEach(item => {
            const link = item.querySelector('a');
            const icon = item.querySelector('p');
            const sectionName = link.textContent.trim().toLowerCase().replace(/\s+/g, '-');

            if (sectionName === currentId) {
                item.classList.add('active');
                icon.classList.remove('d-none');
                link.classList.add('d-none');
            } else {
                item.classList.remove('active');
                icon.classList.add('d-none');
                link.classList.remove('d-none');
            }
        });
    }

    function onScroll() {
        let currentId = '';
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            const offsetTop = section.offsetTop;
            const offsetBottom = offsetTop + section.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                currentId = section.id.toLowerCase();
            }
        });

        if (currentId) {
            setActiveNav(currentId);
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // run on page load
});

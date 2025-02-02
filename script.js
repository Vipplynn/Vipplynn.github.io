document.querySelectorAll('.box ul li').forEach(item => {
    item.addEventListener('mouseover', () => {
        const imageSrc = item.getAttribute('data-image');
        const imageAlt = item.getAttribute('data-alt');
        const projectImage = document.getElementById('project-image');
        const hideContainer = document.querySelector('.hide');

        if (imageSrc) {
            projectImage.src = imageSrc;
            projectImage.alt = imageAlt || "Project Screenshot";
            hideContainer.classList.add('show'); // Add show class for fade-in
        }
    });

    item.addEventListener('mouseout', () => {
        const hideContainer = document.querySelector('.hide');
        hideContainer.classList.remove('show'); // Remove show class for fade-out
    });
});

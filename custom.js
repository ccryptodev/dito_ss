
<script>

document.addEventListener("DOMContentLoaded", function () {
    // More & Less toggle for Massage page
    if (document.querySelector('[data-section-id="6723cac0ee8f3804653208ee"]')) {
        const parentSection = document.querySelector('[data-section-id="6723cac0ee8f3804653208ee"]');
        parentSection.classList.add("extendable-section-parent");
        const section = document.querySelector(".fluid-engine.fe-6723cac1737b7d2c781ac694");
        const therapistList = document.getElementById("therapist_list");
        const toggleButton = document.getElementById('therapist-toggle');

        if (section && therapistList && toggleButton) {
            const toggleText = toggleButton.querySelector('.toggle-text');
            const toggleArrow = toggleButton.querySelector('.custom-arrow');

            section.classList.add("extendable-section");
            therapistList.classList.add("hidden");

            toggleButton.addEventListener("click", function () {
                const isHidden = therapistList.classList.contains("hidden");
                therapistList.classList.toggle("hidden", !isHidden);
                toggleText.textContent = isHidden ? "LESS" : "MORE";
                toggleArrow.style.transform = isHidden ? "rotate(180deg)" : "rotate(0deg)";
            });
        }
    }

    // Blog section code for blog page
    if (document.querySelector('[data-section-id="6724372ebe9e195b54478118"]')) {
        const blogSection = document.querySelector('[data-section-id="6724372ebe9e195b54478118"]');
        if (blogSection) {
            blogSection.classList.add("blog-section");
        }
    }
});
  
</script>


script>
document.addEventListener("DOMContentLoaded", function () {
 	/* More & Less toggle for Massage page */
    const section = document.querySelector(".fluid-engine.fe-6723cac1737b7d2c781ac694");
    const therapistList = document.getElementById("therapist_list");
    const toggleButton = document.getElementById('therapist-toggle');
    const toggleText = toggleButton.querySelector('.toggle-text');
    const toggleArrow = toggleButton.querySelector('.custom-arrow');

    // Initial setup: Add class and hide therapist list
    if (section && therapistList && toggleButton) {
        section.classList.add("extendable-section");
        therapistList.classList.add("hidden");

        // Add click event to toggle the content
        toggleButton.addEventListener("click", function () {
            if (therapistList.classList.contains("hidden")) {
                therapistList.classList.remove("hidden");
                toggleText.textContent = "LESS";
                toggleArrow.style.transform = "rotate(180deg)";
            } else {
                therapistList.classList.add("hidden");
                toggleText.textContent = "MORE";
              	toggleArrow.style.transform = "rotate(180deg)";
            }
        });
    }
  	
  	/* blog section */
  	const blogSection = document.querySelector('[data-section-id="6724372ebe9e195b54478118"]');
    if (blogSection) {
    	blogSection.classList.add("blog-section");
    }
});
</script>
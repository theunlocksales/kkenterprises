// ===================================
// PROPERTY DATA - ADD NEW PROPERTIES HERE
// ===================================

const propertiesData = [
    {
        id: 1,
        title: "3BHK Luxury Flat",
        category: "flat",
        price: "₹75 Lakhs",
        location: "Vijay Nagar, Indore",
        badge: "Hot Deal",
        badgeClass: "hot",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
        beds: 3,
        baths: 2,
        area: "1450 sq.ft",
        description: `Welcome to this stunning 3BHK luxury apartment located in the heart of Vijay Nagar, one of Indore's most prestigious residential areas. This spacious 1,450 sq.ft property offers contemporary design, premium finishes, and breathtaking views.

The apartment features a modern open-plan living and dining area, well-appointed bedrooms with built-in wardrobes, stylish bathrooms with premium fixtures, and a fully equipped modular kitchen. Large windows ensure natural light throughout the day.`,
        gallery: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
        ],
        videos: [
            "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual property video
        ],
        details: {
            "Property Type": "Residential Apartment",
            "Status": "Ready to Move",
            "Furnishing": "Semi-Furnished",
            "Floor": "7th Floor of 12",
            "Facing": "East",
            "Parking": "2 Covered",
            "Age": "2 Years"
        },
        amenities: [
            "24/7 Security", "Power Backup", "Lift", "Club House",
            "Swimming Pool", "Gym", "Children's Play Area", "Garden",
            "CCTV Surveillance", "Visitor Parking", "Water Supply", "Fire Safety"
        ]
    },
    {
        id: 2,
        title: "Prime Commercial Shop",
        category: "shop",
        price: "₹1.2 Cr",
        location: "MG Road, Indore",
        badge: "New",
        badgeClass: "new",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
        beds: null,
        baths: null,
        area: "800 sq.ft",
        description: `Premium commercial shop located in the busiest area of MG Road, Indore's prime shopping district. This 800 sq.ft retail space offers excellent visibility, high foot traffic, and is perfect for any retail business.

The shop features a modern facade, ample display space, separate storage area, and dedicated parking. With its strategic location near major landmarks and easy accessibility, this property is ideal for businesses looking to establish a strong presence.`,
        gallery: [
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
            "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800",
            "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800"
        ],
        videos: [],
        details: {
            "Property Type": "Commercial Shop",
            "Status": "Ready to Occupy",
            "Furnishing": "Bare Shell",
            "Floor": "Ground Floor",
            "Frontage": "25 feet",
            "Parking": "Available",
            "Age": "New Construction"
        },
        amenities: [
            "Prime Location", "High Visibility", "Ample Parking", "24/7 Access",
            "Security", "Power Backup", "Water Supply", "Maintenance Staff"
        ]
    },
    {
        id: 3,
        title: "4BHK Independent House",
        category: "house",
        price: "₹1.8 Cr",
        location: "Scheme 54, Indore",
        badge: "For Sale",
        badgeClass: "",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
        beds: 4,
        baths: 3,
        area: "2500 sq.ft",
        description: `Luxurious 4BHK independent house in the prestigious Scheme 54 area of Indore. This 2,500 sq.ft property sits on a spacious plot and offers the perfect blend of modern amenities and comfortable living.

The house features spacious bedrooms with attached bathrooms, a large living room, dining area, modern kitchen, private garden, and terrace. With premium finishes throughout and excellent ventilation, this property is perfect for large families.`,
        gallery: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800"
        ],
        videos: [],
        details: {
            "Property Type": "Independent House",
            "Status": "Ready to Move",
            "Furnishing": "Unfurnished",
            "Floors": "2 Floors",
            "Facing": "North",
            "Parking": "3 Car Parking",
            "Age": "5 Years"
        },
        amenities: [
            "Private Garden", "Terrace", "Servant Room", "Store Room",
            "Modular Kitchen", "Spacious Rooms", "Natural Light", "Vastu Compliant"
        ]
    },
    {
        id: 4,
        title: "Modern Office Space",
        category: "office",
        price: "₹45K/mo",
        location: "Sapna Sangeeta, Indore",
        badge: "For Rent",
        badgeClass: "",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
        beds: null,
        baths: null,
        area: "1200 sq.ft",
        description: `Premium office space available for rent in Sapna Sangeeta, one of Indore's prime commercial hubs. This 1,200 sq.ft fully furnished office is perfect for IT companies, consultancies, or corporate offices.

The space features a modern reception area, 2 cabins, open workspace, meeting room, pantry, and washrooms. With high-speed internet connectivity, power backup, and 24/7 access, this office is ready for immediate occupation.`,
        gallery: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
        ],
        videos: [],
        details: {
            "Property Type": "Commercial Office",
            "Status": "Available",
            "Furnishing": "Fully Furnished",
            "Floor": "3rd Floor",
            "Workstations": "15-20 seats",
            "Parking": "Covered Parking",
            "Age": "3 Years"
        },
        amenities: [
            "Furnished Office", "High-Speed WiFi", "Power Backup", "AC",
            "Meeting Rooms", "Pantry", "Elevator", "24/7 Security", "CCTV"
        ]
    },
    {
        id: 5,
        title: "Residential Plot",
        category: "plot",
        price: "₹55 Lakhs",
        location: "AB Road, Indore",
        badge: "Hot Deal",
        badgeClass: "hot",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
        beds: null,
        baths: null,
        area: "2000 sq.ft",
        description: `Premium residential plot available on AB Road, one of Indore's most developing areas. This 2,000 sq.ft plot offers excellent connectivity, clear title, and is approved for construction.

Perfect for building your dream home, this plot is located in a peaceful residential area with all modern amenities nearby. With 40 feet road access and corner plot advantage, this is an ideal investment opportunity.`,
        gallery: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800"
        ],
        videos: [],
        details: {
            "Property Type": "Residential Plot",
            "Status": "Ready for Construction",
            "Facing": "East",
            "Plot Type": "Corner Plot",
            "Road Width": "40 feet",
            "Clear Title": "Yes",
            "Approved": "Yes"
        },
        amenities: [
            "Clear Title", "Corner Plot", "Wide Road", "Electricity",
            "Water Connection", "Peaceful Area", "Near Schools", "Near Hospitals"
        ]
    },
    {
        id: 6,
        title: "2BHK Furnished Flat",
        category: "flat",
        price: "₹18K/mo",
        location: "Palasia, Indore",
        badge: "For Rent",
        badgeClass: "",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
        beds: 2,
        baths: 2,
        area: "950 sq.ft",
        description: `Beautifully furnished 2BHK apartment available for rent in Palasia, Indore's central area. This 950 sq.ft flat is perfect for small families or working professionals looking for a comfortable living space.

The flat includes all modern amenities, modular kitchen, branded appliances, and stylish furniture. Located in a well-maintained society with 24/7 security, power backup, and lift facility.`,
        gallery: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
        ],
        videos: [],
        details: {
            "Property Type": "Residential Apartment",
            "Status": "Available",
            "Furnishing": "Fully Furnished",
            "Floor": "5th Floor of 8",
            "Facing": "South",
            "Parking": "1 Covered",
            "Age": "3 Years"
        },
        amenities: [
            "Fully Furnished", "AC", "Geyser", "Modular Kitchen",
            "Lift", "Security", "Power Backup", "Water Supply", "Parking"
        ]
    }
];

// ===================================
// INITIALIZE
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Load properties
    loadProperties('all');

    // Setup filter buttons
    setupFilters();

    // Setup navigation
    setupNavigation();

    // Setup header scroll effect
    setupHeader();

    // Setup stats counter
    setupStatsCounter();

    // Setup contact form
    setupContactForm();

    // Setup smooth scroll
    setupSmoothScroll();
});

// ===================================
// LOAD PROPERTIES
// ===================================

function loadProperties(filter = 'all') {
    const grid = document.getElementById('propertiesGrid');

    // Filter properties
    const filteredProperties = filter === 'all' 
        ? propertiesData 
        : propertiesData.filter(prop => prop.category === filter);

    // Generate HTML
    const html = filteredProperties.map(property => `
        <div class="property-card" data-category="${property.category}" data-aos="fade-up">
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
                <span class="property-badge ${property.badgeClass}">${property.badge}</span>
                <button class="wishlist-btn" onclick="toggleWishlist(this)" aria-label="Add to wishlist">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="property-info">
                <div class="property-header">
                    <h3 class="property-title">${property.title}</h3>
                    <div class="property-price">${property.price}</div>
                </div>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property.location}
                </div>
                <div class="property-features">
                    ${property.beds ? `<span><i class="fas fa-bed"></i> ${property.beds} Beds</span>` : '<span><i class="fas fa-store"></i> Commercial</span>'}
                    ${property.baths ? `<span><i class="fas fa-bath"></i> ${property.baths} Baths</span>` : '<span><i class="fas fa-check-circle"></i> Premium</span>'}
                    <span><i class="fas fa-vector-square"></i> ${property.area}</span>
                </div>
                <div class="property-footer">
                    <button onclick="openPropertyModal(${property.id})" class="btn-view">View Details</button>
                    <a href="https://wa.me/919111431431?text=I'm%20interested%20in%20${encodeURIComponent(property.title)}" 
                       class="btn-contact" target="_blank">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    grid.innerHTML = html;

    // Refresh AOS
    AOS.refresh();
}

// ===================================
// PROPERTY MODAL
// ===================================

function openPropertyModal(propertyId) {
    const property = propertiesData.find(p => p.id === propertyId);
    if (!property) return;

    const modal = document.getElementById('propertyModal');
    const modalBody = document.getElementById('modalBody');

    // Generate gallery HTML
    const galleryHTML = property.gallery.map((img, index) => `
        <div class="gallery-item ${index === 0 ? 'active' : ''}" onclick="setMainImage('${img}')">
            <img src="${img}" alt="${property.title}">
        </div>
    `).join('');

    // Generate video HTML
    const videosHTML = property.videos.length > 0 ? `
        <div class="property-videos">
            <h3><i class="fas fa-video"></i> Property Videos</h3>
            <div class="videos-grid">
                ${property.videos.map(video => `
                    <div class="video-item">
                        <iframe src="${video}" frameborder="0" allowfullscreen></iframe>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    // Generate details HTML
    const detailsHTML = Object.entries(property.details).map(([key, value]) => `
        <div class="detail-row">
            <span class="detail-label">${key}:</span>
            <span class="detail-value">${value}</span>
        </div>
    `).join('');

    // Generate amenities HTML
    const amenitiesHTML = property.amenities.map(amenity => `
        <div class="amenity-item">
            <i class="fas fa-check-circle"></i>
            <span>${amenity}</span>
        </div>
    `).join('');

    modalBody.innerHTML = `
        <div class="modal-gallery">
            <div class="main-gallery-image">
                <img id="mainGalleryImage" src="${property.gallery[0]}" alt="${property.title}">
            </div>
            <div class="gallery-thumbnails">
                ${galleryHTML}
            </div>
        </div>

        <div class="modal-details">
            <div class="modal-header">
                <div>
                    <h2>${property.title}</h2>
                    <p class="modal-location">
                        <i class="fas fa-map-marker-alt"></i> ${property.location}
                    </p>
                </div>
                <div class="modal-price">${property.price}</div>
            </div>

            <div class="modal-description">
                <h3><i class="fas fa-align-left"></i> Property Description</h3>
                <p>${property.description}</p>
            </div>

            ${videosHTML}

            <div class="property-details-section">
                <h3><i class="fas fa-info-circle"></i> Property Details</h3>
                <div class="details-grid">
                    ${detailsHTML}
                </div>
            </div>

            <div class="amenities-section">
                <h3><i class="fas fa-star"></i> Amenities</h3>
                <div class="amenities-grid">
                    ${amenitiesHTML}
                </div>
            </div>

            <div class="modal-actions">
                <a href="tel:+919111431431" class="btn-primary btn-lg">
                    <i class="fas fa-phone-alt"></i> Call Now
                </a>
                <a href="https://wa.me/919111431431?text=I'm%20interested%20in%20${encodeURIComponent(property.title)}" 
                   class="btn-outline btn-lg" target="_blank">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePropertyModal() {
    const modal = document.getElementById('propertyModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function setMainImage(imageSrc) {
    document.getElementById('mainGalleryImage').src = imageSrc;

    // Update active thumbnail
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.remove('active');
        if (item.querySelector('img').src === imageSrc) {
            item.classList.add('active');
        }
    });
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePropertyModal();
    }
});

// ===================================
// FILTERS
// ===================================

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Load filtered properties
            const filter = this.getAttribute('data-filter');
            loadProperties(filter);
        });
    });
}

// ===================================
// NAVIGATION
// ===================================

function setupNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');

            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
}

function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// ===================================
// HEADER SCROLL
// ===================================

function setupHeader() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===================================
// STATS COUNTER
// ===================================

function setupStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;

    const animateStats = () => {
        if (animated) return;

        const statsSection = document.querySelector('.stats-section');
        const sectionTop = statsSection.offsetTop;
        const sectionHeight = statsSection.clientHeight;

        if (window.pageYOffset > sectionTop - sectionHeight) {
            stats.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const counter = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        stat.textContent = target + '+';
                        clearInterval(counter);
                    } else {
                        stat.textContent = Math.floor(current);
                    }
                }, 16);
            });

            animated = true;
        }
    };

    window.addEventListener('scroll', animateStats);
}

// ===================================
// CONTACT FORM
// ===================================

function setupContactForm() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Create WhatsApp message
        const message = `Hi KK Enterprises,

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Interested In: ${data['property-type']}
Message: ${data.message}`;

        const whatsappURL = `https://wa.me/919111431431?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');

        // Reset form
        form.reset();
        alert('Thank you! Redirecting to WhatsApp...');
    });
}

// ===================================
// WISHLIST
// ===================================

function toggleWishlist(btn) {
    btn.classList.toggle('active');
    const icon = btn.querySelector('i');
    if (btn.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
    }
}

// ===================================
// SMOOTH SCROLL
// ===================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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





{
    id: 7,
    title: "750SQft plot",
    category: "house", // flat, house, shop, office, plot
    price: "₹45 Lakhs",
    location: "jivan jyoti colony,sagor kuti pithampur",
    badge: "Hot Deal",
    badgeClass: "hot",
    image: "YOUR_IMAGE_URL",
    beds: 2,
    baths: 2,
    area: "1000 sq.ft",
    description: `Property description here`,
    gallery: ["IMG1", "IMG2", "IMG3"],
    videos: ["href="house1.mp4"],
    details: {
        "Property Type": "house",
        "Status": "Ready to Move"
    },
    amenities: ["26400rs rent", "2250 construction", "complete"]
},


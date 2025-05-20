document.addEventListener('DOMContentLoaded', function() {
    // Sample product data
    const products = [
        {
            id: 1,
            title: "Wireless Bluetooth Headphones",
            price: 89.99,
            category: "Electronics",
            description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
            rating: 4.5,
            reviews: 128,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            isNew: true,
            inWishlist: false
        },
        {
            id: 2,
            title: "Smart Fitness Tracker",
            price: 59.99,
            category: "Electronics",
            description: "Track your steps, heart rate, sleep patterns and more with this sleek fitness band.",
            rating: 4.2,
            reviews: 86,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            isNew: false,
            inWishlist: true
        },
        {
            id: 3,
            title: "Organic Cotton T-Shirt",
            price: 24.99,
            category: "Clothing",
            description: "Comfortable and eco-friendly t-shirt made from 100% organic cotton.",
            rating: 4.7,
            reviews: 215,
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            isNew: true,
            inWishlist: false
        },
        {
            id: 4,
            title: "Stainless Steel Water Bottle",
            price: 19.99,
            category: "Home",
            description: "Keep your drinks hot or cold for hours with this durable stainless steel bottle.",
            rating: 4.8,
            reviews: 342,
            image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            isNew: false,
            inWishlist: false
        },
        {
            id: 5,
            title: "Wireless Charging Pad",
            price: 29.99,
            category: "Electronics",
            description: "Charge your Qi-enabled devices quickly and conveniently without cables.",
            rating: 4.3,
            reviews: 94,
            image: "https://images.unsplash.com/photo-1633381638729-27f730955c23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isNew: false,
            inWishlist: false
        },
        {
            id: 6,
            title: "Premium Skincare Set",
            price: 79.99,
            category: "Beauty",
            description: "Complete skincare routine with cleanser, toner, and moisturizer for all skin types.",
            rating: 4.9,
            reviews: 178,
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            isNew: true,
            inWishlist: false
        },
        {
            id: 7,
            title: "Yoga Mat",
            price: 34.99,
            category: "Sports",
            description: "Non-slip, eco-friendly yoga mat with carrying strap included.",
            rating: 4.6,
            reviews: 156,
            image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            isNew: false,
            inWishlist: false
        },
        {
            id: 8,
            title: "Portable Bluetooth Speaker",
            price: 49.99,
            category: "Electronics",
            description: "Waterproof speaker with 12-hour battery life and crisp, clear sound.",
            rating: 4.4,
            reviews: 203,
            image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            isNew: false,
            inWishlist: false
        }
    ];

    // DOM elements
    const productsContainer = document.getElementById('products-container');
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    const categoryFilter = document.getElementById('category-filter');
    const sortBy = document.getElementById('sort-by');
    const searchInput = document.getElementById('search');
    const paginationContainer = document.getElementById('pagination');

    // State variables
    let currentView = 'grid';
    let currentCategory = '';
    let currentSort = 'default';
    let currentSearch = '';
    let currentPage = 1;
    const productsPerPage = 6;

    // Initialize the app
    function init() {
        renderProducts();
        setupEventListeners();
    }

    // Set up event listeners
    function setupEventListeners() {
        gridViewBtn.addEventListener('click', () => {
            currentView = 'grid';
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            renderProducts();
        });

        listViewBtn.addEventListener('click', () => {
            currentView = 'list';
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            renderProducts();
        });

        categoryFilter.addEventListener('change', (e) => {
            currentCategory = e.target.value;
            currentPage = 1;
            renderProducts();
        });

        sortBy.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderProducts();
        });

        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase();
            currentPage = 1;
            renderProducts();
        });
    }

    // Filter, sort and paginate products
    function getFilteredProducts() {
        let filtered = [...products];

        // Filter by category
        if (currentCategory) {
            filtered = filtered.filter(product => product.category === currentCategory);
        }

        // Filter by search
        if (currentSearch) {
            filtered = filtered.filter(product => 
                product.title.toLowerCase().includes(currentSearch) || 
                product.description.toLowerCase().includes(currentSearch)
            );
        }

        // Sort products
        switch(currentSort) {
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'name':
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
            default:
                // Default sorting (by ID or whatever)
                break;
        }

        return filtered;
    }

    // Get products for current page
    function getPaginatedProducts(filteredProducts) {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        return filteredProducts.slice(startIndex, endIndex);
    }

    // Render products
    function renderProducts() {
        const filteredProducts = getFilteredProducts();
        const paginatedProducts = getPaginatedProducts(filteredProducts);
        
        // Clear container
        productsContainer.innerHTML = '';

        // Show no results message if no products match filters
        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
            paginationContainer.innerHTML = '';
            return;
        }

        // Render each product
        paginatedProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = `product-card ${currentView === 'list' ? 'products-list' : ''}`;
            
            // Generate star rating HTML
            const fullStars = Math.floor(product.rating);
            const hasHalfStar = product.rating % 1 >= 0.5;
            let starsHtml = '';
            
            for (let i = 0; i < 5; i++) {
                if (i < fullStars) {
                    starsHtml += '<i class="fas fa-star"></i>';
                } else if (i === fullStars && hasHalfStar) {
                    starsHtml += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    starsHtml += '<i class="far fa-star"></i>';
                }
            }

            productElement.innerHTML = `
                <div class="image-container">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    ${product.isNew ? '<span class="product-badge">NEW</span>' : ''}
                    <div class="wishlist-btn ${product.inWishlist ? 'active' : ''}" data-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
                <div class="product-content">
                    <div class="product-header">
                        <h3 class="product-title">${product.title}</h3>
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                    </div>
                    <span class="product-category">${product.category}</span>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">
                        <div class="stars">${starsHtml}</div>
                        <span class="reviews">(${product.reviews})</span>
                    </div>
                    <div class="product-footer">
                        <div class="product-actions">
                            <button class="btn btn-icon" title="Quick view">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="btn btn-icon" title="Add to compare">
                                <i class="fas fa-exchange-alt"></i>
                            </button>
                        </div>
                        <button class="btn btn-primary">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            `;

            productsContainer.appendChild(productElement);
        });

        // Render pagination
        renderPagination(filteredProducts.length);
        
        // Add event listeners to wishlist buttons
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                product.inWishlist = !product.inWishlist;
                this.classList.toggle('active');
            });
        });
    }

    // Render pagination
    function renderPagination(totalProducts) {
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        
        // Clear pagination container
        paginationContainer.innerHTML = '';
        
        // Don't show pagination if only one page
        if (totalPages <= 1) return;
        
        // Previous button
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderProducts();
            }
        });
        paginationContainer.appendChild(prevButton);
        
        // Page buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.className = currentPage === i ? 'active' : '';
            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderProducts();
            });
            paginationContainer.appendChild(pageButton);
        }
        
        // Next button
        const nextButton = document.createElement('button');
        nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderProducts();
            }
        });
        paginationContainer.appendChild(nextButton);
    }

    // Initialize the app
    init();
});
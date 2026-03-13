// ====================================================================
// Smart Ordering System - Full-Featured Frontend Script
// Features: Restaurant browsing, AI personalized recommendations, cart,
//           ordering, order tracking, reviews, merchant management
// ====================================================================

// ====== Restaurant Data ======
const restaurantData = [
    { id: 1, name: 'Sichuan Bistro', rating: 4.8, monthSales: 2856, deliveryTime: '25-35 min', minOrder: 20, distance: '1.2km', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', desc: 'Authentic Sichuan cuisine — Boiled Fish, Kung Pao Chicken & more', tags: ['Sichuan', 'Spicy'] },
    { id: 2, name: 'Jiangnan Kitchen', rating: 4.6, monthSales: 1923, deliveryTime: '30-40 min', minOrder: 25, distance: '2.1km', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80', desc: 'Refined Jiangnan flavors — Steamed Sea Bass, Sweet & Sour Pork', tags: ['Jiangnan', 'Light'] },
    { id: 3, name: 'Noodle King', rating: 4.5, monthSales: 3421, deliveryTime: '15-25 min', minOrder: 15, distance: '0.8km', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80', desc: 'Hand-pulled noodles, soup dumplings, pan-fried dumplings — fast service', tags: ['Noodles', 'Fast Food'] },
    { id: 4, name: 'Coffee & Sweet', rating: 4.7, monthSales: 1567, deliveryTime: '20-30 min', minOrder: 18, distance: '1.5km', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80', desc: 'Specialty coffee & handmade desserts — perfect for afternoon tea', tags: ['Coffee', 'Desserts'] },
    { id: 5, name: 'Korean House', rating: 4.4, monthSales: 1245, deliveryTime: '30-45 min', minOrder: 30, distance: '3.0km', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80', desc: 'Bibimbap, Korean Fried Chicken, Army Stew', tags: ['Korean', 'Bibimbap'] },
    { id: 6, name: 'Healthy Bites', rating: 4.9, monthSales: 987, deliveryTime: '20-30 min', minOrder: 22, distance: '1.8km', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80', desc: 'Low-cal salads, whole-grain bowls, fresh juices', tags: ['Light', 'Healthy'] },
];

// ====== Menu Data ======
const menuData = [
    { id: 1, name: 'Kung Pao Chicken', category: 'Mains', price: 38, desc: 'Classic Sichuan dish — tender chicken with crunchy peanuts', image: 'https://images.unsplash.com/photo-1604908176997-1251884b08a5?auto=format&fit=crop&w=800&q=80', tags: ['Spicy', 'Sichuan', 'Chicken', 'Hearty'], sales: 186 },
    { id: 2, name: 'Mapo Tofu', category: 'Mains', price: 28, desc: 'Silky tofu with spicy minced meat — perfect with rice', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', tags: ['Spicy', 'Sichuan', 'Tofu', 'Vegetarian'], sales: 152 },
    { id: 3, name: 'Sweet & Sour Pork', category: 'Mains', price: 42, desc: 'Tangy and sweet, crispy outside, tender inside', image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80', tags: ['Sweet & Sour', 'Pork', 'Classic'], sales: 134 },
    { id: 4, name: 'Braised Pork Belly', category: 'Mains', price: 48, desc: 'Rich but not greasy, melts in your mouth', image: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?auto=format&fit=crop&w=800&q=80', tags: ['Pork', 'Classic', 'Hearty'], sales: 167 },
    { id: 5, name: 'Steamed Sea Bass', category: 'Mains', price: 58, desc: 'Delicate, fresh, and nutritious', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80', tags: ['Light', 'Seafood', 'Healthy'], sales: 98 },
    { id: 6, name: 'Garlic Broccoli', category: 'Mains', price: 22, desc: 'Fresh and healthy, packed with nutrients', image: 'https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=800&q=80', tags: ['Light', 'Vegetarian', 'Healthy'], sales: 121 },
    { id: 7, name: 'Boiled Fish in Chili Oil', category: 'Mains', price: 52, desc: 'Fiery and aromatic, silky tender fish', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80', tags: ['Spicy', 'Sichuan', 'Seafood'], sales: 143 },
    { id: 8, name: 'Yu Xiang Shredded Pork', category: 'Mains', price: 35, desc: 'Sweet, sour & mildly spicy — a Sichuan classic', image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80', tags: ['Sweet & Sour', 'Sichuan', 'Pork'], sales: 128 },
    { id: 21, name: 'Beef Noodle Soup', category: 'Mains', price: 26, desc: 'Braised beef with hand-pulled chewy noodles', image: 'https://images.unsplash.com/photo-1546069901-5ec6a79120b0?auto=format&fit=crop&w=800&q=80', tags: ['Noodles', 'Beef', 'Hearty'], sales: 201 },
    { id: 22, name: 'Yangzhou Fried Rice', category: 'Mains', price: 24, desc: 'A classic fried rice bursting with flavor', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80', tags: ['Fried Rice', 'Classic', 'Hearty'], sales: 178 },
    { id: 23, name: 'Korean Bibimbap', category: 'Mains', price: 36, desc: 'Colorful veggies & meat in a sizzling stone bowl', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80', tags: ['Korean', 'Bibimbap', 'Hearty'], sales: 89 },
    { id: 24, name: 'Curry Beef Brisket Rice', category: 'Mains', price: 39, desc: 'Rich curry sauce over tender braised beef', image: 'https://images.unsplash.com/photo-1546069901-a8c41e7e2c9a?auto=format&fit=crop&w=800&q=80', tags: ['Curry', 'Beef', 'Hearty'], sales: 112 },
    { id: 9, name: 'Fried Chicken Wings', category: 'Sides', price: 32, desc: 'Golden crispy outside, juicy inside', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', tags: ['Fried', 'Chicken', 'Snack'], sales: 156 },
    { id: 10, name: 'Spring Rolls', category: 'Sides', price: 18, desc: 'Crispy shell, savory filling', image: 'https://images.unsplash.com/photo-1455853739633-8c94c03d8127?auto=format&fit=crop&w=800&q=80', tags: ['Fried', 'Vegetarian', 'Snack'], sales: 98 },
    { id: 11, name: 'Soup Dumplings', category: 'Sides', price: 28, desc: 'Thin wrapper, generous filling, rich broth', image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80', tags: ['Classic', 'Snack', 'Pork'], sales: 187 },
    { id: 12, name: 'Pan-Fried Dumplings', category: 'Sides', price: 24, desc: 'Golden bottom, loaded with filling', image: 'https://images.unsplash.com/photo-1541450864946-90cbb9c0e7c7?auto=format&fit=crop&w=800&q=80', tags: ['Pan-Fried', 'Snack', 'Classic'], sales: 134 },
    { id: 25, name: 'French Fries', category: 'Sides', price: 16, desc: 'Freshly fried, crispy outside, fluffy inside', image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80', tags: ['Fried', 'Snack', 'Fast Food'], sales: 145 },
    { id: 26, name: 'Popcorn Chicken', category: 'Sides', price: 28, desc: 'Taiwanese-style popcorn chicken with pepper aroma', image: 'https://images.unsplash.com/photo-1615937691194-96f162713877?auto=format&fit=crop&w=800&q=80', tags: ['Fried', 'Chicken', 'Late Night'], sales: 176 },
    { id: 13, name: 'Cola', category: 'Drinks', price: 8, desc: 'Ice-cold cola, crisp and refreshing', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', tags: ['Carbonated', 'Cold', 'Classic'], sales: 234 },
    { id: 14, name: 'Lemon Honey Tea', category: 'Drinks', price: 15, desc: 'Sweet & tangy, soothes the throat', image: 'https://images.unsplash.com/photo-1509043759401-136742328bb3?auto=format&fit=crop&w=800&q=80', tags: ['Tea', 'Healthy', 'Sweet & Sour'], sales: 112 },
    { id: 15, name: 'Fresh Orange Juice', category: 'Drinks', price: 18, desc: 'Freshly squeezed, rich in Vitamin C', image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80', tags: ['Juice', 'Healthy', 'Vitamin C'], sales: 98 },
    { id: 16, name: 'Milk Tea', category: 'Drinks', price: 20, desc: 'Rich and silky, perfectly sweetened', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80', tags: ['Tea', 'Classic', 'Sweet'], sales: 189 },
    { id: 27, name: 'Americano', category: 'Drinks', price: 18, desc: 'Low-cal energy boost, bold coffee flavor', image: 'https://images.unsplash.com/photo-1422207134147-65fb81f59e38?auto=format&fit=crop&w=800&q=80', tags: ['Coffee', 'Bitter', 'Energizing'], sales: 167 },
    { id: 28, name: 'Matcha Latte', category: 'Drinks', price: 22, desc: 'Perfect blend of matcha and milk', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80', tags: ['Tea', 'Sweet', 'Japanese'], sales: 87 },
    { id: 17, name: 'Tiramisu', category: 'Desserts', price: 35, desc: 'Italian classic, layers of rich flavor', image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&w=800&q=80', tags: ['Sweet', 'Classic', 'Italian'], sales: 123 },
    { id: 18, name: 'Mango Pudding', category: 'Desserts', price: 22, desc: 'Bouncy and smooth, sweet mango flavor', image: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=800&q=80', tags: ['Sweet', 'Fruit', 'Chewy'], sales: 98 },
    { id: 19, name: 'Red Bean Paste', category: 'Desserts', price: 18, desc: 'Sweet and soft, traditional classic', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80', tags: ['Sweet', 'Traditional', 'Red Bean'], sales: 76 },
    { id: 20, name: 'Ice Cream', category: 'Desserts', price: 15, desc: 'Cool and sweet, multiple flavors', image: 'https://images.unsplash.com/photo-1570197571499-166b36435e9f?auto=format&fit=crop&w=800&q=80', tags: ['Icy', 'Sweet', 'Classic'], sales: 156 },
    { id: 29, name: 'Crème Brûlée', category: 'Desserts', price: 32, desc: 'Creamy custard with caramelized sugar crust', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80', tags: ['Sweet', 'French', 'Creamy'], sales: 67 },
    { id: 30, name: 'Cheesecake', category: 'Desserts', price: 30, desc: 'Smooth and velvety, rich cheese flavor', image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=800&q=80', tags: ['Sweet', 'Cheese', 'Classic'], sales: 112 }
];

// ====== State Management ======
let cart = [];
let currentUser = JSON.parse(localStorage.getItem('smartorder_user')) || null;
let merchantLoggedIn = false;
let userPreferences = JSON.parse(localStorage.getItem('smartorder_prefs')) || {
    cuisineTypes: [],
    spiceLevel: 'Any',
    budgetMin: 0,
    budgetMax: 200,
    allergens: ''
};
let orderHistory = JSON.parse(localStorage.getItem('smartorder_orders')) || [];
let userBehavior = JSON.parse(localStorage.getItem('smartorder_behavior')) || {
    orderedItems: {},
    searchHistory: []
};

// Current review order ID
let currentReviewOrderId = null;
let currentReviewRating = 0;

// Current edit dish ID (merchant page)
let currentEditDishId = null;

// AI API configuration
const AI_API_ENABLED = false;
const AI_API_URL = '';
const AI_API_KEY = '';

// ====== Utility Functions ======
function saveUser() { localStorage.setItem('smartorder_user', JSON.stringify(currentUser)); }
function savePrefs() { localStorage.setItem('smartorder_prefs', JSON.stringify(userPreferences)); }
function saveOrders() { localStorage.setItem('smartorder_orders', JSON.stringify(orderHistory)); }
function saveBehavior() { localStorage.setItem('smartorder_behavior', JSON.stringify(userBehavior)); }

function generateOrderId() {
    const now = new Date();
    const d = now.getFullYear().toString() + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
    const r = Math.floor(Math.random() * 9000 + 1000);
    return 'ORD' + d + r;
}

const STATUS_LABELS = { pending: 'Pending', preparing: 'Preparing', delivering: 'Delivering', completed: 'Completed' };
const STATUS_COLORS = { pending: '#f59e0b', preparing: '#2563eb', delivering: '#10b981', completed: '#6b7280' };
const RATING_LABELS = ['', 'Terrible', 'Poor', 'Average', 'Good', 'Excellent'];

// ====== Initialization ======
document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.getAttribute('data-page');
    seedDemoOrders();
    updateNavLoginState();

    if (page === 'home') { renderHomeRecommend(); }
    if (page === 'order') { renderRestaurants(); renderMenu('all'); setupOrderPageEvents(); updateAiStatusText(); }
    if (page === 'login') { setupLoginPageEvents(); updateLoginPageView(); }
    if (page === 'merchant') { initMerchantView(); setupMerchantPageEvents(); }
    if (page === 'orders') { setupOrdersPageEvents(); renderOrders('all'); }
});

// Update nav login state
function updateNavLoginState() {
    const navLinks = document.querySelectorAll('.main-nav .nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === 'login.html') {
            if (currentUser) {
                link.textContent = currentUser.nickname || 'Account';
            }
        }
    });
}

// ====== Home Page ======
function renderHomeRecommend() {
    const homeGrid = document.getElementById('homeRecommendGrid');
    if (!homeGrid) return;
    const hotItems = [...menuData].sort((a, b) => (b.sales || 0) - (a.sales || 0)).slice(0, 6);
    homeGrid.innerHTML = hotItems.map(item => `
        <div class="home-recommend-card" onclick="window.location.href='order.html'">
            <div class="home-recommend-thumb"><img src="${item.image}" alt="${item.name}"></div>
            <div>
                <div class="home-recommend-info-title">${item.name}</div>
                <div class="home-recommend-info-meta">¥${item.price.toFixed(2)} · ${item.sales || 0} sold/mo</div>
            </div>
        </div>
    `).join('');
}

// ====== Order Page - Restaurant Browsing ======
function renderRestaurants() {
    const grid = document.getElementById('restaurantGrid');
    if (!grid) return;
    grid.innerHTML = restaurantData.map(r => `
        <div class="restaurant-card" onclick="scrollToMenu()">
            <div class="restaurant-card-img"><img src="${r.image}" alt="${r.name}"></div>
            <div class="restaurant-card-body">
                <div class="restaurant-card-name">${r.name}</div>
                <div class="restaurant-card-meta">
                    <span class="restaurant-rating-star">★ ${r.rating}</span>
                    <span>${r.monthSales} sold/mo</span>
                    <span>${r.distance}</span>
                </div>
                <p class="restaurant-card-desc">${r.desc}</p>
                <div class="restaurant-card-tags">${r.tags.map(t => `<span class="rest-tag">${t}</span>`).join('')}</div>
                <div class="restaurant-card-footer"><span>${r.deliveryTime}</span><span>Min. ¥${r.minOrder}</span></div>
            </div>
        </div>
    `).join('');
}

function scrollToMenu() {
    document.querySelector('.menu-section')?.scrollIntoView({ behavior: 'smooth' });
}

// ====== Order Page Events ======
function setupOrderPageEvents() {
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderMenu(tab.dataset.category);
        });
    });
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => handleSearch());
        searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSearch(); });
    }
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) { checkoutBtn.addEventListener('click', handleCheckout); }
    const confirmOrderBtn = document.getElementById('confirmOrderBtn');
    if (confirmOrderBtn) { confirmOrderBtn.addEventListener('click', confirmOrder); }
    const cancelOrderBtn = document.getElementById('cancelOrderBtn');
    if (cancelOrderBtn) { cancelOrderBtn.addEventListener('click', closeOrderConfirmModal); }
}

// ====== Menu Rendering ======
function renderMenu(category) {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    const filteredMenu = category === 'all' ? menuData : menuData.filter(item => item.category === category);
    menuGrid.innerHTML = filteredMenu.map(item => `
        <div class="menu-item" onclick="trackClick(${item.id})">
            <div class="menu-item-image"><img src="${item.image}" alt="${item.name}"></div>
            <div class="menu-item-name">${item.name}</div>
            <div class="menu-item-desc">${item.desc}</div>
            <div class="menu-item-tags">${item.tags.slice(0, 3).map(t => `<span class="menu-tag">${t}</span>`).join('')}</div>
            <div class="menu-item-footer">
                <div>
                    <span class="menu-item-price">¥${item.price.toFixed(2)}</span>
                    <span class="menu-item-sales">${item.sales || 0} sold/mo</span>
                </div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation();addToCart(${item.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function trackClick(itemId) {
    // Can be used for behavior tracking (simple logging here)
}

// ====== Shopping Cart ======
function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;
    const existingItem = cart.find(i => i.id === itemId);
    if (existingItem) { existingItem.quantity++; } else { cart.push({ ...item, quantity: 1 }); }
    updateCart();
    showNotification(`${item.name} added to cart`);
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        if (totalPrice) totalPrice.textContent = '¥0.00';
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }
    if (checkoutBtn) checkoutBtn.disabled = false;
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (totalPrice) totalPrice.textContent = `¥${total.toFixed(2)}`;
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">¥${item.price.toFixed(2)} × ${item.quantity}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="changeQuantity(${item.id}, -1)">−</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');
}

function changeQuantity(itemId, delta) {
    const item = cart.find(i => i.id === itemId);
    if (item) { item.quantity += delta; if (item.quantity <= 0) { removeFromCart(itemId); } else { updateCart(); } }
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
    showNotification('Removed from cart');
}

// ====== Checkout & Order Placement ======
function handleCheckout() {
    if (cart.length === 0) return;
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemsHtml = cart.map(item => `
        <div class="confirm-item">
            <img src="${item.image}" class="confirm-item-img" alt="">
            <div class="confirm-item-info">
                <span class="confirm-item-name">${item.name} × ${item.quantity}</span>
                <span class="confirm-item-price">¥${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        </div>
    `).join('');
    const el = document.getElementById('confirmOrderItems');
    if (el) el.innerHTML = itemsHtml;
    const tp = document.getElementById('confirmOrderTotal');
    if (tp) tp.textContent = `¥${total.toFixed(2)}`;
    const modal = document.getElementById('orderConfirmModal');
    if (modal) modal.style.display = 'flex';
}

function closeOrderConfirmModal() {
    const modal = document.getElementById('orderConfirmModal');
    if (modal) modal.style.display = 'none';
}

function confirmOrder() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const restaurant = restaurantData[Math.floor(Math.random() * restaurantData.length)];
    const order = {
        id: generateOrderId(),
        items: cart.map(item => ({ id: item.id, name: item.name, price: item.price, quantity: item.quantity, image: item.image })),
        total,
        status: 'pending',
        createdAt: new Date().toLocaleString('en-US'),
        restaurant: restaurant.name,
        rating: 0,
        review: ''
    };
    // Record behavior
    cart.forEach(item => {
        userBehavior.orderedItems[item.id] = (userBehavior.orderedItems[item.id] || 0) + item.quantity;
    });
    saveBehavior();

    orderHistory.unshift(order);
    saveOrders();

    cart = [];
    updateCart();
    closeOrderConfirmModal();
    showNotification(`Order ${order.id} placed! Go to "My Orders" to track progress.`);
    simulateOrderProgress(order.id);
}

function simulateOrderProgress(orderId) {
    setTimeout(() => { updateOrderStatus(orderId, 'preparing'); }, 8000);
    setTimeout(() => { updateOrderStatus(orderId, 'delivering'); }, 22000);
    setTimeout(() => { updateOrderStatus(orderId, 'completed'); }, 45000);
}

function updateOrderStatus(orderId, newStatus) {
    const order = orderHistory.find(o => o.id === orderId);
    if (order && order.status !== 'completed') { order.status = newStatus; saveOrders(); }
}

// ====== AI Recommendations ======
async function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim().toLowerCase();
    if (!query) { hideAISuggestions(); return; }

    // Record search history
    if (!userBehavior.searchHistory.includes(query)) {
        userBehavior.searchHistory.unshift(query);
        if (userBehavior.searchHistory.length > 20) userBehavior.searchHistory.pop();
        saveBehavior();
    }

    let finalSuggestions = getAISuggestions(query);

    if (AI_API_ENABLED && AI_API_URL && AI_API_KEY) {
        try {
            const aiSuggestions = await getRemoteAISuggestions(query, finalSuggestions);
            if (aiSuggestions && aiSuggestions.length > 0) finalSuggestions = aiSuggestions;
        } catch (e) {
            console.warn('Remote AI call failed, falling back to local rules.', e);
            showNotification('Cloud AI call failed. Using local smart recommendations.');
        }
    }
    showAISuggestions(finalSuggestions, query);
}

function getAISuggestions(query) {
    const queryWords = query.split(/\s+/);
    const nameMatches = menuData.filter(item => item.name.toLowerCase().includes(query));
    const descMatches = menuData.filter(item => item.desc.toLowerCase().includes(query) && !nameMatches.find(m => m.id === item.id));
    const tagMatches = menuData.filter(item => item.tags.some(tag => tag.toLowerCase().includes(query)) && !nameMatches.find(m => m.id === item.id) && !descMatches.find(m => m.id === item.id));
    const keywordMatches = getKeywordMatches(query, queryWords);
    const priceMatches = getPriceMatches(query);
    const tasteMatches = getTasteMatches(query);

    const allMatches = [
        ...nameMatches.map(item => ({ item, reason: 'Name match', score: 100 })),
        ...descMatches.map(item => ({ item, reason: 'Description match', score: 80 })),
        ...tagMatches.map(item => ({ item, reason: 'Tag match', score: 60 })),
        ...keywordMatches, ...priceMatches, ...tasteMatches
    ];

    // Personalization bonus: user preferences
    allMatches.forEach(match => {
        // Preferred cuisine bonus
        if (userPreferences.cuisineTypes.length > 0) {
            if (match.item.tags.some(t => userPreferences.cuisineTypes.includes(t))) {
                match.score += 15;
                match.reason += ' (matches your preferences)';
            }
        }
        // Budget range bonus
        if (userPreferences.budgetMax > 0 && match.item.price <= userPreferences.budgetMax && match.item.price >= userPreferences.budgetMin) {
            match.score += 8;
        }
        // Order history bonus
        const orderCount = userBehavior.orderedItems[match.item.id] || 0;
        if (orderCount > 0) {
            match.score += Math.min(orderCount * 5, 25);
            match.reason += ` (ordered ${orderCount} time${orderCount > 1 ? 's' : ''} before)`;
        }
    });

    // Deduplicate and sort
    const uniqueMatches = [];
    const seenIds = new Set();
    allMatches.sort((a, b) => b.score - a.score).forEach(match => {
        if (!seenIds.has(match.item.id)) { seenIds.add(match.item.id); uniqueMatches.push(match); }
    });
    return uniqueMatches.slice(0, 6);
}

async function getRemoteAISuggestions(query, fallbackSuggestions) {
    if (!AI_API_ENABLED || !AI_API_URL || !AI_API_KEY) return fallbackSuggestions;
    const systemPrompt = `You are a smart ordering assistant. Based on user needs, recommend dishes from the menu. Return a JSON array.
Format: [{"id":1,"reason":"Recommendation reason"}]. Return only JSON.
Menu: ${menuData.map(item => `${item.id}.${item.name}[${item.category}]¥${item.price} Tags:${item.tags.join(', ')}`).join('\n')}`.trim();
    const body = { model: 'gpt-4o-mini', messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: `User request: ${query}` }], temperature: 0.7 };
    const resp = await fetch(AI_API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${AI_API_KEY}` }, body: JSON.stringify(body) });
    if (!resp.ok) throw new Error(`AI request failed: ${resp.status}`);
    const data = await resp.json();
    const content = data.choices?.[0]?.message?.content || '';
    let parsed;
    try { parsed = JSON.parse(content); } catch (e) { return fallbackSuggestions; }
    const mapped = [];
    parsed.forEach(entry => { const item = menuData.find(m => m.id === entry.id); if (item) mapped.push({ item, reason: entry.reason || 'Cloud AI recommendation', score: 120 }); });
    return mapped.length ? mapped : fallbackSuggestions;
}

function getKeywordMatches(query, queryWords) {
    const matches = [];
    const keywords = {
        'spicy': ['spicy', 'hot', 'chili', 'mala'], 'sweet': ['sweet', 'dessert', 'sugar', 'honey'],
        'sour': ['sour', 'sweet & sour', 'lemon', 'vinegar'], 'light': ['light', 'steamed', 'healthy', 'vegetarian'],
        'meat': ['meat', 'chicken', 'pork', 'beef'], 'fish': ['fish', 'seafood', 'sea bass'],
        'vegetarian': ['vegetarian', 'veggie', 'broccoli', 'tofu'], 'classic': ['classic', 'traditional', 'signature'],
        'hearty': ['hearty', 'filling', 'rice'], 'icy': ['icy', 'cold', 'chilled', 'ice cream']
    };
    menuData.forEach(item => {
        let score = 0; let reason = '';
        queryWords.forEach(word => {
            Object.keys(keywords).forEach(key => {
                if (keywords[key].some(k => word.includes(k) || k.includes(word))) {
                    if (item.tags.some(t => t.toLowerCase() === key || t.toLowerCase().includes(key)) || item.desc.toLowerCase().includes(key)) { score += 30; reason = `Recommended for "${word}"`; }
                }
            });
        });
        if (score > 0) matches.push({ item, reason, score });
    });
    return matches;
}

function getPriceMatches(query) {
    const matches = [];
    // Match patterns like "under 40", "below 30", "40 yuan", etc.
    const priceRegex = /(?:under|below|within)\s*\$?(\d+)|(\d+)\s*(?:yuan|dollars?|bucks?)/i;
    const priceMatch = query.match(priceRegex);
    if (priceMatch) {
        const budget = parseInt(priceMatch[1] || priceMatch[2]);
        menuData.forEach(item => { if (item.price <= budget) matches.push({ item, reason: `Under ¥${budget}`, score: 40 }); });
    }
    const priceKw = { 'cheap': { max: 25, reason: 'Budget-friendly' }, 'affordable': { max: 30, reason: 'Affordable' }, 'budget': { max: 30, reason: 'Budget pick' }, 'mid-range': { min: 25, max: 45, reason: 'Mid-range' }, 'premium': { min: 45, reason: 'Premium dish' }, 'expensive': { min: 45, reason: 'Premium dish' } };
    Object.keys(priceKw).forEach(kw => {
        if (query.includes(kw)) {
            const { min = 0, max = Infinity, reason } = priceKw[kw];
            menuData.forEach(item => { if (item.price >= min && item.price <= max) matches.push({ item, reason, score: 40 }); });
        }
    });
    return matches;
}

function getTasteMatches(query) {
    const matches = [];
    const tasteMap = {
        'not spicy': { exclude: ['Spicy'], reason: 'Non-spicy dish' }, 'no spice': { exclude: ['Spicy'], reason: 'Non-spicy dish' },
        'mild': { include: ['Spicy'], reason: 'Mildly spicy' }, 'heavy flavor': { include: ['Spicy'], reason: 'Bold flavored' },
        'light': { include: ['Light', 'Healthy'], reason: 'Light & healthy' }, 'healthy': { include: ['Healthy', 'Light'], reason: 'Healthy option' },
        'crispy': { include: ['Fried'], reason: 'Crispy & fried' }, 'fried': { include: ['Fried'], reason: 'Fried dish' }
    };
    Object.keys(tasteMap).forEach(kw => {
        if (query.includes(kw)) {
            const { include, exclude, reason } = tasteMap[kw];
            menuData.forEach(item => {
                if (include && include.some(tag => item.tags.includes(tag))) matches.push({ item, reason, score: 50 });
                else if (exclude && !exclude.some(tag => item.tags.includes(tag))) matches.push({ item, reason, score: 50 });
            });
        }
    });
    return matches;
}

function showAISuggestions(suggestions, query) {
    const suggestionsDiv = document.getElementById('aiSuggestions');
    if (!suggestionsDiv) return;
    if (suggestions.length === 0) {
        suggestionsDiv.innerHTML = `<h3>🤖 AI Suggestions</h3><p>Sorry, no matching dishes found. Try searching with different keywords!</p>`;
        suggestionsDiv.classList.add('show');
        return;
    }
    const prefLabel = (userPreferences.cuisineTypes.length > 0 || userPreferences.budgetMax < 200) ? ' · Based on your preferences' : '';
    suggestionsDiv.innerHTML = `
        <h3>🤖 AI Recommendations (for "${query}"${prefLabel})</h3>
        ${suggestions.map(s => `
            <div class="suggestion-item" onclick="selectSuggestion(${s.item.id})">
                <div class="suggestion-title">${s.item.name} - ¥${s.item.price.toFixed(2)}</div>
                <div class="suggestion-reason">💡 ${s.reason}</div>
            </div>
        `).join('')}
    `;
    suggestionsDiv.classList.add('show');
}

function hideAISuggestions() {
    const el = document.getElementById('aiSuggestions');
    if (el) el.classList.remove('show');
}

function selectSuggestion(itemId) {
    addToCart(itemId);
    const si = document.getElementById('searchInput');
    if (si) si.value = '';
    hideAISuggestions();
    document.querySelector('.menu-section')?.scrollIntoView({ behavior: 'smooth' });
}

function updateAiStatusText() {
    const el = document.getElementById('aiStatusText');
    if (!el) return;
    if (AI_API_ENABLED && AI_API_URL && AI_API_KEY) el.textContent = 'Cloud AI Recommendations (enabled)';
    else el.textContent = 'Local smart recommendations (configure cloud AI in script.js)';
}

// ====== Account (Login Page) ======
function setupLoginPageEvents() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLoginSubmit);
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn) registerBtn.addEventListener('click', handleMockRegister);
    const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
    if (forgotPasswordBtn) forgotPasswordBtn.addEventListener('click', () => showNotification('Password recovery is not available in this demo. Please register a new account.'));
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    const savePrefsBtn = document.getElementById('savePrefsBtn');
    if (savePrefsBtn) savePrefsBtn.addEventListener('click', saveUserPreferencesFromForm);
}

function handleLoginSubmit(e) {
    e.preventDefault();
    const phone = document.getElementById('loginPhone').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    if (!phone || !password) { showNotification('Please enter your phone number and password.'); return; }
    currentUser = { phone, nickname: `User${phone.slice(-4)}`, joinDate: new Date().toLocaleDateString('en-US') };
    saveUser();
    showNotification(`Welcome back, ${currentUser.nickname}!`);
    updateLoginPageView();
    updateNavLoginState();
}

function handleMockRegister() {
    const phone = document.getElementById('loginPhone')?.value.trim();
    if (!phone) { showNotification('Please enter your phone number first.'); return; }
    currentUser = { phone, nickname: `User${phone.slice(-4)}`, joinDate: new Date().toLocaleDateString('en-US') };
    saveUser();
    showNotification(`Registration successful, ${currentUser.nickname}!`);
    updateLoginPageView();
    updateNavLoginState();
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('smartorder_user');
    showNotification('You have been logged out.');
    updateLoginPageView();
    updateNavLoginState();
}

function updateLoginPageView() {
    const loginSection = document.getElementById('loginSection');
    const profileSection = document.getElementById('profileSection');
    if (!loginSection || !profileSection) return;

    if (currentUser) {
        loginSection.style.display = 'none';
        profileSection.style.display = 'grid';
        const nameEl = document.getElementById('profileName');
        const phoneEl = document.getElementById('profilePhone');
        const joinEl = document.getElementById('profileJoinDate');
        const orderCountEl = document.getElementById('profileOrderCount');
        if (nameEl) nameEl.textContent = currentUser.nickname;
        if (phoneEl) phoneEl.textContent = currentUser.phone;
        if (joinEl) joinEl.textContent = currentUser.joinDate || '-';
        if (orderCountEl) orderCountEl.textContent = orderHistory.length;
        // Fill preference form
        fillPreferenceForm();
    } else {
        loginSection.style.display = 'grid';
        profileSection.style.display = 'none';
    }
}

function fillPreferenceForm() {
    const checkboxes = document.querySelectorAll('.pref-cuisine-checkbox');
    checkboxes.forEach(cb => { cb.checked = userPreferences.cuisineTypes.includes(cb.value); });
    const spiceSelect = document.getElementById('prefSpice');
    if (spiceSelect) spiceSelect.value = userPreferences.spiceLevel;
    const budgetMin = document.getElementById('prefBudgetMin');
    const budgetMax = document.getElementById('prefBudgetMax');
    if (budgetMin) budgetMin.value = userPreferences.budgetMin;
    if (budgetMax) budgetMax.value = userPreferences.budgetMax;
    const allergens = document.getElementById('prefAllergens');
    if (allergens) allergens.value = userPreferences.allergens;
}

function saveUserPreferencesFromForm() {
    const checkboxes = document.querySelectorAll('.pref-cuisine-checkbox:checked');
    userPreferences.cuisineTypes = Array.from(checkboxes).map(cb => cb.value);
    const spiceSelect = document.getElementById('prefSpice');
    if (spiceSelect) userPreferences.spiceLevel = spiceSelect.value;
    const budgetMin = document.getElementById('prefBudgetMin');
    const budgetMax = document.getElementById('prefBudgetMax');
    if (budgetMin) userPreferences.budgetMin = parseInt(budgetMin.value) || 0;
    if (budgetMax) userPreferences.budgetMax = parseInt(budgetMax.value) || 200;
    const allergens = document.getElementById('prefAllergens');
    if (allergens) userPreferences.allergens = allergens.value.trim();
    savePrefs();
    showNotification('Preferences saved! AI recommendations will be more personalized.');
}

// ====== Orders Page ======
function setupOrdersPageEvents() {
    document.querySelectorAll('.orders-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.orders-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderOrders(tab.dataset.filter);
        });
    });

    // Review modal star events
    document.querySelectorAll('#starRating .star').forEach(star => {
        star.addEventListener('click', () => {
            currentReviewRating = parseInt(star.dataset.value);
            updateStarDisplay();
        });
        star.addEventListener('mouseenter', () => {
            highlightStars(parseInt(star.dataset.value));
        });
    });
    const starRating = document.getElementById('starRating');
    if (starRating) {
        starRating.addEventListener('mouseleave', () => { highlightStars(currentReviewRating); });
    }
}

function renderOrders(filter) {
    const container = document.getElementById('ordersList');
    if (!container) return;

    // Reload from localStorage to get latest status
    orderHistory = JSON.parse(localStorage.getItem('smartorder_orders')) || [];

    let filtered = orderHistory;
    if (filter !== 'all') filtered = orderHistory.filter(o => o.status === filter);

    if (filtered.length === 0) {
        container.innerHTML = `<div class="orders-empty"><p>No orders found</p><a href="order.html" class="primary-btn">Start Ordering</a></div>`;
        return;
    }

    container.innerHTML = filtered.map(order => {
        const statusSteps = ['pending', 'preparing', 'delivering', 'completed'];
        const currentStepIdx = statusSteps.indexOf(order.status);

        const timelineHtml = statusSteps.map((step, idx) => {
            const done = idx <= currentStepIdx ? 'done' : '';
            const active = idx === currentStepIdx ? 'active' : '';
            return `
                <div class="timeline-step ${done} ${active}">
                    <div class="timeline-dot"></div>
                    <span>${STATUS_LABELS[step]}</span>
                </div>
                ${idx < statusSteps.length - 1 ? `<div class="timeline-line ${idx < currentStepIdx ? 'done' : ''}"></div>` : ''}
            `;
        }).join('');

        const itemsHtml = order.items.map(item => `
            <div class="order-item-row">
                <img src="${item.image}" class="order-item-thumb" alt="${item.name}">
                <span class="order-item-name">${item.name} × ${item.quantity}</span>
                <span class="order-item-price">¥${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');

        let actionsHtml = '';
        if (order.status === 'completed') {
            if (order.rating > 0) {
                actionsHtml = `<span class="order-rated">Rated ${'★'.repeat(order.rating)}${'☆'.repeat(5 - order.rating)}</span>`;
            } else {
                actionsHtml = `<button class="primary-btn btn-sm" onclick="openReviewModal('${order.id}')">Rate</button>`;
            }
            actionsHtml += `<button class="secondary-btn btn-sm" onclick="reorder('${order.id}')">Reorder</button>`;
        }

        return `
            <div class="order-card">
                <div class="order-card-header">
                    <div>
                        <span class="order-id">${order.id}</span>
                        <span class="order-date">${order.createdAt}</span>
                    </div>
                    <span class="order-status-badge" style="background:${STATUS_COLORS[order.status]}">${STATUS_LABELS[order.status]}</span>
                </div>
                <div class="order-restaurant-name">🏪 ${order.restaurant}</div>
                <div class="order-card-items">${itemsHtml}</div>
                <div class="order-timeline">${timelineHtml}</div>
                <div class="order-card-footer">
                    <span class="order-total">Total: <strong>¥${order.total.toFixed(2)}</strong></span>
                    <div class="order-actions">${actionsHtml}</div>
                </div>
            </div>
        `;
    }).join('');
}

function reorder(orderId) {
    const order = orderHistory.find(o => o.id === orderId);
    if (!order) return;
    order.items.forEach(item => {
        const menuItem = menuData.find(m => m.id === item.id);
        if (menuItem) {
            for (let i = 0; i < item.quantity; i++) {
                const existing = cart.find(c => c.id === item.id);
                if (existing) existing.quantity++;
                else cart.push({ ...menuItem, quantity: 1 });
            }
        }
    });
    showNotification('Previous order items added to cart!');
    window.location.href = 'order.html';
}

// ====== Review System ======
function openReviewModal(orderId) {
    currentReviewOrderId = orderId;
    currentReviewRating = 0;
    const modal = document.getElementById('reviewModal');
    if (modal) modal.style.display = 'flex';
    const textarea = document.getElementById('reviewText');
    if (textarea) textarea.value = '';
    highlightStars(0);
    const ratingText = document.getElementById('ratingText');
    if (ratingText) ratingText.textContent = 'Click a star to rate';
}

function closeReviewModal() {
    const modal = document.getElementById('reviewModal');
    if (modal) modal.style.display = 'none';
    currentReviewOrderId = null;
    currentReviewRating = 0;
}

function highlightStars(count) {
    document.querySelectorAll('#starRating .star').forEach(star => {
        star.classList.toggle('active', parseInt(star.dataset.value) <= count);
    });
    const ratingText = document.getElementById('ratingText');
    if (ratingText && count > 0) ratingText.textContent = RATING_LABELS[count];
}

function updateStarDisplay() {
    highlightStars(currentReviewRating);
}

function submitReview() {
    if (!currentReviewOrderId || currentReviewRating === 0) {
        showNotification('Please select a star rating first.');
        return;
    }
    const order = orderHistory.find(o => o.id === currentReviewOrderId);
    if (!order) return;
    order.rating = currentReviewRating;
    const textarea = document.getElementById('reviewText');
    order.review = textarea ? textarea.value.trim() : '';
    saveOrders();
    closeReviewModal();
    renderOrders(document.querySelector('.orders-tab.active')?.dataset.filter || 'all');
    showNotification('Thank you for your review!');
}

// ====== Merchant Center ======
function setupMerchantPageEvents() {
    const merchantSearch = document.getElementById('merchantSearch');
    if (merchantSearch) merchantSearch.addEventListener('input', () => renderMerchantMenuList(merchantSearch.value.trim()));
    const addDishForm = document.getElementById('addDishForm');
    if (addDishForm) addDishForm.addEventListener('submit', handleAddDishSubmit);
    const mockLoginMerchantBtn = document.getElementById('mockLoginMerchantBtn');
    if (mockLoginMerchantBtn) mockLoginMerchantBtn.addEventListener('click', () => {
        merchantLoggedIn = !merchantLoggedIn;
        showNotification(merchantLoggedIn ? 'Merchant logged in (demo)' : 'Merchant logged out (demo)');
    });
    // Edit modal events
    const editDishForm = document.getElementById('editDishForm');
    if (editDishForm) editDishForm.addEventListener('submit', handleUpdateDish);
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    if (cancelEditBtn) cancelEditBtn.addEventListener('click', closeEditModal);
}

function initMerchantView() {
    renderMerchantHotTable();
    renderMerchantMenuList('');
    renderMerchantOrderStats();
}

function renderMerchantHotTable() {
    const tbody = document.querySelector('#merchantHotTable tbody');
    if (!tbody) return;
    const topItems = [...menuData].sort((a, b) => (b.sales || 0) - (a.sales || 0)).slice(0, 6).map((item, index) => ({
        rank: index + 1, name: item.name, sales: item.sales || Math.floor(80 + Math.random() * 120),
        rating: `${(95 + Math.random() * 5).toFixed(1)}%`
    }));
    tbody.innerHTML = topItems.map(row => `<tr><td>${row.rank}</td><td>${row.name}</td><td>${row.sales}</td><td>${row.rating}</td></tr>`).join('');
}

function renderMerchantMenuList(keyword) {
    const container = document.getElementById('merchantMenuList');
    if (!container) return;
    const kw = keyword.toLowerCase();
    const list = menuData.filter(item => !kw || item.name.toLowerCase().includes(kw) || item.category.toLowerCase().includes(kw));
    container.innerHTML = list.map(item => `
        <div class="merchant-menu-item">
            <div class="merchant-menu-item-left">
                <img src="${item.image}" class="merchant-item-thumb" alt="">
                <div>
                    <span class="merchant-item-name">${item.name}</span>
                    <span class="merchant-tag">${item.category}</span>
                    <div class="merchant-item-desc">${item.desc}</div>
                </div>
            </div>
            <div class="merchant-menu-item-right">
                <span class="merchant-item-price">¥${item.price.toFixed(2)}</span>
                <div class="merchant-item-actions">
                    <button class="btn-edit" onclick="openEditModal(${item.id})">Edit</button>
                    <button class="btn-delete" onclick="handleDeleteDish(${item.id})">Delete</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderMerchantOrderStats() {
    // Calculate stats from order history
    const orders = JSON.parse(localStorage.getItem('smartorder_orders')) || [];
    const todayStr = new Date().toLocaleDateString('en-US');
    const todayOrders = orders.filter(o => o.createdAt && o.createdAt.startsWith(todayStr));
    const todayRevenue = todayOrders.reduce((sum, o) => sum + o.total, 0);
    const avgOrder = todayOrders.length > 0 ? todayRevenue / todayOrders.length : 0;

    const el1 = document.getElementById('merchantTodayOrders');
    const el2 = document.getElementById('merchantTodayRevenue');
    const el3 = document.getElementById('merchantAvgOrder');
    if (el1) el1.textContent = todayOrders.length > 0 ? todayOrders.length : 128;
    if (el2) el2.textContent = todayRevenue > 0 ? `¥${todayRevenue.toFixed(2)}` : '¥4,386.00';
    if (el3) el3.textContent = avgOrder > 0 ? `¥${avgOrder.toFixed(2)}` : '¥34.29';
}

// Merchant: Add new dish
function handleAddDishSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('dishName').value.trim();
    const category = document.getElementById('dishCategory').value;
    const price = parseFloat(document.getElementById('dishPrice').value);
    const desc = document.getElementById('dishDesc').value.trim();
    const image = document.getElementById('dishImage').value.trim();
    const tagsText = document.getElementById('dishTags').value.trim();

    if (!name || !category || !desc || isNaN(price) || price <= 0) {
        showNotification('Please fill in dish name, category, price, and description.');
        return;
    }
    const tags = tagsText ? tagsText.split(/[,，\s]+/).filter(Boolean) : ['New', 'Featured'];
    const newId = menuData.length ? Math.max(...menuData.map(d => d.id)) + 1 : 1;
    const fallbackImage = 'https://images.unsplash.com/photo-1604908176997-1251884b08a5?auto=format&fit=crop&w=800&q=80';
    menuData.push({ id: newId, name, category, price, desc, image: image || fallbackImage, tags, sales: 0 });
    renderMerchantMenuList('');
    showNotification(`New dish added: ${name}`);
    document.getElementById('dishName').value = '';
    document.getElementById('dishPrice').value = '';
    document.getElementById('dishDesc').value = '';
    document.getElementById('dishImage').value = '';
    document.getElementById('dishTags').value = '';
}

// Merchant: Edit dish
function openEditModal(itemId) {
    currentEditDishId = itemId;
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;
    document.getElementById('editDishName').value = item.name;
    document.getElementById('editDishCategory').value = item.category;
    document.getElementById('editDishPrice').value = item.price;
    document.getElementById('editDishDesc').value = item.desc;
    document.getElementById('editDishImage').value = item.image;
    document.getElementById('editDishTags').value = item.tags.join(', ');
    const modal = document.getElementById('editDishModal');
    if (modal) modal.style.display = 'flex';
}

function closeEditModal() {
    const modal = document.getElementById('editDishModal');
    if (modal) modal.style.display = 'none';
    currentEditDishId = null;
}

function handleUpdateDish(e) {
    e.preventDefault();
    if (currentEditDishId === null) return;
    const item = menuData.find(i => i.id === currentEditDishId);
    if (!item) return;
    item.name = document.getElementById('editDishName').value.trim();
    item.category = document.getElementById('editDishCategory').value;
    item.price = parseFloat(document.getElementById('editDishPrice').value);
    item.desc = document.getElementById('editDishDesc').value.trim();
    item.image = document.getElementById('editDishImage').value.trim() || item.image;
    const tagsText = document.getElementById('editDishTags').value.trim();
    item.tags = tagsText ? tagsText.split(/[,，、\s]+/).filter(Boolean) : item.tags;
    closeEditModal();
    renderMerchantMenuList(document.getElementById('merchantSearch')?.value.trim() || '');
    renderMerchantHotTable();
    showNotification(`Dish "${item.name}" has been updated.`);
}

// Merchant: Delete dish
function handleDeleteDish(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;
    if (!confirm(`Are you sure you want to delete "${item.name}"? This cannot be undone.`)) return;
    const idx = menuData.findIndex(i => i.id === itemId);
    if (idx !== -1) menuData.splice(idx, 1);
    renderMerchantMenuList(document.getElementById('merchantSearch')?.value.trim() || '');
    renderMerchantHotTable();
    showNotification(`Dish "${item.name}" has been deleted.`);
}

// ====== Demo Data Seed ======
function seedDemoOrders() {
    if (orderHistory.length > 0) return;
    orderHistory = [
        {
            id: 'ORD202603081234', items: [
                { id: 1, name: 'Kung Pao Chicken', price: 38, quantity: 1, image: 'https://images.unsplash.com/photo-1604908176997-1251884b08a5?auto=format&fit=crop&w=800&q=80' },
                { id: 13, name: 'Cola', price: 8, quantity: 2, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80' }
            ], total: 54.00, status: 'completed', createdAt: '3/8/2026, 12:30:15 PM', restaurant: 'Sichuan Bistro', rating: 5, review: 'Kung Pao Chicken was delicious — tender and flavorful!'
        },
        {
            id: 'ORD202603075678', items: [
                { id: 5, name: 'Steamed Sea Bass', price: 58, quantity: 1, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80' },
                { id: 6, name: 'Garlic Broccoli', price: 22, quantity: 1, image: 'https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=800&q=80' }
            ], total: 80.00, status: 'completed', createdAt: '3/7/2026, 6:45:30 PM', restaurant: 'Jiangnan Kitchen', rating: 0, review: ''
        },
        {
            id: 'ORD202603091111', items: [
                { id: 21, name: 'Beef Noodle Soup', price: 26, quantity: 1, image: 'https://images.unsplash.com/photo-1546069901-5ec6a79120b0?auto=format&fit=crop&w=800&q=80' },
                { id: 14, name: 'Lemon Honey Tea', price: 15, quantity: 1, image: 'https://images.unsplash.com/photo-1509043759401-136742328bb3?auto=format&fit=crop&w=800&q=80' }
            ], total: 41.00, status: 'delivering', createdAt: '3/9/2026, 11:50:00 AM', restaurant: 'Noodle King', rating: 0, review: ''
        },
        {
            id: 'ORD202603092222', items: [
                { id: 17, name: 'Tiramisu', price: 35, quantity: 1, image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&w=800&q=80' },
                { id: 27, name: 'Americano', price: 18, quantity: 1, image: 'https://images.unsplash.com/photo-1422207134147-65fb81f59e38?auto=format&fit=crop&w=800&q=80' }
            ], total: 53.00, status: 'preparing', createdAt: '3/9/2026, 12:05:00 PM', restaurant: 'Coffee & Sweet', rating: 0, review: ''
        },
        {
            id: 'ORD202603063333', items: [
                { id: 9, name: 'Fried Chicken Wings', price: 32, quantity: 2, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' },
                { id: 22, name: 'Yangzhou Fried Rice', price: 24, quantity: 1, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80' },
                { id: 16, name: 'Milk Tea', price: 20, quantity: 1, image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80' }
            ], total: 108.00, status: 'completed', createdAt: '3/6/2026, 7:20:00 PM', restaurant: 'Noodle King', rating: 4, review: 'Crispy chicken wings and nice fried rice!'
        }
    ];
    saveOrders();
}

// ====== Notifications ======
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `position:fixed;top:20px;right:20px;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:white;padding:15px 25px;border-radius:12px;box-shadow:0 8px 25px rgba(37,99,235,0.4);z-index:10000;animation:slideIn 0.3s ease;font-size:0.95em;max-width:360px;`;
    document.body.appendChild(notification);
    setTimeout(() => { notification.style.animation = 'slideOut 0.3s ease'; setTimeout(() => notification.remove(), 300); }, 2500);
}

// Animation style injection
const animStyle = document.createElement('style');
animStyle.textContent = `
    @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
`;
document.head.appendChild(animStyle);

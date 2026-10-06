// State Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const itemForm = document.getElementById('item-form');
const itemNameInput = document.getElementById('item-name');
const itemPriceInput = document.getElementById('item-price');
const itemQtyInput = document.getElementById('item-qty');
const cartBody = document.getElementById('cart-body');
const totalPriceEl = document.getElementById('total-price');
const discountAmountEl = document.getElementById('discount-amount');
const finalPriceEl = document.getElementById('final-price');
const promoCodeInput = document.getElementById('promo-code');
const paymentAmountInput = document.getElementById('payment-amount');
const changeAmountEl = document.getElementById('change-amount');
const paymentStatusEl = document.getElementById('payment-status');
const resetBtn = document.getElementById('reset-btn');

// Error Elements
const errorName = document.getElementById('error-name');
const errorPrice = document.getElementById('error-price');
const errorQty = document.getElementById('error-qty');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

// Form Submission & Validation
itemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = itemNameInput.value.trim();
    const price = parseFloat(itemPriceInput.value);
    const qty = parseInt(itemQtyInput.value);
    
    let isValid = true;

    // Reset errors
    errorName.textContent = '';
    errorPrice.textContent = '';
    errorQty.textContent = '';

    if (name.length < 3) {
        errorName.textContent = 'Nama barang minimal 3 karakter.';
        isValid = false;
    }

    if (isNaN(price) || price < 500) {
        errorPrice.textContent = 'Harga minimal Rp 500.';
        isValid = false;
    }

    if (isNaN(qty) || qty < 1) {
        errorQty.textContent = 'Jumlah minimal 1.';
        isValid = false;
    }

    if (isValid) {
        const newItem = {
            id: Date.now(),
            name,
            price,
            qty,
            subtotal: price * qty
        };
        
        cart.push(newItem);
        saveAndRender();
        itemForm.reset();
    }
});

// Render Cart Table
function renderCart() {
    cartBody.innerHTML = '';
    let totalBelanja = 0;

    cart.forEach((item, index) => {
        totalBelanja += item.subtotal;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>Rp ${item.price.toLocaleString()}</td>
            <td>${item.qty}</td>
            <td>Rp ${item.subtotal.toLocaleString()}</td>
            <td><button class="btn-delete" onclick="deleteItem(${item.id})">Hapus</button></td>
        `;
        cartBody.appendChild(row);
    });

    calculateTotals(totalBelanja);
}

// Calculate Totals, Discount, and Final Price
function calculateTotals(totalBelanja) {
    let discount = 0;
    const promoCode = promoCodeInput.value.trim().toUpperCase();

    // Discount logic: 10% if total >= 50,000 OR promo code HEMAT10
    if (totalBelanja >= 50000 || promoCode === 'HEMAT10') {
        discount = totalBelanja * 0.1;
    }

    const finalPrice = totalBelanja - discount;

    totalPriceEl.textContent = `Rp ${totalBelanja.toLocaleString()}`;
    discountAmountEl.textContent = `Rp ${discount.toLocaleString()}`;
    finalPriceEl.textContent = `Rp ${finalPrice.toLocaleString()}`;

    calculateChange(finalPrice);
}

// Calculate Change
function calculateChange(finalPrice) {
    const payment = parseFloat(paymentAmountInput.value) || 0;
    const change = payment - finalPrice;

    if (payment === 0) {
        changeAmountEl.textContent = 'Rp 0';
        paymentStatusEl.textContent = '';
    } else if (change < 0) {
        changeAmountEl.textContent = 'Rp 0';
        paymentStatusEl.textContent = 'Uang belum mencukupi!';
    } else {
        changeAmountEl.textContent = `Rp ${change.toLocaleString()}`;
        paymentStatusEl.textContent = '';
    }
}

// Delete Item
window.deleteItem = (id) => {
    cart = cart.filter(item => item.id !== id);
    saveAndRender();
};

// Save to LocalStorage and Refresh UI
function saveAndRender() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Event Listeners for Real-time Calculation
promoCodeInput.addEventListener('input', () => {
    const total = cart.reduce((sum, item) => sum + item.subtotal, 0);
    calculateTotals(total);
});

paymentAmountInput.addEventListener('input', () => {
    const total = cart.reduce((sum, item) => sum + item.subtotal, 0);
    let discount = 0;
    if (total >= 50000 || promoCodeInput.value.trim().toUpperCase() === 'HEMAT10') {
        discount = total * 0.1;
    }
    calculateChange(total - discount);
});

// Reset / New Transaction
resetBtn.addEventListener('click', () => {
    if (confirm('Apakah Anda yakin ingin memulai transaksi baru? Semua data keranjang akan dihapus.')) {
        cart = [];
        localStorage.removeItem('cart');
        promoCodeInput.value = '';
        paymentAmountInput.value = '';
        renderCart();
    }
});

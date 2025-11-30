const usersCountEl = document.getElementById('usersCount');
const ordersCountEl = document.getElementById('ordersCount');
const productsCountEl = document.getElementById('productsCount');
const warningEl = document.getElementById('warning');

const urls = [
    'http://localhost:3004/users',
    'http://localhost:3005/orders',
    'http://localhost:3006/products'
];

// Fetch all 3 APIs simultaneously
Promise.all(urls.map(url => fetch(url).then(res => {
    if(!res.ok) throw new Error('API failed');
    return res.json();
})))
.then(([usersData, ordersData, productsData]) => {
    usersCountEl.textContent = usersData.users.length;
    ordersCountEl.textContent = ordersData.orders.length;
    productsCountEl.textContent = productsData.products.length;
})
.catch(err => {
    warningEl.textContent = 'Some data could not be loaded.';
    
    // Attempt to load what works individually
    fetch(urls[0]).then(r=>r.json()).then(d=>usersCountEl.textContent = d.users.length).catch(()=>usersCountEl.textContent='N/A');
    fetch(urls[1]).then(r=>r.json()).then(d=>ordersCountEl.textContent = d.orders.length).catch(()=>ordersCountEl.textContent='N/A');
    fetch(urls[2]).then(r=>r.json()).then(d=>productsCountEl.textContent = d.products.length).catch(()=>productsCountEl.textContent='N/A');
});

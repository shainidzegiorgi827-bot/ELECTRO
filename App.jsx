import { useMemo, useState } from 'react'
import './App.css'

const products = [
    { id: 1, brand: 'HQD', name: 'CUVIE AIR', type: 'Disposable', flavor: 'Mixed Fruit', nicotine: '5%', puffs: '4000 puffs', price: 28, badge: 'Popular', tone: 'hqd-red', shape: 'hqd', image: '/products/hqd-air.jpg', available: true, isNew: false },
    { id: 2, brand: 'ELF BAR', name: '600 V2', type: 'Disposable', flavor: 'Lemon Lime', nicotine: '2%', puffs: '600 puffs', price: 26, badge: 'Classic', tone: 'elf-green', shape: 'elfbar', image: '/products/elfbar-600.jpg', available: true, isNew: false },
    { id: 3, brand: 'LOST MARY', name: 'BM600', type: 'Disposable', flavor: 'Strawberry Kiwi', nicotine: '5%', puffs: '600 puffs', price: 29, badge: 'Bestseller', tone: 'pink', shape: 'bar', image: '/products/lostmary-bm600-device.jpg', available: true, isNew: true },
    { id: 4, brand: 'GEEK BAR', name: 'PULSE', type: 'Disposable', flavor: 'Blue Razz Lemonade', nicotine: '5%', puffs: '15000 puffs', price: 39, badge: 'Trending', tone: 'blue', shape: 'bar', image: '/products/geekbar-pulse.jpg', available: true, isNew: true },
    { id: 5, brand: 'VOZOL', name: 'STAR 600', type: 'Disposable', flavor: 'Watermelon Ice', nicotine: '5%', puffs: '600 puffs', price: 27, badge: 'Top pick', tone: 'green', shape: 'bar', image: '/products/vozol-star.jpg', available: true, isNew: false },
    { id: 6, brand: 'ELF BAR', name: 'BC5000', type: 'Disposable', flavor: 'Blue Razz Ice', nicotine: '5%', puffs: '5000 puffs', price: 32, oldPrice: 39, badge: '-18%', tone: 'orange', shape: 'bar', image: '/products/elfbar-bc5000.jpg', available: true, isNew: false },
    { id: 7, brand: 'HQD', name: 'CUVIE PLUS', type: 'Disposable', flavor: 'Blueberry Raspberry', nicotine: '5%', puffs: '1200 puffs', price: 30, badge: 'New color', tone: 'hqd-blue', shape: 'hqd', image: '/products/hqd-plus.png', available: true, isNew: true },
    { id: 8, brand: 'LOST MARY', name: '4IN1', type: 'Disposable', flavor: 'Mango Peach', nicotine: '5%', puffs: '3200 puffs', price: 44, badge: 'Premium', tone: 'hqd-yellow', shape: 'hqd', image: '/products/lostmary-4in1.jpg', available: false, isNew: true },
    { id: 9, brand: 'RELX', name: 'INFINITY 2', type: 'Pod system', flavor: 'Device only', nicotine: '0mg', puffs: 'Reusable', price: 159, badge: 'Pod system', tone: 'blue', shape: 'pod', image: '/products/relx-infinity2.png', available: true, isNew: false },
    { id: 10, brand: 'VUSE', name: 'GO 700', type: 'Disposable', flavor: 'Berry Blend', nicotine: '5%', puffs: '700 puffs', price: 35, badge: 'Slim profile', tone: 'vuse-red', shape: 'slim', image: '/products/vuse-go.jpg', available: true, isNew: true },
    { id: 11, brand: 'AIR BAR', name: 'BOX 5000', type: 'Starter kit', flavor: 'Mango Ice', nicotine: '5%', puffs: '5000 puffs', price: 48, badge: 'Box style', tone: 'violet', shape: 'box', image: '/products/airbar-box.jpg', available: true, isNew: false },
    { id: 12, brand: 'VAPORESSO', name: 'XROS 4', type: 'Pod system', flavor: 'Device only', nicotine: '0mg', puffs: 'Reusable', price: 139, badge: 'Pod favorite', tone: 'blue', shape: 'pod', image: '/products/vaporesso-xros4.png', available: true, isNew: false },
    { id: 13, brand: 'GEEK BAR', name: 'PULSE 2', type: 'Disposable', flavor: 'Miami Mint', nicotine: '5%', puffs: '15000 puffs', price: 42, badge: 'New generation', tone: 'violet', shape: 'bar', image: '/products/geekbar-pulse2.jpg', available: true, isNew: true },
    { id: 14, brand: 'LOST MARY', name: 'MO5000', type: 'Disposable', flavor: 'Blueberry Raspberry', nicotine: '5%', puffs: '5000 puffs', price: 34, badge: 'Popular', tone: 'pink', shape: 'bar', image: '/products/lostmary-mo5000.jpg', available: true, isNew: false },
    { id: 15, brand: 'LOST MARY', name: 'BM3500', type: 'Disposable', flavor: 'Pineapple Ice', nicotine: '5%', puffs: '3500 puffs', price: 31, badge: 'Bestseller', tone: 'orange', shape: 'bar', image: '/products/lostmary-bm3500-device.jpg', available: true, isNew: false },
    { id: 16, brand: 'SKE', name: 'CRYSTAL BAR', type: 'Disposable', flavor: 'Strawberry Ice', nicotine: '2%', puffs: '600 puffs', price: 25, badge: 'Crystal classic', tone: 'pink', shape: 'slim', image: '/products/ske-crystal.jpg', available: true, isNew: false },
    { id: 17, brand: 'VAPORESSO', name: 'XROS 4 MINI', type: 'Pod system', flavor: 'Device only', nicotine: '0mg', puffs: 'Reusable', price: 109, badge: 'Compact pod', tone: 'green', shape: 'pod', image: '/products/vaporesso-xros4mini.webp', available: true, isNew: true },
    { id: 18, brand: 'VAPORESSO', name: 'XROS 5', type: 'Pod system', flavor: 'Device only', nicotine: '0mg', puffs: 'Reusable', price: 169, badge: 'Latest model', tone: 'hqd-blue', shape: 'pod', image: '/products/vaporesso-xros5.png', available: true, isNew: true },
]

const categories = ['All products', 'Pod systems', 'Disposables', 'Starter kits']
const brands = ['All brands', 'HQD', 'ELF BAR', 'LOST MARY', 'GEEK BAR', 'VOZOL', 'RELX', 'VUSE', 'AIR BAR', 'VAPORESSO', 'SKE']
const flavors = ['All flavors', 'Strawberry', 'Mango', 'Mint', 'Lemon', 'Berry', 'Watermelon']
const puffFilters = ['All puff counts', 'Under 1,000', '1,000–5,000', '5,000+']
const nicotineFilters = ['All nicotine', '0mg', '2%', '5%']
const priceFilters = ['All prices', 'Under 30₾', '30₾–60₾', '60₾+']
const devicePhotos = {
    'hqd-red:hqd': { image: '/products/hqd-air.jpg', alt: 'HQD Cuvie Air' },
    'elf-green:elfbar': { image: '/products/elfbar-600.jpg', alt: 'Elf Bar 600 V2' },
    'photo-lostmary-bm600': { image: '/products/lostmary-bm600-device.jpg', alt: 'Lost Mary BM600' },
    'blue:bar': { image: '/products/geekbar-pulse.jpg', alt: 'Geek Bar Pulse' },
    'green:bar': { image: '/products/vozol-star.jpg', alt: 'Vozol Star 600' },
    'photo-elfbar-bc5000': { image: '/products/elfbar-bc5000.jpg', alt: 'Elf Bar BC5000' },
    'hqd-blue:hqd': { image: '/products/hqd-plus.png', alt: 'HQD Cuvie Plus' },
    'hqd-yellow:hqd': { image: '/products/lostmary-4in1.jpg', alt: 'Lost Mary 4in1' },
    'photo-relx-infinity2': { image: '/products/relx-infinity2.png', alt: 'RELX Infinity 2' },
    'vuse-red:slim': { image: '/products/vuse-go.jpg', alt: 'Vuse Go 700' },
    'violet:box': { image: '/products/airbar-box.jpg', alt: 'Air Bar Box 5000' },
    'photo-vaporesso-xros4': { image: '/products/vaporesso-xros4.png', alt: 'Vaporesso XROS 4' },
    'violet:bar': { image: '/products/geekbar-pulse2.jpg', alt: 'Geek Bar Pulse 2' },
    'photo-lostmary-mo5000': { image: '/products/lostmary-mo5000.jpg', alt: 'Lost Mary MO5000' },
    'photo-lostmary-bm3500': { image: '/products/lostmary-bm3500-device.jpg', alt: 'Lost Mary BM3500' },
    'pink:slim': { image: '/products/ske-crystal.jpg', alt: 'SKE Crystal Bar' },
    'green:pod': { image: '/products/vaporesso-xros4mini.webp', alt: 'Vaporesso XROS 4 Mini' },
    'hqd-blue:pod': { image: '/products/vaporesso-xros5.png', alt: 'Vaporesso XROS 5' },
}

function Device({ tone, shape }) {
    if (shape === 'hero-device') {
        return <div className={`device-stage ${tone}`}><img className="hero-real-image" src="/products/geekbar-pulse2.jpg" alt="Geek Bar Pulse 2" /></div>
    }

    const toneClasses = tone.split(' ')
    const photoKey = toneClasses.find((className) => className.startsWith('photo-')) || `${toneClasses[0]}:${shape}`
    const photo = devicePhotos[photoKey]

    if (photo) {
        return <div className={`device-stage ${tone}`}><img className="real-product-image" src={photo.image} alt={photo.alt} loading="lazy" decoding="async" /></div>
    }

    return <div className={`device-stage ${tone}`}><div className={`device ${shape}`}><div className="device-mouthpiece" /><div className="device-tank"><span className="liquid-level" /></div><div className="device-screen">E</div><div className="device-light" /><div className="device-button" /><div className="device-airflow" /><div className="device-port" /><div className="device-label">E</div><div className="device-detail" /></div><span className="device-shadow" /></div>
}

function ProductCard({ product, onOpen, onQuickView, onAdd, favorites, onFavorite, listView = false }) {
    return <article className={`product-card ${listView ? 'list-card' : ''}`} onClick={() => onOpen(product)}><div className="card-visual"><span className="card-badge">{product.badge}</span><button className={`heart ${favorites.includes(product.id) ? 'liked' : ''}`} onClick={(event) => { event.stopPropagation(); onFavorite(product.id) }} aria-label="Add to favorites">♡</button>{product.image ? <img className="real-product-image" src={product.image} alt={`${product.brand} ${product.name}`} loading="lazy" decoding="async" /> : <Device tone={product.tone} shape={product.shape} />}<button className="quick-view" onClick={(event) => { event.stopPropagation(); onQuickView(product) }}>Quick view <span>↗</span></button></div><div className="card-info"><div className="card-top"><span>{product.brand}</span><small>{product.type}</small></div><h3>{product.name}</h3><p>{product.flavor} <b>·</b> {product.puffs}</p><div className="card-bottom"><div><strong>{product.price}₾</strong>{product.oldPrice && <del>{product.oldPrice}₾</del>}</div><button className="add-to-bag" onClick={(event) => { event.stopPropagation(); onAdd(product) }}>Add <span>＋</span></button></div></div></article>
}

function HomePage({ onShop, onOpen, onQuickView, onAdd, favorites, onFavorite }) {
    const popular = products.slice(0, 6)
    const newArrivals = products.filter((product) => product.isNew).slice(0, 4)
    return <main className="home-page"><section className="hero"><div className="hero-content"><p className="kicker">ELECTRO CIGARETTES / 2026 COLLECTION</p><h1>Find your<br /><i>perfect device.</i></h1><p>A considered selection of popular electronic cigarettes, built around your everyday rhythm, favorite flavor and personal style.</p><button className="hero-button" onClick={() => onShop()}>Explore the collection <span>↓</span></button><div className="hero-micro"><span className="micro-line" /> Authentic products <span>·</span> 24h support</div></div><div className="hero-product"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><Device tone="hero-lime" shape="hero-device" /><div className="hero-tag"><span>01 / 03</span><strong>Next-generation<br />disposable devices</strong></div><div className="hero-price"><span>FROM</span><b>24₾</b></div></div></section><WhyChooseUs /><section className="home-section"><SectionHeading kicker="POPULAR PRODUCTS" title={<>The models<br /><i>everyone wants.</i></>} onAction={() => onShop()} action="View all" /><div className="product-grid">{popular.map((product) => <ProductCard key={product.id} product={product} onOpen={onOpen} onQuickView={onQuickView} onAdd={onAdd} favorites={favorites} onFavorite={onFavorite} />)}</div></section><section className="flavor-section"><div className="flavor-copy"><p className="kicker">SHOP BY FLAVOR</p><h2>Find your<br /><i>next favorite.</i></h2></div><div className="flavor-grid">{['Strawberry', 'Mango', 'Mint', 'Lemon', 'Berry', 'Watermelon'].map((flavor) => <button key={flavor} onClick={() => onShop(flavor)}><span>{flavor.slice(0, 2).toUpperCase()}</span>{flavor}<b>↗</b></button>)}</div></section><section className="home-section new-section"><SectionHeading kicker="NEW ARRIVALS" title={<>Fresh drops<br /><i>just landed.</i></>} onAction={() => onShop()} action="Shop new" /><div className="product-grid">{newArrivals.map((product) => <ProductCard key={product.id} product={product} onOpen={onOpen} onQuickView={onQuickView} onAdd={onAdd} favorites={favorites} onFavorite={onFavorite} />)}</div></section><section className="brand-section"><p className="kicker">SHOP BY BRAND</p><div>{brands.slice(1).map((brand) => <button key={brand} onClick={() => onShop('', brand)}>{brand}</button>)}</div></section></main>
}

function SectionHeading({ kicker, title, onAction, action }) {
    return <div className="section-heading"><div><p className="kicker">{kicker}</p><h2>{title}</h2></div><button className="text-action" onClick={onAction}>{action} <span>↗</span></button></div>
}

function WhyChooseUs() {
    return <section className="why-section"><div><span>01</span><strong>Fast delivery</strong><small>Next-day delivery in Tbilisi</small></div><div><span>02</span><strong>Clear information</strong><small>Flavor, puffs and nicotine shown</small></div><div><span>03</span><strong>Real support</strong><small>Help choosing your next device</small></div></section>
}

function ShopPage({ productsToShow, filters, setFilters, view, setView, onOpen, onQuickView, onAdd, favorites, onFavorite, clearFilters, favoritesOnly, onToggleFavorites }) {
    const { category, brand, flavor, puffs, nicotine, price, sort, query } = filters
    return (
        <main className="shop-page">
            <div className="page-intro">
                <p className="kicker">THE COMPLETE EDIT</p>
                <h1>{favoritesOnly ? <>Your <i>saved devices.</i></> : <>Shop <i>all devices.</i></>}</h1>
                <p>{favoritesOnly ? 'Your personal shortlist, all in one place.' : 'Popular disposables, pods and starter kits selected for simple browsing.'}</p>
            </div>
            <div className="shop-toolbar">
                <div className="shop-search">
                    <span>⌕</span>
                    <input value={query} onChange={(event) => setFilters({ query: event.target.value })} placeholder="Search by model, brand or flavor" />
                </div>
                <div className="toolbar-actions">
                    <button className={`saved-filter ${favoritesOnly ? 'view-active' : ''}`} onClick={onToggleFavorites} aria-pressed={favoritesOnly}>
                        <span aria-hidden="true">♡</span> Saved <b>{favorites.length}</b>
                    </button>
                    <select value={sort} onChange={(event) => setFilters({ sort: event.target.value })}>
                        <option>Recommended</option>
                        <option>Price: low to high</option>
                        <option>Price: high to low</option>
                    </select>
                    <button className={view === 'grid' ? 'view-active' : ''} onClick={() => setView('grid')} aria-label="Grid view">▦</button>
                    <button className={view === 'list' ? 'view-active' : ''} onClick={() => setView('list')} aria-label="List view">☰</button>
                </div>
            </div>
            <div className="shop-layout">
                <aside className="shop-filters">
                    <div className="filter-title"><span>Filters</span><button onClick={clearFilters}>Reset</button></div>
                    <FilterGroup title="Category" items={categories} value={category} onChange={(value) => setFilters({ category: value })} />
                    <FilterGroup title="Brand" items={brands} value={brand} onChange={(value) => setFilters({ brand: value })} />
                    <FilterGroup title="Flavor" items={flavors} value={flavor} onChange={(value) => setFilters({ flavor: value })} />
                    <FilterGroup title="Puff count" items={puffFilters} value={puffs} onChange={(value) => setFilters({ puffs: value })} />
                    <FilterGroup title="Nicotine" items={nicotineFilters} value={nicotine} onChange={(value) => setFilters({ nicotine: value })} />
                    <FilterGroup title="Price" items={priceFilters} value={price} onChange={(value) => setFilters({ price: value })} />
                </aside>
                <div className="shop-results">
                    <div className="results-meta">
                        <span>{productsToShow.length} {favoritesOnly ? 'saved devices' : 'products'}</span>
                        <span>{brand !== 'All brands' ? brand : 'All brands'} · {flavor !== 'All flavors' ? flavor : 'All flavors'}</span>
                    </div>
                    <div className={`product-grid ${view === 'list' ? 'list-view' : ''}`}>
                        {productsToShow.length ? productsToShow.map((product) => <ProductCard key={product.id} product={product} onOpen={onOpen} onQuickView={onQuickView} onAdd={onAdd} favorites={favorites} onFavorite={onFavorite} listView={view === 'list'} />) : (
                            <div className="no-results">
                                <strong>{favoritesOnly ? 'No saved devices yet' : 'No products found'}</strong>
                                <span>{favoritesOnly ? 'Tap the heart on a product to save it here.' : 'Try another filter or search term.'}</span>
                                <button onClick={favoritesOnly ? onToggleFavorites : clearFilters}>{favoritesOnly ? 'Browse all devices' : 'Clear all filters'}</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

function FilterGroup({ title, items, value, onChange }) {
    return <fieldset className="filter-group"><legend>{title}</legend>{items.map((item) => <label key={item}><input type="radio" checked={value === item} onChange={() => onChange(item)} /> <span>{item}</span></label>)}</fieldset>
}

function ProductPage({ product, onBack, onAdd, onOpen, related }) {
    const [selectedImage, setSelectedImage] = useState(product.image)
    return (
        <main className="product-page">
            <button className="back-link" onClick={onBack}>← Back to shop</button>
            <div className="product-detail">
                <div className="product-gallery">
                    <div className="gallery-main">
                        {selectedImage ? <img className="real-product-image" src={selectedImage} alt={`${product.brand} ${product.name}`} decoding="async" /> : <Device tone={product.tone} shape={product.shape} />}
                    </div>
                    {product.image && <div className="gallery-thumbs"><button className="selected-thumb" onClick={() => setSelectedImage(product.image)} aria-label={`View ${product.name} image`}><img className="real-product-image" src={product.image} alt="" /></button></div>}
                </div>
                <div className="product-copy">
                    <p className="kicker">{product.brand} / {product.type}</p>
                    <h1>{product.name}</h1>
                    <p className="product-flavor">{product.flavor}</p>
                    <div className="detail-price"><strong>{product.price}₾</strong>{product.oldPrice && <del>{product.oldPrice}₾</del>}</div>
                    <div className="availability"><span /> {product.available ? 'In stock — ready to ship' : 'Currently unavailable'}</div>
                    <div className="spec-list">
                        <div><span>Flavor</span><strong>{product.flavor}</strong></div>
                        <div><span>Puff count</span><strong>{product.puffs}</strong></div>
                        <div><span>Nicotine</span><strong>{product.nicotine}</strong></div>
                        <div><span>Type</span><strong>{product.type}</strong></div>
                    </div>
                    <button className="detail-add" disabled={!product.available} onClick={() => onAdd(product)}>{product.available ? 'Add to bag' : 'Notify me when available'} <span>＋</span></button>
                </div>
            </div>
            <section className="related-products">
                <SectionHeading kicker="YOU MAY ALSO LIKE" title={<>More to<br /><i>explore.</i></>} onAction={onBack} action="Back to shop" />
                <div className="product-grid">
                    {related.slice(0, 4).map((item) => <ProductCard key={item.id} product={item} onOpen={onOpen} onQuickView={() => { }} onAdd={onAdd} favorites={[]} onFavorite={() => { }} />)}
                </div>
            </section>
        </main>
    )
}

function CartPage({ cart, total, updateQuantity, removeProduct, onShop, onCheckout }) {
    return <main className="cart-page"><div className="page-intro"><p className="kicker">YOUR SELECTION</p><h1>Your <i>bag.</i></h1><p>{cart.length ? 'Review your devices before checkout.' : 'Your bag is ready for something new.'}</p></div>{cart.length ? <div className="cart-layout"><div className="cart-page-items">{cart.map((item) => <div className="cart-page-row" key={item.id}><div className="cart-mini">{item.image ? <img className="real-product-image" src={item.image} alt={`${item.brand} ${item.name}`} loading="lazy" decoding="async" /> : <Device tone={item.tone} shape={item.shape} />}</div><div className="cart-product-name"><span>{item.brand}</span><strong>{item.name}</strong><small>{item.flavor} · {item.puffs}</small></div><div className="quantity"><button onClick={() => updateQuantity(item.id, -1)}>-</button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, 1)}>+</button></div><strong className="cart-line-price">{item.price * item.quantity}₾</strong><button className="remove-item" onClick={() => removeProduct(item.id)} aria-label="Remove product">×</button></div>)}</div><aside className="cart-summary"><p className="kicker">ORDER SUMMARY</p><div><span>Subtotal</span><strong>{total}₾</strong></div><div><span>Delivery</span><strong>Free</strong></div><hr /><div className="summary-total"><span>Total</span><strong>{total}₾</strong></div><button className="checkout" onClick={onCheckout}>Checkout <span>↗</span></button></aside></div> : <div className="empty-page"><span>＋</span><h2>Your bag is empty</h2><p>Discover a device made for your everyday.</p><button className="hero-button" onClick={onShop}>Continue shopping <span>↗</span></button></div>}</main>
}

function CheckoutPage({ total, onBack, onComplete }) {
    const [completed, setCompleted] = useState(false)
    if (completed) return <main className="checkout-page success-page"><span className="success-icon">✓</span><p className="kicker">ORDER RECEIVED</p><h1>Thank you for<br /><i>your order.</i></h1><p>We will contact you shortly to confirm delivery details.</p><button className="hero-button" onClick={onComplete}>Back to home <span>↗</span></button></main>
    return <main className="checkout-page"><button className="back-link" onClick={onBack}>← Back to bag</button><div className="checkout-heading"><p className="kicker">SECURE CHECKOUT</p><h1>Complete your<br /><i>order.</i></h1></div><form className="checkout-layout" onSubmit={(event) => { event.preventDefault(); setCompleted(true) }}><div className="checkout-form"><h2>Delivery details</h2><div className="form-grid"><label>First name<input required placeholder="Your first name" /></label><label>Last name<input required placeholder="Your last name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Phone<input required placeholder="+995 5XX XX XX XX" /></label><label className="full-field">Address<input required placeholder="Street and building number" /></label><label>City<select defaultValue="Tbilisi"><option>Tbilisi</option><option>Batumi</option><option>Kutaisi</option><option>Other</option></select></label><label>Delivery note<input placeholder="Optional" /></label></div></div><aside className="checkout-summary"><p className="kicker">ORDER TOTAL</p><div><span>Products</span><strong>{total}₾</strong></div><div><span>Delivery</span><strong>Free</strong></div><hr /><div className="summary-total"><span>Total</span><strong>{total}₾</strong></div><button className="checkout" type="submit">Place order <span>↗</span></button></aside></form></main>
}

function CartDrawer({ cart, total, updateQuantity, removeProduct, onClose, onCheckout, onShop }) {
    return <div className="cart-drawer-backdrop" onClick={onClose}>
        <aside className="cart-drawer" onClick={(event) => event.stopPropagation()} aria-label="Shopping bag">
            <div className="cart-drawer-head"><div><p className="kicker">YOUR SELECTION</p><h2>Your bag <span>{cart.length}</span></h2></div><button className="drawer-close" onClick={onClose} aria-label="Close bag">×</button></div>
            {cart.length ? <>
                <div className="cart-drawer-items">{cart.map((item) => <div className="cart-drawer-item" key={item.id}><div className="cart-drawer-image"><img src={item.image} alt={`${item.brand} ${item.name}`} /></div><div className="cart-drawer-copy"><span>{item.brand}</span><strong>{item.name}</strong><small>{item.price}₾ · {item.flavor}</small><div className="drawer-quantity"><button onClick={() => updateQuantity(item.id, -1)} aria-label={`Decrease ${item.name}`}>−</button><b>{item.quantity}</b><button onClick={() => updateQuantity(item.id, 1)} aria-label={`Increase ${item.name}`}>+</button><button className="drawer-remove" onClick={() => removeProduct(item.id)}>Remove</button></div></div></div>)}</div>
                <div className="cart-drawer-summary"><div><span>Total</span><strong>{total}₾</strong></div><button className="checkout" onClick={onCheckout}>Checkout <span>↗</span></button></div>
            </> : <div className="drawer-empty"><strong>Your bag is empty</strong><p>Add a device to see it here.</p><button className="hero-button" onClick={onShop}>Browse devices</button></div>}
        </aside>
    </div>
}

function App() {
    const [page, setPage] = useState('home')
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [quickView, setQuickView] = useState(null)
    const [favorites, setFavorites] = useState([])
    const [favoritesOnly, setFavoritesOnly] = useState(false)
    const [cart, setCart] = useState([])
    const [cartOpen, setCartOpen] = useState(false)
    const [notice, setNotice] = useState('')
    const [filters, setFiltersState] = useState({ category: 'All products', brand: 'All brands', flavor: 'All flavors', puffs: 'All puff counts', nicotine: 'All nicotine', price: 'All prices', sort: 'Recommended', query: '' })
    const [view, setView] = useState('grid')
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const setFilters = (next) => setFiltersState((current) => ({ ...current, ...next }))
    const clearFilters = () => setFiltersState({ category: 'All products', brand: 'All brands', flavor: 'All flavors', puffs: 'All puff counts', nicotine: 'All nicotine', price: 'All prices', sort: 'Recommended', query: '' })
    const productsToShow = useMemo(() => {
        const { category, brand, flavor, puffs, nicotine, price, sort, query } = filters
        const result = products.filter((product) => {
            const categoryMatch = category === 'All products' || product.type === (category === 'Pod systems' ? 'Pod system' : category === 'Starter kits' ? 'Starter kit' : 'Disposable')
            const brandMatch = brand === 'All brands' || product.brand === brand
            const flavorMatch = flavor === 'All flavors' || product.flavor.toLowerCase().includes(flavor.toLowerCase())
            const puffValue = Number(product.puffs.replace(/\D/g, ''))
            const puffMatch = puffs === 'All puff counts' || (puffs === 'Under 1,000' && puffValue < 1000) || (puffs === '1,000–5,000' && puffValue >= 1000 && puffValue <= 5000) || (puffs === '5,000+' && puffValue > 5000)
            const nicotineMatch = nicotine === 'All nicotine' || product.nicotine === nicotine
            const priceMatch = price === 'All prices' || (price === 'Under 30₾' && product.price < 30) || (price === '30₾–60₾' && product.price >= 30 && product.price <= 60) || (price === '60₾+' && product.price > 60)
            const searchMatch = `${product.brand} ${product.name} ${product.flavor}`.toLowerCase().includes(query.toLowerCase())
            const favoriteMatch = !favoritesOnly || favorites.includes(product.id)
            return categoryMatch && brandMatch && flavorMatch && puffMatch && nicotineMatch && priceMatch && searchMatch && favoriteMatch
        })
        return result.sort((a, b) => sort === 'Price: low to high' ? a.price - b.price : sort === 'Price: high to low' ? b.price - a.price : 0)
    }, [filters, favorites, favoritesOnly])
    const openProduct = (product) => { setSelectedProduct(product); setPage('product'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
    const goShop = (flavor = '', selectedBrand = '') => { setFavoritesOnly(false); setFilters({ query: flavor, brand: selectedBrand || 'All brands', flavor: 'All flavors' }); setPage('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
    const toggleFavorite = (id) => setFavorites((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id])
    const addToCart = (product) => { setCart((items) => { const existing = items.find((item) => item.id === product.id); return existing ? items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { ...product, quantity: 1 }] }); setCartOpen(true); setNotice(`${product.brand} ${product.name} added to bag`); window.setTimeout(() => setNotice(''), 2400) }
    const updateQuantity = (id, change) => setCart((items) => items.map((item) => item.id === id ? { ...item, quantity: item.quantity + change } : item).filter((item) => item.quantity > 0))
    const removeProduct = (id) => setCart((items) => items.filter((item) => item.id !== id))

    const nav = (destination) => { setPage(destination); setSelectedProduct(null); if (destination === 'shop') setFavoritesOnly(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
    const openFavorites = () => { setPage('shop'); setFavoritesOnly(true); setSelectedProduct(null); window.scrollTo({ top: 0, behavior: 'smooth' }) }

    return (
        <div className="storefront">
            <div className="topline"><span>18+ for adult customers only</span><span>Tbilisi · nationwide delivery</span></div>
            <header className="header">
                <button className="logo" onClick={() => nav('home')}>
                    <span className="logo-symbol">E</span>
                    <span>ELECTRO<span>ROOM</span></span>
                </button>
                <nav>
                    <button className={page === 'home' ? 'active' : ''} onClick={() => nav('home')}>Home</button>
                    <button className={page === 'shop' && !favoritesOnly ? 'active' : ''} onClick={() => nav('shop')}>Shop</button>
                    <button onClick={() => nav('shop')}>Choosing guide</button>
                    <button onClick={() => nav('home')}>About us</button>
                </nav>
                <div className="header-tools">
                    <label className="header-search">
                        <span>⌕</span>
                        <input onFocus={() => setPage('shop')} value={filters.query} onChange={(event) => { setFavoritesOnly(false); setFilters({ query: event.target.value }) }} placeholder="Search model or brand" />
                    </label>
                    <button className="round-tool" onClick={openFavorites} aria-label="View saved devices" aria-pressed={favoritesOnly} title="View saved devices">
                        ♡<small>{favorites.length}</small>
                    </button>
                    <button className="bag-tool" onClick={() => setCartOpen(true)} aria-label="Open bag">
                        <span>Bag</span><b>{cartCount.toString().padStart(2, '0')}</b>
                    </button>
                </div>
            </header>
            {page === 'home' && <HomePage onShop={goShop} onOpen={openProduct} onQuickView={setQuickView} onAdd={addToCart} favorites={favorites} onFavorite={toggleFavorite} />}
            {page === 'shop' && <ShopPage productsToShow={productsToShow} filters={filters} setFilters={setFilters} view={view} setView={setView} onOpen={openProduct} onQuickView={setQuickView} onAdd={addToCart} favorites={favorites} onFavorite={toggleFavorite} clearFilters={clearFilters} favoritesOnly={favoritesOnly} onToggleFavorites={() => setFavoritesOnly((current) => !current)} />}
            {page === 'product' && selectedProduct && <ProductPage product={selectedProduct} onBack={() => nav('shop')} onAdd={addToCart} onOpen={openProduct} related={products.filter((item) => item.id !== selectedProduct.id)} />}
            {page === 'cart' && <CartPage cart={cart} total={cartTotal} updateQuantity={updateQuantity} removeProduct={removeProduct} onShop={() => nav('shop')} onCheckout={() => nav('checkout')} />}
            {page === 'checkout' && <CheckoutPage total={cartTotal} onBack={() => nav('cart')} onComplete={() => { setCart([]); nav('home') }} />}
            <footer>
                <button className="logo" onClick={() => nav('home')}>
                    <span className="logo-symbol">E</span>
                    <span>ELECTRO<span>ROOM</span></span>
                </button>
                <p>A considered collection of electronic cigarettes.<br />For adult customers only.</p>
                <span>© 2026 ELECTROROOM</span>
            </footer>
            {notice && <div className="toast"><span>✓</span>{notice}</div>}
            {cartOpen && <CartDrawer cart={cart} total={cartTotal} updateQuantity={updateQuantity} removeProduct={removeProduct} onClose={() => setCartOpen(false)} onShop={() => { setCartOpen(false); nav('shop') }} onCheckout={() => { setCartOpen(false); nav('checkout') }} />}
            {quickView && (
                <div className="modal-backdrop" onClick={() => setQuickView(null)}>
                    <div className="quick-modal" onClick={(event) => event.stopPropagation()}>
                        <button className="modal-close" onClick={() => setQuickView(null)} aria-label="Close">×</button>
                        <div className="modal-art">
                            {quickView.image ? <img className="real-product-image" src={quickView.image} alt={`${quickView.brand} ${quickView.name}`} decoding="async" /> : <Device tone={quickView.tone} shape={quickView.shape} />}
                        </div>
                        <div className="modal-copy">
                            <p className="kicker">{quickView.brand} / {quickView.type}</p>
                            <h2>{quickView.name}</h2>
                            <p>{quickView.flavor} · {quickView.puffs} · Nicotine {quickView.nicotine}</p>
                            <strong>{quickView.price}₾</strong>
                            <button className="modal-add" onClick={() => { addToCart(quickView); setQuickView(null) }}>Add to bag <span>＋</span></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
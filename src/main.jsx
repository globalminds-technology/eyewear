import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Search, Heart, ShoppingBag, ArrowRight, ShieldCheck, Truck, Award, Sparkles, Menu, X} from 'lucide-react';
import './style.css';

const products = [
  {name:'Aurelia Gold',type:'OPTICAL',price:'₹4,900',img:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85'},
  {name:'Solstice Noir',type:'SUNGLASSES',price:'₹3,800',img:'https://images.unsplash.com/photo-151 eyewear?auto=format&fit=crop&w=900&q=85'},
  {name:'Forma Classic',type:'OPTICAL',price:'₹4,200',img:'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=900&q=85'},
  {name:'Coastline Amber',type:'SUNGLASSES',price:'₹3,600',img:'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=900&q=85'}
];
function App(){
 const [region,setRegion]=useState('India'); const [language,setLanguage]=useState('EN'); const [cart,setCart]=useState(0); const [menu,setMenu]=useState(false); const [notice,setNotice]=useState('');
 const currency=region==='India'?'₹':'€';
 const show=(msg)=>{setNotice(msg);setTimeout(()=>setNotice(''),2600)};
 return <div className="app">
  <header className="nav wrap">
   <a className="brand" href="#"><span className="brand-mark">E</span><span><b>ESCAPE</b><small>EY E W E A R</small></span></a>
   <nav className={menu?'nav-links open':'nav-links'}><a href="#home" onClick={()=>setMenu(false)}>Home</a><a href="#collections" onClick={()=>setMenu(false)}>Shop</a><a href="#story" onClick={()=>setMenu(false)}>Our Story</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></nav>
   <div className="nav-actions"><select aria-label="Choose region" value={region} onChange={e=>setRegion(e.target.value)}><option>India</option><option>Europe</option></select><select aria-label="Choose language" value={language} onChange={e=>setLanguage(e.target.value)}><option value="EN">EN</option><option value="FR">FR</option><option value="DE">DE</option></select><button className="icon" onClick={()=>show('Search preview coming soon')} aria-label="Search"><Search/></button><button className="icon" onClick={()=>show('Your wishlist is ready to explore')} aria-label="Wishlist"><Heart/></button><button className="icon bag" onClick={()=>show(`Your bag has ${cart} item(s)`)} aria-label="Shopping bag"><ShoppingBag/><i>{cart}</i></button><button className="gold small-cta" onClick={()=>show('Eye test booking — coming soon')}>Book a Consultation</button></div>
   <button className="mobile-menu" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button>
  </header>
  <main>
   <section className="hero wrap" id="home">
    <div className="hero-copy"><div className="eyebrow"><Sparkles size={13}/> THE ART OF SEEING · 2026</div><h1>See the world,<br/><em>beautifully.</em></h1><p>Eyewear that brings your point of view into focus. Thoughtfully designed frames, made for every version of you.</p><div className="hero-buttons"><a className="gold" href="#collections">Explore Collection <ArrowRight size={17}/></a><a className="outline" href="#story">Discover ESCAPE</a></div><div className="trust"><span><ShieldCheck/> Quality crafted</span><span><Truck/> Regional delivery</span><span><Award/> Signature style</span></div></div>
    <div className="hero-visual"><img src="./girl.jpg" alt="Girl model"/><div className="floating-note"><span>THE NEW EDIT</span><b>Frames with<br/>a point of view.</b><a href="#collections">Discover more ↗</a></div><div className="image-caption">ESCAPE / COLLECTION 01</div></div>
   </section>
   <section className="ticker"><span>FIND YOUR FRAME</span><i>✦</i><span>OWN YOUR VIEW</span><i>✦</i><span>MADE TO BE SEEN</span><i>✦</i><span>FIND YOUR FRAME</span></section>
   <section className="collections wrap" id="collections"><div className="section-head"><div><div className="eyebrow">CURATED FOR YOU</div><h2>Find your <em>frame.</em></h2></div><a href="#products">View all products <ArrowRight size={16}/></a></div>
    <div className="category-grid"><a className="category cat-one" href="#products"><img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85"/><span>01 / EVERYDAY ELEGANCE</span><h3>Optical frames</h3></a><a className="category cat-two" href="#products"><img src="https://images.unsplash.com/photo-151 eyewear?auto=format&fit=crop&w=900&q=85" onError={e=>e.currentTarget.src='https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=900&q=85'}/><span>02 / SUN-KISSED STYLE</span><h3>Sunglasses</h3></a></div>
   </section>
   <section className="products wrap" id="products"><div className="section-head"><div><div className="eyebrow">THE ESCAPE EDIT</div><h2>Most <em>loved.</em></h2></div><a href="#products">Shop the edit <ArrowRight size={16}/></a></div><div className="product-grid">{products.map((p,i)=><article className="product" key={p.name}><div className="product-image"><img src={i===1?'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=85':p.img} onError={e=>e.currentTarget.src='https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=85'} alt={p.name}/><button className="heart" onClick={()=>show(`${p.name} added to wishlist`)}><Heart size={17}/></button><button className="quick-add" onClick={()=>{setCart(cart+1);show(`${p.name} added to bag`)}}>Add to bag +</button></div><div className="product-meta"><div><small>{p.type}</small><h3>{p.name}</h3></div><b>{region==='India'?p.price:p.price.replace('₹','€')}</b></div></article>)}</div></section>
   <section className="story" id="story"><div className="story-image"><img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85" alt="Eyewear detail"/></div><div className="story-copy"><div className="eyebrow">A DIFFERENT POINT OF VIEW</div><h2>Style is how<br/>you <em>see it.</em></h2><p>ESCAPE is for the curious, the confident and the quietly bold. Discover considered eyewear that feels personal, effortless and entirely your own.</p><a className="outline" href="#contact">Get to know us <ArrowRight size={16}/></a></div></section>
   <section className="newsletter wrap" id="contact"><div><div className="eyebrow">A LITTLE MORE CLARITY</div><h2>Stay in the <em>picture.</em></h2><p>Sign up for new releases, style notes and exclusive previews.</p></div><form onSubmit={e=>{e.preventDefault();show('Thank you for joining ESCAPE.');e.currentTarget.reset()}}><input type="email" placeholder="Your email address" required/><button className="gold">Join us <ArrowRight size={16}/></button></form></section>
  </main>
  <footer><div className="wrap footer-inner"><a className="brand" href="#"><span className="brand-mark">E</span><span><b>ESCAPE</b><small>EY E W E A R</small></span></a><span>© 2026 ESCAPE Eyewear. All rights reserved.</span><div><a href="#contact">Instagram</a><a href="#contact">Privacy</a><a href="#contact">Support</a></div></div></footer>
  {notice&&<div className="toast">{notice}</div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);


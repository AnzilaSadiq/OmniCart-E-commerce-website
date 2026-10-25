export const products=[
{id:1,name:"Canvas Tote Bag",category:"Accessories",price:1850,oldPrice:2300,rating:4.8,image:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",description:"A stylish and spacious everyday tote bag."},
{id:2,name:"Ceramic Coffee Mug",category:"Home",price:950,oldPrice:1200,rating:4.7,image:"https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=85",description:"A minimal ceramic mug for everyday use."},
{id:3,name:"Wireless Headphones",category:"Tech",price:6490,oldPrice:7990,rating:4.9,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",description:"Comfortable headphones for music and entertainment."},
{id:4,name:"Classic Sneakers",category:"Fashion",price:5200,oldPrice:6100,rating:4.6,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",description:"Versatile sneakers for everyday outfits."},
{id:5,name:"Skincare Set",category:"Beauty",price:2850,oldPrice:3400,rating:4.8,image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",description:"A simple skincare set for your daily routine."},
{id:6,name:"Modern Desk Lamp",category:"Home",price:3250,oldPrice:null,rating:4.5,image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",description:"A modern lamp for your workspace."},
{id:7,name:"Classic Wrist Watch",category:"Accessories",price:4350,oldPrice:5000,rating:4.7,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",description:"A clean and versatile everyday wrist watch."},
{id:8,name:"Bluetooth Speaker",category:"Tech",price:3900,oldPrice:null,rating:4.6,image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",description:"A compact speaker for home or desk."}];
export const categories=["All","Fashion","Tech","Home","Beauty","Accessories"];
export const formatPrice=p=>new Intl.NumberFormat("en-PK",{style:"currency",currency:"PKR",maximumFractionDigits:0}).format(p);

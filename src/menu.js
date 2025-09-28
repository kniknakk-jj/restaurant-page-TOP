export function loadMenuPage() {
    const contentDiv = document.getElementById('content');
    
    // Clear existing content
    contentDiv.innerHTML = '';
    
    // Create main container
    const menuContainer = document.createElement('div');
    menuContainer.style.cssText = 'max-width: 900px; margin: 0 auto;';
    
    // Create page title
    const title = document.createElement('h1');
    title.textContent = 'Our Menu';
    title.style.cssText = 'text-align: center; color: #333; margin-bottom: 2rem; font-size: 2.5rem;';
    menuContainer.appendChild(title);
    
    // Create menu sections
    const menuSections = [
        {
            title: 'Appetizers',
            items: [
                { name: 'Bruschetta Trio', description: 'Three varieties of our signature bruschetta with fresh basil', price: '$12' },
                { name: 'Calamari Fritti', description: 'Crispy squid rings served with marinara and aioli', price: '$14' },
                { name: 'Antipasto Board', description: 'Selection of Italian meats, cheeses, and marinated vegetables', price: '$18' }
            ]
        },
        {
            title: 'Main Courses',
            items: [
                { name: 'Osso Buco', description: 'Braised veal shanks with saffron risotto and gremolata', price: '$32' },
                { name: 'Seafood Linguine', description: 'Fresh pasta with mussels, clams, and shrimp in white wine sauce', price: '$28' },
                { name: 'Bistecca Fiorentina', description: 'Grilled T-bone steak with roasted vegetables and herb butter', price: '$38' }
            ]
        },
        {
            title: 'Desserts',
            items: [
                { name: 'Tiramisu', description: 'Classic Italian dessert with espresso-soaked ladyfingers', price: '$9' },
                { name: 'Panna Cotta', description: 'Vanilla bean custard with seasonal berry compote', price: '$8' },
                { name: 'Gelato Selection', description: 'Three scoops of house-made gelato', price: '$7' }
            ]
        }
    ];
    
    menuSections.forEach(section => {
        // Create section container
        const sectionDiv = document.createElement('div');
        sectionDiv.style.cssText = 'margin-bottom: 3rem;';
        
        // Create section title
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section.title;
        sectionTitle.style.cssText = 'color: #007bff; font-size: 1.8rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #007bff;';
        sectionDiv.appendChild(sectionTitle);
        
        // Create items container
        const itemsContainer = document.createElement('div');
        itemsContainer.style.cssText = 'display: grid; gap: 1rem;';
        
        section.items.forEach(item => {
            // Create item container
            const itemDiv = document.createElement('div');
            itemDiv.style.cssText = 'display: flex; justify-content: space-between; align-items: flex-start; padding: 1rem; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #007bff;';
            
            // Create item content
            const itemContent = document.createElement('div');
            itemContent.style.cssText = 'flex: 1;';
            
            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            itemName.style.cssText = 'color: #333; margin-bottom: 0.5rem; font-size: 1.2rem;';
            itemContent.appendChild(itemName);
            
            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            itemDescription.style.cssText = 'color: #666; line-height: 1.5; margin: 0;';
            itemContent.appendChild(itemDescription);
            
            // Create price
            const price = document.createElement('div');
            price.textContent = item.price;
            price.style.cssText = 'font-weight: bold; color: #007bff; font-size: 1.2rem; margin-left: 1rem;';
            
            itemDiv.appendChild(itemContent);
            itemDiv.appendChild(price);
            itemsContainer.appendChild(itemDiv);
        });
        
        sectionDiv.appendChild(itemsContainer);
        menuContainer.appendChild(sectionDiv);
    });
    
    contentDiv.appendChild(menuContainer);
}
export function loadHomePage() {
    const contentDiv = document.getElementById('content');
    
    // Clear existing content
    contentDiv.innerHTML = '';
    
    // Create and append the restaurant image
    const img = document.createElement('img');
    img.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    img.alt = 'Restaurant interior';
    img.style.cssText = 'width: 100%; max-width: 800px; height: 400px; object-fit: cover; border-radius: 8px; margin: 0 auto 2rem auto; display: block;';
    contentDiv.appendChild(img);
    
    // Create and append the main headline
    const headline = document.createElement('h1');
    headline.textContent = 'Bella Vista Restaurant';
    headline.style.cssText = 'color: #333; margin-bottom: 1rem; text-align: center;';
    contentDiv.appendChild(headline);
    
    // Create a container div for the text content
    const textContainer = document.createElement('div');
    textContainer.style.cssText = 'max-width: 700px; margin: 0 auto; text-align: center; line-height: 1.8;';
    
    // Create and append the first paragraph
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Experience culinary excellence in the heart of the city. Our passionate chefs craft each dish with the finest ingredients, creating unforgettable flavors that celebrate both tradition and innovation.';
    paragraph1.style.cssText = 'font-size: 1.2rem; margin-bottom: 1.5rem; color: #555;';
    textContainer.appendChild(paragraph1);
    
    // Create and append the second paragraph
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Since 1985, Bella Vista has been a cornerstone of fine dining, offering an intimate atmosphere perfect for romantic dinners, business meetings, or special celebrations. Our carefully curated wine selection and attentive service ensure every visit is memorable.';
    paragraph2.style.cssText = 'margin-bottom: 1.5rem; color: #666;';
    textContainer.appendChild(paragraph2);
    
    // Create and append the quote paragraph
    const quote = document.createElement('p');
    quote.textContent = '"Where every meal is a celebration of flavor, and every guest is family."';
    quote.style.cssText = 'color: #666; font-style: italic;';
    textContainer.appendChild(quote);
    
    // Append the text container to the main content div
    contentDiv.appendChild(textContainer);
}
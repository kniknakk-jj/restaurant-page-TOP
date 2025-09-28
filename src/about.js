export function loadAboutPage() {
    const contentDiv = document.getElementById('content');
    
    // Clear existing content
    contentDiv.innerHTML = '';
    
    // Create main container
    const aboutContainer = document.createElement('div');
    aboutContainer.style.cssText = 'max-width: 900px; margin: 0 auto;';
    
    // Create page title
    const title = document.createElement('h1');
    title.textContent = 'About Bella Vista';
    title.style.cssText = 'text-align: center; color: #333; margin-bottom: 2rem; font-size: 2.5rem;';
    aboutContainer.appendChild(title);
    
    // Create hero section
    const heroSection = document.createElement('div');
    heroSection.style.cssText = 'text-align: center; margin-bottom: 3rem;';
    
    const heroText = document.createElement('p');
    heroText.textContent = 'A culinary journey that began with passion and continues with excellence.';
    heroText.style.cssText = 'font-size: 1.3rem; color: #666; font-style: italic;';
    heroSection.appendChild(heroText);
    
    aboutContainer.appendChild(heroSection);
    
    // Create story section
    const storySection = document.createElement('div');
    storySection.style.cssText = 'margin-bottom: 3rem;';
    
    const storyTitle = document.createElement('h2');
    storyTitle.textContent = 'Our Story';
    storyTitle.style.cssText = 'color: #007bff; font-size: 2rem; margin-bottom: 1rem; text-align: center;';
    storySection.appendChild(storyTitle);
    
    const storyContent = document.createElement('div');
    storyContent.style.cssText = 'background-color: #f8f9fa; padding: 2rem; border-radius: 8px; border-left: 4px solid #007bff;';
    
    const storyParagraphs = [
        'Founded in 1985 by Chef Marco Bellavista, our restaurant has been a cornerstone of authentic Italian cuisine for nearly four decades. What started as a small family trattoria has grown into one of the city\'s most beloved dining destinations.',
        'Chef Marco\'s vision was simple: bring the warmth and flavors of his grandmother\'s kitchen to every guest. Using recipes passed down through generations and the finest imported ingredients from Italy, we create dishes that honor tradition while embracing innovation.',
        'Today, under the guidance of Chef Marco\'s daughter, Chef Isabella, we continue to evolve while staying true to our roots. Every dish tells a story, every meal creates a memory, and every guest becomes part of our extended family.'
    ];
    
    storyParagraphs.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        p.style.cssText = 'color: #555; line-height: 1.8; margin-bottom: 1.5rem; font-size: 1.1rem;';
        storyContent.appendChild(p);
    });
    
    storySection.appendChild(storyContent);
    aboutContainer.appendChild(storySection);
    
    // Create team section
    const teamSection = document.createElement('div');
    teamSection.style.cssText = 'margin-bottom: 3rem;';
    
    const teamTitle = document.createElement('h2');
    teamTitle.textContent = 'Meet Our Team';
    teamTitle.style.cssText = 'color: #007bff; font-size: 2rem; margin-bottom: 2rem; text-align: center;';
    teamSection.appendChild(teamTitle);
    
    const teamGrid = document.createElement('div');
    teamGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;';
    
    const teamMembers = [
        {
            name: 'Chef Isabella Bellavista',
            role: 'Head Chef & Owner',
            description: 'Third-generation chef carrying on the family tradition with innovative flair.'
        },
        {
            name: 'Antonio Rossi',
            role: 'Sous Chef',
            description: 'Trained in Milan, Antonio brings authentic Italian techniques to every dish.'
        },
        {
            name: 'Maria Santos',
            role: 'Pastry Chef',
            description: 'Award-winning pastry chef specializing in traditional Italian desserts.'
        }
    ];
    
    teamMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.style.cssText = 'background-color: #f8f9fa; padding: 1.5rem; border-radius: 8px; text-align: center; border-top: 4px solid #007bff;';
        
        const memberName = document.createElement('h3');
        memberName.textContent = member.name;
        memberName.style.cssText = 'color: #333; margin-bottom: 0.5rem; font-size: 1.3rem;';
        memberCard.appendChild(memberName);
        
        const memberRole = document.createElement('p');
        memberRole.textContent = member.role;
        memberRole.style.cssText = 'color: #007bff; font-weight: bold; margin-bottom: 1rem; font-size: 1rem;';
        memberCard.appendChild(memberRole);
        
        const memberDescription = document.createElement('p');
        memberDescription.textContent = member.description;
        memberDescription.style.cssText = 'color: #666; line-height: 1.6; font-size: 0.95rem;';
        memberCard.appendChild(memberDescription);
        
        teamGrid.appendChild(memberCard);
    });
    
    teamSection.appendChild(teamGrid);
    aboutContainer.appendChild(teamSection);
    
    // Create values section
    const valuesSection = document.createElement('div');
    
    const valuesTitle = document.createElement('h2');
    valuesTitle.textContent = 'Our Values';
    valuesTitle.style.cssText = 'color: #007bff; font-size: 2rem; margin-bottom: 1.5rem; text-align: center;';
    valuesSection.appendChild(valuesTitle);
    
    const valuesGrid = document.createElement('div');
    valuesGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;';
    
    const values = [
        { title: 'Quality', description: 'Only the finest ingredients make it to your plate' },
        { title: 'Tradition', description: 'Honoring authentic Italian culinary heritage' },
        { title: 'Innovation', description: 'Constantly evolving while respecting our roots' },
        { title: 'Family', description: 'Every guest is welcomed as part of our famiglia' }
    ];
    
    values.forEach(value => {
        const valueCard = document.createElement('div');
        valueCard.style.cssText = 'background-color: #e7f3ff; padding: 1.5rem; border-radius: 8px; text-align: center;';
        
        const valueTitle = document.createElement('h3');
        valueTitle.textContent = value.title;
        valueTitle.style.cssText = 'color: #007bff; margin-bottom: 0.5rem; font-size: 1.2rem;';
        valueCard.appendChild(valueTitle);
        
        const valueDescription = document.createElement('p');
        valueDescription.textContent = value.description;
        valueDescription.style.cssText = 'color: #0056b3; margin: 0; font-size: 0.95rem;';
        valueCard.appendChild(valueDescription);
        
        valuesGrid.appendChild(valueCard);
    });
    
    valuesSection.appendChild(valuesGrid);
    aboutContainer.appendChild(valuesSection);
    
    contentDiv.appendChild(aboutContainer);
}
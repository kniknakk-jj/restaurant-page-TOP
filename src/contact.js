export function loadContactPage() {
    const contentDiv = document.getElementById('content');
    
    // Clear existing content
    contentDiv.innerHTML = '';
    
    // Create main container
    const contactContainer = document.createElement('div');
    contactContainer.style.cssText = 'max-width: 800px; margin: 0 auto;';
    
    // Create page title
    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    title.style.cssText = 'text-align: center; color: #333; margin-bottom: 2rem; font-size: 2.5rem;';
    contactContainer.appendChild(title);
    
    // Create subtitle
    const subtitle = document.createElement('p');
    subtitle.textContent = 'We would love to hear from you. Get in touch for reservations or any questions.';
    subtitle.style.cssText = 'text-align: center; color: #666; font-size: 1.2rem; margin-bottom: 3rem; line-height: 1.6;';
    contactContainer.appendChild(subtitle);
    
    // Create contact info and form container
    const contentWrapper = document.createElement('div');
    contentWrapper.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-bottom: 3rem;';
    
    // Contact Information Section
    const infoSection = document.createElement('div');
    infoSection.style.cssText = 'background-color: #f8f9fa; padding: 2rem; border-radius: 8px; border-left: 4px solid #007bff;';
    
    const infoTitle = document.createElement('h2');
    infoTitle.textContent = 'Restaurant Information';
    infoTitle.style.cssText = 'color: #007bff; margin-bottom: 1.5rem; font-size: 1.5rem;';
    infoSection.appendChild(infoTitle);
    
    const contactDetails = [
        { label: 'Address', value: '123 Culinary Street, Food District, City 12345' },
        { label: 'Phone', value: '(555) 123-4567' },
        { label: 'Email', value: 'info@bellavista.com' },
        { label: 'Hours', value: 'Mon-Thu: 5:00 PM - 10:00 PM\nFri-Sat: 5:00 PM - 11:00 PM\nSun: 4:00 PM - 9:00 PM' }
    ];
    
    contactDetails.forEach(detail => {
        const detailDiv = document.createElement('div');
        detailDiv.style.cssText = 'margin-bottom: 1rem;';
        
        const label = document.createElement('strong');
        label.textContent = detail.label + ': ';
        label.style.cssText = 'color: #333; display: block; margin-bottom: 0.3rem;';
        
        const value = document.createElement('span');
        value.textContent = detail.value;
        value.style.cssText = 'color: #666; white-space: pre-line;';
        
        detailDiv.appendChild(label);
        detailDiv.appendChild(value);
        infoSection.appendChild(detailDiv);
    });
    
    // Contact Form Section
    const formSection = document.createElement('div');
    
    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Send us a Message';
    formTitle.style.cssText = 'color: #007bff; margin-bottom: 1.5rem; font-size: 1.5rem;';
    formSection.appendChild(formTitle);
    
    const form = document.createElement('form');
    form.style.cssText = 'display: flex; flex-direction: column; gap: 1rem;';
    
    // Form fields
    const formFields = [
        { type: 'text', name: 'name', placeholder: 'Your Name', required: true },
        { type: 'email', name: 'email', placeholder: 'Your Email', required: true },
        { type: 'tel', name: 'phone', placeholder: 'Phone Number', required: false },
        { type: 'textarea', name: 'message', placeholder: 'Your Message', required: true, rows: 5 }
    ];
    
    formFields.forEach(field => {
        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
            input.rows = field.rows;
        } else {
            input = document.createElement('input');
            input.type = field.type;
        }
        
        input.name = field.name;
        input.placeholder = field.placeholder;
        input.required = field.required;
        input.style.cssText = 'padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; font-family: inherit; resize: vertical;';
        
        form.appendChild(input);
    });
    
    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Send Message';
    submitButton.style.cssText = 'background-color: #007bff; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 4px; font-size: 1rem; cursor: pointer; transition: background-color 0.3s ease;';
    
    submitButton.addEventListener('mouseenter', () => {
        submitButton.style.backgroundColor = '#0056b3';
    });
    
    submitButton.addEventListener('mouseleave', () => {
        submitButton.style.backgroundColor = '#007bff';
    });
    
    // Form submission handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
    
    form.appendChild(submitButton);
    formSection.appendChild(form);
    
    contentWrapper.appendChild(infoSection);
    contentWrapper.appendChild(formSection);
    contactContainer.appendChild(contentWrapper);
    
    // Add reservation note
    const reservationNote = document.createElement('div');
    reservationNote.style.cssText = 'background-color: #e7f3ff; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #007bff; text-align: center;';
    
    const noteTitle = document.createElement('h3');
    noteTitle.textContent = 'Reservations';
    noteTitle.style.cssText = 'color: #007bff; margin-bottom: 0.5rem;';
    
    const noteText = document.createElement('p');
    noteText.textContent = 'For immediate reservations, please call us directly. We recommend booking in advance for weekend dining.';
    noteText.style.cssText = 'color: #0056b3; margin: 0;';
    
    reservationNote.appendChild(noteTitle);
    reservationNote.appendChild(noteText);
    contactContainer.appendChild(reservationNote);
    
    contentDiv.appendChild(contactContainer);
}
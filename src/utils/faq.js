// Add FAQs in down here by adding or deleting objects and editing there content.
const faqSec = () => {
  let faqs = [{
    title: 'How many programmers does it take to change a light bulb?',
    body: 'None, that is a hardware problem.'
  },{
    title: 'Why do Java developers wear glasses?',
    body: "Because they don’t C#"
  },{
    title: 'Why do programmers prefer dark mode?',
    body: "Because the light attracts bugs."
  },{
    title: 'What’s a programmer’s favorite type of music?',
    body: "Algo-rhythm."
  },{
    title: 'Why did the programmer quit his job?',
    body: "Because he didn’t get arrays."
  },{
    title: "Why do programmers hate nature?",
    body: "It has too many bugs."
  }];
  
  let faqsHTML = '';
  
  faqs.forEach(faqItem => {
    faqsHTML += `
      <div class="faq-div">
        <div class="faq-top-sec js-faq-title">
          <H2>${faqItem.title}</H2>
        </div>
  
        <div class="faq-body-sec js-faq-body">
          <p>${faqItem.body}</p>
        </div>
      </div>
    `;
  });
  
  // Use innerHTML to append to the existing content
  document.querySelector('main').innerHTML += faqsHTML;
  console.log(faqsHTML);
  };
  
  export default faqSec;
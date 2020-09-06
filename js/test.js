
// grabs nav from DOM
const navItemsDom = document.querySelectorAll('nav a');
// console.log(navItemsDom);

// makes node list into array
const navArray = Array.from(navItemsDom);
// console.log(navArray);

// nav-item-1
const nav1 = navArray[0];

nav1.textContent = siteContent.nav["nav-item-1"];

// nav-item-2
const nav2 = navArray[1];
nav2.textContent = siteContent.nav["nav-item-2"];

// nav-item-3
const nav3 = navArray[2];
nav3.textContent = siteContent.nav["nav-item-3"];

// nav-item-4
const nav4 = navArray[3];
nav4.textContent = siteContent.nav["nav-item-4"];

// nav-item-5
const nav5= navArray[4];
nav4.textContent = siteContent.nav["nav-item-5"];

// nav-item-6
const nav6 = navArray[5];
nav5.textContent = siteContent.nav["nav-item-6"];

// main-logo-img
const mainLogo = document.querySelector('header img');
mainLogo.id = "logo-img";
mainLogo.class = "logo";
mainLogo.src = siteContent.nav["img-src"];


// call to action section
const h1Dom = document.getElementsByTagName("h1");
h1Dom[0].innerHTML = "DOM <br> IS <br> AWESOME"; //siteContent.cta.h1;

// cta button
const button = document.querySelector('.cta-text button');
button.textContent = siteContent.cta.button;

// cta img
const codeSnipImgDom = document.querySelector(".cta img");
codeSnipImgDom.src = siteContent.cta["img-src"];

// main content top text h4s
const topH4 = document.querySelectorAll(".main-content .top-content .text-content h4");

// main content top text ps
const topPgraphs = document.querySelectorAll(".main-content .top-content .text-content p");

// features content
// h4
topH4[0].textContent = siteContent["main-content"]["features-h4"];

// p
topPgraphs[0].textContent = siteContent["main-content"]["features-content"];

// about content
// h4
topH4[1].textContent = siteContent["main-content"]["about-h4"];

// p
topPgraphs[1].textContent = siteContent["main-content"]["about-content"];

// middle img
const midImg = document.querySelector(".middle-img");

midImg.src = siteContent["main-content"]["middle-img-src"];

// .bottom-content

const botH4 = document.querySelectorAll(".main-content .bottom-content .text-content h4");

const botPgraphs = document.querySelectorAll(".main-content .bottom-content .text-content p");

// services
// h4
botH4[0].textContent = siteContent["main-content"]["services-h4"];
// p
botPgraphs[0].textContent = siteContent["main-content"]["services-content"];

// product
// h4
botH4[1].textContent = siteContent["main-content"]["product-h4"];
// p
botPgraphs[1].textContent = siteContent["main-content"]["product-content"];

// vision
// h4
botH4[2].textContent = siteContent["main-content"]["vision-h4"];
// p
botPgraphs[2].textContent = siteContent["main-content"]["vision-content"];



// contact section

const contact = document.querySelectorAll(".contact h4 , .contact p");


// h4
contact[0].textContent = siteContent.contact["contact-h4"];

// address
contact[1].textContent = siteContent.contact.address;

// phone
contact[2].textContent = siteContent.contact.phone;

// email
contact[3].textContent = siteContent.contact.email;


// footer p
const footer = document.querySelector("footer p");

footer.textContent = siteContent.footer.copyright;




// console.log(textMixed);


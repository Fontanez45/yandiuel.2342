const reviews = [
  {
    id: 1,
    name: 'Alain Latortue',
    job: 'ELA Teacher',
    img: 'https://media.licdn.com/dms/image/v2/C4D03AQH1hb_YiDgvkQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1662519432541?e=1757548800&v=beta&t=dWbGu_R7hN520baUk1mb3oWycDN6pFQmicuewjc2cbc',
    text: "Mr. L is an amazing teacher who turns even the toughest moments into something funny and unforgettable, all while teaching us with skill, heart, and a whole lot of wisdom"
  },
  {
    id: 2,
    name: ' Mateo Portune',
    job: 'Physics Teacher',
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAoQMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAUDAgcB/8QALBABAAICAQIEBAYDAAAAAAAAAAECAxEEMVESIWFxBSIyQSNCUmKRoRQ0gf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMxEbmYecl4pSbW6QzORnvmt5+Vf0wCzLzMdPKnzT/Sa3NzT01X2hOLg7/wCZm/VH8OtOfb89In2nSMMGvjyVy1i1be8dntjUvalotWdTH3avHyxlxxbWp+8dkHQAAAAAAAAAAAACQR/EL6x1p95nf8IVPPn8fXasJlgAAAALPhtvmyV9pRqvh86zT61KNABAAAAAAAAAAAABm8+NZ994hO7cvJN81omI+WdQ4rAAAAAUcH/Yj2lO68a8481ZrETudFGrHQPYQAAAAAAAAAAAJBlcqNci/vtyW87Da0zlrrwxHmiWAAAAA6caN58cfuiXNZwcNotGWYjw6nXeSi4BAAAAAAAAAAAAB5yV8dLV7xpjzGp1PWG1MbQc/FWt4yRH1dQSAKAAGt+UfdsY6+Cla9o0g4FIvm3bzisb00UAAAAAAAAAAAAADYCL4jPy0j1mXvmci2PVccxues9kFrTa25mZn1B+AKAAK/h0/i2jvC9ixMxO4mYnvtbxORa9vBktE9pnqgtAAAAAAAAB4y5K46+K86gHsmdM7Jzb2n5I8Ed+suF8l7/VaZ/6DRycrFj/ADeKe1UuXmZL+VJ8FfTrKYUO/qAAAAAAADvi5WTHGt+Kvafsrx8zFfrPhn9zNAbUTExuJifYY1b2r9Npj2l3x8zLX6vnj1QaQ54c1Mtd18tfaesOgAAE9GZzb2vyLRM+VekAQcAFAAAAAAAAAAAAAjqAPfHtNctZjrvXv5tcEoAA/9k=',
    text: 'Mr. Portune is an incredible teacher who makes learning a blast—he’s hilarious when someone slips up, even flipping desks in good fun, and always knows how to teach us in a way that sticks.',
  },
  {
    id: 3,
    name: 'Lisbel Feliz ',
    job: 'Geomnetry Teacher',
    img: 'https://media.licdn.com/dms/image/v2/C4D03AQHiX_arQbo5VQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1619111322050?e=1757548800&v=beta&t=6N8LtxPBW_cuIGTee1tKEeSXF34CqKPdnZO04EqIN0o',
    text: 'Ms. Feliz is a fantastic teacher who brings so much energy and positivity to our class. She’s always ready to help out us when we need and is the reason I passed the regents',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
})



















    





// آرایه کتاب‌ها
const books = [
  {
    title: "نازنین",
    author: "داستایوفسکی",
    rating: 8.92,
    price: "120,000 تومان",
    image: "../media/book/b1.jpg",
    link: "#"
  },
  {
    title: "جنایت و مکافات",
    author: "داستایوفسکی",
    rating: 9.15,
    price: "150,000 تومان",
    image: "../media/book/b2.jpg",
    link: "#"
  },
  {
    title: "مسخ",
    author: "کافکا",
    rating: 8.70,
    price: "110,000 تومان",
    image: "../media/book/b3.jpg",
    link: "#"
  },
    {
    title: "مسخ",
    author: "کافکا",
    rating: 8.70,
    price: "110,000 تومان",
    image: "../media/book/b5.jpg",
    link: "#"
  }
];

// گرفتن کانتینر
const booksRow = document.getElementById("books-row");

// ساخت کارت‌ها
books.forEach(book => {
  const card = document.createElement("div");
  card.classList.add("book-card");

  card.innerHTML = `
    <img src="${book.image}" alt="${book.title}">
    <div class="book-title">${book.title}</div>
    <div class="book-author">${book.author}</div>
    <div class="book-rating">${book.rating}</div>
    <div class="book-price">${book.price}</div>
    <a href="${book.link}" class="book-link">دریافت</a>
  `;

  booksRow.appendChild(card);
});
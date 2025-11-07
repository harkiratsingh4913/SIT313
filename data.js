const img = (w=300, h=200) => `https://picsum.photos/${w}/${h}?random=${Math.random()}`

export const articles = [
  { id: 'a1', image: img(), title: "Article's Name", description: 'e.g., React OR Vue', rating: '★5', author: "Author's name" },
  { id: 'a2', image: img(), title: "Article's Name", description: 'e.g., NodeJS',       rating: '★5', author: "Author's name" },
  { id: 'a3', image: img(), title: "Article's Name", description: 'e.g., React Hooks',  rating: '★5', author: "Author's name" }
]

export const tutorials = [
  { id: 't1', image: img(), title: "Tutorial's Name", description: 'e.g., JS6',            rating: '★5',  author: 'username' },
  { id: 't2', image: img(), title: "Tutorial's Name", description: 'e.g., React Router',   rating: '★5',  author: 'username' },
  { id: 't3', image: img(), title: "Tutorial's Name", description: 'e.g., Express',        rating: '★4.9',author: 'username' }
]

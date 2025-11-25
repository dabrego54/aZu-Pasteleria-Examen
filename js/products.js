const products = [
  {
    id: 1,
    nombre: "Torta Palmera Manjar y Frambuesa",
    categoria: "Tortas",
    precio: 25990,
    imagen: "https://i.ibb.co/hF6NKzdH/torta-1.jpg",
    descripcion: "Bizcocho esponjoso relleno de manjar y frambuesa, decorado con crema y palmeras crujientes."
  },
  {
    id: 2,
    nombre: "Torta Milhoja Manjar y Merengue",
    categoria: "Tortas",
    precio: 32990,
    imagen: "https://i.ibb.co/hJX2bMHj/torta-merengue-manjar.png",
    descripcion: "Capas de milhoja dorada con abundante manjar artesanal y un suave merengue italiano."
  },
  {
    id: 3,
    nombre: "Torta Zanahoria Queso Crema",
    categoria: "Tortas",
    precio: 31990,
    imagen: "https://i.ibb.co/9mvsmbZZ/carrot-cake.jpg",
    descripcion: "Bizcocho húmedo de zanahoria con especias y frosting de queso crema ligeramente cítrico."
  },
  {
    id: 4,
    nombre: "Torta Helada Merengue Frambuesa",
    categoria: "Tortas",
    precio: 19990,
    imagen: "https://i.ibb.co/fYKwJ3rk/Brazo-merengue-framb.png",
    descripcion: "Clásico brazo de reina helado con merengue y relleno de frambuesa fresca."
  },
  {
    id: 5,
    nombre: "Caja de Fudge Brownie (9 trozos)",
    categoria: "Brownies",
    precio: 12990,
    imagen: "https://i.ibb.co/k6Qzpw21/brownie-box.jpg",
    descripcion: "Brownies intensos de chocolate belga, corte cuadrado perfecto para compartir."
  },
  {
    id: 6,
    nombre: "Tableta Chocolate Pistacho 100 g",
    categoria: "Chocolates",
    precio: 5990,
    imagen: "https://i.ibb.co/CKcKzC3G/tableto-n-psitacho.jpg",
    descripcion: "Chocolate semiamargo con topping de pistachos tostados y toque de sal de mar."
  },
  {
    id: 7,
    nombre: "Cookie Box Arándano Limón (6 u)",
    categoria: "Galletas",
    precio: 13990,
    imagen: "https://i.ibb.co/wrb4gcwF/galleta-ara-ndano.jpg",
    descripcion: "Galletas suaves con arándanos deshidratados y glaseado ligero de limón."
  },
  {
    id: 8,
    nombre: "Cookie Box Chocolate y Maní (6 u)",
    categoria: "Galletas",
    precio: 15990,
    imagen: "https://i.ibb.co/5h1CVHzy/choc-chip-cookie.jpg",
    descripcion: "Galletas chunky con chips de chocolate y trozos de maní tostado."
  }
];

function formatCurrency(amount){
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(amount);
}

function getProductById(id){
  return products.find(p => p.id === Number(id));
}

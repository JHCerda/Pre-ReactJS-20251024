Nombres de los componentes como deben estar para la entrega:

App.jsx: limpio, no debo pasar logica ni estados que deben ser responsabilidad de otros componentes ⚠️

/src/components: (cada par componente y css en su respectiva carpeta en PascalCase, todos llamados igual)
Nav.jsx: con Links de react router dom y consumo de contexto para el numero de productos en carrito
ItemListContainer: con su estado y useEffect para pedir los productos
ItemList: para mapear el estado que le pasa el contenedor
Item: tarjeta de producto

ItemDetailContainer: con su estado y useEffect para pedir 1 solo producto por id
ItemDetail: recibe el estado del contenedor y renderiza el detalle de producto (opcional reutilizar Item si usan children)

/src/context: 
Contexto carrito: sabemos que se puede optimizar y separar diferente, pero lo hacemos igual todos para esta cursada. El provider tendra el estado y funciones que va a proveer. (Nosotros hicimos CartContext, useCartContext y CartProvider. Pueden hacer eso o esas 3 cosas en 1 solo archivo).
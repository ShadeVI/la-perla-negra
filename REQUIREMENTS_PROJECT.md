# Que necesita el cliente
El cliente necesita un CMS y una aplicación para dispositivos moviles (tablet Android en concreto) que muestre una carta digital.

## Stack
Hemos elegido el siguiente stack tecnologico:
- Sanity (Headless CMS)
- NextJS (para integrar el Sanity Studio y en futuro poder desarrollar la web se necesario)
- React Native (para los tablets)

## Requisitos de la carta digital

Mostrar un menu con las *categorias* y lista con los *platos* y los detalles.
El diseño UI es de nuestra elecciòn.

Cada Plato pertenece a una categoria.

Una **categoria** poseé los siguientes datos:
- nombre
- slug
- esVisible

Un **plato** poseé los siguientes datos:
- numero de plato
- nombre
- slug
- descripción
- categoria
- foto
- precio
- esRecomendado
- ingredientes
- esVisible

Un **ingrediente** poseé los siguientes datos:
- nombre
- slug

### EJEMPLO PARA QUERY GROQ para el frontend

```
*[_type == "dish"]{
  "title": title.es,
    "description": description{
      es,
        en,
        de
    },
    category->{"title": title{es}, "slug": slug.current},
    "slug": slug.current,
    "ingredients": ingredients[]->{"name": name{es}}
}
```
# Strawberry Shortcake
Finalmente, la API REST para información sobre tus personajes favoritos de Strawberry Shortcake.

La información fue recolectada manualmente de [Fandom wiki](https://strawberryshortcake.fandom.com/) (Strawberry Shortcake's Berry Bitty Adventures - Era 2009).

🌐 API:

Base url (producción)
https://strawberry-shortcake-api.onrender.com

## Uso del API (endpoints).

`GET characters`

Obtiene la lista de todos los personajes con su información completa, si se especifica un filtro por QueryString será aplicado.

Todos
>https://strawberry-shortcake-api.onrender.com/characters

Con filtro
>https://strawberry-shortcake-api.onrender.com/characters?name=LemonMeringue

### Response

```js
[
  {
    "_id": "65070e920d5d0ed33b70cf39",
    "name": "Apple Dumplin'",
    "nickName": "unknown",
    "age": "12-14",
    "gender": "Female",
    "theme": "Apples",
    "hairColor": "Blonde",
    "eyeColor": "Grey-silver",
    "picture": "https://...",
    "friends": [
      {
        "name": "Lemon Meringue",
        "gender": "Female",
        "species": "Human"
      }
    ],
    "geneation": "2009",
    "pets": [
      {
        "name": "Teatime Turtle",
        "gender": "Female",
        "species": "Turtle"
      }
    ],
    "personality": "Apple is shown as a busy bodied ...",
    "appearance": "Apple has blonde hair and bangs...",
    "voiceActor": "Rebecca Shoichet (2009)",
    "summary": "Apple Dumplin' is a baby character from...",
    "species": "Human",
    
  },
  //...
]
```

___

`GET character/{id}`

Obtiene un personaje mediante su id.
>https://strawberry-shortcake-api.onrender.com/characters/65070e920d5d0ed33b70cf39

### Response
```json
[
  {
    "_id": "65070e920d5d0ed33b70cf39",
    "name": "Apple Dumplin'",
    "nickName": "unknown",
    "age": "12-14",
    "gender": "Female",
    "theme": "Apples",
    "hairColor": "Blonde",
    "eyeColor": "Grey-silver",
    "picture": "https://...",
    "friends": [
      {
        "name": "Lemon Meringue",
        "gender": "Female",
        "species": "Human"
      }
    ],
    "geneation": "2009",
    "pets": [
      {
        "name": "Teatime Turtle",
        "gender": "Female",
        "species": "Turtle"
      }
    ],
    "personality": "Apple is shown as a busy bodied ...",
    "appearance": "Apple has blonde hair and bangs...",
    "voiceActor": "Rebecca Shoichet (2009)",
    "summary": "Apple Dumplin' is a baby character from...",
    "species": "Human",
    
  },
  //...
]
```

___

`GET character/summary`

Obtiene un array de personajes solo con su id y su nombre.
>https://strawberry-shortcake-api.onrender.com/characters/summary

#### Response
```json
[
  {
    "_id": "65070e920d5d0ed33b70cf37",
    "name": "Strawberry Shortcake",
    
  },
  {
    "_id": "65070e920d5d0ed33b70cf39",
    "name": "Apple Dumplin'",
  },
  //...
]
```
## HTTP status codes
| Código | Nombre | Descripción |
| :---: | --- | --- |
| 200 | Ok | Al hacer un GET. |
| 204 | Ok | Al hacer POST, PUT o DELETE satisfactorio (uso interno o colaboradores). |
| 404 | NotFound | Al intentar obtener un personaje por id con id inexistente. |
| 404 | NotFound | Al hacer un request a una ruta inexistente. |
| 401 | Unauthorized | Al hacer un request a una ruta que requiere ApiKey sin el ApiKey correspondiente (uso interno o colaboradores). |
| 418 | I'm a Teapot | Al hacer un post a `/teapot` 😜. |


## Postman collection
TODO

## Contributing
Si queres agregar personajes o agregar y/o modificar datos hace un pull request del archivo [characters.json](https://github.com/mikelapro/strawberry-shortcake-api/blob/main/src/strawberry-shortcake-api/models/characters.json) así lo agrego. Gracias!

> [!NOTE]
> Este es mi primer proyecto de API con nodejs y express. Porfa, dame una ***estrella⭐***!
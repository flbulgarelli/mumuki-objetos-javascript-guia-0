Lo que devolvimos en los ejercicios anteriores es un texto, más conocido como `String`.

¿Y qué podemos hacer con lo que devuelve (retorna) un método?

Por ejemplo, podemos guardarlo en una variable:

```javascript
var unCanto = pepita.cantar()
```

O mejor, podemos usarlo directamente. Supongamos que queremos hacer que pepita grite (que es lo mismo que cantar, pero en mayúsculas):

```javascript
pepita.cantar().toUpperCase()
```

¿Qué fue esto? A `pepita` le enviamos el mensaje `cantar`, que devuelve, como ya sabemos, "pri pri priiiii". Y luego, a "pri pri priiiii" el enviamos otro mensaje: `toUpperCase`, que ya viene con JavaScript y convierte un string minúscula en un string mayúscula.

Moraleja, obtenemos `"PRI PRI PRIIIII"`.

> Ahora te toca a vos: supongamos que ya tenemos a pepita, y que la vivacidad de una golondrina depende de la cantidad de caracteres que tenga.
>
> Enviá los mensajes necesarios para averiguar la vivacidad de `pepita`.

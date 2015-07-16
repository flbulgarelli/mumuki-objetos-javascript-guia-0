Repasemos lo que escribimos: la primera línea ya la entendemos: creamos a pepita.

```javascript
pepita = new Object()
```

Lo nuevo está en las lineas siguientes: definir, dentro de pepita, un método, el método `cantar!`


```javascript
pepita.cantar = function() {
  "pri pri priiiii"
}
```

Un método de un objeto es la forma de expresar qué queremos que nuestro objeto haga, cuando se envíe un mensaje del mismo nombre (también llamado **selector**).

Y en este caso le estamos diciendo a pepita que, cuando se le envíe el mensaje `cantar`, devuelva el texto "pri pri priiiii".

Entonces, si luego de definir el método, escribimos:

```javascript
pepita.cantar()
```

obtendremos como respuesta `"pri pri priiiii"`

> Veamos si se entiende: creá a la golondrina `anastasia`, y hacé que, cuando reciba el mensaje `cantar`, responda simplemente "pri" (es un poco menos vivaz que pepita...).


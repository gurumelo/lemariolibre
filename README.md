# Lemario libre API

Hola, soy gilipoyas.


Se preocuparon de que cada acto cotidiano fuera un ejercicio económico, magnífico,
se comerían entre ellos, por optar al dinero. Tomar una ducha, calentarse el cuerpo,
beber un vaso de agua, iluminar la hoja... Postúlese y pase por caja.


La capacidad de cambio, el egoísmo es proporcional al sufrimiento, había sido reducida
a pataletas como consumidores, me suben la cuota, no me funciona el, se ha roto la.


Un lemario, es todo el conjunto de palabras posibles, que forman parte de un idioma.
En castellano, ellos fueron a pedirles a la RAE el lemario, fija, limpia y da esplendor.
Les respondieron, que no podían cederles las palabras que usaban para hablar, que éstas pertenecían
a una empresa privada, Espasa.


Ni lo que hablamos es libre.


Ellos extrajeron de la RAE las palabras y las liberaron, http://lemarios.olea.org/, Entre todos conformaron
un repositorio que sirve para proyectos de software libre como libreoffice. https://github.com/sbosio/rla-es


Cuando es libre, ellos ya no son consumidores puros sino creadores, y duermen y tienen sueños más bonitos.


## La API

Haciendo uso de rla-es, expressjs, validator, hunspell-spellchecker se conforma una API a la cual preguntar 
si una palabra existe o no (¿existirá esto que escribo o hablo, lo estoy escribiendo bien?)



#### Instalación y ejecución

```
git clone https://github.com/gurumelo/lemariolibre && cd lemariolibre && npm install && node index.js
```


#### Ejemplo de uso
```
curl http://localhost:1984/api/jamón
# devuelve: {'existe': true}

curl http://localhost:1984/api/jamon
#devuelve: {'existe': false}
```


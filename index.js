var fs 			= require('fs');
var Spellchecker 	= require('hunspell-spellchecker');
var validator		= require('validator');
var express 		= require('express');
var app 		= express();
 
var spellchecker = new Spellchecker();
var DICT = spellchecker.parse({
    aff: fs.readFileSync("./es_ES.aff"),
    dic: fs.readFileSync("./es_ES.dic")
});
spellchecker.use(DICT);

app.get('/api/:palabra', function (req, res) {
	if ( Object.keys(req.params).length == 1 && validator.isAlpha(req.params.palabra, 'es-ES') ) {
		var comprueba = spellchecker.check(req.params.palabra);
		res.json({'existe': comprueba});
	} else {
		res.sendStatus(404);
	}
});

app.listen(1984, function () {
  console.log('La magia sucede en: Uso http://localhost:1984/api/{palabra}')
});

var d3 = require('d3'),
    fs = require('fs'),
    metatip = require('../')(d3);

(function() {
    var map = L.map('map').setView([37.8, -96], 4),
        gjLayer = L.geoJson(JSON.parse(fs.readFileSync('site/states.json')));

    L.tileLayer('http://a.tiles.mapbox.com/v3/tmcw.map-l1m85h7s/{z}/{x}/{y}.png')
        .addTo(map);

    gjLayer.addTo(map);

    gjLayer.on('click', metatip(map).config({
        fields: {
            name: {
                elem: 'h3'
            },
            density: {
                elem: 'h1'
            }
        }
    }));
})();

(function() {
    var map = L.map('map-2').setView([37.8, -96], 4),
        gjLayer = L.geoJson(JSON.parse(fs.readFileSync('site/images.json')));

    L.tileLayer('http://a.tiles.mapbox.com/v3/tmcw.map-l1m85h7s/{z}/{x}/{y}.png')
        .addTo(map);

    gjLayer.addTo(map);

    gjLayer.on('click', metatip(map).config({
        fields: {
            image: {
                elem: 'img'
            }
        }
    }));
})();

(function() {
    var map = L.map('map-3').setView([37.8, -96], 4),
        gjLayer = L.geoJson(JSON.parse(fs.readFileSync('site/links.json')));

    L.tileLayer('http://a.tiles.mapbox.com/v3/tmcw.map-l1m85h7s/{z}/{x}/{y}.png')
        .addTo(map);

    gjLayer.addTo(map);

    gjLayer.on('click', metatip(map));
})();

(function() {
    var map = L.map('map-4').setView([37.8, -96], 4),
        gjLayer = L.geoJson({
            type: 'Point',
            coordinates: [-100, 38]
        });

    L.tileLayer('http://a.tiles.mapbox.com/v3/tmcw.map-l1m85h7s/{z}/{x}/{y}.png')
        .addTo(map);

    gjLayer.addTo(map);

    gjLayer.on('click', metatip(map));
})();

var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SarmiBaru_1 = new ol.format.GeoJSON();
var features_SarmiBaru_1 = format_SarmiBaru_1.readFeatures(json_SarmiBaru_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SarmiBaru_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SarmiBaru_1.addFeatures(features_SarmiBaru_1);
var lyr_SarmiBaru_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SarmiBaru_1, 
                style: style_SarmiBaru_1,
                popuplayertitle: 'Sarmi Baru',
                interactive: true,
    title: 'Sarmi Baru<br />\
    <img src="styles/legend/SarmiBaru_1_0.png" /> 1,91 - 2,27 (Ribu)<br />\
    <img src="styles/legend/SarmiBaru_1_1.png" /> 2,27 - 2,86 (Ribu)<br />\
    <img src="styles/legend/SarmiBaru_1_2.png" /> 2,86 - 4,56 (Ribu)<br />\
    <img src="styles/legend/SarmiBaru_1_3.png" /> 4,56 - 15,2 (Ribu)<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_SarmiBaru_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SarmiBaru_1];
lyr_SarmiBaru_1.set('fieldAliases', {'Id': 'Id', 'Area': 'Area', 'Distrik': 'Distrik', 'Sarmi —': 'Sarmi —', 'Sarmi ��_1': 'Sarmi ��_1', });
lyr_SarmiBaru_1.set('fieldImages', {'Id': 'Range', 'Area': 'TextEdit', 'Distrik': 'TextEdit', 'Sarmi —': 'TextEdit', 'Sarmi ��_1': 'TextEdit', });
lyr_SarmiBaru_1.set('fieldLabels', {'Id': 'no label', 'Area': 'no label', 'Distrik': 'no label', 'Sarmi —': 'inline label - always visible', 'Sarmi ��_1': 'inline label - always visible', });
lyr_SarmiBaru_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
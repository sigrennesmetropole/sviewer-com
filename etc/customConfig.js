customConfig = {
    title: 'Sviewer com',

    /**
     * force default language, see etc/i18n.js
     */
    // lang: 'fr',

    /**
     * base url of the geOrchetra SDI. Layers coming from this SDI
     * will have enhanced features.
     */
    geOrchestraBaseUrl: 'https://public-test.sig.rennesmetropole.fr/',
     /**
     * projection
     */
    projcode: 'EPSG:3857',

    /**
     * map bounds
	 * x min, y min, x max, y max
     */
    initialExtent: [-227718,6091011,-154186,6160110],
    maxExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
    restrictedExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],

    /**
     * getFeatureInfo control
     */
    maxFeatures: 10,
    nodata: '<!--nodatadetect-->\n<!--nodatadetect-->',

    /**
     * openLS control
     */
    openLSGeocodeUrl: "http://gpp3-wxs.ign.fr/[CLEF GEOPORTAIL]/geoportail/ols?",

    /**
     * background layers (EPSG:3857)
     */
    layersBackground: [
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'https://public.sig.rennesmetropole.fr/geoserver/wms',
                params: {
                    'LAYERS': 'ref_fonds:pvci_simple_gris',
                    'TILED': true
                },
                extent: [-227718,6091011,-154186,6160110],
                attributions: [new ol.Attribution({ html: 'Plan de ville intercommunal et intercommunal : fond de plan gris <a href="https://public.sig.rennesmetropole.fr">(c) Rennes Metropole</a>'})],
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'https://public.sig.rennesmetropole.fr/geoserver/wms',
                params: {
                    'LAYERS': 'raster:ortho2017',
                    'TILED': true
                },
                extent: [-227718,6091011,-154186,6160110],
                attributions: [new ol.Attribution({ html: 'Orthophotographie aérienne 2014 <a href="https://public.sig.rennesmetropole.fr">(c) Rennes Metropole</a>'})],
            })
        }),
        /**new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'https://public.sig.rennesmetropole.fr/geoserver/wms',
                params: {
                    'LAYERS': 'ref_cad:cadastre',
                    'TILED': true
                },
                extent: [-227718,6091011,-154186,6160110],
                attributions: [new ol.Attribution({ html: 'Cadastre <a href="https://public.sig.rennesmetropole.fr">(c) Rennes Metropole</a>'})],
            })
        })*/
    ],

    /**
     * social media links (prefixes)
     */
    socialMedia: {
        'Twitter' : 'https://twitter.com/intent/tweet?text=',
        'Google+' : 'https://plus.google.com/share?url=',
        'Facebook': 'http://www.facebook.com/sharer/sharer.php?u='
    }
};

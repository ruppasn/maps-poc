export default {
    'type': 'geojson',
    'data': {
        'type': 'FeatureCollection',
        'features': [
            {
                // feature for Mapbox DC
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [78.472154, 17.4175971]
                },
                'properties': {
                    'title': 'Buddha Statue',
                    'icon': 'monument'
                }
            },
            {
                // feature for Mapbox SF
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [78.447495, 17.4233486]
                },
                'properties': {
                    'title': 'Pramati Technologies',
                    'icon': 'harbor'
                }
            }
        ]
    }
}
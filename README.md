### React app to explore MapboxGl maps.

## Run app
* To install all dependencies

        pnpm install

* To start application

        pnpm start

## Important map modules
* Mapd-charting
    * D3.js based multi-dimentional charts (Crossfilter based and explores datasets in browser).
    * Selecting tool on top of map. Refer https://omnisci.github.io/mapd-charting/docs/

* google-maps
    * Loads and uses google maps api.
    * see ```Googlemapsloader``` api.

* mapbox-gl (Graphics Library)
    * Library to manage maps.
    * Store geospatial vector data - points, lines, and polygons.
    * Defines the visual appearance of a map- Create map, add icons, text, change style, 3d view,draw items on it..etc

* @mapbox/mapbox-gl-draw
    * drawing and editing features (eg: polygon) on mapboxGl map
* mapbox/mapbox-gl-draw-static-mode
    * custom mode for mapbox/mapbox-gl-draw

* @turf/xxx"
    * Turf - multiple modules (modular geospatial engine). Uses GeoJSON format.
    * @turf/bbox - bounding box- gives array of coordinates
    * @turf/bbox-polygon- Takes a bbox and returns an equivalent polygon
    * @turf/helpers- feature like units, areas, measurements (eg: calculate area in square meters)
    * @turf/buffer - draw the buffer to geojson
* D3-geo:
    * Gives ```geoMercator``` map projection.


References:

* https://docs.mapbox.com/mapbox-gl-js/examples/

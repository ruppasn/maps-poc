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
    * See ```Googlemapsloader``` api.

* mapbox-gl (Graphics Library)
    * Library to manage maps.
    * Store geospatial vector data - points, lines, and polygons.
    * Defines the visual appearance of a map- Create map, add icons, text, change style, 3d view,draw items on it..etc

* @mapbox/mapbox-gl-draw
    * Drawing and editing features on mapboxGl map
* mapbox/mapbox-gl-draw-static-mode
    * Custom mode for mapbox/mapbox-gl-draw

* @turf/xxx"
    * Turf - multiple modules (modular geospatial engine). Uses GeoJSON format.
    * @turf/bbox - bounding box- gives array of coordinates
    * @turf/bbox-polygon- Takes a bbox and returns an equivalent polygon
    * @turf/helpers- feature like units, areas, measurements.
    * @turf/buffer - draw the buffer to geojson
* D3-geo:
    * Gives ```geoMercator``` map projection.
    
## Storybook

Story is a visual test case.

* To start storybook run ```pnpm run storybook``` command and access it on ```http://localhost:9009/```

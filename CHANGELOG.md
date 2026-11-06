# Changelog

All notable changes to Aeris are listed here. Versions follow [Semantic Versioning](https://semver.org/).

## [1.2.0] - 2026-11-06

### Added
- Sky postcards in Story, Square and Wide formats, rendered from the live sky, with save and share
- Weather alerts banner and list for heat, cold, storms, heavy rain, wind, UV, fog, air quality and river flow
- Rain countdown ring from 15-minute forecast steps
- Explain the sky: tappable hotspots on the sun, moon, clouds, rain, stars, mist and frost, with live numbers
- Forecast confidence from ensemble runs, with a shaded range chart and per-day confidence
- Model comparison of ECMWF, GFS and ICON
- Flood watch from the GloFAS river forecast
- Solar power estimate for 1 to 10 kW rooftop systems
- Beach mode for coastal cities, with wave height, sea temperature and best hours
- Plant care advice from rain, soil moisture and evaporation
- Sky collection of 18 badges
- Embeddable website widget (`widget.html`) in card and strip styles, sky, dark and light looks
- Open any city from the address bar with `?lat=&lon=&name=`

### Changed
- Tiles are grouped into sections: Today and this week, Sky and stars, Insights, Make and share
- Hero gains Postcard and Explain the sky buttons
- Tidier top bar on phones

## [1.1.0] - 2026-11-06

### Added
- Detail views for every tile, with hourly charts you can hover or touch, day tabs for the forecast, pollutant breakdowns, UV curve, wind and gusts, pressure trend and comfort breakdown
- Sunset score for every sunrise and sunset, based on cloud layers and rain chance
- Activity planner for nine activities, with best windows and a 7-day hour-by-hour heatmap
- Air quality planner: best hours to open windows and exercise, and when to keep windows closed
- Real moon phase, moonrise and moonset, next full and new moon, and a stargazing score; the live sky now draws the true phase and dims stars under a bright moon
- Trip packing list from a 16-day destination forecast, with ticks and copy
- Window mode: a full-screen live sky with a clock that follows real time

### Changed
- The air quality category is now shown as a pill so it stays readable on warm skies
- Removed duplicate sunrise and sunset labels from the sun arc

## [1.0.0] - 2026-11-06

First public release.

### Added
- Live WebGL sky driven by the real forecast: sun path, clouds, golden hour, moon and stars
- Rain on the glass with refraction, misted glass you can wipe, snow, fog, frost and lightning
- 48-hour time ribbon with play, keyboard controls and hour-by-hour strip
- Comfort score, best time outside, air quality, UV, wind, pressure, humidity, visibility, rain and sun arc
- Compare two cities with live skies, a plain-English summary and a 24-hour chart
- Sky sounds generated with the Web Audio API
- Installable PWA with offline support
- City search with results from your own country first, location lookup, °C and °F

[1.2.0]: https://github.com/harshxt01/aeris/releases/tag/v1.2.0
[1.1.0]: https://github.com/harshxt01/aeris/releases/tag/v1.1.0
[1.0.0]: https://github.com/harshxt01/aeris/releases/tag/v1.0.0

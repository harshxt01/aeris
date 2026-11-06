# Changelog

All notable changes to Aeris are listed here. Versions follow [Semantic Versioning](https://semver.org/).

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

[1.1.0]: https://github.com/harshxt01/aeris/releases/tag/v1.1.0
[1.0.0]: https://github.com/harshxt01/aeris/releases/tag/v1.0.0

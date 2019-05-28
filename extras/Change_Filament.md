---
layout: plugin

id: Change_Filament
title: Change_Filament
description: Facilitates changing filament (backs out old, loads new)
author: Jim Pingle
license: bsd-3-clause

date: 2019-05-27

homepage: https://github.com/jim-p/Change_Filament
source: https://github.com/jim-p/Change_Filament
archive: https://github.com/jim-p/Change_Filament/archive/master.zip

tags:
- filament

screenshots:
- url: url of a screenshot, /assets/img/...
  alt: alt-text of a screenshot
  caption: caption of a screenshot

featuredimage: url of a featured image for your plugin, /assets/img/...

---

This plugin makes it simple to change filament.

The plugin mimics the actions taken by the change filament action built into
Marlin. That feature is not available on all printers and also requires using
the control box to use, instead of doing everything in OctoPrint.

Configuration:

* **unload_length**: Lenth of filament to reverse out, in mm (Default: `500`)
* **unload_speed**: How fast to unload the filament, in mm/m (Default: `3600`)
* **load_length**: Length of filament to extrude when loading, in mm (Default:
  `50`)
* **load_speed**: How fast to extrude when loading filament, in mm/m (Default:
  `1800`)
* **y_park**: Position on the Y axis where the head will be moved when loading
  or unloading (Default: `0`)
* **x_park**: Position on the X axis where the head will be moved when loading
  or unloading. Depending on the filament path, may be best set to the midpoint
  of the X axis. (Default: `0`)
* **z_lift_relative**: How high to move the Z axis before unloading, in mm
  (Default: `10`)
* **park_speed**: How fast to move the head when parking, in mm/m (Default:
  `500`)


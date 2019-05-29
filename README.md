# Change_Filament

This plugin makes it simple to change filament.

The plugin mimics the actions taken by the change filament action built into
Marlin. That feature is not available on all printers and also requires using
the control box to use, instead of doing everything in OctoPrint.

## Setup

Install via the bundled [Plugin Manager](https://github.com/foosel/OctoPrint/wiki/Plugin:-Plugin-Manager)
or manually using this URL:

    https://github.com/jim-p/Change_Filament/archive/master.zip

## Configuration

* **unload_length**: Length of filament to reverse extrude when unloading, in mm.
* **unload_speed**: How fast to unload the filament, in mm/m.
* **load_length**: Length of filament to extrude when loading, in mm.
* **load_speed**: How fast to extrude when loading filament, in mm/m.
* **y_park**: Position on the Y axis where the head will be moved when loading or unloading.
* **x_park**: Position on the X axis where the head will be moved when loading or unloading. Depending on the filament path, may be best set to the midpoint of the X axis.
* **z_lift_relative**: How high to move the Z axis before unloading, in mm.
* **park_speed**: How fast to move the head when parking, in mm/m.

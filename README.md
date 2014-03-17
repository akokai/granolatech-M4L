# Max for Live devices

by Akos Kokai 

* **Granulator II BP**: A version of [Robert Henke's Granulator II](http://www.monolake.de/technology/granulator.html) instrument, modified to play in the [Bohlen-Pierce equal-tempered scale](http://en.wikipedia.org/wiki/Bohlen%E2%80%93Pierce_scale) centered at 440 Hz. Subject to CC-BY-NC-3.0 license.
* **beatsinc**: Drop an audio file into this instrument and play your selection in incremental slices triggered by MIDI notes. Restart the sample with note C3; any other note plays the next increment, with optional looping. Also tweak the playback rate.
* **octacut**: A kind of minimal, instant sampler instrument. Drop an audio file and trigger playback from eight different starting points, with MIDI notes C1-G1. Select were the 'slices' are made using eight dials. Divide into eight equal-length slices using the button. That is all.


### If you want to use this ###

This repo contains M4L device "Project" directory structures. To use the devices, all the files should be in your Max search path (probably in Max's default folder for M4L devices). You can move the `.amxd` files from the project's `other` directory into the appropriate folders of your Ableton User Library (i.e. `path/to/User Library/Presets/Instruments/Max Instrument/`), so that Live can easily find them.

/*
 * OctoPrint Change_Filament plugin.
 *
 * Copyright (c) 2019, Jim Pingle <jim@pingle.org>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
$(function() {
	function Change_filamentViewModel(parameters) {
		var self = this;

		self.settings = parameters[0];
		self.controlViewModel = parameters[1];

		self.getAdditionalControls = function() {
			var settings = self.settings.settings.plugins.Change_Filament;

			return [{
				'customClass': '', 'layout': 'horizontal_grid', 'name': 'Change Filament', 'children':[
					{'width': '2', 'commands': [
						'M117 Parking nozzle',
						'M83',
						'G1 E-5 F50',
						'G91',
						'G0 Z' + settings.z_lift_relative() + ' F' + settings.park_speed(),
						'G90',
						'G0 Y' + settings.y_park() + ' X' + settings.x_park() + ' F' + settings.park_speed(),
						'M117 Nozzle parked'
						],
						'customClass': 'btn', 'additionalClasses': 'nowrap btn-info fa fa-check', 'name': ' Park'},
					{'width': '2', 'commands': [
						'M117 Unloading filament',
						'M83',
						'G1 E-' + settings.unload_length() + ' F' + settings.unload_speed(),
						'M18 E',
						'M117 Replace filament, set new temp, click Load'
						],
						'customClass': 'btn', 'additionalClasses': 'nowrap btn-success fa fa-fast-backward', 'name': ' Unload'},
					{'width': '2', 'commands': [
						'M117 Loading filament',
						'M83',
						'G1 E' + settings.load_length() + ' F' + settings.load_speed(),
						'M117 Replace filament, set new temp, click Load'
						],
						'customClass': 'btn', 'additionalClasses': 'nowrap btn-warning fa fa-step-forward', 'name': ' Load'},
					{'width': '2', 'commands': [
						'M600'
						],
						'customClass': 'btn', 'additionalClasses': 'nowrap btn-danger fa fa-refresh', 'name': ' M600'},
					{'width': '11', 'output': 'WARNING: Preheat first! Refresh page after changing settings.'},
					{'width': '11', 'output': 'M600 requires special support in Marlin and must be completed using the control box.'},
				]
			}];

		};

	}

	OCTOPRINT_VIEWMODELS.push({
		construct: Change_filamentViewModel,
		dependencies: [ "settingsViewModel", "controlViewModel" ]
	});
});

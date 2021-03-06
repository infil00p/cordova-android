/**
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

var rewire = require('rewire');
var run = rewire('../../bin/templates/cordova/lib/run');
var getInstallTarget = run.__get__('getInstallTarget');

describe('run', function () {
    describe('getInstallTarget', function () {
        var targetOpts = { target: 'emu' };
        var deviceOpts = { device: true };
        var emulatorOpts = { emulator: true };
        var emptyOpts = {};

        it('Test#001 : should select correct target based on the run opts', function () {
            expect(getInstallTarget(targetOpts)).toBe('emu');
            expect(getInstallTarget(deviceOpts)).toBe('--device');
            expect(getInstallTarget(emulatorOpts)).toBe('--emulator');
            expect(getInstallTarget(emptyOpts)).toBeUndefined();
        });
    });
});

/*
 * grunt-github-version
 * https://github.com/marsanla/grunt-github-version
 *
 * Copyright (c) 2014 Marcos Sanz
 * Licensed under the MIT license.
 */

'use strict';

var request = require('request'),
    semver = require('semver');

module.exports = function (grunt) {
    grunt.registerMultiTask('github_version', 'Check if you have the latest version of the project.', function () {
        // Merge task-specific and/or target-specific options with these defaults.

        var repo = this.options({
                username: 'marsanla',
                repository: 'grunt-github-version',
                version: '0.0.1'
            }),

            // Get latest tag
            getLatestTag = function (options, done) {
                request(options, function (error, response, body) {
                    if (!error && response.statusCode === 200) {
                        // Parse body
                        body = JSON.parse(body);

                        /// Check if has release
                        if (body[0]) {
                            if (body[0].name) {
                                if (semver.lt(repo.version, body[0].name)) {
                                    grunt.log.warn('Update "' + repo.repository + '", Your current version is ' + repo.version + ', and the new one is ' + body[0].name + '.');
                                    done = false;
                                } else {
                                    grunt.log.ok('Project ' + repo.repository + ' is up to date.');
                                    done = true;
                                }
                            } else {
                                grunt.log.warn('Cannot find the last version in ' + repo.repository + '.');
                                done = false;
                            }
                        } else {
                            grunt.log.warn('Empty release repository: ' + repo.repository + '.');
                            done = false;
                        }
                    } else {
                        grunt.log.warn('Could\'t check version for ' + repo.repository + '.');
                        done = false;
                    }
                });
            },

            // Make call async
            done = this.async(),
            options = {
                url: 'https://api.github.com/repos/' + repo.username + '/' + repo.repository + '/tags',
                headers: {
                    'User-Agent': 'request'
                }
            };

        getLatestTag(options, done);
    });

};

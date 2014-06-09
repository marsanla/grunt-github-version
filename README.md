# grunt-github-version

> Check if you have the latest version of one project, in Github.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-github-version --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-github-version');
```

## The "github_version" task

### Overview
In your project's Gruntfile, add a section named `github_version` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    github_version: {
        all: {
            options: {
                username: 'caolan',
                repository: 'async',
                version: '1.0.1' // Could get from package.json
            }
        }
    },
});
```

### Options

#### options.username
Type: `String`
Required

An username/organization parent from a github repository.

#### options.repository
Type: `String`
Required

Name of github repository.

#### options.version
Type: `String`
Required

Version of the parent project.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

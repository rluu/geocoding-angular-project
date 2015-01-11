# geocoding-angular-project

## Description

This is a Javascript / AngularJS webapp that provides geocoding and weather information lookup.

## Dependencies

- Node.js
- npm install -g bower grunt-cli

For running "compass:server" (compass) task:
- Ruby
- gem install compass


## Build

To get the environment setup, run the following in the project's top-level directory:

```
npm install
bower install
grunt serve
```

## Building the distribution:

The following will build all source files and place them in the `dist`
directory.

```
grunt --force
```

## Running Tests

- grunt karma:unit

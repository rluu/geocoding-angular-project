# geocoding-angular-project

## Description

This is a Javascript / AngularJS webapp that provides geocoding and weather information lookup.

Link to the deployed website: 
[Ryan's AngularJS Apps](http://rluu-angular-apps.s3-website-us-east-1.amazonaws.com/)

Project was created circa November 2014.

## Author

Ryan Luu
ryanluu@gmail.com

## Dependencies

- Node.js
- npm install -g bower grunt-cli

- Ruby
- gem install compass


## Build

To get the environment setup, run the following in the project's top-level directory:

```
npm install
bower install
grunt serve
```

## Running Tests

```
grunt karma:unit
```

## Building for distribution/deployment:

The following command will build all source files and place them in the `dist`
directory.

```
grunt
```


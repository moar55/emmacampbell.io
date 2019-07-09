var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var ClientPasswordStrategy = require('passport-oauth2-client-password').Strategy;
var BearerStrategy = require('passport-http-bearer');

var src = process.cwd() + '/emmacampbell.io/'

var User = require(src + '/models/user');
var Client = require(src + '/models/client');
var AccessToken = require(src + '/model/accessToken');


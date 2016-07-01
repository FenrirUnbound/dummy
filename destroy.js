#!/usr/bin/env node
'use strict';
const async = require('async');
const fs = require('fs');
const path = require('path');

console.log('Ragnarok is coming');

async.times(10, (n, next) => {
    console.log(n);
    next();
}, () => {
    console.log('Welcome to the end');
});

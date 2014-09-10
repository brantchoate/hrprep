/*global fs, Converter */

'use strict';

/**
 * @ngdoc function
 * @name hrprepApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hrprepApp
 */
angular.module('hrprepApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //Converter Class

    var csvFileName='crunchbase-data-basic';
    var fileStream=fs.createReadStream(csvFileName);
    //new converter instance
    var param={};
    var csvConverter=new Converter(param);

    //end_parsed will be emitted once parsing finished
    csvConverter.on('end_parsed',function(jsonObj){
       console.log(jsonObj); //here is your result json object
    });

    //read from file
    fileStream.pipe(csvConverter);
  });

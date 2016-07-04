var appleNotes = angular.module('apple-notes', []);

appleNotes.controller('NotesController', ['$scope', '$http', function($scope, $http) {
  $scope.notes = [];
  $scope.newNote = {
    title: '',
    content: ''
  }
  $scope.addNewNote = function(newNote){
    $scope.notes.push(newNote);
    $scope.newNote = {
      title: '',
      content: ''
    }
    console.log($scope.notes);


  }
}]);

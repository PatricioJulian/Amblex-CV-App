function formCrtl($scope) {
  $scope.selected = {};
  
  $scope.data =  [
    {"name":"Masculino",
      "values":
          [{"name":"Soltero"},
           {"name":"Casado"},
           {"name":"Divorciado"},
           {"name":"Viudo"}]
    },
    {"name":"Femenino",
      "values":
          [{"name":"Soltera"},
           {"name":"Casada"},
           {"name":"Divorciada"},
           {"name":"Viuda"}]
    }
    ];
  
  $scope.$watch('selected.id', function(id){
    delete $scope.selected.value;
    angular.forEach($scope.data, function(attr){
      if(attr.id === id){
        $scope.selectedAttr = attr;
      }
    });
  });
}
/*global data_support, intel */

/* --------------
 initialization 
  the xdkFilter argument can be set to a function that
   receives the data of the service method and can return alternate data
   thus you can reformat dates or names, remove or add entries, etc.
   -------------- */

/*global angular*/
 
var MyApp = angular.module('myApp',['ionic']).config(['$controllerProvider', function($controllerProvider) {
	$controllerProvider.allowGlobals();
}]);


MyApp.controller('ctrl',['$scope',function($scope){
    $scope.calcular = function() {
        
            var peso = $scope.peso;
            var altura = $scope.altura;
            var resultado = peso/(altura*altura);
            var x = resultado.toFixed(2);
            if(resultado<22){
            $scope.obs = "Seu IMC é: "+ x.toString() + '\n' +"Você está abaixo do seu peso adequado!";
}
            else if((resultado>=22) && (resultado == 27)){
            $scope.obs = "Seu IMC é: "+ x.toString() + '\n' +"Você está no peso adequado!";
}
            else if (resultado>27){
            $scope.obs = "Seu IMC é: "+ x.toString() + '\n' +"Você está com sobrepeso!";
}
    };
    
    $scope.limpar = function(){
        $scope.peso  = "";
        $scope.altura = "";
        $scope.obs ="";
     };
}]);
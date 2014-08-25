var app = angular.module("app", ["ionic"]);

app.controller("AppCtrl", ["$scope", "$log", AppCtrl]);

function AppCtrl($scope, $log) {

	$scope.showCard = false;
	
	$scope.calc = function() {
	   $scope.altura = $scope.altura.replace(",",".");
	   $scope.imc = $scope.peso / ($scope.altura * $scope.altura);
	   $scope.showCard = true;
	   $scope.pesoIdealMax = getPesoIdeal(24.99);
	   $scope.pesoIdealMin = getPesoIdeal(18.5);
	   
	   if ($scope.imc < 18.5) {
	      $scope.situacao = "Abaixo "+ ($scope.pesoIdealMin - $scope.peso) +"kg do peso ideal";
	   }
	   else if($scope.imc >= 18.5 && $scope.imc <= 24.99) {
		  $scope.situacao = "Peso ideal";
	   }
	   else if($scope.imc >= 25 && $scope.imc <= 29.9) {
		  $scope.situacao = "Sobrepeso, acima " + ($scope.peso - $scope.pesoIdealMax) +"kg do peso ideal";
	   }
	   else if($scope.imc >= 30 && $scope.imc <= 34.9) {
		  $scope.situacao = "Obesidade grau I, acima " + ($scope.peso - $scope.pesoIdealMax) +"kg do peso ideal";;
	   }
	   else if($scope.imc >= 35 && $scope.imc <= 39.9) {
		  $scope.situacao = "Obesidade grau II, acima " + ($scope.peso - $scope.pesoIdealMax) +"kg do peso ideal";;
	   }
	   else if($scope.imc >= 40) {
		  $scope.situacao = "Obesidade grau III, acima" + ($scope.peso - $scope.pesoIdealMax) +"kg do peso ideal";;
	   }

		$scope.imc = (""+$scope.imc).substring(0,5);
	}
	
	function getPesoIdeal(imc) {
		return Math.round(imc * ($scope.altura * $scope.altura));
	}
	
}
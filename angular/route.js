myApp.config(["$routeProvider",function($routeProvider){
            $routeProvider
            .when("/",{
              templateUrl : "main.html",
              controller: "mainController",
              controllerAs : "mainCtrl"
            })


			.otherwise(
                {
                   redirectTo:'/'
                          
                 }
               );
          }]);
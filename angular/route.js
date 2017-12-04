myApp.config(["$routeProvider",function($routeProvider){
            $routeProvider
            .when("/",{
              templateUrl : "view/main.html",
              controller: "mainController",
              controllerAs : "mainCtrl"
            })


			.otherwise(
                {
                   redirectTo:'/'
                          
                 }
               );
          }]);
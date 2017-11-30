myApp.controller("mainController",["cService",function(cService){

	var main = this;
    this.allData=[];
    this.allChar=[];
  
    

	this.books= function (){
        
        for(var i=1;i<=12;i++){

		cService.booksApi(i)
		.then(function successCallback(response){
            
            main.allBooks=response.data;
             //console.log(main.allBooks);
           main.allData.push(main.allBooks);
            console.log(main.allData);
      
            
            //main.name=response.data[0].name;
           // console.log(main.name);
            
		//main.apiData = response.data ;
		
		//console.log(main.apiData);
        

        },function errorCallback(reason){
		alert("Error in GET");
		});
        }
	}
	this.books();
    
    this.characters= function (){
        
            for(var i=1;i<=50;i++){
		cService.charactersApi(i)
		.then(function successCallback(response){
            
            main.allCharacters=response.data;
             console.log(main.allCharacters);
            main.allChar.push(main.allCharacters);
            
         
            
		//main.apiData = response.data ;
		
		//console.log(main.apiData);

		},function errorCallback(reason){
		alert("Error in GET");
		});
            }
	}
	this.characters();
    


}]); // End Controller
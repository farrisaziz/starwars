// global variables.
		var attack;
		var defend;
		var attackcharacter;
		var attackerHP;
	    var attackerAP;
	    var attackerCAP;
	    var defendcharacter;
	    var defenderHP;
	    var defenderAP;
	    var defenderCAP;
	    var name;
	    var YourCharacter;
	    var YourDefender;
	    var myChar = "";
	    var myDef = "";

function reset() {	
	
	$("#picRow").show();

	$(".restart").hide();
	$(".attackButton").show();

	
	var myChar = "";
	var myDef = "";
	// var YourCharacter;
	// var YourDefender;


	// reset health points.
	characters.ObiWan.healthPoints = 120;
	characters.LukeSky.healthPoints = 100;
	characters.DarSid.healthPoints = 150;
	characters.DarMaul.healthPoints = 180;

	// reset attack power.
	characters.ObiWan.attackPower = 8;
	characters.LukeSky.attackPower = 10;
	characters.DarSid.attackPower = 10;
	characters.DarMaul.attackPower = 12;

	// delete all in-game text.
	$(".youAttacked").empty();
	$(".attackedBack").empty();
	$(".youDefeated").empty();
	$(".youWon").empty();
	$(".youLose").empty();
	$(".noEnemy").empty();

	//writing each characters full name to the html so they show up on the page.
	$(".nameo").html(characters.ObiWan.fullName);
	$(".namel").html(characters.LukeSky.fullName);
	$(".nameds").html(characters.DarSid.fullName);
	$(".namedm").html(characters.DarMaul.fullName);

	//adding the picture for each character so they show up on the page.
	$("#darthS").appendTo("#picRow");
	$("#darthM").appendTo("#picRow");
	$("#luke").appendTo("#picRow");
	$("#obi").appendTo("#picRow");

	//writing each characters healthpoints to the html so they show up on the page.
	$(".ob1hp").html(characters.ObiWan.healthPoints);
	$(".lukehp").html(characters.LukeSky.healthPoints);
	$(".darthshp").html(characters.DarSid.healthPoints);
	$(".darthmhp").html(characters.DarMaul.healthPoints);

	// reset border colors. 
	$(".firstRow").css({"background-color": "white", "outline-color": "limegreen", 
	"border-width": "3px", "outline-style": "solid", "border-color": "white", "outline-width": "3px"});

};

// array to hold each characters stats.
var characters = { 

	ObiWan: {
			name: "ObiWan",
			visual: 'assets/images/ObiWan.jpg',
			healthPoints: 120,
			attackPower: 8,
			fullName: "Obi-Wan Kenobi",
			counterAttackPower: 24
			},

	LukeSky:{
			name: "LukeSky",
			visual: 'assets/images/LukeSkywalker.jpg',
			healthPoints: 100,
			attackPower: 10,
			fullName: "Luke Skywalker",
			counterAttackPower: 5
			},

	DarSid:{ 
			name: "DarSid",
			visual: 'assets/images/DarthSidious.png',
			healthPoints: 150,
			attackPower: 10,
			fullName: "Darth Sideous",
			counterAttackPower: 20
			},

	DarMaul:{ 
			name: "DarMaul",
			visual: 'assets/images/DarthMaul.png',
			healthPoints: 180,
			attackPower: 12,
			fullName: "Darth Maul",
			counterAttackPower: 25
			}
};


	$(document).ready(function(){
		reset();
		
	// When the player clicks on any of the characters, the game determines which one was clicked, moves the one clicked into
	// "Your Character" and moves the other three into "Enemies available to attach".
	$(".firstRow").click(function(){
                
           if (myChar == "") {
	       // appends the chosen character to "Your Character"
	       console.log(this);	       
	       $(this).appendTo("#yourChar");
	       myChar = $(this);
	       YourCharacter = $(myChar).attr("value");
       	   }
	       // if else statements that determine who is currently "Your Character" and assign
	       // that person to the character array's properties. 
	       if (YourCharacter == characters.ObiWan.name) {
	       		attackerHP = characters.ObiWan.healthPoints;
	       		attackerAP = characters.ObiWan.attackPower;
	       		attackerCAP = characters.ObiWan.counterAttackPower;
	       		attackerFN = characters.ObiWan.fullName;
	       		attack = characters.ObiWan;
	       }
	       else if (YourCharacter == characters.LukeSky.name){
	       		attackerHP = characters.LukeSky.healthPoints;
	       		attackerAP = characters.LukeSky.attackPower;
	       		attackerCAP = characters.LukeSky.counterAttackPower;
	       		attackerFN = characters.LukeSky.fullName;
	       		attack = characters.LukeSky;
	       }
	       else if (YourCharacter == characters.DarSid.name){
	       		attackerHP = characters.DarSid.healthPoints;
	       		attackerAP = characters.DarSid.attackPower;
	       		attackerCAP = characters.DarSid.counterAttackPower;
	       		attackerFN = characters.DarSid.fullName;
	       		attack = characters.DarSid;
	       }
	       else if (YourCharacter == characters.DarMaul.name){
	       		attackerHP = characters.DarMaul.healthPoints;
	       		attackerAP = characters.DarMaul.attackPower;
	       		attackerCAP = characters.DarMaul.counterAttackPower;
	       		attackerFN = characters.DarMaul.fullName;
	       		attack = characters.DarMaul;
	       }
	              
	       // clones the three remaining characters to "Enemies available to attack" three separate divs.
	       for (var i = 0; i < 4; i++) {
	       	$("._" + [i]).not(myChar).appendTo("#enemies" + [i]);

	       	// changing color
	       	$("._" + [i]).not(myChar).css({"background-color": "red", "outline-color": "black", 
	       		"border-width": "3px", "outline-style": "solid", "border-color": "black", "outline-width": "1px"});


	       }
	               
	       // Clears the characters from the top.
	       // $("#picRow").empty();
	       $("#picRow").hide();
	      
    });

       
     $(".move").click(function(){

     		// if (myDef === "") {
     	   	// clones the chosen character to "Defender"
	     	// moves that character to the "Defender" section on the page.
	     	$(this).appendTo("#defender");
	     	myDef = $(this);
	     	YourDefender = $(myDef).children().attr("value");
	     	$(".youDefeated").empty();

	     // }
	     	// if else statements that determine who is currently "Defender" and assign
	       // that person to the character array's properties.
	       if (YourDefender == characters.ObiWan.name) {
	       		defenderHP = characters.ObiWan.healthPoints;
	       		defenderAP = characters.ObiWan.attackPower;
	       		defenderCAP = characters.ObiWan.counterAttackPower;
	       		defenderFN = characters.ObiWan.fullName;
	       		defend = characters.ObiWan;
	       	
	       	}
	       	else if (YourDefender == characters.LukeSky.name){
	       		defenderHP = characters.LukeSky.healthPoints;
	       		defenderAP = characters.LukeSky.attackPower;
	       		defenderCAP = characters.LukeSky.counterAttackPower;
	       		defenderFN = characters.LukeSky.fullName;
	       		defend = characters.LukeSky;
	       		
	       }
	       else if (YourDefender == characters.DarSid.name){
	       		defenderHP = characters.DarSid.healthPoints;
	       		defenderAP = characters.DarSid.attackPower;
	       		defenderCAP = characters.DarSid.counterAttackPower;
	       		defenderFN = characters.DarSid.fullName;
	       		defend = characters.DarSid;
	       		
	       }
	       else if (YourDefender == characters.DarMaul.name){
	       		defenderHP = characters.DarMaul.healthPoints;
	       		defenderAP = characters.DarMaul.attackPower;
	       		defenderCAP = characters.DarMaul.counterAttackPower;
	       		defenderFN = characters.DarMaul.fullName;
	       		defend = characters.DarMaul;
	       		
	       }
	    

     });

    
    
     $(".attackButton").click(function(){

     		// if player clicks attack button and no one is in the "defender" div, then 
     		// game says "no enemy here".
     		if ($("#defender").children().length == 0) {
     			$(".noEnemy").html("No enemy here.");
     		}

     		if (!(attackerHP < 1) || !(defenderHP < 1)) {

     		
     		attackerHP = (attackerHP - defenderCAP);
     		
     		
     		$("." + YourCharacter).html(attackerHP);

     		$(".youAttacked").html("You attacked " + defenderFN + " for " + attackerAP + " damage.");

     		
     		defenderHP = (defenderHP - attackerAP);

     		
     		$(".attackedBack").html(defenderFN + " attacked you back for " + defenderCAP + " damage.");
			
			
			$("." + YourDefender).html(defenderHP);

     	}
     		if (defenderHP <= 0) {

     			
     			$(".youAttacked").empty();
     			$(".attackedBack").empty();
     			$
     			$("#defender").empty();

     		
     			console.log(attackerAP);
     			attackerAP = (attackerAP + 10);

     			attack.attackPower = attackerAP;
     			console.log(attackerAP);

     		}
     		
     		
     		if ($(".move").children().length == 0){
     		 
  
     		 $(".youAttacked").empty();
     		 $(".attackedBack").empty();
     		 $(".youDefeated").empty();
     		 $(".noEnemy").empty();
     		 $(".youWon").html("You Won!!!! GAME OVER!!!"); 

     		  
     		 $(".restart").show();

     		  
     		 $(".restart").click(function(){
     		 	location.reload(true);
     		 })
     		      			
     		}

     		if (attackerHP <= 0) {

     			
     			$(".restart").show();

     			$(".attackButton").hide();

     			$(".youAttacked").empty();
     		 	$(".attackedBack").empty();
     			$(".youDefeated").empty();
     			$(".youLose").html("You've been defeated...GAME OVER!!!")

     		
	     		 $(".restart").click(function(){
	     		 	location.reload(true);
	     		 });

     		}      
     		
     });


});
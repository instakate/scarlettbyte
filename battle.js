// Kate Colias SPC ID 2421069
// Scarlett Byte is no match for the Eight Deadly Venoms. 

function Player(name, weapons){
	// Create player
	// Each player has a name, an initial health of 10, an initial strength of 2, and an array of weapons objects
	this.name = name; 
	this.health = 10; 
	this.strength = 2; 
	this.weapons = weapons; 
}
	
	// applyDamage deals damage to the Player - takes an integer input and subtracts that from the player's health
	Player.prototype.applyDamage = function(damage) {
		console.log(damage + " damage applied!")
		// Subtract damage received from the player's health
		this.health -= damage;
		console.log(this.name + "\'s health is now " + this.health);
	}
	
	// isAlive checks if the player's health is >0. Returns true if it is and false if not. 
	Player.prototype.isAlive = function() {
		if (this.health > 0) {
			return true;
		}
		else {
			return false; 
		}
	}
	
	// attackWith uses a random number between 7 and 0, selects the weapon at that index, and returns the weapon
	Player.prototype.attackWith = function() {
		choice = Math.ceil(Math.random())*8;
		console.log(this.weapons[choice] + " weapon selected.")
		return this.weapons[choice]; 
	}


function Weapon(name){
	// Each weapon has an assigned name and random damage level
	this.name = name;
	this.damage = Math.ceil(Math.random()*5); //random number between 1 and 5
}

	// attack checks if the fighters are dead, then applies damage based on strength and weapon
	Weapon.prototype.attack = function(player, enemy) {
		while (player.isAlive && enemy.isAlive) {
			// Calculate actual damage = strength of player * damage value of weapon
			actualDamage = player.strength * this.damage;
			
			// Call the applyDamage function of the Enemy object and pass the actual damage value calculated
			enemy.applyDamage(actualDamage);
			
			// Call the isAlive function of the Enemy object. If the enemy is dead, exit. 
			// If the enemy is not dead, call the attack function and pass it the player object. 
			if (enemy.isAlive()) {
				console.log(enemy.name + " attacks!");
				enemy.attack(player);	
			}
			else {
				break;
			}
		}
	}


function Enemy(){
	// The default enemy has a name of Enemy, health of 5, and strength of 2
	this.name = "Enemy";
	this.health = 5;
	this.strength = 2;
}

	// applyDamage takes an integer input and subtracts that from the enemy's health
	Enemy.prototype.applyDamage = function(damage) {
		console.log(damage + " damage applied!")
		this.health -= damage; 
		console.log(this.name + "\'s health is now " + this.health);
	}
	
	// isAlive checks if the enemy's health is greater than 0. Returns true if it is and false if not. 
	Enemy.prototype.isAlive = function() {
		if (this.health > 0) {
			return true; 
		}
		else {
			return false; 
		}
	}
	
	// attack takes a player input and calls the applyDamage of the player using enemy's strength as input
	Enemy.prototype.attack = function(player) {
		console.log(this.name + " attacks!")
		player.applyDamage(this.strength);
	}

function BattleSimulation(){
	// The battle simulation has an array of players and enemies
	this.players = [];
	this.enemies = [];
	}
	
	// createEnemies uses a loop to create 20 Enemy instances and populate the Enemies array property
	BattleSimulation.prototype.createEnemies = function() {
		for (var i = 0; i<20; i++) {
			this.enemies.push(new Enemy());
		}
	}
	
	// createPlayers creates 8 weapons objects and 5 player instances.
	BattleSimulation.prototype.createPlayers = function() {
		// Create 8 weapons objects in a variable called weaponsCache 
		var w1 = new Weapon('Marshmallows');
		var w2 = new Weapon('Snowflakes');
		var w3 = new Weapon('The love you didn\'t get as a child');
		var w4 = new Weapon('Machine guns');
		var w5 = new Weapon('Paper cuts');
		var w6 = new Weapon('A really tough personal trainer');
		var w7 = new Weapon('Stepping on a lego');
		var w8 = new Weapon('Very short vampires');
		var weaponsCache = [w1, w2, w3, w4, w5, w6, w7, w8];
		
		// Create 5 player instances and add them to the players array 
		var p1 = new Player('Kate', weaponsCache);
		var p2 = new Player('Charming Male Companion', weaponsCache);
		var p3 = new Player('Iron Professor', weaponsCache);
		var p4 = new Player('Golden Army Captain', weaponsCache);
		var p5 = new Player('Lieutenant Hadrian', weaponsCache);
		return this.players = [p1, p2, p3, p4, p5];
		
	}
	
	// run the battle
	BattleSimulation.prototype.run = function() {
		console.log("Simulating Battle");
		
		// Create enemies
		enemies = this.createEnemies();
		
		// Create players
		players = this.createPlayers();
		
		// Until all the players are dead or all the enemies are dead
		/*for (i = 0; i<players.length; i++) {
			if 
		}
		*/
		// **** while (this.players[i].isAlive || this.enemies[i].isAlive)		
		
		// Select random player
		myPlayer = players[Math.ceil(Math.random()*8)];
		
		// Select a random enemy
		myEnemy = this.enemies[Math.ceil(Math.random()*20)];
		
		// Call the attackWith method on the player to get a weapon to attack with
		myWeapon = myPlayer.attackWith();
		
		// Call the attack method on the weapon and pass it the current player and current enemy
		myWeapon.attack(myPlayer, myEnemy);
		
		console.log(players);
		console.log(enemies);
	}

var simulator = new BattleSimulation();
simulator.run();






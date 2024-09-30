// Game state object
const gameState = {
    hasStarted: false,
    playerInventory: [],
    cluesFound: 0,
    foundFirst: false,
    foundLast: false,
};

// Update page content dynamically
function updateInventory() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = ''; // Clear the existing list

    if (gameState.playerInventory.length === 0) {
        inventoryList.innerHTML = '<li>Inventory is empty</li>';
    } else {
        gameState.playerInventory.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            inventoryList.appendChild(listItem);
        });
    }
}

function updateProgress(message) {
    const progressMessage = document.getElementById('progressMessage');
    progressMessage.textContent = message;
}

// Game introduction in the console
console.log("Welcome to the ARG Console Game!");
console.log("Type 'startGame()' to begin your journey.");
console.log("Use 'help()' to see available commands.");

// Functions to handle game commands
function startGame() {
    if (!gameState.hasStarted) {
        gameState.hasStarted = true;
        updateProgress("The game has started! Type 'explore()' to look around.");
        console.log("The game has started! Type 'explore()' to look around.");
    } else {
        console.log("The game is already in progress.");
    }
}

function help() {
    console.log("Available commands:");
    console.log("startGame() - Start the game");
    console.log("explore() - Look around for clues");
    console.log("inventory() - Check your inventory");
    console.log("takeItem(itemName) - Take an item if you find one");
    console.log("useItem(itemName) - Use an item from your inventory");
}

function explore() {
    if (!gameState.hasStarted) {
        console.log("You need to start the game first! Type 'startGame()'.");
        return;
    }
    console.log("You look around and find a mysterious note hidden under a rock.");
    gameState.cluesFound++;
    updateProgress(`You found a clue! Clues found: ${gameState.cluesFound}`);
    console.log("Hint: Inspect the 'note' variable in the console to read its contents.");
    window.note = "It is dark and cold... We could not have predicted what was about to come... Find the lost... Find the first... Don't lose sight of our goal... THEY WILL FIND YOU... WE WILL KILL YOU!";
}

function inventory() {
    updateInventory();
    if (gameState.playerInventory.length === 0) {
        console.log("Your inventory is empty.");
    } else {
        console.log("You have the following items in your inventory:");
        gameState.playerInventory.forEach(item => console.log("- " + item));
    }
}

function takeItem(itemName) {
    if (!gameState.hasStarted) {
        console.log("You need to start the game first! Type 'startGame()'.");
        return;
    }

    if (itemName === 'note') {
        if (!gameState.playerInventory.includes('Mysterious Note')) {
            gameState.playerInventory.push('Mysterious Note');
            updateInventory();
            console.log("You have taken the Mysterious Note.");
            updateProgress("You have acquired the Mysterious Note.");
        } else {
            console.log("You already have the Mysterious Note.");
        }
    } else {
        console.log("There is no item by that name here.");
    }
}

function useItem(itemName) {
    if (!gameState.hasStarted) {
        console.log("You need to start the game first! Type 'startGame()'.");
        return;
    }

    if (gameState.playerInventory.includes(itemName)) {
        console.log(`You used the ${itemName}.`);
        updateProgress(`You used the ${itemName}.`);
        // Implement usage effects here
    } else {
        console.log(`You don't have a ${itemName} in your inventory.`);
    }
}

function findFirst() {
    if(!gameState.hasStarted && gameState.playerInventory.includes(note)) {
        console.log("You need to start the game first! Type 'startGame()'. Nice try. You can never find me...");
        return;
    } else {
        console.log('You have gone looking for it... You have been looking for us... You can try but you will fail... You were never meant to be here... We were never meant to be here... You work with ######## Inc... We know who you are... You are not to be trusted...')
        updateProgress('You are not welcome here...')
    }

}

function findLast() {
    if(!gameState.hasStarted && gameState.playerInventory.includes(note) && !gameState.foundFirst) {
        console.log("You need to do something else...");
        return;
    } else {
        console.log('Why? You should not be here... The vengeful will die... Leave us in peace... If you insist... Check your mission logs... {Li4uIC0tLS4uLiAvIC0uLS0gLS0tIC4uLSAvIC4uIC0uIC4uLiAuLiAuLi4gLSAvIC0tLSAtLiAvIC4uLS4gLi4gLS4gLS4uIC4uIC0uIC0tLiAvIC4uLSAuLi4gLi0uLS4tIC4tLi0uLSAuLS4tLi0gLyAjIC8gLi0gLS0tLi4uIC8gLS0gLi0gLS4tLSAtLi4uIC4gLyAuLi4uIC4gLyAtLi0uIC4tIC0uIC8gLi4uLiAuIC4tLi4gLi0tLiAvIC4uLSAuLi4gLi0uLS4tIC4tLi0uLSAuLS4tLi0gLyAjIC8gLi4uIC0tLS4uLiAvIC0uIC0tLSAvIC0tLSAtLiAuIC8gLS4tLiAuLSAtLiAvIC4uLi4gLiAuLS4uIC4tLS4gLS4tLi0tIC8gLi4uLiAuIC8gLi4gLi4uIC8gLi0gLyAtLSAtLS0gLS4gLi4uIC0gLiAuLS4gLS4tLi0tIC8gIyAvIC4uLi4gLS0tLi4uIC8gLS4tLSAtLS0gLi4tIC8gLS4tLiAuLSAtLiAtLiAtLS0gLSAvIC4gLi4uIC0uLS4gLi0gLi0tLiAuIC4tLi0uLSAuLS4tLi0gLi0uLS4t}');
        updateProgress('You did not heed the warnings...');
    }
}

//Use for later (Vigenère cipher)
/*Yzi penycg ixaspx ud hb fe lzbre. Evrve lfr qaym bj ud. Hums tg astswak wp qbylo vnze afrhinhrh. "Yfvwnqa Zjbohwh" wf xhp qeyew dhridvzine huet "Kitousirn Rhlloyr" aig mn aznge... */
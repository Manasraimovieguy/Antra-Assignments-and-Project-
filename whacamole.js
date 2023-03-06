// implementing MVC structure
// simplifying CSS while using JS to make image appear and disappear, rather than relying on CSS transition

const Model = (() => {
    let score = 0
    let timer = 20
    let intervalIdMole, disappearId, intervalIdTimer, snakeId;

    class StateMole {
        constructor() {
            this._moleList = []
        }

        get moleList() {
            return this._moleList
        }

        set moleList(newList) {
            this._moleList = newList
        }

        add(index) {
            this._moleList.push(index)
        }

        remove(index) {
            this._moleList = this._moleList.filter(item => item !== index)
        }

        includes(index) {
            return this._moleList.includes(index)
        }
    }

    class StateSnake {
        constructor() {
            this._snakeList = []
        }

        get snakeList() {
            return this._snakeList
        }

        set snakeList(newList) {
            this._snakeList = newList
        }

        adds(index) {
            this._snakeList.push(index)
        }

        removes(index) {
            this._snakeList = this._snakeList.filter(item => item !== index)
        }

        includes(index) {
            return this._snakeList.includes(index)
        }



    }

    return {
        StateMole,
        StateSnake,
        score,
        timer,
        disappearId,
        intervalIdMole,
        intervalIdTimer,
        snakeId
    }



})()

const View = (() => {

    // Dom elements
    let gameBoard = document.getElementById('board');
    let scoreValue = document.getElementById('score-count');
    let timerValue = document.getElementById('time-count');
    let startButton = document.getElementById('start-button');
    let blockElements = document.getElementsByClassName('block');

    return {
        gameBoard,
        scoreValue,
        timerValue,
        startButton,
        blockElements
    }
})()

const Controller = ((view, model) => {

    let { gameBoard, scoreValue, timerValue, startButton, blockElements } = view

    let { StateMole, StateSnake, score, timer, disappearId, intervalIdMole, intervalIdTimer } = model

    let moles = new StateMole();
    let killersnake = new StateSnake();


    //resetting game to initial state
    const resetAll = () => {

        score = 0;
        timer = 20;


        scoreValue.innerText = score;
        timerValue.innerText = timer;

        // clearing out any remaining intervals
        clearInterval(intervalIdMole);
        clearInterval(intervalIdTimer);
        clearInterval(disappearId);

        // clearing out any list of moles we have obtained 
        moles.moleList = []

        // emptying any images remaining
        for (let i = 0; i < blockElements.length; i++) {
            blockElements[i].style.backgroundImage = "none";
        }
    }

    const countdown = () => {
        timer--;
        timerValue.innerText = timer;
        if (timer === 0) {
            clearInterval(intervalIdMole);
            clearInterval(intervalIdTimer);
            clearInterval(disappearId);
            alert('Time is Over! Your got a score of ' + score + '!');
        }
    }

    const createMole = () => {
        if (moles.moleList.length < 3) {
            let randomIndex = Math.floor(Math.random() * blockElements.length);

            // if already exists, generate another random number
            while (moles.includes(randomIndex)) {
                randomIndex = Math.floor(Math.random() * blockElements.length);
            }
            moles.add(randomIndex);
            const moleElement = blockElements[randomIndex];
            moleElement.style.backgroundImage = "url('./images/mole.jpeg')";
        }
    }

    const whackMole = (event) => {
        const block = event.target;
        const index = Array.from(gameBoard.children).indexOf(block);
        if (moles.includes(index)) {
            score++;
            scoreValue.innerText = score;
            const bushElem = event.target.parentElement.previousElementSibling;

            let textEl = document.createElement('span');
            textEl.setAttribute('class', 'whack-text');
            textEl.innerHTML = "whack!";
            bushElem.appendChild(textEl);

            setTimeout(() => {
                textEl.remove();
            }, 2000);
            moles.remove(index);
            block.style.backgroundImage = "none"
        }
    }

    const disappearMole = () => {
        if (moles.moleList.length > 0) {
            blockElements[moles.moleList[0]].style.backgroundImage = "none";
            moles.remove(moles.moleList[0]);
        }
    }

    const createkillerSnake = () => {
        if (killersnake.snakeList.length < 1) {
            let randomIndex = Math.floor(Math.random() * blockElements.length);
            while (killersnake.includes(randomIndex)) {
                randomIndex = Math.floor(Math.random() * blockElements.length);
            }

            // if index generated is the same as one of the moles, we need to remove the mole
            if (moles.includes(randomIndex)) {
                moles.remove(randomIndex);
            }

            killersnake.adds(randomIndex);
            blockElements[randomIndex].style.backgroundImage = "url('./images/mine.jpeg')";
        }


        if (killersnake.snakeList.length === 1) {
            //generate another random position for snake to go to
            let randomIndex = Math.floor(Math.random() * blockElements.length);
            blockElements[killersnake.snakeList[0]].style.backgroundImage = "none";
            killersnake.removes(killersnake.snakeList[0]);


            while (killersnake.includes(randomIndex)) {
                //to generate another random number in the event that it is the same as the last one
                randomIndex = Math.floor(Math.random() * blockElements.length);
            }

            if (moles.includes(randomIndex)) {
                // if we have an index that has a mole already, we remove mole to replace with snake
                moles.remove(randomIndex);
                blockElements[randomIndex].style.backgroundImage = "none";
            }
            killersnake.adds(randomIndex);
            blockElements[randomIndex].style.backgroundImage = "url('./images/mine.jpeg')";
        }
    }

    const whackkillerSnake = (event) => {
        const block = event.target;
        const index = Array.from(gameBoard.children).indexOf(block);
        if (killersnake.includes(index)) {
            for (let i = 0; i < blockElements.length; i++) {
                blockElements[i].style.backgroundImage = "url('./images/mine.jpeg')";
            }
            clearInterval(intervalIdMole);
            clearInterval(intervalIdTimer);
            clearInterval(snakeId);
            clearInterval(disappearId);
        }
    }



    const startGame = () => {
        resetAll()

        // instead of doing it in one long function, now we decrement timer by calling it initially while starting game
        intervalIdTimer = setInterval(countdown, 1000);

        // create moles at single second intervals
        intervalIdMole = setInterval(createMole, 1000);

        // to make mole disappear  every 2 seconds
        disappearId = setInterval(disappearMole, 2000);

        // based on instruction, we generate a snake every 2 seconds
        snakeId = setInterval(createkillerSnake, 2000);
    }
    startButton.addEventListener('click', startGame);
    gameBoard.addEventListener('click', whackMole);
    gameBoard.addEventListener('click', whackkillerSnake);

})(View, Model)





// const gameContainer = document.querySelector('.container');
// const allMoleItems = document.querySelectorAll('.item');

// let startGame, startTime, countDown = 20, score = 0;
// const scoreCount = document.getElementById('score-count');
// const timeCount = document.getElementById('time-count');

// gameContainer.addEventListener('click', function (e) {
//     if (e.target.classList.contains('mole-clicked')) {
//         score++;
//         scoreCount.innerHTML = score;

//         const bushElem = e.target.parentElement.previousElementSibling;

//         let textEl = document.createElement('span');
//         textEl.setAttribute('class', 'whack-text');
//         textEl.innerHTML = "whack!";
//         bushElem.appendChild(textEl);

//         setTimeout(() => {
//             textEl.remove();
//         }, 2000);
//     }
// })

// document.addEventListener('DOMContentLoaded', () => {
//     // total game time is 20 seconds
//     startTime = setInterval(() => {
//         timeCount.innerHTML = countDown;
//         countDown--;
//     }, 1000);

//     startGame = setInterval(() => {
//         showMole();
//     }, 4000);
// });

// // shows mole
// function showMole() {
//     if (countDown <= 0) {
//         clearInterval(startGame);
//         clearInterval(startTime);
//         timeCount.innerHTML = "0";
//     }
//     let moleToAppear = allMoleItems[getRandomValue()].querySelector('.mole');
//     moleToAppear.classList.add('mole-appear');
//     hideMole(moleToAppear);

// }

// function getRandomValue() {
//     let rand = Math.random() * allMoleItems.length;
//     return Math.floor(rand);
// }

// // hide Mole
// function hideMole(moleItem) {
//     setTimeout(() => {
//         moleItem.classList.remove('mole-appear');
//     }, 4000);
// }


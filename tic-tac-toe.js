document.addEventListener("DOMContentLoaded", function(){

    var board = document.getElementById('board');

    function checkGameStatus() {
        var squares = Array.from(document.getElementById('board').children)
        var combos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

        var status = false, combo, s1, s2, s3
        var count = 0
        
        while ((count < 8) && (status == false)) {
            combo = combos[count]

            s1 = squares[combo[0]].classList.contains('X')
            s2 = squares[combo[1]].classList.contains('X')
            s3 = squares[combo[2]].classList.contains('X')

            if (s1 && s2 && s3)  {
                document.getElementById('status').innerText = state ? "Congratulations! O is the Winner!" : "Congratulations! X is the Winner!"
                document.getElementById('status').classList.add('you-won')
                status = true
            } else {
                s1 = squares[combo[0]].classList.contains('O')
                s2 = squares[combo[1]].classList.contains('O')
                s3 = squares[combo[2]].classList.contains('O')

                if (s1 && s2 && s3) {
                    document.getElementById('status').innerText = state ? "Congratulations! O is the Winner!" : "Congratulations! X is the Winner!"
                    document.getElementById('status').classList.add('you-won')
                    status = true
                } else {
                    status = false
                }
            }

            count++
        };

        return status
    };

    Array.from(board.children).forEach(node => {
        node.classList.add('square')
    });


    var state = true
    var gameStatus = false

    board.addEventListener('click', e => {
        if (e.target.innerHTML == '') {
            
            if (!gameStatus) {
                if (state) {
                    e.target.innerHTML = 'X'
                    e.target.classList.add('X')
                    state = false
                    gameStatus = checkGameStatus()
                } else {
                    e.target.innerHTML = 'O'
                    e.target.classList.add('O')
                    state = true
                    gameStatus = checkGameStatus()
                }
            }
            console.log(gameStatus)
        }
    });

    board.addEventListener('mouseover', e => {
        if (e.target.id != 'board') {
            e.target.classList.add('hover')

            setTimeout(() => {
                e.target.classList.remove('hover')
            }, 500);
        }
    });

    document.getElementsByClassName('btn')[0].addEventListener('click', e => {
        state = true
        gameStatus = false


        Array.from(board.children).forEach(node => {
            node.innerHTML = ''
            node.className = 'square'
        })

        document.getElementById('status').innerHTML = 'Move your mouse over a square and click to play an X or an O.'
        document.getElementById('status').className = ''
    })

    
});

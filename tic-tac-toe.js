document.addEventListener("DOMContentLoaded", function(){

    var board = document.getElementById('board');
    var squares = Array.from(board.children);

   squares.forEach(node => {
        node.classList.add('square')
    });


    var state = true

    board.addEventListener('click', e => {
        if (e.target.innerHTML == '') {
            if (state) {
                e.target.innerHTML = 'X'
                e.target.classList.add('X')
                state = false
            } else {
                e.target.innerHTML = 'O'
                e.target.classList.add('O')
                state = true
            }
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

    
});

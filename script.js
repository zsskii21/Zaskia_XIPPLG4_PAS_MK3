let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')



let p1sum = 0
let p2sum = 0


function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }

        if (p1sum == 2) {
            p1sum = 38
        }
        if (p1sum == 7) {
            p1sum = 14
        }
        if (p1sum == 8) {
            p1sum = 31
        }
        if (p1sum == 15) {
            p1sum = 26
        }
        if (p1sum == 21) {
            p1sum = 42
        }
        if (p1sum == 28) {
            p1sum = 84
        }
        if (p1sum == 36) {
            psum = 44
        }
        if (p1sum == 51) {
            p1sum = 67
        }
        if (p1sum == 71) {
            p1sum = 91
        }
        if (p1sum == 78) {
            p1sum = 98
        }
        if (p1sum == 87) {
            p1sum = 94
        }
        if (p1sum == 16) {
            p1sum = 6
        }
        if (p1sum == 46) {
            p1sum = 25
        }
        if (p1sum == 49) {
            p1sum = 11
        }
        if (p1sum == 62) {
            p1sum = 19
        }
        if (p1sum == 64) {
            p1sum = 60
        }
        if (p1sum == 74) {
            p1sum = 53
        }
        if (p1sum == 89) {
            p1sum = 68
        }
        if (p1sum == 92) {
            p1sum = 88
        }
        if (p1sum == 95) {
            p1sum = 75
        }
        if (p1sum == 99) {
            p1sum = 80
        }

        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
            // sum = p1sum
        }
        

        if (p2sum == 2) {
            p2sum = 38
        }
        if (p2sum == 7) {
            p2sum = 14
        }
        if (p2sum == 8) {
            p2sum = 31
        }
        if (p2sum == 15) {
            p2sum = 26
        }
        if (p2sum == 21) {
            p2sum = 42
        }
        if (p2sum == 28) {
            p2sum = 84
        }
        if (p2sum == 36) {
            p2sum = 44
        }
        if (p2sum == 51) {
            p2sum = 67
        }
        if (p2sum == 71) {
            p2sum = 91
        }
        if (p2sum == 78) {
            p2sum = 98
        }
        if (p2sum == 87) {
            p2sum = 94
        }
        if (p2sum == 16) {
            p2sum = 6
        }
        if (p2sum == 46) {
            p2sum = 25
        }
        if (p2sum == 49) {
            p2sum = 11
        }
        if (p2sum == 62) {
            p2sum = 19
        }
        if (p2sum == 64) {
            p2sum = 60
        }
        if (p2sum == 74) {
            p2sum = 53
        }
        if (p2sum == 89) {
            p2sum = 68
        }
        if (p2sum == 92) {
            p2sum = 88
        }
        if (p2sum == 95) {
            p2sum = 75
        }
        if (p2sum == 99) {
            p2sum = 80
        }
        

        sum = p2sum



    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Pink Won !!")
        }
        else if (player == 'p2') {
            alert("Maroon Won !!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Maroon's Turn : "
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Pink's Turn : "

        play('p2', 'p2sum', 55, num)

    }

    tog = tog + 1




})
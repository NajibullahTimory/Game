const ball = document.querySelector('#ball')
const timer = document.querySelector('h2')


let counter = 10
let clickCouunt = 0
let playing = false

ball.addEventListener('click', () => {
    if (playing == false) {
        playing = true
        ball.innerHTML = 0

        let timerInterval = setInterval(() => {
            let time = ``
            if (counter >= 10) {
                time = `00:${counter} s`
            }
            else {
                time = `00:0${counter} s`
            }
            timer.innerHTML = time
            counter--
            if (counter < 0) {
                clearInterval(timerInterval)
                counter = 10
                playing = false
                alert(`You clicked ${clickCouunt} Time (00:10s)`)
                clickCouunt = 0
                ball.innerHTML = 'Try again'

            }
        }, 1000)
    }
    else {
        clickCouunt++
        ball.innerHTML = clickCouunt
    }
})

let ballPosioning = setInterval(() => {
    if (playing == true) {
        let random1 = Math.floor(Math.random() * 80)
        let random2 = Math.floor(Math.random() * 80)
        ball.style.top = `${random1}vh`
        ball.style.left = `${random2}vw`

        let size = Math.random() * 2
        ball.style.scale = size
    }
}, 200)
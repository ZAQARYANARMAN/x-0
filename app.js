let arr = ['', '', '', '', '', '', '', '', '']

let gameAgain = document.getElementById('gameAgain')

let accountText1 = document.getElementById('accountText1')

let accountText2 = document.getElementById('accountText2')

let div = document.getElementById('div')

let xAccount = 0

let oAccount = 0

accountText1.innerText = xAccount

accountText2.innerText = oAccount

let xo = true


let createXoPlay = () => {
    for (let i = 0; i < arr.length; i++) {
        let subdiv = document.createElement('div')
        subdiv.className = 'subdiv'
        div.appendChild(subdiv)


        subdiv.addEventListener('click', () => {
            if (xo && arr[i] == '') {

                arr[i] = 'x'
                subdiv.innerText = arr[i]
            }
            else if (!xo && arr[i] == '') {
                arr[i] = 'o'
                subdiv.innerText = arr[i]
            }
            xo = !xo
        })

        subdiv.addEventListener('click', () => {
            playX('x')


            playO('o')
        })
    }
}

let playX = (xoPlay) => {
    if (xoPlay === arr[0] && xoPlay === arr[1] && xoPlay === arr[2]) {
        xAccount++
        accountText1.innerText = xAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
        console.log(xoAccount);
    }
    else if (xoPlay === arr[0] && xoPlay === arr[3] && xoPlay === arr[6]) {
        xAccount++
        accountText1.innerText = xAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
    }
    else if (xoPlay === arr[1] && xoPlay === arr[4] && xoPlay === arr[7]) {
        xAccount++
        accountText1.innerText = xAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
    }
    else if (xoPlay === arr[2] && xoPlay === arr[5] && xoPlay === arr[8]) {
        xAccount++
        accountText1.innerText = xAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
    }
    else if (xoPlay === arr[3] && xoPlay === arr[4] && xoPlay === arr[5]) {
        xAccount++
        accountText1.innerText = xAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
    }
    else if (xoPlay === arr[6] && xoPlay === arr[7] && xoPlay === arr[8]) {
        xAccount++
        accountText1.innerText = xAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
    }
    else if (xoPlay === arr[2] && xoPlay === arr[4] && xoPlay === arr[6]) {
        xAccount++
        accountText1.innerText = xAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
    }
    else if (xoPlay === arr[0] && xoPlay === arr[4] && xoPlay === arr[8]) {
        xAccount++
        accountText1.innerText = xAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
    }
}


let playO = (xoPlay) => {
    if (xoPlay === arr[0] && xoPlay === arr[1] && xoPlay === arr[2]) {
        oAccount++
        accountText2.innerText = oAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
        console.log(xoAccount);
    }
    else if (xoPlay === arr[0] && xoPlay === arr[3] && xoPlay === arr[6]) {
        oAccount++
        accountText2.innerText = oAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
    }
    else if (xoPlay === arr[1] && xoPlay === arr[4] && xoPlay === arr[7]) {
        oAccount++
        accountText2.innerText = oAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
    }
    else if (xoPlay === arr[2] && xoPlay === arr[5] && xoPlay === arr[8]) {
        oAccount++
        accountText2.innerText = oAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
    }
    else if (xoPlay === arr[3] && xoPlay === arr[4] && xoPlay === arr[5]) {
        oAccount++
        accountText2.innerText = oAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
    }
    else if (xoPlay === arr[6] && xoPlay === arr[7] && xoPlay === arr[8]) {
        oAccount++
        accountText2.innerText = oAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
    }
    else if (xoPlay === arr[2] && xoPlay === arr[4] && xoPlay === arr[6]) {
        oAccount++
        accountText2.innerText = oAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
    }
    else if (xoPlay === arr[0] && xoPlay === arr[4] && xoPlay === arr[8]) {
        oAccount++
        accountText2.innerText = oAccount
        alert('haxtanak');

        arr = ['', '', '', '', '', '', '', '', '']
        div.innerText = ''
        createXoPlay()
    }
}




createXoPlay()

gameAgain.addEventListener('click', () => {
    arr = ['', '', '', '', '', '', '', '', '']

    div.innerText = ''

    createXoPlay()



})
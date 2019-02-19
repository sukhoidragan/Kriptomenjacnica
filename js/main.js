const Lcontainer = document.getElementById('L')
const Dcontainer = document.getElementById('D')
const dark = document.getElementById('dark');
const light = document.getElementById('light');
const all = document.getElementById('all');

dark.addEventListener('click', () => {
L.setAttribute('class', 'Lmakni');
D.setAttribute('class', 'Dcontainer');
})

light.addEventListener('click', () => {
D.setAttribute('class', 'Lmakni');
L.setAttribute('class', 'Lcontainer');
})

all.addEventListener('click', () => {
D.setAttribute('class', 'Dcontainer');
L.setAttribute('class', 'Lcontainer');
})

const wordList = [
    {
        id: 0,
        word: 'SUMMA'
    },
    {
        id: 1,
        word: 'TABLE'
    },
    {
        id: 2,
        word: 'RUMEN'
    },
    {
        id: 3,
        word: 'PIZZA'
    },
    {
        id: 4,
        word: 'FLOAT'
    },
    {
        id: 5,
        word: 'CROSS'
    },
    {
        id: 6,
        word: 'DADDY'
    },
    {
        id: 7,
        word: 'BIRDS'
    },
    {
        id: 8,
        word: 'AHEAD'
    }
]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

const answer = ()=>{
    let num = getRandomIntInclusive(0, (wordList.length-1));

    return wordList[num]
}

export default answer();
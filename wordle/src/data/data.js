const wordList = [
    {
        id: 0,
        word: 'DEALS',
        meaning: 'to deal 동사 {vb} 거래하다'
    },
    {
        id: 1,
        word: 'TABLE',
        meaning: '명사 {noun} 탁자'
    },
    {
        id: 2,
        word: 'RUMEN',
        meaning: '명사 (Noun), 제일 위'
    },
    {
        id: 3,
        word: 'PIZZA',
        meaning: '명사 {noun} 피자'
    },
    {
        id: 4,
        word: 'ERASE',
        meaning: 'erase - to - 동사 {vb} 지우다'
    },
    {
        id: 5,
        word: 'FAULT',
        meaning: 'fault - 명사 {noun} 결점'
    },
    {
        id: 6,
        word: 'DADDY',
        meaning: '명사 {noun} 아빠'
    },
    {
        id: 7,
        word: 'BIRDS',
        meaning: 'bird 명사 {noun} 새'
    },
    {
        id: 8,
        word: 'AHEAD',
        meaning: '부사 {adv} 미리 - 부사 (Adverb), 미리 - 부사 (Adverb)'
    },
    {
        id: 9,
        word: 'FRUIT',
        meaning: 'fruit - 명사 {noun} 과일'
    },
    {
        id: 10,
        word: 'INFER',
        meaning: 'infer - to - 동사 {vb} 추론하다'
    },
    {
        id: 11,
        word: 'LUCKY',
        meaning: 'lucky - 형용사 {adj.} 운수 좋은'
    },
    {
        id: 12,
        word: 'MOIST',
        meaning: 'moist - 형용사 {adj.} 습기 있는'
    },
    {
        id: 13,
        word: 'PRIDE',
        meaning: 'pride - 명사 {noun} 자부심'
    },
    {
        id: 14,
        word: 'SEVEN',
        meaning: 'seven - 명사 {noun} 칠,일곱'
    },
    {
        id: 15,
        word: 'TASTE',
        meaning: 'taste - 명사 {noun} 맛'
    },
    {
        id: 16,
        word: 'YELLS',
        meaning: 'yells - to yell 동사 {vb} 지르다'
    },
    {
        id: 17,
        word: 'ZAPPY',
        meaning: 'zappy- 형용사 (Adjective), 활발한, 한'
    },
    {
        id: 18,
        word: 'HORSE',
        meaning: 'horse - 명사 {noun} 말'
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
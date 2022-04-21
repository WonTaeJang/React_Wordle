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
        meaning: '명사 {noun} 과일'
    },
    {
        id: 10,
        word: 'INFER',
        meaning: 'to - 동사 {vb} 추론하다'
    },
    {
        id: 11,
        word: 'LUCKY',
        meaning: '형용사 {adj.} 운수 좋은'
    },
    {
        id: 12,
        word: 'MOIST',
        meaning: '형용사 {adj.} 습기 있는'
    },
    {
        id: 13,
        word: 'PRIDE',
        meaning: '명사 {noun} 자부심'
    },
    {
        id: 14,
        word: 'SEVEN',
        meaning: '명사 {noun} 칠,일곱'
    },
    {
        id: 15,
        word: 'TASTE',
        meaning: '명사 {noun} 맛'
    },
    {
        id: 16,
        word: 'YELLS',
        meaning: 'to yell 동사 {vb} 지르다'
    },
    {
        id: 17,
        word: 'ZAPPY',
        meaning: '형용사 (Adjective), 활발한, 한'
    },
    {
        id: 18,
        word: 'HORSE',
        meaning: '명사 {noun} 말'
    },
    {
        id: 19,
        word: 'ABIDE',
        meaning: 'to - 동사 {vb} 버티다'
    },
    {
        id: 20,
        word: 'AGREE',
        meaning: 'to - 동사 {vb} 동의하다'
    },
    {
        id: 21,
        word: 'BASIC',
        meaning: '명사 {noun} 기본'
    },
    {
        id: 22,
        word: 'BEAST',
        meaning: '명사 {noun} 짐승'
    },
    {
        id: 23,
        word: 'BRAIN',
        meaning: '명사 {noun} 뇌'
    },
    {
        id: 24,
        word: 'CANDY',
        meaning: '명사 {noun} 사탕'
    },
    {
        id: 25,
        word: 'CLOTH',
        meaning: '명사 {noun} 옷감, 직물, 천'
    },
    {
        id: 26,
        word: 'CORNS',
        meaning: 'corn 명사 {noun} 옥수수'
    },
    {
        id: 27,
        word: 'COVER',
        meaning: '형용사 {adj.} 감싸다'
    },
    {
        id: 28,
        word: 'CUPID',
        meaning: '명사 {noun} 큐피드'
    },
    {
        id: 29,
        word: 'DEATH',
        meaning: '명사 {noun} 죽음'
    },
    {
        id: 30,
        word: 'EARLY',
        meaning: '명사 (Noun), 일찍, 초기'
    },
    {
        id: 31,
        word: 'ENJOY',
        meaning: 'to - 동사 {vb} 즐기다'
    },
    {
        id: 32,
        word: 'ERROR',
        meaning: '명사 {noun} 실수'
    },
    {
        id: 33,
        word: 'EXIST',
        meaning: 'to - 동사 {vb} 존재하다'
    },
    {
        id: 34,
        word: 'FEINT',
        meaning: '명사 (Noun), 시늉, 페인트'
    },
    {
        id: 35,
        word: 'FROTH',
        meaning: '명사 {noun} 거품'
    },
    {
        id: 36,
        word: 'GROWN',
        meaning: '형용사 {adj.} 성장한'
    },
    {
        id: 37,
        word: 'GUESS',
        meaning: 'to - 동사 {vb} 추측하다'
    },
    {
        id: 38,
        word: 'JAPAN',
        meaning: 'Japan {pr.n.} 일본'
    },
    {
        id: 39,
        word: 'KNIFE',
        meaning: '명사 {noun} 칼'
    },
    {
        id: 40,
        word: 'NASTY',
        meaning: '형용사 {adj.} 협박하는'
    },
    {
        id: 41,
        word: 'PIXEL',
        meaning: '명사 {noun} 화소'
    }
]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

function answer(){
    let num = getRandomIntInclusive(0, (wordList.length-1));

    return wordList[num]
}

export default answer;
function compareWord(answers, inputWords){

    // step:0,
    // compareList:[],
    // isAnswer:false

    // DADDY BADBA
    // correct wrong any (c,w,a)

    // 이미 C 가 발생했지만 inputWords에 동일한 단어가 다른자리에 있으면 w 를 해야하는지 a 를 해야하는지 

    let compareList = [];
    let state = ['c','w','a']
    let isAnswer = true;


    // compare answer
    for(let i=0; i<inputWords.length; i++)
    {
        let inputWord = inputWords[i]
        let current_state = '';

        for(let j=0; j<answers.length; j++)
        {
            let answer = answers[j];

            if(inputWord === answer)
            {
                if(i === j)
                {
                    current_state = state[0];
                    break;
                }
                else
                {
                    current_state = state[1];
                }
            }
            else
            {
                if(current_state !== state[1])
                    current_state = state[2];
            }
        }

        compareList.push(current_state);
    }

    // isAnswer
    for(let i=0; i<compareList.length; i++)
    {
        if(compareList[i] !== 'c')
        {
            isAnswer = false;
            break;
        }
    }

    return {compareList:compareList, isAnswer:isAnswer};
}

export default compareWord;
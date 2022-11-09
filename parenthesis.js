

const isValid = (s) => {

    let parenthesisList = [];
    let bracket = [];
    let curly = [];


    let currenVal
    for (let i = 0; i < s.length; i++) {
        currenVal = s[i];
        if (currenVal == '(' || currenVal == ')') {
            remover(')', parenthesisList, bracket, curly);

        }
        else if (currenVal == '[' || currenVal == ']') {
            remover(']', bracket, parenthesisList, curly);
        }
        else if (currenVal == '{' || currenVal == '}') {
            remover('}', curly, bracket, parenthesisList);
        }
    }

    function remover(closer, list1, list2, list3) {
        if (currenVal == closer) {
            if (list1.length == 0 || list2.length !== 0 || list3.length !== 0) {
                return false;
            }
            list1.pop();

        } else {
            list1.push(currenVal);
        }
    }
    return parenthesisList.length == 0 && bracket.length == 0 && curly.length == 0;
}



console.log(isValid('(ibrahim){shehu}[baksman]()'));
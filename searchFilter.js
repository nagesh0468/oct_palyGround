import {searchFilter} from './search.js';
       let arr = ['hyderabad', 'khammam', 'warangal', 'karimnagar', 'mahbubabad', 'nellore'];
       let ageArr = ['home','hospita','inetnet','cleanic','education','training'];

       let formId = document.getElementById('formId');
        let search =  document.querySelector('#search');
        let resultBox = document.querySelector('.result');
        let ageSearch =  document.querySelector('#ageSearch');
        searchFilter(search, arr, resultBox);
        


        formId.addEventListener('submit', (e) => {
                e.preventDefault();
              let  result = search.value;
              let ageResult = ageSearch.value;
                if(arr.includes(result) && ageArr.includes(ageResult)){
                        window.location.href = `./${result}.html`;
                }else{
                        alert(`${ageResult} services are not available in ${result}`);
                }
        })
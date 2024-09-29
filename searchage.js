import {searchFilter} from './search.js';

let ageArr = ['home','hospita','inetnet','cleanic','education','training'];

    //    let ageSearch = document.getElementById('ageSearch');
    //    let ageResult = document.getElementsByClassName('ageResult');
       let ageSearch =  document.querySelector('#ageSearch');
        let ageResult = document.querySelector('.ageResult');

       searchFilter(ageSearch, ageArr, ageResult);

    //    console.log(ageSearch, ageResult, ageArr);
    // console.log(searchFilter)
import { from,Observable } from 'rxjs';
let obs = [44, 8, 5, 27, 7, 1, 0, 6, 3, 4, 10, 7, 1, 9, 5, 9, 7];
let newObs = [];

let observable = new Observable((subscriber) => {
    let i = 0;

    for(i; i<obs.length;i++) {
        timeOut(obs[i], i, subscriber);
    }
    timeOut('done', i++ , subscriber)
})

function timeOut(value, i, subscriber) {
    setTimeout(() => {
        subscriber.next(value)
    }, i *1000);
}

let sev_occur = 0;
observable.subscribe(value => {
    console.log(value)
    if(value == 7) {
        sev_occur++;
    }
    if(value == 'done') {
        console.log('new array ' + newObs)
        console.log('seven occured ' + sev_occur)
        return
    }
    newObs.push(value)
    
})


// import { from } from './rxjs';
// import { Observable } from 'rxjs';

// const obs$ = from([44, 8, 5, 27, 7, 1, 0, 7, 6, 3, 4, 10, 7, 1, 9, 5, 9, 71]);

// code your solution here
function saturdayFun(activity){
if (Boolean(activity)===false) {
    const activity = 'roller-skate'
    console.log(`This Saturday, I want to ${activity}!`)
    return `This Saturday, I want to ${activity}!`
} else {
    console.log(`This Saturday, I want to ${activity}!`)
    return `This Saturday, I want to ${activity}!`
}
};



function mondayWork(activity){
    if (Boolean(activity)===false) {
        const activity = 'go to the office'
        console.log(`This Monday, I will ${activity}.`)
        return `This Monday, I will ${activity}.`
    } else {
        console.log(`This Monday, I will ${activity}.`)
        return `This Monday, I will ${activity}.`
    }
};

function wrapAdjective(visFlair='*'){
    const vF = visFlair;
    return function (param = 'special'){
            console.log(`You are ${vF}${param}${vF}!`)
    };
};

// function demoChain(name) {
//     const part1 = "hi";
//     return function () {
//       const part2 = "there";
//       return function () {
//         console.log(`${part1.toUpperCase()} ${part2} ${name}`);
//       };
//     };
//   }

wrapAdjective('||')('a dedicated programmer');

wrapAdjective()();

// saturdayFun('bobsled');
// saturdayFun('kayak');
// saturdayFun('hunt bigfoot');
// saturdayFun();

// mondayWork('dream');
// mondayWork('make salsa');
// mondayWork();
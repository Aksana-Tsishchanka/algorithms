const initials = [
    0, 0, 0, 0, 0,
    100, 100, 100, 100, 100,
    50, 50, 50,
    75, 75, 75,
    0, 0,
    100, 100
];

const expectedResult = [{
    startDate: 0,
    workload: 0,
    endDate: 4, //startDate + N + 1
}, {
    startDate: 5, // endDate + 1
    workload: 100,
    endDate: 9,
}, {
    startDate: 10,
    workload: 50,
    endDate: 12,
}, {
        startDate: 13,
        workload: 75,
        endDate: 15,
}, {
        startDate: 15 + 1,
        workload: 0,
        endDate: 17,
    },
    {
        startDate: 18,
        workload: 100,
        endDate: 19,
    },
];

function getIntervals(list) {
    if (!list.length) {
        return [];
    }
    const array = [];

    for (i = 0; i < list.length; i++) {
        let element = array[array.length - 1];
        if (!element || element.workload !== list[i]) {
            array.push( {
                startDate: i,
                workload: list[i],
                endDate: i,
            });
        } else {
            element.endDate = i;
        }
    }
    return array;
}

console.log(getIntervals(initials));
// conditional type: type that depends on another type

type A = null;
type B = undefined;

type C = A extends null ? true : false;

// example 2

type richPeopleVehicle = {
    car: 'string';
    bike: 'string';
    ship: 'string'
}

type checkedVehicle<T> = T extends keyof richPeopleVehicle ? true : false;

type hasBike = checkedVehicle<'bike'>
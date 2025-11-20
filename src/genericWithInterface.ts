// Generic with interface 

interface developer<T, X = null> { //X=null is default type
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    }
    smartWatch: T;
    bike?: X
}

interface nonBrandedWatch {
    heartRate: string;
    stopwatch: boolean;
}

interface appleWatch {
    heartRate: string;
    voiceCall: boolean;
    gps: boolean;
}


const poorDeveloper: developer<nonBrandedWatch, {
    brand: 'Yamaha',
    engineCapacity: '200cc'
}> = {
    name: 'Mr. poor',
    salary: 20000,
    device: {
        brand: 'lenovo',
        model: 'A12',
        releasedYear: '2010'

    },
    smartWatch: {
        heartRate: '200',
        stopwatch: true
    },
    bike: {
        brand: "Yamaha",
        engineCapacity: '200cc'
    }
}


const richDeveloper: developer<appleWatch, {
    brand: 'R15',
    engineCapacity: '350cc'
}> = {
    name: 'Mr. Rich',
    salary: 200000,
    device: {
        brand: 'Mac',
        model: 'M4',
        releasedYear: '2024'

    },
    smartWatch: {
        heartRate: '200',
        voiceCall: true,
        gps: true
    },
    bike: {
        brand: 'R15',
        engineCapacity: '350cc'
    }
}
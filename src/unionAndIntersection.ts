// union type: |

type UserRole = 'admin' | 'user';

const getDashboard = (role: UserRole)=>{
    if(role === "admin"){
        return 'Admin Dashboard';
    }
    else if(role === "user"){
        return 'User Dashboard';
    }
    else{
        return 'Invalid Role';
    }
}

// console.log(getDashboard('guest'));  Error: Invalid Role
console.log(getDashboard('admin')); // Output: Admin Dashboard


// intersection type : &

type Employee = {
    id: number;
    name: string;
    department: string;
}

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager;

const manager : EmployeeManager={
    id: 101,
    name: 'Alice',
    department: 'Sales',
    designation: 'Sales Manager',
    teamSize: 10
}

console.log(manager)

"use strict";
// union type: |
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === "admin") {
        return 'Admin Dashboard';
    }
    else if (role === "user") {
        return 'User Dashboard';
    }
    else {
        return 'Invalid Role';
    }
};
// console.log(getDashboard('guest'));  Error: Invalid Role
console.log(getDashboard('admin')); // Output: Admin Dashboard
const manager = {
    id: 101,
    name: 'Alice',
    department: 'Sales',
    designation: 'Sales Manager',
    teamSize: 10
};
console.log(manager);
//# sourceMappingURL=unionAndIntersection.js.map
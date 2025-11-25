"use strict";
// enum: set of fixed string leteral gether in one place
Object.defineProperty(exports, "__esModule", { value: true });
// type userRole = 'Admin' | 'Editor' | 'Viewer';
// define role by using enum
var userRole;
(function (userRole) {
    userRole["Admin"] = "Admin";
    userRole["Editor"] = "Editor";
    userRole["viewer"] = "Viewer";
})(userRole || (userRole = {}));
const canEdit = (role) => {
    if (role === userRole.Admin || role === userRole.Editor) {
        return true;
    }
    return false;
};
const editPermission = canEdit(userRole.Admin);
console.log(editPermission);
// this type not recommend by seniors
//# sourceMappingURL=enum.js.map
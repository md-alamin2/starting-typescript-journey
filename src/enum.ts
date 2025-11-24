// enum: set of fixed string leteral gether in one place

// type userRole = 'Admin' | 'Editor' | 'Viewer';

// define role by using enum
enum userRole{
    Admin='Admin',
    Editor = 'Editor',
    viewer = 'Viewer'
}

const canEdit =(role: userRole) =>{
    if(role === userRole.Admin || role === userRole.Editor){
        return true
    }
    return false
}

const editPermission = canEdit(userRole.Admin);
console.log(editPermission);

// this type not recommend by seniors

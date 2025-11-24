// as const assertion

// enum userRole{
//     Admin='Admin',
//     Editor = 'Editor',
//     viewer = 'Viewer'
// }
const userRole ={
    Admin: 'Admin',
    Editor: 'Editor',
    Viewer : 'Viewer'
} as const;
/**
 * when we use as const assertion it make the data readonly
 * {
 * readonly Admin: 'Admin',
    readonly Editor: 'Editor',
    readonly Viewer : 'Viewer'
 * }
 * now we need 2 operator
 * 1. typeOf operator
 * 2. keyOf operator
 * 
 * const user = {
 * id: 222,
 * name:'Al-amin',
 * }
 * 
 * when you use typeOf operator
 * typeOf user;
 * user = {
 * id: number,
 * name:string
 * } 
 * 
 * when we use keyOf operator it takes all the key and make it union type 
 * keyOf typeOf user = "id" | "name"
 * 
 * 
 */
const canEdit =(role: keyof typeof userRole) =>{
    if(role === userRole.Admin || role === userRole.Editor){
        return true
    }
    return false
}

const editPermission = canEdit(userRole.Admin);
console.log(editPermission);
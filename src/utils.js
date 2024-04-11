export function setUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
}

export function clearUserData() {
    localStorage.removeItem('userData');
}

export function createPointer(className, objectId) {
    return { __type: 'Pointer', className, objectId };
}

export function submitHandler(callback) {
   return function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries([...formData].map(([k, v]) => [k, v.trim()]));
    callback(data);
   }
}
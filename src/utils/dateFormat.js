
let today = new Date()

let dd = today.getDate()
let mm = today.getMonth() + 1
let yyyy = today.getFullYear()

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}
today = mm + '-' + dd + '-' + yyyy;

today = mm + '/' + dd + '/' + yyyy;

today = dd + '-' + mm + '-' + yyyy;

today = dd + '/' + mm + '/' + yyyy;


export default today
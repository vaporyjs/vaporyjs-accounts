// Browser environment
if(typeof window !== 'undefined') {
    Accounts = (typeof window.Accounts !== 'undefined') ? window.Accounts : require('vaporyjs-accounts');
}


// Node environment
if(typeof global !== 'undefined') {
    Accounts = (typeof global.Accounts !== 'undefined') ? global.Accounts : require('vaporyjs-accounts');
}
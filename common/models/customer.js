'use strict';

module.exports = function(Customer) {

Customer.validatesLengthOf("customerid",{
    min:3,
    message:{min:"Customer customerid is required"}
})
Customer.validatesLengthOf("accountid",{
    min:3,
    message:{min:"accountid is is required"}
})
Customer.validatesLengthOf("name",{
    min:3,
    message:{min:"name is required"}
})
Customer.validatesLengthOf("email",{
    min:3,
    message:{min:" email is required"}
})
Customer.validatesLengthOf("phone",{
    min:3,
    message:{min:" phone is required"}
})
};

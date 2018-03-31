function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(user) {
        	return goodUsers.some(function(submited) {
        		return submited.id === user.id;
        	})
        })
    };
}
    
module.exports = checkUsersValid
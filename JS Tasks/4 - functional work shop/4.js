function getShortMessage(messages) {

	var less = messages.filter(mess => 
		mess.message.length < 50
	);
	return less.map(x => x.message)


}

module.exports = getShortMessage;

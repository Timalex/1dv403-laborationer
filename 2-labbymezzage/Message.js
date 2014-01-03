"use strict";
console.log("Message loaded");

function Message (message, date) {

	this.getText = function() {

		return message;
	};

	this.setText = function(_text) {

		message = _text;
	}

	this.getDate = function() {

		return date;
	}

	this.setDate = function(_date) {

		date = _date;
	}

	this.getDateStringUTC = function() {

		return date.getUTCFullYear() + "-" + date.getUTCMonth()+1 + "-" + date.getUTCDate() + " " + date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds() + "Z";
	}

	this.getClockStringLocal = function() {

		return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	}


}

Message.prototype.toString = function() {

	return this.getText() + " (" + this.getDate() + ") ";
};


Message.prototype.getHTMLText = function() {

	return this.getText() + " (" + this.getDate() + ") ";
};
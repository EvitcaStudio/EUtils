
/**
* A utilities class
* @class EUtilsSingleton
* @license EUtils does not have a license at this time. For licensing contact the author
* @author https://github.com/doubleactii
* Copyright (c) 2023 Evitca Studio
*/
class EUtilsSingleton {
	/**
	 * The version of the library
	 */
	static version = '1.0.0';
	constructor() {
		/**
		 * Object storing all color objects being transitioned at the moment
		 * 
		 * @type {Object}
		 */
		this.transitions = {};
		/**
		 * An array storing all the reserved unique IDS
		 * 
		 * @type {Array}
		 */
		this.storedIDs = [];
	}
	/**
	 * Generates a random decimal number between two numbers with a specified number of decimal places.
	 * 
	 * @param {number} pNum1 - The first number to use for generating the random decimal number.
	 * @param {number} pNum2 - The second number to use for generating the random decimal number.
	 * @param {number} [pPlaces=1] - The number of decimal places to include in the generated random decimal number. Defaults to 1 if not provided.
	 * @returns {number} A random decimal number between the two numbers with the specified number of decimal places.
	 */
	decimalRand(pNum1, pNum2, pPlaces = 1) {
		const result = Number((Math.random() * (pNum1 - pNum2) + pNum2).toFixed(pPlaces));
		return (result >= 1 ? Math.floor(result) : result);
	}
	/**
	 * Generates a random decimal number between two numbers with a specified number of decimal places.
	 * 
	 * @param {number} pNum1 - The first number to use for generating the random decimal number.
	 * @param {number} pNum2 - The second number to use for generating the random decimal number.
	 * @returns {number} A random decimal number between the two numbers with the specified number of decimal places.
	 */
	rand(pNum1, pNum2) {
		const result = Number((Math.random() * (pNum1 - pNum2) + pNum2));
		return Math.round(result);
	}
	/**
	 * Calculates the percentage of a value relative to a total value.
	 * 
	 * @param {number} pValue - The value to calculate the percentage of.
	 * @param {number} pTotalValue - The total value to calculate the percentage relative to.
	 * @returns {number} The percentage of the value relative to the total value.
	 */
	getPercentage(pValue, pTotalValue) {
		return (100 * pValue) / pTotalValue;
	}
	/**
	 * Clamps a number between a minimum and maximum value.
	 * 
	 * @param {number} pNumber - The number to clamp.
	 * @param {number} [pMin=0] - The minimum value to clamp the number to. Defaults to 0 if not provided.
	 * @param {number} [pMax=1] - The maximum value to clamp the number to. Defaults to 1 if not provided.
	 * @returns {number} The clamped number between the minimum and maximum values.
	 */
	clamp(pNumber, pMin = 0, pMax = 1) {
		return Math.max(pMin, Math.min(pNumber, pMax));
	}
	/**
	 * Linearly interpolates between two values by a specified amount.
	 * 
	 * @param {number} pStart - The start value to interpolate from.
	 * @param {number} pEnd - The end value to interpolate to.
	 * @param {number} pAmount - The amount to interpolate between the start and end values.
	 * @returns {number} The interpolated value between the start and end values based on the specified amount.
	 */
	lerp(pStart, pEnd, pAmount) {
		return (1-pAmount)*pStart+pAmount*pEnd;
	}
	/**
	 * Linearly interpolates between two values by a specified amount and returns the result as a floored integer.
	 * 
	 * @param {number} pStart - The start value to interpolate from.
	 * @param {number} pEnd - The end value to interpolate to.
	 * @param {number} pAmount - The amount to interpolate between the start and end values.
	 * @returns {number} The interpolated value between the start and end values based on the specified amount, rounded down to the nearest integer.
	 */
	flooredLerp(pStart, pEnd, pAmount) {
		return Math.floor(this.lerp(pStart, pEnd, pAmount));
	}
	/**
	 * Rounds a number to a specified number of decimal places.
	 * 
	 * @param {number} pNumber - The number to round.
	 * @param {number} [pPlace=1] - The number of decimal places to round to. Defaults to 1 if not provided.
	 * @returns {number} The rounded number to the specified number of decimal places.
	 */
	round(pNumber, pPlace=1) {
		return Math.round(pPlace * pNumber) / pPlace;
	}
	/**
	 * Normalizes a value between a minimum and maximum value.
	 * 
	 * @param {number} pVal - The value to normalize.
	 * @param {number} pMin - The minimum value for normalization.
	 * @param {number} pMax - The maximum value for normalization.
	 * @returns {number} The normalized value between 0 and 1 based on the input value's position between the minimum and maximum values.
	 * If the difference between pMax and pMin is 0, returns 1 to avoid dividing by zero.
	 */
	normalize(pVal, pMin, pMax) {
		if (pMax - pMin === 0) return 1;
		return (pVal - pMin) / (pMax - pMin);
	}
	/**
	 * Checks if a value is within a range of minimum and maximum values (inclusive).
	 * 
	 * @param {number} pVal - The value to check.
	 * @param {number} pMin - The minimum value of the range to check against.
	 * @param {number} pMax - The maximum value of the range to check against.
	 * @returns {boolean} True if the value is within the range (inclusive), false otherwise.
	 */
	within(pVal, pMin, pMax) {
		return pVal >= pMin && pVal <= pMax;
	}
	/**
	 * Formats a number by rounding it to the nearest integer and adding commas to separate thousands places.
	 * 
	 * @param {number} pNum - The number to format.
	 * @returns {string} A string representation of the formatted number.
	 */
	formatIntegerWithCommas(pNum) {
		return pNum.toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}
	/**
	 * Converts degrees to radians.
	 * 
	 * @param {number} pDegrees - The angle in degrees.
	 * @returns {number} The angle in radians.
	 */
	degreesToRadians(pDegrees) {
		return pDegrees * (Math.PI / 180);
	}
	/**
	 * Converts radians to degrees.
	 * 
	 * @param {number} pRadians - The angle in radians.
	 * @returns {number} The angle in degrees.
	 */
	radiansToDegrees(pRadians) {
		return pRadians * (180 / Math.PI);
	}
	/**
	 * Returns a random element from the given array.
	 * 
	 * @param {Array} pArray - The input array.
	 * @returns {*} A random element from the array.
	 */
	pick(pArray) {
		const randomIndex = Math.floor(Math.random() * pArray.length);
		return pArray[randomIndex];
	}
	/**
	 * Returns true with probability proportional to the given number.
	 * The higher the number, the higher the chance of returning true.
	 * 
	 * @param {number} pChance - The probability value, between 0 and 100 (inclusive).
	 * @returns {boolean} - Returns true or false, based on the probability value.
	 */
	prob(pChance) {
		if (pChance <= 0) {
			return false;
		}
		if (pChance >= 100) {
			return true;
		}
		const randomNumber = Math.floor(Math.random() * 100) + 1;
		return randomNumber <= pChance;
	}
	/**
	 * Gets the inverse direction of the direction passed
	 * 
	 * @param {string} pDir - The direction to get the inverse of.
	 * @returns {string} The inverse direction
	 */
	getInverseDir(pDir) {
		switch (pDir) {
			case 'north':
				return 'south';
			case 'south':
				return 'north';
			case 'east':
				return 'west';
			case 'west':
				return 'east';
			case 'northeast':
				return 'southwest';
			case 'northwest':
				return 'southeast';
			case 'southeast':
				return 'northwest';
			case 'southwest':
				return 'northeast';
			default:
				console.error(`The direction ${pDir} is not supported.`);
		}
	}
	/**
	 * Calculates the angle (in radians) from a given direction.
	 * 
	 * @param {string} pDir - The direction to calculate the angle from.
	 * @returns {number} The angle (in radians) associated with the given direction.
	 * @throws {Error} Throws an error if the direction is not recognized.
	 */
	getAngleFromDir(pDir) {
		switch (pDir) {
			case 'north':
				return (Math.PI / 2);
			case 'south':
				return (Math.PI * 3) / 2;
			case 'east':
				return (Math.PI * 2);
			case 'west':
				return Math.PI;
			case 'northwest':
				return (Math.PI * 3) / 4;
			case 'northeast':
				return Math.PI / 4;
			case 'southwest':
				return (Math.PI * 5) / 4;
			case 'southeast':
				return (Math.PI * 7) / 4;
			default:
				console.error(`The direction ${pDir} is not supported.`);
		}
	}
	/**
	 * Generates a unique id
	 * 
	 * @param {string} pIDLength - The length of the ID to create 
	 * @returns A unique ID
	 */
	generateID(pIDLength = 7) {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const makeID = function() {
			let ID = '';
			for (let i = 0; i < pIDLength; i++) {
				ID += chars.charAt(Math.floor(Math.random() * chars.length));
			}
			return ID;
		}
		let ID = makeID();
		while(this.storedIDs.includes(ID)) {
			ID = makeID();
		}
		this.storedIDs.push(ID);
		return ID;
	}
	/**
	 * Converts a color in decimal format into hex format
	 * 
	 * @param {number} pDecimal - The color in decimal format
	 * @param {number} pChars - The length to make the hex string
	 * @returns The decimal color converted into hex format
	 */
	decimalToHex(pDecimal, pChars = 6) {
		return '#' + (pDecimal + Math.pow(16, pChars)).toString(16).slice(-pChars).toUpperCase();
	}
	/**
	 * Add intensity to this color to get a brighter or dimmer effect
	 * 
	 * @param {string|number} pColor - Color in hex format or decimal format
	 * @param {number} pPercent - The percent of brightness to add to this color
	 * @returns 
	 */
	addIntensity(pColor, pPercent) {
		const rgb = this.grabColor(pColor).rgbArray;
		const r = rgb[0];
		const g = rgb[1];
		const b = rgb[2];
		let rr = 0;
		let rg = 0;
		let rb = 0;
		const black = (r === 0 && g === 0 && b === 0) ? true : false;
		if (r || black) rr = r + Math.floor((255 * pPercent) / 100);
		if (g || black) rg = g + Math.floor((255 * pPercent) / 100);
		if (b || black) rb = b + Math.floor((255 * pPercent) / 100);
		return this.grabColor(this.clamp(rr, 0, 255), this.clamp(rg, 0, 255), this.clamp(rb, 0, 255)).hex
	}
	/**
	 * Convert a color to different formats or get a random color
	 * 
	 * @param {string|number} pSwitch - A hex string representing a color (with or without the tag)
	 * A color formatted in the decimal format. Or the r value of a rgb color.
	 * @param {number} [g] g value of a rgb color
	 * @param {number} [b] b value of a rgb color
	 * @returns {ColorObject} A color object with various different export options.
	 * hex, hexTagless, rgb, rgbArray, rgbObject, rgbNormal, decimal formats.
	 */
	grabColor(pSwitch = this.getRandomColor(), g, b) {
		let hex, cr, cg, cb;
		if (typeof(pSwitch) === 'number' && typeof(g) === 'number' && typeof(b) === 'number') {
			cr = this.clamp(pSwitch, 0, 255);
			cg = this.clamp(g, 0, 255);
			cb = this.clamp(b, 0, 255);
			const craftString = function(pColor) {
				return pColor.toString(16).padStart(2, '0');
			}
			hex = '#' + [cr, cg, cb].map(craftString).join('');
		} else {
			if (typeof(pSwitch) === 'number') {
				pSwitch = this.decimalToHex(pSwitch);
			}
			hex = pSwitch;
			pSwitch = pSwitch.replace('#', '');
			if (pSwitch.length === 3) {
				pSwitch = pSwitch.replace(new RegExp('(.)', 'g'), '$1$1');
			}
			pSwitch = pSwitch.match(new RegExp('..', 'g'));
			cr = this.clamp(parseInt(pSwitch[0], 16), 0, 255);
			cg = this.clamp(parseInt(pSwitch[1], 16), 0, 255);
			cb = this.clamp(parseInt(pSwitch[2], 16), 0, 255);
		}
		return { 'hex': hex.toLowerCase(), 'hexTagless': hex.replace('#', '').toLowerCase(), 'rgb': 'rgb('+cr+','+cg+','+cb+')', 'rgbArray': [cr, cg, cb], 'rgbObject': { 'r': cr, 'g': cg, 'b': cb }, 'rgbNormal': [Math.round(cr/255 * 100) / 100, Math.round(cg/255 * 100) / 100, Math.round(cb/255 * 100) / 100], 'decimal': (cr << 16 | cg << 8 | cb) };
	}
	/**
	 * Gets a random color
	 * 
	 * @returns {string} A random color in the hex format
	 */
	getRandomColor() {
		const chars = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += chars[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	/**
	 * Gets a random color between two colors
	 * 
	 * @param {number|string} pColor1 - The first color to get a color between
	 * @param {number|string} pColor2 - The second color to get a color between
	 * @param {number} [pAmount=0.5] - The closer the random color will be to either input colors on a range of 0-1
	 * 0 to 0.5 (closer to pColor1)
	 * 0.5 to 1 (closer to pColor2)
	 * @returns {string} A random color in the decimal format
	 */
	getRandomColorBetween(pColor1, pColor2, pAmount = 0.5) {
		// u is the amount of the lerp 0-1
		return this.flooredLerp(this.grabColor(pColor1).decimal, this.grabColor(pColor2).decimal, pAmount);
	}
	/**
	 * Transition a color to another color in pDuration time.
	 * 
	 * @param {Object} pInstance - The instance to transition it's color property.
	 * pInstance's color will be transitioned either via pInstance.color = newColor
	 * or
	 * pInstance.color.tint = newColor (if the color is defined as an object)
	 * @param {string|number} pStartColor - The start color
	 * @param {string|number} pEndColor - The end color
	 * @param {number} pDuration - The duration of the transition
	 * @param {Function} pIterativeCallback - Callback to call every tick of the transition
	 * @param {Function} pEndCallback - Callback to call at the end of the transition
	 * @returns An ID that references this transition to be passed to cancelTransition to stop an ongoing transition.
	 */
	transitionColor(pInstance, pStartColor='#000', pEndColor='#fff', pDuration=1000, pIterativeCallback, pEndCallback) {
		// Cannot use this API on the server
		if (!globalThis.window) return;
		const iterativeCallback = typeof(pIterativeCallback) === 'function' ? pIterativeCallback : null;
		const endCallback = typeof(pEndCallback) === 'function' ? pEndCallback : null;
		let id;
		let isParticle;
		let isTintObject;

		if (pInstance) {
			id = pInstance.id ? pInstance.id : this.generateID();
			isParticle = (pInstance.type === 'GeneratedParticle');
			isTintObject = (typeof(pInstance.color) === 'object' && pInstance.color.constructor === Object ? true : false);
			if (this.transitions[id]) this.cancelTransitionColor(id);
		} else {
			id = this.generateID();
		}
			
		this.transitions[id] = {
			'duration': pDuration,
			'timeTracker': isParticle ? pInstance.info.lifetime : 0
		};

		const rgbStartColor = this.grabColor(pStartColor).rgbArray;
		const rgbEndColor = this.grabColor(pEndColor).rgbArray;

		const self = this;
		this.transitions[id].step = (pTimeStamp) => {
			if (self.transitions[id]) {
				if (isParticle) {
					if (pInstance.info) {
						if (pInstance.info.owner) {
							if (pInstance.info.owner.settings.paused) {
								return;
							}
						}
					} else {
						if (self.transitions[id]) this.cancelTransitionColor(id);
						return;				
					}
				}

				const now = pTimeStamp;
				if (!self.transitions[id].lastTime) self.transitions[id].lastTime = now;
				const elapsed = now - self.transitions[id].lastTime;
				// Time tracker is used rather than lastStamp - startStamp because this currently takes into account particles passed in (this will be removed in the future and use the former method)
				self.transitions[id].timeTracker += elapsed;
				// The max value of percentage is 1, so we clamp it at 1
				const percentage = Math.min(self.transitions[id].timeTracker / self.transitions[id].duration, 1);
				
				const r = parseInt(self.lerp(rgbStartColor[0], rgbEndColor[0], percentage), 10);
				const g = parseInt(self.lerp(rgbStartColor[1], rgbEndColor[1], percentage), 10);
				const b = parseInt(self.lerp(rgbStartColor[2], rgbEndColor[2], percentage), 10);
				const color = self.grabColor(r, g, b);

				if (iterativeCallback) iterativeCallback(color);

				if (pInstance) {
					if (isTintObject) {
						pInstance.color.tint = color.decimal;
						pInstance.color = pInstance.color;
					} else {
						pInstance.color = color.hex;
					}
				}

				if (percentage >= 1 || self.transitions[id].timeTracker >= pDuration) {
					if (self.transitions[id]) this.cancelTransitionColor(id);
					if (endCallback) endCallback(color);
					return;
				}
				self.transitions[id].req = globalThis.requestAnimationFrame(self.transitions[id].step);
				self.transitions[id].lastTime = now;
			}
		}

		this.transitions[id].req = globalThis.requestAnimationFrame(this.transitions[id].step);
		return id;
	}
	/**
	 * Cancels an ongoing transition
	 * 
	 * @param {string} pID - The ID of the ongoing transition to cancel
	 */
	cancelTransitionColor(pID) {
		if (this.transitions[pID]) {
			globalThis.cancelAnimationFrame(this.transitions[pID].req);
			delete this.transitions[pID];
		}
	}
	/**
	 * Calculates the position of a point after rotating it around a center point by a given angle.
	 * 
	 * @param {object} pRect - The rectangle object to rotate the point around.
	 * pRect.anchor.x and pRecent.anchor.y is used to control the "center" of the rectangle.
	 * @param {number} pTheta - The angle (in radians) to rotate the point by.
	 * @param {object} pPoint - The point object to rotate around the center of the rectangle.
	 * @param {number} pPoint.x - The x-coordinate of the point to rotate.
	 * @param {number} pPoint.y - The y-coordinate of the point to rotate.
	 * @returns {object} An object with the rotated point's new x and y coordinates.
	 */
	getPointRotated(pRect, pTheta, pPoint) {
		// cx, cy - center of square coordinates
		// x, y - coordinates of a corner point of the square
		// theta is the angle of rotation
		const cx = pRect.x + pRect.width * (typeof(pRect.anchor) === 'object' && pRect.anchor.x ? pRect.anchor.x : 0.5);
		const cy = pRect.y + pRect.height * (typeof(pRect.anchor) === 'object' && pRect.anchor.y ? pRect.anchor.y : 0.5);

		// translate point to origin
		const tempX = pPoint.x - cx;
		const tempY = pPoint.y - cy;

		// now apply rotation
		const rotatedX = tempX*Math.cos(pTheta) - tempY*(-Math.sin(pTheta));
		const rotatedY = tempX*(-Math.sin(pTheta)) + tempY*Math.cos(pTheta);

		// translate back
		const x = rotatedX + cx;
		const y = rotatedY + cy;
		return { 'x': x, 'y': y };
	}
	/**
	 * Calculates the position of a rectangle's corner points and center point after rotating it around a center point by a given angle.
	 * 
	 * @param {object} pRect - The rectangle object to rotate the point around.
	 * pRect.anchor.x and pRecent.anchor.y is used to control the "center" of the rectangle.
	 * @param {number} pTheta - The angle (in radians) to rotate the point by.
	 * @returns {object} An object with the rotated rectangle's new corner points and center points.
	 */
	getPointsOfRotatedRect(pRect, pTheta) {
		const tl = this.getPointRotated(pRect, pTheta, { 'x': pRect.x, 'y': pRect.y });
		const tr = this.getPointRotated(pRect, pTheta, { 'x': pRect.x + pRect.width, 'y': pRect.y });
		const bl = this.getPointRotated(pRect, pTheta, { 'x': pRect.x, 'y': pRect.y + pRect.height });
		const br = this.getPointRotated(pRect, pTheta, { 'x': pRect.x + pRect.width, 'y': pRect.y + pRect.height });
		const center = this.getPointRotated(pRect, pTheta, { 'x': pRect.x + pRect.width / 2, 'y': pRect.y + pRect.height / 2 });
		return { 'tl': tl, 'tr': tr, 'bl': bl, 'br': br, 'center': center };
	}
}
export const EUtils = new EUtilsSingleton();

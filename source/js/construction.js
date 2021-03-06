/**
 * Check if we are building anything.
 * @return {Boolean} Whether we are building things.
 */

function isBuilding() {
	return building() ? true : false;
}

/**
 * Get what we are building, or return false.
 * @return {Object} Structure information.
 */

function building() {
	if (bought === NULL) {
		return false;
	} else {
		return getAll(towers, NAME, bought)[0];
	}
}

/**
 * Check if we can build on this tile.
 * @return {Boolean} Whether we can build on this tile.
 */

function canBuild(force) {
	if (JSON.stringify(mouse) !== oldMouseCoords || force) {
		oldMouseCoords = JSON.stringify(mouse);
		document.body.style.cursor = 'default';
		/**
		 *   ===  RULES  ===
		 *   Cannot build on structures
		 *   Can build when building nothing (?)
		 *   Cannot build on enemies
		 *   Cannot build where enemies will be
		 *   Cannot prevent enemies from reaching the base
		 *   Can build on any terrain if we are building terrain
		 *   Can build on basic land
		 *   Can build traps on fast land
		 */

		// hovering over a structure
		if (thisTile(obstacles) !== 0) {
			document.body.style.cursor = 'pointer';
			canBuildCache = null;
			return NULL;
		}
		// not building anything
		if (!isBuilding()) {
			canBuildCache = true;
			return true;
		}
		var testMap = compile(mouse.x, mouse.y);
		if (getEdges(testMap).indexOf(true) === -1) {
			canBuildCache = false;
			return false;
		}
		if (onScreen[LENGTH]) {
			// // enemies on current tile
			// var enemy = getAll(onScreen, "x", mouse.x);
			// if (getAll(enemy, "y", mouse.y)[LENGTH]) {
			// 	canBuildCache = false;
			// 	return false;
			// }
			// // enemy will be going to this tile
			// var enemy = getAll(onScreen, "targetX", mouse.x);
			// if (getAll(enemy, "targetY", mouse.y)[LENGTH]) {
			// 	canBuildCache = false;
			// 	return false;
			// }
			// if it stops the enemy from getting to the base
			var testMap = compile(mouse.x, mouse.y);
			if (!getPaths(onScreen, testMap)) {
				canBuildCache = false;
				return false;
			}
		}
		// if we are building terrain
		if (building().is === "terrain") {
			canBuildCache = true;
			return true;
		}
		// if we are building a trap on fast tiles
		if (building().type === "trap") {
			if (thisTile(map).type === "fast" || thisTile(map).type === "slow") {
				canBuildCache = true;
				return true;
			}
			canBuildCache = false;
			return false;
		}
		// if this tile is a basic land
		if (thisTile(map).type === PATH) {
			canBuildCache = true;
			return true;
		}
		canBuildCache = false;
		return false;
	}
	return canBuildCache;
};

/**
 * Fill the build menu with data from towers.
 */

function fillBuildMenu() {
	if (document[GET_ELEMENT_BY_ID](TOWERS).children[LENGTH] > 0) {
		document[GET_ELEMENT_BY_ID](TOWERS)[INNER_HTML] = "";
	}
	var structures = [];
	for (var i = 1; i < towers[LENGTH]; i++) {
		var item = towers[i];
		var expensive = "";
		var buildClass = "";
		var name = START_SPAN + ">" + item[NAME] + CLOSE_SPAN;
		var cost = START_SPAN + " class='cost'>$" + item.cost + CLOSE_SPAN;
		var image = "<img src='" + item.image.src + "'>";
		var container = START_DIV + " data-name='" + item.name + "' class='container" + expensive + buildClass + "' title='" + item.type + ": " + item[NAME] + " ($" + item.cost + ")" + "'>" + image + name + cost + CLOSE_DIV;
		structures.push("" + container + "")
	}
	document[GET_ELEMENT_BY_ID](TOWERS)[INNER_HTML] = structures.join("");
	bindBuyClicks();
}
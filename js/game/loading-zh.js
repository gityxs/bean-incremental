function load(save) {
	if (typeof save !== "object") return;
	if (save === null) return;
	player = runParse(save, defaultPlayer());
}

function runParse(obj, obj2) {
	Object.keys(obj2).forEach(function (key, index) {
		if (key != "proto") {
			if (obj[key] === undefined) {
				obj[key] = obj2[key];
			} else if (typeof obj[key] === "string" && typeof obj2[key] === "object") {
				obj[key] = new Decimal(obj[key]);
			} else if (typeof obj2[key] === "object" && typeof obj[key] === "object") {
				runParse(obj[key], obj2[key]);
			} else if (typeof obj[key] != typeof obj2[key]) {
				obj[key] = obj2[key];
			}
		}
	});

	return obj;
}

var parsedsave = JSON.parse(localStorage.getItem("beancrementalsave"));
if (localStorage.getItem("beancrementalsave") !== null) {
	load(parsedsave);
}

function expo() {
	var sv = $("savetext");
	sv.style.display = "block";
	sv.style.position = "absolute";
	sv.innerText = btoa(JSON.stringify(player));
	sv.focus();
	sv.select();
	document.execCommand('copy');
	sv.style.bottom = "1000vh";
	sv.style.display = "none";
	alert("存档已导出至剪贴板。")
}

function impo() {
	let save = prompt("将你的存档粘贴至此处。");
	if (save !== undefined) {
		load(JSON.parse(atob(save)));
	}
}
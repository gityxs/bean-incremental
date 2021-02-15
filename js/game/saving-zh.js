function save() {
	localStorage.setItem("beancrementalsave", JSON.stringify(player));
	console.log("存档成功。");
}
function reset() {
	if (confirm("真要重置你的存档？")) {
		setTimeout(function () {
			if (prompt("输入“RESET”（不含引号）以重置你的存档。") === "RESET") {
				player = defaultPlayer();
			}
		}, 200);
	}
}
setInterval(save, 10000);
"use strict";
decadeModule.import(function (lib, game, ui, get, ai, _status) {
	if (lib.config["extension_十周年UI_translate"]) {
		lib.init.js(lib.assetURL + "extension/十周年UI/js/cardtranslate.js");
		game.saveConfig("enable_drag", false);
	} else {
		game.saveConfig("enable_drag", true);
	}

	//OL随机框 by柳下跖
	if (lib.config.extension_十周年UI_newDecadeStyle && lib.config.extension_十周年UI_newDecadeStyle == "onlineUI") {
		//给龙头添加OL等阶框
		lib.skill._longLevel = {
			trigger: {
				global: "gameStart",
			},
			silent: true,
			forced: true,
			filter: function (event, player) {
				return lib.config.extension_十周年UI_longLevel == "ten" || lib.config.extension_十周年UI_longLevel == "eleven";
			},
			content: function () {
				if (lib.config.extension_十周年UI_longLevel == "ten") {
					var rarity = ["silver", "gold", "yu", "bing", "yan"];
					switch (game.getRarity(player.name)) {
						case "junk":
							rarity = rarity[0];
							break;
						case "common":
							rarity = rarity[1];
							break;
						case "rare":
							rarity = rarity[2];
							break;
						case "epic":
							rarity = rarity[3];
							break;
						case "legend":
							rarity = rarity[4];
							break;
						default:
							break;
					}
				}
				if (lib.config.extension_十周年UI_longLevel == "eleven") {
					var rarity = ["silver", "gold", "yu", "bing", "yan"].randomGet();
				}
				if (rarity === "yan") {
					var longtou = document.createElement("img");
					longtou.src = decadeUIPath + "/assets/image/OL/k2.png";
					longtou.style.cssText = "pointer-events:none";
					longtou.style.position = "absolute";
					longtou.style.display = "block";
					longtou.style.top = "-20.5px";
					longtou.style.right = "-5px";
					longtou.style.height = "115%";
					longtou.style.width = "130%";
					longtou.style.zIndex = "60";
					player.appendChild(longtou);
					var longwei = document.createElement("img");
					longwei.src = decadeUIPath + "/assets/image/OL/border_campOL5.png";
					longwei.style.cssText = "pointer-events:none";
					longwei.style.position = "absolute";
					longwei.style.display = "block";
					longwei.style.top = "-20.5px";
					longwei.style.right = "-5px";
					longwei.style.height = "115%";
					longwei.style.width = "130%";
					longwei.style.zIndex = "72";
					player.appendChild(longwei);
				}
				if (rarity === "bing") {
					var longtou = document.createElement("img");
					longtou.src = decadeUIPath + "/assets/image/OL/k8.png";
					longtou.style.cssText = "pointer-events:none";
					longtou.style.position = "absolute";
					longtou.style.display = "block";
					longtou.style.top = "-6px";
					longtou.style.right = "-5.5px";
					longtou.style.height = "109%";
					longtou.style.width = "123%";
					longtou.style.zIndex = "60";
					player.appendChild(longtou);
					var longwei = document.createElement("img");
					longwei.src = decadeUIPath + "/assets/image/OL/border_campOL4.png";
					longwei.style.cssText = "pointer-events:none";
					longwei.style.position = "absolute";
					longwei.style.display = "block";
					longwei.style.top = "-6px";
					longwei.style.right = "-5.5px";
					longwei.style.height = "107%";
					longwei.style.width = "123%";
					longwei.style.zIndex = "72";
					player.appendChild(longwei);
				}
				if (rarity === "yu") {
					var longtou = document.createElement("img");
					longtou.src = decadeUIPath + "/assets/image/OL/k6.png";
					longtou.style.cssText = "pointer-events:none";
					longtou.style.position = "absolute";
					longtou.style.display = "block";
					longtou.style.top = "-3px";
					longtou.style.right = "-3px";
					longtou.style.height = "107.5%";
					longtou.style.width = "114.5%";
					longtou.style.zIndex = "60";
					player.appendChild(longtou);
					var longwei = document.createElement("img");
					longwei.src = decadeUIPath + "/assets/image/OL/border_campOL3.png";
					longwei.style.cssText = "pointer-events:none";
					longwei.style.position = "absolute";
					longwei.style.display = "block";
					longwei.style.top = "-3px";
					longwei.style.right = "-3px";
					longwei.style.height = "105.5%";
					longwei.style.width = "114.5%";
					longwei.style.zIndex = "72";
					player.appendChild(longwei);
				}
				if (rarity === "gold") {
					var longtou = document.createElement("img");
					longtou.src = decadeUIPath + "/assets/image/OL/k4.png";
					longtou.style.cssText = "pointer-events:none";
					longtou.style.position = "absolute";
					longtou.style.display = "block";
					longtou.style.top = "-5px";
					longtou.style.right = "-3px";
					longtou.style.height = "107.5%";
					longtou.style.width = "114.5%";
					longtou.style.zIndex = "60";
					player.appendChild(longtou);
					var longwei = document.createElement("img");
					longwei.src = decadeUIPath + "/assets/image/OL/border_campOL2.png";
					longwei.style.cssText = "pointer-events:none";
					longwei.style.position = "absolute";
					longwei.style.display = "block";
					longwei.style.top = "-5px";
					longwei.style.right = "-3px";
					longwei.style.height = "107.5%";
					longwei.style.width = "114.5%";
					longwei.style.zIndex = "72";
					player.appendChild(longwei);
				}
				if (rarity === "silver") {
					var longtou = document.createElement("img");
					longtou.src = decadeUIPath + "/assets/image/OL/k2.png";
					longtou.style.cssText = "pointer-events:none";
					longtou.style.position = "absolute";
					longtou.style.display = "block";
					longtou.style.top = "-20.5px";
					longtou.style.right = "-5px";
					longtou.style.height = "115%";
					longtou.style.width = "130%";
					longtou.style.zIndex = "60";
					player.appendChild(longtou);
					var longwei = document.createElement("img");
					longwei.src = decadeUIPath + "/assets/image/OL/border_campOL5.png";
					longwei.style.cssText = "pointer-events:none";
					longwei.style.position = "absolute";
					longwei.style.display = "block";
					longwei.style.top = "-20.5px";
					longwei.style.right = "-5px";
					longwei.style.height = "115%";
					longwei.style.width = "130%";
					longwei.style.zIndex = "72";
					player.appendChild(longwei);
				}
			},
		};
	}

	//势力选择
	if (lib.config["extension_十周年UI_shiliyouhua"]) {
		Object.defineProperty(lib, "group", {
			get: () => {
				if (get.mode() === "guozhan") return ["wei", "shu", "wu", "qun", "jin"];
				return ["wei", "shu", "wu", "qun", "jin"];
			},
			set: () => {},
		});
		lib.skill._slyh = {
			trigger: {
				global: "gameStart",
				player: "enterGame",
			},
			forced: true,
			popup: false,
			silent: true,
			priority: Infinity,
			filter: (_, player) => {
				if (get.mode() === "guozhan") return false;
				return player.group && !lib.group.includes(player.group);
			},
			async content(event, trigger, player) {
				const list = lib.group.slice(0, 5);
				const result = await player
					.chooseControl(list)
					.set("ai", () => get.event().controls.randomGet())
					.set("prompt", "请选择你的势力")
					.forResult();
				if (result?.control) {
					player.group = result.control;
					player.node.name.dataset.nature = get.groupnature(result.control);
				}
			},
		};
	}

	//武将背景
	if (lib.config["extension_十周年UI_wujiangbeijing"]) {
		lib.skill._wjBackground = {
			charlotte: true,
			forced: true,
			popup: false,
			trigger: {
				global: ["gameStart", "modeSwitch"],
				player: ["enterGame", "showCharacterEnd"],
			},
			priority: 100,
			content() {
				const setBackground = player => {
					if (!player) return;
					const mode = get.mode();
					const isDoubleCharacter = lib.config.mode_config[mode] && lib.config.mode_config[mode].double_character;
					if (mode === "guozhan" || isDoubleCharacter) {
						player.setAttribute("data-mode", "guozhan");
					} else {
						player.setAttribute("data-mode", "normal");
					}
				};
				game.players.forEach(setBackground);
				game.dead.forEach(setBackground);
			},
		};
		lib.arenaReady.push(function () {
			const mode = get.mode();
			const isDoubleCharacter = lib.config.mode_config[mode] && lib.config.mode_config[mode].double_character;
			if (mode === "guozhan" || isDoubleCharacter) {
				document.body.setAttribute("data-mode", "guozhan");
			} else {
				document.body.setAttribute("data-mode", "normal");
			}
		});
	}

	// 全选按钮功能 by奇妙工具做修改
	lib.hooks.checkBegin.add("Selectall", () => {
		const event = get.event();
		const needMultiSelect = event.selectCard?.[1] > 1 && event.player == game.me;
		const isDiscardPhase = event.name === "phaseDiscard" || event.parent?.name === "phaseDiscard";
		if (needMultiSelect && !ui.Selectall && !isDiscardPhase) {
			ui.Selectall = ui.create.control("全选", () => {
				ai.basic.chooseCard(card => (get.position(card) === "h" ? 114514 : 0));
				event.custom?.add?.card?.();
				ui.selected.cards?.forEach(card => card.updateTransform(true));
			});
		} else if (!needMultiSelect || isDiscardPhase) {
			removeCardQX();
		}
	});
	lib.hooks.uncheckBegin.add("Selectall", () => {
		if (get.event().result?.bool) {
			removeCardQX();
		}
	});
	const removeCardQX = () => {
		if (ui.Selectall) {
			ui.Selectall.remove();
			delete ui.Selectall;
		}
	};

	// 局内交互优化
	if (lib.config["extension_十周年UI_jiaohuyinxiao"]) {
		lib.skill._useCardAudio = {
			trigger: {
				player: "useCard",
			},
			forced: true,
			popup: false,
			priority: -10,
			content() {
				let card = trigger.card;
				let cardType = get.type(card);
				let cardName = get.name(card);
				let cardNature = get.nature(card);
				if (cardType == "basic") {
					switch (cardName) {
						case "sha":
							if (cardNature == "fire") {
								game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
							} else if (cardNature == "thunder") {
								game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
							} else {
								game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
							}
							break;
						case "shan":
							game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
							break;
						case "tao":
							game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
							break;
						case "jiu":
							game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
							break;
						default:
							game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
					}
				} else if (cardType == "trick") {
					if (get.tag(card, "damage")) {
						game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
					} else if (get.tag(card, "recover")) {
						game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
					} else {
						game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
					}
				} else if (cardType == "equip") {
					let equipType = get.subtype(card);
					switch (equipType) {
						case "equip1": // 武器
							game.playAudio("..", "extension", "十周年UI", "audio/weapon_equip");
							break;
						case "equip2": // 防具
							game.playAudio("..", "extension", "十周年UI", "audio/horse_equip");
							break;
						case "equip3": // -1马
							game.playAudio("..", "extension", "十周年UI", "audio/armor_equip");
							break;
						case "equip4": // +1马
							game.playAudio("..", "extension", "十周年UI", "audio/armor_equip");
							break;
						case "equip5": // 宝物
							game.playAudio("..", "extension", "十周年UI", "audio/horse_equip");
							break;
					}
				}
			},
		};
		document.body.addEventListener("mousedown", function (e) {
			const target = e.target;
			if (target.closest("#dui-controls")) {
				if (target.classList.contains("control") || target.parentElement.classList.contains("control")) {
					game.playAudio("..", "extension", "十周年UI", "audio/BtnSure");
				}
			}
			if (target.classList.contains("menubutton") || target.classList.contains("button")) {
				game.playAudio("..", "extension", "十周年UI", "audio/card_click");
			}
			if (target.classList.contains("card")) {
				game.playAudio("..", "extension", "十周年UI", "audio/card_click");
			}
		});
	}

	//手气卡美化
	if (lib.config["extension_十周年UI_shouqikamh"]) {
		lib.element.content.gameDraw = function () {
			"step 0";
			if (_status.brawl && _status.brawl.noGameDraw) {
				event.finish();
				return;
			}
			var end = player;
			var numx = num;
			do {
				if (typeof num == "function") {
					numx = num(player);
				}
				/*otherPile主要是针对那些用专属牌堆，不从一般牌堆摸牌的角色（如陈寿），该属性目前只有两个键值对，且都为函数
				 *getCards函数与获得牌相关，只传入要获得的牌数num作为参数
				 *discard与手气卡换牌后弃置牌相关，只传入要弃置的牌card作为参数
				 */
				const cards = [],
					otherGetCards = event.otherPile?.[player.playerid]?.getCards;
				//先专属牌堆，再一般的牌堆
				if (otherGetCards) cards.addArray(otherGetCards(numx));
				if (player.getTopCards) cards.addArray(player.getTopCards(numx - cards.length));
				cards.addArray(get.cards(numx - cards.length));
				//别问，问就是初始手牌要有标记 by 星の语
				//event.gaintag支持函数、字符串、数组。数组就是添加一连串的标记；函数的返回格式为[[cards1,gaintag1],[cards2,gaintag2]...]
				if (event.gaintag?.[player.playerid]) {
					const gaintag = event.gaintag[player.playerid];
					const list = typeof gaintag == "function" ? gaintag(numx, cards) : [[cards, gaintag]];
					game.broadcastAll(
						(player, list) => {
							for (let i = list.length - 1; i >= 0; i--) {
								player.directgain(list[i][0], null, list[i][1]);
							}
						},
						player,
						list
					);
				} else player.directgain(cards);

				if (player.singleHp === true && get.mode() != "guozhan" && (lib.config.mode != "doudizhu" || _status.mode != "online")) {
					player.doubleDraw();
				}
				player._start_cards = player.getCards("h");
				player = player.next;
			} while (player != end);
			event.changeCard = get.config("change_card");
			if (_status.connectMode || (lib.config.mode == "single" && _status.mode != "wuxianhuoli") || (lib.config.mode == "doudizhu" && _status.mode == "online") || (lib.config.mode != "identity" && lib.config.mode != "guozhan" && lib.config.mode != "doudizhu" && lib.config.mode != "single")) {
				event.changeCard = "disabled";
			}
			("step 1");
			if (event.changeCard != "disabled" && !_status.auto && game.me.countCards("h")) {
				function getRandomInt(min, max) {
					min = Math.ceil(min);
					max = Math.floor(max);
					return Math.floor(Math.random() * (max - min + 1)) + min;
				}
				event.numsl = getRandomInt(10000, 99999);
				event.numsy = 5; //手气卡次数改这里
				var str = "本场还可更换" + event.numsy + "次手牌(剩余" + event.numsl + "张手气卡)";
				event.dialog = ui.create.dialog(str);
				ui.create.confirm("oc");
				event.custom.replace.confirm = function (bool) {
					_status.event.bool = bool;
					game.resume();
				};
			} else {
				event.finish();
			}
			("step 2");
			if (event.changeCard == "once") {
				event.changeCard = "disabled";
			} else if (event.changeCard == "twice") {
				event.changeCard = "once";
			} else if (event.changeCard == "disabled") {
				event.bool = false;
				return;
			}
			_status.imchoosing = true;
			event.switchToAuto = function () {
				_status.event.bool = false;
				game.resume();
			};
			game.pause();
			("step 3");
			_status.imchoosing = false;
			if (event.bool) {
				if (game.changeCoin) {
					game.changeCoin(-3);
				}
				/*otherPile主要是针对那些用专属牌堆，不从一般牌堆摸牌的角色（如陈寿），该属性目前只有两个键值对，且都为函数
				 *getCards函数与获得牌相关，只传入要获得的牌数num作为参数
				 *discard与手气卡换牌后弃置牌相关，只传入要弃置的牌card作为参数
				 */
				const hs = game.me.getCards("h"),
					cards = [],
					otherGetCards = event.otherPile?.[game.me.playerid]?.getCards,
					otherDiscacrd = event.otherPile?.[game.me.playerid]?.discard;
				//先弃牌
				game.addVideo("lose", game.me, [get.cardsInfo(hs), [], [], []]);
				for (let i = 0; i < hs.length; i++) {
					hs[i].removeGaintag(true);
					if (otherDiscacrd) otherDiscacrd(hs[i]);
					else hs[i].discard(false);
				}
				//再摸牌
				if (otherGetCards) cards.addArray(otherGetCards(hs.length));
				//专属牌堆不够时从正常牌堆获取
				cards.addArray(get.cards(hs.length - cards.length));
				//添加标记相关
				//别问，问就是初始手牌要有标记 by 星の语
				//event.gaintag支持函数、字符串、数组。数组就是添加一连串的标记；函数的返回格式为[[cards1,gaintag1],[cards2,gaintag2]...]
				if (event.gaintag?.[game.me.playerid]) {
					const gaintag = event.gaintag[game.me.playerid];
					const list = typeof gaintag == "function" ? gaintag(hs.length, cards) : [[cards, gaintag]];
					for (let i = list.length - 1; i >= 0; i--) {
						game.me.directgain(list[i][0], null, list[i][1]);
					}
				} else game.me.directgain(cards);
				event.numsl--;
				event.numsy--;
				if (event.numsy <= 0) {
					if (event.dialog) event.dialog.close();
					if (ui.confirm) ui.confirm.close();
					game.me._start_cards = game.me.getCards("h");
					event.finish();
				} else {
					var str = "本场还可更换" + event.numsy + "次手牌(剩余" + event.numsl + "张手气卡)";
					event.dialog.remove();
					event.dialog = ui.create.dialog(str);
					event.goto(2);
				}
			} else {
				if (event.dialog) event.dialog.close();
				if (ui.confirm) ui.confirm.close();
				game.me._start_cards = game.me.getCards("h");
				event.finish();
			}
			("step 4");
			setTimeout(decadeUI.effect.gameStart, 51);
		};
	}

	// 卡牌边框
	if (lib.config["extension_十周年UI_cardkmh"]) {
		/**
		 * @param {string} borderImageName - 边框图片名称
		 */
		function applyCardBeautification(borderImageName) {
			if (!borderImageName) {
				console.warn("Card beautification image name not specified");
				return;
			}
			const style = document.createElement("style");
			const borderImageUrl = `${lib.assetURL}extension/十周年UI/assets/image/${borderImageName}.png`;
			const commonBorderStyles = `
				border: 1px solid;
				border-radius: 6px;
				border-image-source: url('${borderImageUrl}');
				border-image-slice: 20 20 20 20;
			`;
			const handCardStyles = `
				.hand-cards > .handcards > .card {
					margin: 0px;
					width: 108px;
					height: 150px;
					position: absolute;
					transition-property: transform, opacity, left, top;
					${commonBorderStyles}
					border-image-width: 20px 20px 20px 20px;
					z-index: 1;
				}
			`;
			const playedCardStyles = `
				#arena > .card,
				#arena.oblongcard:not(.chess) > .card,
				#arena.oblongcard:not(.chess) .handcards > .card {
					width: 108px;
					height: 150px;
					${commonBorderStyles}
					border-image-width: 16px 16px 16px 16px;
				}
			`;

			style.innerHTML = handCardStyles + playedCardStyles;
			document.head.appendChild(style);
		}
		// 初始化卡牌美化
		applyCardBeautification(lib.config.extension_十周年UI_cardkmh);
	}

	//卡牌背景
	if (lib.config.extension_十周年UI_cardbj && lib.config.extension_十周年UI_cardbj != "kb1") {
		var KPcss = document.createElement("style");
		KPcss.innerHTML = ".card:empty,.card.infohidden{background:url('" + lib.assetURL + "extension/十周年UI/assets/image/" + lib.config.extension_十周年UI_cardbj + ".png" + "');background-size:100% 100% !important;}";
		document.head.appendChild(KPcss);
	}
	window.kpimport = function (func) {
		func(lib, game, ui, get, ai, _status);
	};

	//弹出记录
	game.log = function () {
		var str = "",
			str2 = "",
			logvid = null;
		for (var i = 0; i < arguments.length; i++) {
			var itemtype = get.itemtype(arguments[i]);
			if (itemtype === "player" || itemtype === "players") {
				str += '<span class="bluetext">' + get.translation(arguments[i]) + "</span>";
				str2 += get.translation(arguments[i]);
			} else if (itemtype === "cards" || itemtype === "card" || (typeof arguments[i] === "object" && arguments[i] && arguments[i].name)) {
				str += '<span class="yellowtext">' + get.translation(arguments[i]) + "</span>";
				str2 += get.translation(arguments[i]);
			} else if (typeof arguments[i] === "object") {
				if (arguments[i]) {
					if (arguments[i].parentNode === ui.historybar) {
						logvid = arguments[i].logvid;
					} else {
						str += get.translation(arguments[i]);
						str2 += get.translation(arguments[i]);
					}
				}
			} else if (typeof arguments[i] === "string") {
				if (arguments[i][0] === "【" && arguments[i][arguments[i].length - 1] === "】") {
					str += '<span class="greentext">' + get.translation(arguments[i]) + "</span>";
					str2 += get.translation(arguments[i]);
				} else if (arguments[i][0] === "#") {
					var color = "";
					switch (arguments[i][1]) {
						case "b":
							color = "blue";
							break;
						case "y":
							color = "yellow";
							break;
						case "g":
							color = "green";
							break;
					}
					str += '<span class="' + color + 'text">' + get.translation(arguments[i].slice(2)) + "</span>";
					str2 += get.translation(arguments[i].slice(2));
				} else {
					if (arguments[i].indexOf("使命") !== -1 && arguments[i].indexOf("失败") !== -1) {
						let playerp = _status.event.player;
						let skillp = lib.skill[_status.event.name].parentskill;
						setTimeout(function () {
							if (skillp) var mark = playerp.node.xSkillMarks.querySelector('[data-id="' + skillp + '"]');
							if (mark) mark.classList.add("fail");
						}, 0);
					}
					str += get.translation(arguments[i]);
					str2 += get.translation(arguments[i]);
				}
			} else {
				str += arguments[i];
				str2 += arguments[i];
			}
		}
		var node = ui.create.div();
		node.innerHTML = lib.config.log_highlight ? str : str2;
		ui.sidebar.insertBefore(node, ui.sidebar.firstChild);
		game.addVideo("log", null, lib.config.log_highlight ? str : str2);
		game.broadcast(
			function (str, str2) {
				game.log(lib.config.log_highlight ? str : str2);
			},
			str,
			str2
		);
		if (!_status.video && !game.online) {
			if (!logvid) {
				logvid = _status.event.getLogv();
			}
			if (logvid) {
				game.logv(logvid, '<div class="text center">' + lib.config.log_highlight ? str : str2 + "</div>");
			}
		}
		if (!_status.event.skill) return;
		//这里，清除使用卡牌在中间的显示
		if (_status.event === "useCard") return;
		if (lib.config.show_log !== "off" && !game.chess) {
			var nodeentry = node.cloneNode(true);
			ui.arenalog.insertBefore(nodeentry, ui.arenalog.firstChild);
			if (!lib.config.clear_log) {
				while (ui.arenalog.childNodes.length && ui.arenalog.scrollHeight > ui.arenalog.offsetHeight) {
					ui.arenalog.lastChild.remove();
				}
			}
			if (!lib.config.low_performance) {
				nodeentry.style.transition = "all 0s";
				nodeentry.style.marginBottom = -nodeentry.offsetHeight + "px";
				ui.refresh(nodeentry);
				nodeentry.style.transition = "";
				nodeentry.style.marginBottom = "";
			}
			if (lib.config.clear_log) {
				nodeentry.timeout = setTimeout(function () {
					nodeentry.delete();
				}, 1000);
				for (var i = 0; i < ui.arenalog.childElementCount; i++) {
					if (!ui.arenalog.childNodes[i].timeout) {
						ui.arenalog.childNodes[i].remove();
					}
				}
			}
		}
	};
});

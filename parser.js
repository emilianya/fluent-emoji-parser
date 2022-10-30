const fs = require("fs")

let metadata = []
let allEmotes = fs.readdirSync("./assets")

allEmotes.forEach((emote, index) => {
	if (!fs.existsSync(`./assets/${emote}/metadata.json`)) return;
	let emoteData = JSON.parse(fs.readFileSync(`./assets/${emote}/metadata.json`).toString());
	let category = emoteData.group;
	let name = emoteData.cldr
	let order = index
	let keywords = emoteData.keywords
	let unified = emoteData.unicode
	let emoji = emoteData.glyph

	metadata.push({
		category,
		name,
		order,
		keywords,
		unified,
		emoji
	})
	console.log(`(${index + 1}/${allEmotes.length}) Parsed ${emote}`)
})

fs.writeFileSync("./out.json", JSON.stringify(metadata, null, 2))
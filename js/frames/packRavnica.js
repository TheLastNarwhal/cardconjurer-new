//Create objects for common properties across available frames
var masks = [{src:'/img/frames/ravnica/maskRight.png', name:'Right Side'}, {src:'/img/frames/ravnica/maskTitleInner.png', name:'Title'}, {src:'/img/frames/ravnica/maskTypeInner.png', name:'Type'}, {src:'/img/frames/ravnica/maskRules.png', name:'Rules'}];
var crownBounds = {x:91/1500, y:0, width:1318/1500, height:91/2100};
var crownMasks = [{src:'/img/frames/ravnica/crowns/maskRight.png', name:'Right Side'}];
var ptBounds = {x:1152/1500, y:1855/2100, width:287/1500, height:145/2100};
var ptMasks = [{src:'/img/frames/ravnica/pt/highlightsLeft.png', name:'Highlights (Left)'}, {src:'/img/frames/ravnica/pt/highlightsRight.png', name:'Highlights (Right)'}];
//defines available frames
availableFrames = [
	{name:'White Frame', src:'/img/frames/ravnica/w.png', masks:masks},
	{name:'Blue Frame', src:'/img/frames/ravnica/u.png', masks:masks},
	{name:'Black Frame', src:'/img/frames/ravnica/b.png', masks:masks},
	{name:'Red Frame', src:'/img/frames/ravnica/r.png', masks:masks},
	{name:'Green Frame', src:'/img/frames/ravnica/g.png', masks:masks},
	{name:'Multicolored Frame', src:'/img/frames/ravnica/m.png', masks:masks},
	{name:'Artifact Frame', src:'/img/frames/ravnica/a.png', masks:masks},
	{name:'Colorless Frame', src:'/img/frames/ravnica/c.png', masks:masks},

	{name:'White Power/Toughness', src:'/img/frames/ravnica/pt/w.png', bounds:ptBounds, masks:ptMasks},
	{name:'Blue Power/Toughness', src:'/img/frames/ravnica/pt/u.png', bounds:ptBounds, masks:ptMasks},
	{name:'Black Power/Toughness', src:'/img/frames/ravnica/pt/b.png', bounds:ptBounds, masks:ptMasks},
	{name:'Red Power/Toughness', src:'/img/frames/ravnica/pt/r.png', bounds:ptBounds, masks:ptMasks},
	{name:'Green Power/Toughness', src:'/img/frames/ravnica/pt/g.png', bounds:ptBounds, masks:ptMasks},
	{name:'Multicolored Power/Toughness', src:'/img/frames/ravnica/pt/m.png', bounds:ptBounds, masks:ptMasks},
	{name:'Artifact Power/Toughness', src:'/img/frames/ravnica/pt/a.png', bounds:ptBounds, masks:ptMasks},
	{name:'Colorless Power/Toughness', src:'/img/frames/ravnica/pt/c.png', bounds:ptBounds, masks:ptMasks},

	{name:'White Crown', src:'/img/frames/ravnica/crowns/w.png', bounds:crownBounds, masks:crownMasks},
	{name:'Blue Crown', src:'/img/frames/ravnica/crowns/u.png', bounds:crownBounds, masks:crownMasks},
	{name:'Black Crown', src:'/img/frames/ravnica/crowns/b.png', bounds:crownBounds, masks:crownMasks},
	{name:'Red Crown', src:'/img/frames/ravnica/crowns/r.png', bounds:crownBounds, masks:crownMasks},
	{name:'Green Crown', src:'/img/frames/ravnica/crowns/g.png', bounds:crownBounds, masks:crownMasks},
	{name:'Multicolored Crown', src:'/img/frames/ravnica/crowns/m.png', bounds:crownBounds, masks:crownMasks},
	{name:'Artifact Crown', src:'/img/frames/ravnica/crowns/a.png', bounds:crownBounds, masks:crownMasks},
	{name:'Colorless Crown', src:'/img/frames/ravnica/crowns/c.png', bounds:crownBounds, masks:crownMasks},

	{name:'Holo Stamp', src:'/img/frames/ravnica/stamp.png', bounds:{x:656/1500, y:1886/2100, width:187/1500, height:96/2100}}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	// notify("To change the color of your mana cost, use {manacolor#}, but replace '#' with your desired color. 'white', 'blue', 'black', 'red', and 'green', as well as hex/html color codes are currently supported.", 15)
	//resets things so that every frame doesn't have to
	await resetCardIrregularities();
	//sets card version
	card.version = 'ravnica';
	//art bounds
	card.artBounds = {x:108/1500, y:237/2100, width:1283/1500, height:930/2100};
	autoFitArt();
	//set symbol bounds
	card.setSymbolBounds = {x:0.9213, y:0.5910, width:0.12, height:0.0410, vertical:'center', horizontal: 'right'};
	resetSetSymbol();
	//watermark bounds
	card.watermarkBounds = {x:0.5, y:0.7762, width:0.75, height:0.2305};
	resetWatermark();
	//text
	loadTextOptions({
		mana: {name:'Mana Cost', text:'', y:0.0613, width:0.9292, height:71/2100, oneLine:true, size:71/1638, align:'right', shadowX:-0.001, shadowY:0.0029, manaCost:true, manaSpacing:0},
		title: {name:'Title', text:'', x:0.0854, y:0.0522, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0381},
		type: {name:'Type', text:'', x:0.0854, y:0.5664, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0324},
		rules: {name:'Rules Text', text:'', x:0.086, y:0.6303, width:0.828, height:0.2875, size:0.0362},
		pt: {name:'Power/Toughness', text:'', x:0.7928, y:0.902, width:0.1367, height:0.0372, size:0.0372, font:'belerenbsc', oneLine:true, align:'center'}
	});
}
//loads available frames
loadFramePack();
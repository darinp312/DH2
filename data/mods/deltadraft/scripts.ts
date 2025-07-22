export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
	gen: 9,
	teambuilderConfig: {
		excludeStandardTiers: true,
	},
	init() {
		// Solrock
		this.modData("Learnsets", "solrock").learnset.shoreup = ["9L1"];
		this.modData("Learnsets", "solrock").learnset.bodypress = ["9L1"];
		this.modData("Learnsets", "solrock").learnset.superpower = ["9L1"];
		this.modData("Learnsets", "solrock").learnset.circlethrow = ["9L1"];
		this.modData("Learnsets", "solrock").learnset.uturn = ["9L1"];
		delete this.modData('Learnsets', 'solrock').learnset.psychic;
		delete this.modData('Learnsets', 'solrock').learnset.psyshock;
		delete this.modData('Learnsets', 'solrock').learnset.zenheadbutt;
		delete this.modData('Learnsets', 'solrock').learnset.hypnosis;
		delete this.modData('Learnsets', 'solrock').learnset.calmmind;
		delete this.modData('Learnsets', 'solrock').learnset.swordsdance;
		delete this.modData('Learnsets', 'solrock').learnset.willowisp;
	},
};

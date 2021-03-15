onEvent('worldgen.remove', event => {
	event.removeOres(ore => {
		ores.blocks = ['thermal:lead_ore', 'thermal:copper_ore', 'thermal:tin_ore', 'silentgear:bort_ore']
	})
})
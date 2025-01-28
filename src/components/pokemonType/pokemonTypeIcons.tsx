import { BugIcon, DarkIcon, DragonIcon, ElectricIcon, FairyIcon, FightingIcon, FireIcon, FlyingIcon, GhostIcon, GrassIcon, GroundIcon, IceIcon, NormalIcon, PoisonIcon, PsychicIcon, RockIcon, SteelIcon, WaterIcon } from '../../../public/icons'

export const typeIcons = {
	bug: <BugIcon />,
	dark: <DarkIcon />,
	dragon: <DragonIcon />,
	electric: <ElectricIcon />,
	fairy: <FairyIcon />,
	fighting: <FightingIcon />,
	fire: <FireIcon />,
	flying: <FlyingIcon />,
	ghost: <GhostIcon />,
	grass: <GrassIcon />,
	ground: <GroundIcon />,
	ice: <IceIcon />,
	normal: <NormalIcon />,
	poison: <PoisonIcon />,
	psychic: <PsychicIcon />,
	rock: <RockIcon />,
	steel: <SteelIcon />,
	water: <WaterIcon />
}

type PokemonTypeProps = {
	type: keyof typeof typeIcons
}

export const PokemonTypeIcons = ({ type }: PokemonTypeProps) => {
	return typeIcons[type] || null
}
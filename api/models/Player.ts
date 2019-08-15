interface Quests {
  warlords_ctf: Warlords_ctf
  warlords_win: Warlords_win
  gingerbread_bling_bling: Gingerbread_bling_bling
  skywars_solo_win: Skywars_solo_win
  skywars_solo_kills: Skywars_solo_kills
  skywars_team_kills: Skywars_team_kills
  blitz_game_of_the_day: Blitz_game_of_the_day
  skywars_weekly_kills: Skywars_weekly_kills
  cvc_win_daily_normal: Cvc_win_daily_normal
  mega_walls_play: Mega_walls_play
  mega_walls_win: Mega_walls_win
  mega_walls_kill: Mega_walls_kill
  crazy_walls_daily_play: Crazy_walls_daily_play
  crazy_walls_daily_kill: Crazy_walls_daily_kill
  mega_walls_weekly: Mega_walls_weekly
  skywars_team_win: Skywars_team_win
  skywars_special_north_pole: Skywars_special_north_pole
  skywars_arcade_win: Skywars_arcade_win
  skywars_weekly_arcade_win_all: Skywars_weekly_arcade_win_all
  bedwars_weekly_bed_elims: Bedwars_weekly_bed_elims
  bedwars_daily_win: Bedwars_daily_win
  bedwars_weekly_santa: Bedwars_weekly_santa
  bedwars_daily_one_more: Bedwars_daily_one_more
  blitz_weekly_master: Blitz_weekly_master
  blitz_special_daily_north_pole: Blitz_special_daily_north_pole
  blitz_win: Blitz_win
  blitz_kills: Blitz_kills
  skywars_weekly_free_loot_chest: Skywars_weekly_free_loot_chest
  arcade_gamer: Arcade_gamer
  arcade_specialist: Arcade_specialist
  arcade_winner: Arcade_winner
  skywars_daily_tokens: Skywars_daily_tokens
  skywars_weekly_hard_chest: Skywars_weekly_hard_chest
  skyclash_weekly_kills: Skyclash_weekly_kills
  skyclash_play_points: Skyclash_play_points
  skyclash_kills: Skyclash_kills
  skyclash_void: Skyclash_void
  skyclash_play_games: Skyclash_play_games
  quake_daily_play: Quake_daily_play
  walls_weekly: Walls_weekly
  paintball_expert: Paintball_expert
  quake_daily_kill: Quake_daily_kill
  arena_daily_play: Arena_daily_play
  quake_daily_win: Quake_daily_win
  walls_daily_kill: Walls_daily_kill
  vampirez_weekly_kill: Vampirez_weekly_kill
  arena_daily_kills: Arena_daily_kills
  walls_daily_play: Walls_daily_play
  paintballer: Paintballer
  vampirez_daily_kill: Vampirez_daily_kill
  vampirez_daily_play: Vampirez_daily_play
  gingerbread_racer: Gingerbread_racer
  vampirez_weekly_win: Vampirez_weekly_win
  arena_daily_wins: Arena_daily_wins
  paintball_killer: Paintball_killer
  quake_weekly_play: Quake_weekly_play
  gingerbread_mastery: Gingerbread_mastery
  vampirez_daily_win: Vampirez_daily_win
  arena_weekly_play: Arena_weekly_play
  walls_daily_win: Walls_daily_win
  gingerbread_maps: Gingerbread_maps
  tnt_tntrun_daily: Tnt_tntrun_daily
  tnt_tntrun_weekly: Tnt_tntrun_weekly
  tnt_tnttag_weekly: Tnt_tnttag_weekly
  tnt_wizards_weekly: Tnt_wizards_weekly
  tnt_bowspleef_weekly: Tnt_bowspleef_weekly
  tnt_wizards_daily: Tnt_wizards_daily
  tnt_pvprun_weekly: Tnt_pvprun_weekly
  tnt_tnttag_daily: Tnt_tnttag_daily
  tnt_pvprun_daily: Tnt_pvprun_daily
  tnt_bowspleef_daily: Tnt_bowspleef_daily
  cvc_kill: Cvc_kill
  cvc_win_daily_deathmatch: Cvc_win_daily_deathmatch
  cvc_kill_weekly: Cvc_kill_weekly
  cvc_kill_daily_normal: Cvc_kill_daily_normal
  duels_player: Duels_player
  duels_weekly_wins: Duels_weekly_wins
  duels_killer: Duels_killer
  duels_winner: Duels_winner
  duels_weekly_kills: Duels_weekly_kills
  prototype_pit_weekly_gold: Prototype_pit_weekly_gold
  prototype_pit_daily_kills: Prototype_pit_daily_kills
  prototype_pit_daily_contract: Prototype_pit_daily_contract
  mega_walls_faithful: Mega_walls_faithful
  build_battle_winner: Build_battle_winner
  build_battle_weekly: Build_battle_weekly
  build_battle_player: Build_battle_player
  uhc_addict: Uhc_addict
  hunting_season: Hunting_season
  normal_brawler: Normal_brawler
  insane_brawler: Insane_brawler
  uhc_madness: Uhc_madness
  crazy_walls_daily_win: Crazy_walls_daily_win
  crazy_walls_weekly: Crazy_walls_weekly
  mm_daily_target_kill: Mm_daily_target_kill
  mm_weekly_murderer_kills: Mm_weekly_murderer_kills
  mm_weekly_wins: Mm_weekly_wins
  mm_daily_power_play: Mm_daily_power_play
  mm_daily_win: Mm_daily_win
  skywars_mega_doubles_wins: Skywars_mega_doubles_wins
  bedwars_weekly_dream_win: Bedwars_weekly_dream_win
  uhc_team: Uhc_team
  uhc_solo: Uhc_solo
  uhc_weekly: Uhc_weekly
  uhc_dm: Uhc_dm
  skywars_halloween_harvest: Skywars_halloween_harvest
  skywars_corrupt_win: Skywars_corrupt_win
}
interface Warlords_ctf {
  last_completed: number
  count: number
}
interface Warlords_win {
  last_completed: number
  count: number
}
interface Gingerbread_bling_bling {
  active: Active
  last_completed: number
  count: number
}
interface Active {
  started: number
  objectives: Objectives
}
interface Objectives {
  skywars_solo_kills?: number
  skywars_weekly_kills?: number
  mega_walls_kill_daily?: number
  crazy_walls_daily_play?: number
  crazy_walls_daily_kill?: number
  mega_walls_kill_weekly?: number
  mega_walls_play_weekly?: number
  bedwars_bed_elims?: number
  killblitz10?: number
  blitz_games_played?: number
  blitz_special_gifts?: number
  play?: number
  skywars_daily_tokens_wins?: number
  skywars_weekly_hard_loot_chest?: number
  kill?: number
  tnt_tntrun_weekly?: number
  tnt_tnttag_weekly?: number
  tnt_bowspleef_weekly?: number
  tnt_pvprun_weekly?: number
  tnt_tnttag_daily?: number
  tnt_bowspleef_daily?: number
  cvc_kill_daily_deathmatch?: number
  cvc_play_weekly?: number
  cvc_play_weekly_2?: number
  cvc_kill_daily_normal?: number
  win?: number
  prototype_pit_weekly_gold?: number
  mega_walls_faithful_play?: number
  skywars_mega_doubles_win?: number
  bedwars_dream_wins?: number
}
interface Skywars_solo_win {
  active: Active
  last_completed: number
  count: number
}
interface Skywars_solo_kills {
  active: Active
  last_completed: number
  count: number
}
interface Skywars_team_kills {
  active: Active
  last_completed: number
  count: number
}
interface Blitz_game_of_the_day {
  last_completed: number
  count: number
}
interface Skywars_weekly_kills {
  active: Active
  last_completed: number
  count: number
}
interface Cvc_win_daily_normal {
  active: Active
  last_completed: number
  count: number
}
interface Mega_walls_play {
  last_completed: number
  count: number
}
interface Mega_walls_win {
  active: Active
  last_completed: number
  count: number
}
interface Mega_walls_kill {
  active: Active
  last_completed: number
  count: number
}
interface Crazy_walls_daily_play {
  active: Active
  last_completed: number
  count: number
}
interface Crazy_walls_daily_kill {
  active: Active
  last_completed: number
  count: number
}
interface Mega_walls_weekly {
  active: Active
  last_completed: number
  count: number
}
interface Skywars_team_win {
  active: Active
  last_completed: number
  count: number
}
interface Skywars_special_north_pole {
  last_completed: number
  count: number
}
interface Skywars_arcade_win {
  active: Active
  last_completed: number
  count: number
}
interface Skywars_weekly_arcade_win_all {
  active: Active
  last_completed: number
  count: number
}
interface Bedwars_weekly_bed_elims {
  active: Active
  last_completed: number
  count: number
}
interface Bedwars_daily_win {
  active: Active
  last_completed: number
  count: number
}
interface Bedwars_weekly_santa {
  active: Active
  last_completed: number
  count: number
}
interface Bedwars_daily_one_more {
  active: Active
  last_completed: number
  count: number
}
interface Blitz_weekly_master {
  active: Active
  last_completed: number
  count: number
}
interface Blitz_special_daily_north_pole {
  active: Active
  last_completed: number
  count: number
}
interface Blitz_win {
  active: Active
  last_completed: number
  count: number
}
interface Blitz_kills {
  active: Active
  last_completed: number
  count: number
}
interface Skywars_weekly_free_loot_chest {
  active: Active
  last_completed: number
  count: number
}
interface Arcade_gamer {
  active: Active
  last_completed: number
  count: number
}
interface Arcade_specialist {
  active: Active
  last_completed: number
  count: number
}
interface Arcade_winner {
  active: Active
  last_completed: number
  count: number
}
interface Skywars_daily_tokens {
  active: Active
  last_completed: number
  count: number
}
interface Skywars_weekly_hard_chest {
  active: Active
  last_completed: number
  count: number
}
interface Skyclash_weekly_kills {
  active: Active
  last_completed: number
  count: number
}
interface Skyclash_play_points {
  active: Active
  last_completed: number
  count: number
}
interface Skyclash_kills {
  active: Active
  last_completed: number
  count: number
}
interface Skyclash_void {
  active: Active
  last_completed: number
  count: number
}
interface Skyclash_play_games {
  active: Active
  last_completed: number
  count: number
}
interface Quake_daily_play {
  active: Active
  last_completed: number
  count: number
}
interface Walls_weekly {
  active: Active
  last_completed: number
  count: number
}
interface Paintball_expert {
  active: Active
  last_completed: number
  count: number
}
interface Quake_daily_kill {
  active: Active
  last_completed: number
  count: number
}
interface Arena_daily_play {
  active: Active
  last_completed: number
  count: number
}
interface Quake_daily_win {
  active: Active
  last_completed: number
  count: number
}
interface Walls_daily_kill {
  active: Active
  last_completed: number
  count: number
}
interface Vampirez_weekly_kill {
  active: Active
  last_completed: number
  count: number
}
interface Arena_daily_kills {
  active: Active
  last_completed: number
  count: number
}
interface Walls_daily_play {
  active: Active
  last_completed: number
  count: number
}
interface Paintballer {
  active: Active
  last_completed: number
  count: number
}
interface Vampirez_daily_kill {
  active: Active
  last_completed: number
  count: number
}
interface Vampirez_daily_play {
  active: Active
  last_completed: number
  count: number
}
interface Gingerbread_racer {
  active: Active
  last_completed: number
  count: number
}
interface Vampirez_weekly_win {
  active: Active
  last_completed: number
  count: number
}
interface Arena_daily_wins {
  active: Active
  last_completed: number
  count: number
}
interface Paintball_killer {
  active: Active
  last_completed: number
  count: number
}
interface Quake_weekly_play {
  active: Active
  last_completed: number
  count: number
}
interface Gingerbread_mastery {
  active: Active
  last_completed: number
  count: number
}
interface Vampirez_daily_win {
  active: Active
  last_completed: number
  count: number
}
interface Arena_weekly_play {
  active: Active
  last_completed: number
  count: number
}
interface Walls_daily_win {
  active: Active
  last_completed: number
  count: number
}
interface Gingerbread_maps {
  active: Active
  last_completed: number
  count: number
}
interface Tnt_tntrun_daily {
  last_completed: number
  count: number
}
interface Tnt_tntrun_weekly {
  active: Active
  last_completed: number
  count: number
}
interface Tnt_tnttag_weekly {
  active: Active
  last_completed: number
  count: number
}
interface Tnt_wizards_weekly {
  active: Active
  last_completed: number
  count: number
}
interface Tnt_bowspleef_weekly {
  active: Active
  last_completed: number
  count: number
}
interface Tnt_wizards_daily {
  active: Active
  last_completed: number
  count: number
}
interface Tnt_pvprun_weekly {
  active: Active
  last_completed: number
  count: number
}
interface Tnt_tnttag_daily {
  active: Active
  last_completed: number
  count: number
}
interface Tnt_pvprun_daily {
  active: Active
  last_completed: number
  count: number
}
interface Tnt_bowspleef_daily {
  active: Active
  last_completed: number
  count: number
}
interface Cvc_kill {
  active: Active
  last_completed: number
  count: number
}
interface Cvc_win_daily_deathmatch {
  last_completed: number
  count: number
}
interface Cvc_kill_weekly {
  active: Active
  last_completed: number
  count: number
}
interface Cvc_kill_daily_normal {
  active: Active
  last_completed: number
  count: number
}
interface Duels_player {
  active: Active
  last_completed: number
  count: number
}
interface Duels_weekly_wins {
  active: Active
  last_completed: number
  count: number
}
interface Duels_killer {
  active: Active
  last_completed: number
  count: number
}
interface Duels_winner {
  active: Active
  last_completed: number
  count: number
}
interface Duels_weekly_kills {
  active: Active
  last_completed: number
  count: number
}
interface Prototype_pit_weekly_gold {
  active: Active
  last_completed: number
  count: number
}
interface Prototype_pit_daily_kills {
  last_completed: number
  count: number
}
interface Prototype_pit_daily_contract {
  active: Active
  last_completed: number
  count: number
}
interface Mega_walls_faithful {
  active: Active
  last_completed: number
  count: number
}
interface Build_battle_winner {
  active: Active
  last_completed: number
  count: number
}
interface Build_battle_weekly {
  active: Active
  last_completed: number
  count: number
}
interface Build_battle_player {
  active: Active
  last_completed: number
  count: number
}
interface Uhc_addict {
  active: Active
  last_completed: number
  count: number
}
interface Hunting_season {
  active: Active
  last_completed: number
  count: number
}
interface Normal_brawler {
  active: Active
  last_completed: number
  count: number
}
interface Insane_brawler {
  active: Active
  last_completed: number
  count: number
}
interface Uhc_madness {
  active: Active
  last_completed: number
  count: number
}
interface Crazy_walls_daily_win {
  active: Active
  last_completed: number
  count: number
}
interface Crazy_walls_weekly {
  active: Active
  last_completed: number
  count: number
}
interface Mm_daily_target_kill {
  active: Active
  last_completed: number
  count: number
}
interface Mm_weekly_murderer_kills {
  active: Active
  last_completed: number
  count: number
}
interface Mm_weekly_wins {
  active: Active
  last_completed: number
  count: number
}
interface Mm_daily_power_play {
  active: Active
  last_completed: number
  count: number
}
interface Mm_daily_win {
  active: Active
  last_completed: number
  count: number
}
interface Skywars_mega_doubles_wins {
  active: Active
  last_completed: number
  count: number
}
interface Bedwars_weekly_dream_win {
  active: Active
  last_completed: number
  count: number
}
interface Uhc_team {
  active: Active
  last_completed: number
  count: number
}
interface Uhc_solo {
  active: Active
  last_completed: number
  count: number
}
interface Uhc_weekly {
  active: Active
  last_completed: number
  count: number
}
interface Uhc_dm {
  active: Active
  last_completed: number
  count: number
}
interface Skywars_halloween_harvest {
  active: Active
  last_completed: number
  count: number
}
interface Skywars_corrupt_win {
  active: Active
  last_completed: number
  count: number
}
interface Settings {
  autoSpawnPet: boolean
  partyMessageSounds: boolean
  privateMessageSounds: boolean
  profanityLevel: string
  privateMessagePrivacy: string
  friendRequestPrivacy: string
  joinMessageSelf: boolean
  guildMessageSounds: boolean
  profanityLevel_PM: string
  profanityLevel_PARTY: string
  chatAlerts: boolean
  playerVisibility: boolean
}
interface Stats {
  Arcade: Arcade
  Arena: Arena
  Battleground: Battleground
  HungerGames: HungerGames
  MCGO: MCGO
  Paintball: Paintball
  Quake: Quake
  TNTGames: TNTGames
  UHC: UHC
  VampireZ: VampireZ
  Walls: Walls
  Walls3: Walls3
  GingerBread: GingerBread
  SkyWars: SkyWars
  TrueCombat: TrueCombat
  SuperSmash: SuperSmash
  SpeedUHC: SpeedUHC
  SkyClash: SkyClash
  Bedwars: Bedwars
  MurderMystery: MurderMystery
  Duels: Duels
  Legacy: Legacy
}
interface Arcade {
  blood: boolean
  coins: number
  headshots_dayone: number
  kills_dayone: number
  kills_dragonwars2: number
  max_wave: number
  stamp_level: number
  time_stamp: number
  wins_dayone: number
  sw_kills: number
  sw_shots_fired: number
  sw_weekly_kills_b: number
  sw_rebel_kills: number
  sw_deaths: number
  sw_monthly_kills_a: number
  hitw_record_q: number
  hitw_record_f: number
  rounds_hole_in_the_wall: number
  rounds_santa_says: number
  miniwalls_activeKit: string
  monthly_coins_b: number
  arrows_hit_mini_walls: number
  weekly_coins_b: number
  final_kills_mini_walls: number
  kills_mini_walls: number
  deaths_mini_walls: number
  arrows_shot_mini_walls: number
  wither_damage_mini_walls: number
  wins_mini_walls: number
  wither_kills_mini_walls: number
  wins_soccer: number
  powerkicks_soccer: number
  goals_soccer: number
  monthly_coins_a: number
  dec2016_achievements: boolean
  dec2016_achievements2: boolean
  weekly_coins_a: number
  wins_dragonwars2: number
  rounds_simon_says: number
  wins_grinch: number
}
interface Arena {
  coins: number
  damage_2v2: number
  damage_4v4: number
  deaths_2v2: number
  deaths_4v4: number
  games_2v2: number
  games_4v4: number
  healed_2v2: number
  healed_4v4: number
  kills_2v2: number
  losses_2v2: number
  losses_4v4: number
  offensive: string
  penalty: number
  rating: number
  win_streaks_2v2: number
  win_streaks_4v4: number
  wins_2v2: number
}
interface Battleground {
  assists: number
  berserker_plays: number
  broken_inventory: number
  chosen_class: string
  coins: number
  current_weapon: number
  damage: number
  damage_berserker: number
  damage_prevented: number
  damage_prevented_berserker: number
  damage_prevented_warrior: number
  damage_taken: number
  damage_warrior: number
  deaths: number
  heal: number
  heal_berserker: number
  heal_warrior: number
  kills: number
  life_leeched: number
  life_leeched_berserker: number
  life_leeched_warrior: number
  losses: number
  losses_berserker: number
  losses_warrior: number
  mage_spec: string
  paladin_spec: string
  repaired: number
  repaired_common: number
  selected_mount: string
  warrior_plays: number
  warrior_spec: string
  weapon_inventory: WeaponInventoryItem[]
  win_streak: number
  shaman_spec: string
}
interface WeaponInventoryItem {
  spec: Spec
  ability: number
  abilityBoost: number
  damage: number
  energy: number
  chance: number
  multiplier: number
  health: number
  cooldown: number
  movement: number
  material: string
  id: number
  category: string
}
interface Spec {
  spec: number
  playerClass: number
}
interface HungerGames {
  archer: number
  armorer: number
  chosen_taunt: string
  coins: number
  deaths: number
  kills: number
  knight: number
  scout: number
  wins: number
  hunter: number
  monthly_kills_a: number
  weekly_kills_a: number
  kit_permutations_scout: string
  autoarmor: boolean
  weekly_kills_b: number
  monthly_kills_b: number
  togglekillcounter: number
  aura: string
  chosen_victorydance: string
  ScoutInventory: ScoutInventory
  toggled: boolean
  wins_teams: number
  inGamePresentsCap_2018_3: number
  damage_taken_scout: number
  potions_thrown_scout: number
  potions_thrown: number
  potions_drunk: number
  damage: number
  arrows_hit_scout: number
  potions_drunk_scout: number
  time_played: number
  damage_scout: number
  chests_opened: number
  arrows_hit: number
  kills_scout: number
  time_played_scout: number
  damage_taken: number
  chests_opened_scout: number
  games_played_scout: number
  games_played: number
  chosen_finisher: string
  defaultkit: string
  lastTourneyAd: number
}
interface ScoutInventory {
  2: string
  3: string
  7: string
  9: string
  10: string
  16: string
  17: string
}
interface MCGO {
  bombs_defused: number
  bombs_planted: number
  bounty_hunter: number
  carbine_cost_reduction: number
  carbine_damage_increase: number
  carbine_recoil_reduction: number
  carbine_reload_speed_reduction: number
  coins: number
  cop_kills: number
  criminal_kills: number
  deaths: number
  game_wins: number
  headshot_kills: number
  kills: number
  killsNew: number
  killsNew_11_2014: number
  killsNew_3_11_2014: number
  kills_11_2014: number
  kills_3_11_2014: number
  magnum_cost_reduction: number
  magnum_damage_increase: number
  round_wins: number
  shots_fired: number
  body_armor_cost: number
  mcgo: Mcgo
  deaths_deathmatch: number
  criminal_kills_deathmatch: number
  weekly_kills_b: number
  kills_deathmatch: number
  monthly_kills_b: number
  sniper_charge_bonus: number
  weekly_kills_a: number
  monthly_kills_a: number
  rifle_damage_increase: number
  rifle_recoil_reduction: number
  rifle_reload_speed_reduction: number
  rifle_cost_reduction: number
  game_wins_deathmatch: number
  game_wins_temple: number
  game_wins_alleyway: number
  selectedKnifeDev: string
  knife_damage_increase: number
  knife_attack_delay: number
  strength_training: number
  pocket_change: number
  selectedCreeperHelmetDev: string
  selectedPistolDev: string
  pistol_damage_increase: number
  pistol_recoil_reduction: number
  pistol_reload_speed_reduction: number
  selectedCarbineDev: string
  magnum_recoil_reduction: number
  magnum_reload_speed_reduction: number
  grenade_kills: number
  grenadeKills: number
}
interface Mcgo {
  points: number
}
interface Paintball {
  coins: number
  deaths: number
  fortune: number
  kills: number
  shots_fired: number
  superluck: number
  wins: number
  hat: string
  killstreaks: number
  transfusion: number
}
interface Quake {
  barrel: string
  case: string
  coins: number
  deaths: number
  kills: number
  killsound: string
  killstreaks: number
  muzzle: string
  sight: string
  trigger: string
  wins: number
  hat: string
  monthly_kills_b: number
  weekly_kills_a: number
}
interface TNTGames {
  coins: number
  deaths_bowspleef: number
  deaths_capture: number
  doublejump_tntrun: number
  firewizard_regen: number
  kills_capture: number
  spleef_repulse: number
  spleef_triple: number
  tags_bowspleef: number
  wins_bowspleef: number
  wins_tntag: number
  wins_tntrun: number
  record_pvprun: number
  kills_pvprun: number
  kills_tntag: number
  new_firewizard_regen: number
  new_icewizard_regen: number
  wins: number
  new_pvprun_double_jumps: number
  new_spleef_repulsor: number
  new_tntrun_double_jumps: number
  new_bloodwizard_regen: number
  new_witherwizard_explode: number
  new_icewizard_explode: number
  new_bloodwizard_explode: number
  new_firewizard_explode: number
  new_spleef_double_jumps: number
  new_kineticwizard_explode: number
  new_witherwizard_regen: number
  new_tntag_speedy: number
  new_spleef_tripleshot: number
  new_kineticwizard_regen: number
  run_potions_splashed_on_players: number
  record_tntrun: number
  new_tntrun_speed_potions: number
  new_tntrun_slowness_potions: number
  deaths_tntrun: number
  winstreak: number
  new_active_death_effect: string
  new_pvprun_fortitude: number
  new_pvprun_notoriety: number
  new_pvprun_regeneration: number
  deaths_pvprun: number
  wizards_selected_class: string
}
interface UHC {
  coins: number
  deaths: number
  equippedKit: string
  kills: number
  perk_engineering_line_a: number
  score: number
  perk_enchanting_line_a: number
  perk_engineering_line_b: number
  perk_engineering_line_c: number
  perk_armorsmith_line_a: number
  kit_MAGIC_TOOLS: number
  perk_survivalism_line_a: number
  perk_survivalism_line_c: number
  perk_survivalism_line_b: number
  perk_weaponsmith_line_a: number
  perk_weaponsmith_line_b: number
  perk_enchanting_line_b: number
  deaths_solo: number
  kills_solo: number
  monthly_kills__solo_a: number
  clearup_achievement: boolean
}
interface VampireZ {
  coins: number
  human_deaths: number
  human_kills: number
  vampire_deaths: number
  vampire_kills: number
  updated_stats: boolean
}
interface Walls {
  coins: number
  deaths: number
  kills: number
  wins: number
  losses: number
}
interface Walls3 {
  chosen_class: string
  coins: number
  deaths: number
  deaths_Creeper: number
  deaths_Skeleton: number
  deaths_Zombie: number
  finalDeaths: number
  finalKills: number
  finalKills_Skeleton: number
  finalKills_Zombie: number
  kills: number
  kills_Creeper: number
  kills_Skeleton: number
  kills_Zombie: number
  losses: number
  losses_Creeper: number
  losses_Skeleton: number
  losses_Zombie: number
  monthly_finalKills_Zombie_a: number
  monthly_finalKills_Zombie_b: number
  mutations_visibility: boolean
  weeklyDeaths: number
  weeklyDeaths_Zombie: number
  weeklyFinalKills: number
  weeklyFinalKills_Zombie: number
  weeklyKills: number
  weeklyKills_Zombie: number
  weeklyLosses: number
  weeklyLosses_Zombie: number
  weeklyWins: number
  weeklyWins_Zombie: number
  weekly_finalKills_Zombie_a: number
  weekly_finalKills_Zombie_b: number
  wins: number
  wins_Zombie: number
  zombie_a: number
  zombie_b: number
  zombie_c: number
  zombie_d: number
  zombie_g: number
  assists: number
  assists_Zombie: number
  plays_standard: number
  witherCoins: number
  witherDamage: number
  war_cry: string
  kills_new_Zombie: number
  deaths_new: number
  finalAssists: number
  deaths_new_Zombie: number
  kills_new: number
  finalAssists_Zombie: number
  final_kills_standard: number
  final_kills: number
  zombie_losses: number
  skeleton_deaths: number
  zombie_total_final_kills_standard: number
  skeleton_total_final_kills: number
  zombie_deaths: number
  zombie_kills: number
  creeper_kills: number
  skeleton_final_kills: number
  total_final_kills_standard: number
  total_final_kills: number
  zombie_wins: number
  zombie_wins_standard: number
  zombie_final_assists: number
  skeleton_kills: number
  zombie_total_final_kills: number
  zombie_final_kills_standard: number
  creeper_deaths: number
  skeleton_losses: number
  zombie_final_kills: number
  skeleton_total_final_kills_standard: number
  creeper_losses: number
  skeleton_final_kills_standard: number
  enderman_d: number
  enderman_a: number
  enderman_b: number
  colorblind: boolean
  colorblind_italic: boolean
  colorblind_bold: boolean
  blood: string
  chosen_kill_sign: string
  pickaxeLevel: number
  zombieInventory: ZombieInventory
  zombie_blocks_broken: number
  zombie_allies_healed_standard: number
  iron_armor_gifted_standard: number
  zombie_iron_armor_gifted: number
  zombie_meters_fallen: number
  zombie_wither_damage: number
  zombie_meters_fallen_standard: number
  zombie_final_deaths: number
  zombie_wither_kills: number
  zombie_kills_melee: number
  zombie_kills_standard: number
  zombie_food_eaten: number
  zombie_blocks_broken_standard: number
  defender_assists_standard: number
  zombie_sword_crafted_standard: number
  zombie_deaths_standard: number
  zombie_a_assists_standard: number
  zombie_a_allies_healed: number
  total_deaths: number
  zombie_blocks_placed: number
  allies_healed: number
  zombie_a_activations_deathmatch: number
  zombie_a_total_kills_standard: number
  zombie_time_played_standard: number
  losses_standard: number
  total_kills: number
  activations_standard: number
  treasures_found: number
  zombie_time_played: number
  wood_chopped: number
  self_healed: number
  zombie_iron_ore_broken: number
  activations_deathmatch_standard: number
  final_kills_melee: number
  zombie_final_kills_melee: number
  bread_crafted_standard: number
  zombie_potions_drunk: number
  zombie_a_activations_deathmatch_standard: number
  zombie_games_played: number
  zombie_activations_standard: number
  time_played: number
  defender_kills_standard: number
  zombie_a_assists: number
  zombie_meters_walked: number
  zombie_meters_walked_standard: number
  wither_damage_standard: number
  zombie_treasures_found_standard: number
  wood_chopped_standard: number
  zombie_defender_kills: number
  zombie_blocks_placed_preparation_standard: number
  food_eaten_standard: number
  final_deaths: number
  games_played: number
  blocks_placed_standard: number
  blocks_placed_preparation: number
  zombie_food_eaten_standard: number
  zombie_iron_sword_crafted: number
  blocks_placed_preparation_standard: number
  zombie_meters_walked_speed: number
  zombie_activations: number
  zombie_activations_deathmatch_standard: number
  zombie_self_healed: number
  zombie_losses_standard: number
  zombie_wood_chopped: number
  zombie_a_total_kills: number
  total_kills_standard: number
  zombie_meters_walked_speed_standard: number
  time_played_standard: number
  zombie_defender_assists_standard: number
  zombie_a_amount_healed: number
  kills_melee_standard: number
  zombie_wither_kills_standard: number
  kills_standard: number
  iron_ore_broken_standard: number
  zombie_total_deaths_standard: number
  treasures_found_standard: number
  self_healed_standard: number
  iron_sword_crafted_standard: number
  food_eaten: number
  zombie_a_self_healed_standard: number
  zombie_amount_healed_standard: number
  blocks_broken_standard: number
  potions_drunk_standard: number
  zombie_wood_chopped_standard: number
  zombie_treasures_found: number
  meters_walked_speed_standard: number
  zombie_blocks_placed_standard: number
  zombie_total_deaths: number
  zombie_iron_armor_gifted_standard: number
  final_deaths_standard: number
  kills_melee: number
  zombie_kills_melee_standard: number
  defender_kills: number
  sword_crafted: number
  zombie_defender_assists: number
  iron_armor_gifted: number
  meters_walked: number
  meters_fallen_standard: number
  zombie_sword_crafted: number
  bread_crafted: number
  zombie_wither_damage_standard: number
  potions_drunk: number
  iron_sword_crafted: number
  blocks_broken: number
  zombie_a_defender_assists: number
  zombie_total_kills_standard: number
  activations: number
  assists_standard: number
  blocks_placed: number
  zombie_bread_crafted: number
  zombie_activations_deathmatch: number
  meters_walked_speed: number
  zombie_assists_standard: number
  zombie_iron_sword_crafted_standard: number
  iron_ore_broken: number
  zombie_iron_ore_broken_standard: number
  zombie_a_defender_assists_standard: number
  wither_kills_standard: number
  zombie_defender_kills_standard: number
  deaths_standard: number
  total_deaths_standard: number
  amount_healed: number
  zombie_a_amount_healed_standard: number
  sword_crafted_standard: number
  zombie_games_played_standard: number
  zombie_a_allies_healed_standard: number
  zombie_final_kills_melee_standard: number
  wither_kills: number
  zombie_allies_healed: number
  wither_damage: number
  final_kills_melee_standard: number
  defender_assists: number
  allies_healed_standard: number
  zombie_final_deaths_standard: number
  amount_healed_standard: number
  meters_fallen: number
  zombie_a_self_healed: number
  zombie_a_activations_standard: number
  zombie_potions_drunk_standard: number
  zombie_self_healed_standard: number
  zombie_a_activations: number
  meters_walked_standard: number
  activations_deathmatch: number
  games_played_standard: number
  zombie_blocks_placed_preparation: number
  zombie_amount_healed: number
  zombie_assists: number
  zombie_total_kills: number
  zombie_bread_crafted_standard: number
  kill_message: string
  zombie_activations_deathmatch_face_off: number
  final_deaths_face_off: number
  zombie_iron_armor_gifted_face_off: number
  kills_face_off: number
  self_healed_face_off: number
  zombie_total_deaths_face_off: number
  zombie_self_healed_face_off: number
  zombie_amount_healed_face_off: number
  zombie_games_played_face_off: number
  zombie_blocks_placed_face_off: number
  blocks_broken_face_off: number
  zombie_wood_chopped_face_off: number
  games_played_face_off: number
  wither_damage_face_off: number
  zombie_a_defender_assists_face_off: number
  zombie_meters_walked_speed_face_off: number
  blocks_placed_face_off: number
  kills_melee_face_off: number
  zombie_defender_kills_face_off: number
  zombie_b_defender_assists: number
  total_final_kills_face_off: number
  zombie_losses_face_off: number
  meters_walked_speed_face_off: number
  zombie_treasures_found_face_off: number
  zombie_assists_face_off: number
  wood_chopped_face_off: number
  zombie_total_final_kills_face_off: number
  zombie_a_amount_healed_face_off: number
  zombie_a_self_healed_face_off: number
  zombie_kills_face_off: number
  treasures_found_face_off: number
  activations_deathmatch_face_off: number
  activations_face_off: number
  meters_fallen_face_off: number
  defender_kills_face_off: number
  zombie_b_total_kills: number
  assists_face_off: number
  zombie_b_total_kills_face_off: number
  final_assists: number
  diamond_ore_broken: number
  zombie_meters_walked_face_off: number
  zombie_defender_assists_face_off: number
  zombie_a_assists_face_off: number
  defender_assists_face_off: number
  zombie_blocks_broken_face_off: number
  losses_face_off: number
  time_played_face_off: number
  zombie_a_activations_deathmatch_face_off: number
  zombie_a_total_kills_face_off: number
  zombie_allies_healed_face_off: number
  zombie_a_activations_face_off: number
  zombie_deaths_face_off: number
  zombie_b_assists: number
  blocks_placed_preparation_face_off: number
  zombie_b_defender_assists_face_off: number
  total_kills_face_off: number
  zombie_diamond_ore_broken_face_off: number
  zombie_a_allies_healed_face_off: number
  zombie_final_assists_face_off: number
  zombie_diamond_ore_broken: number
  zombie_final_deaths_face_off: number
  zombie_activations_face_off: number
  iron_armor_gifted_face_off: number
  zombie_meters_fallen_face_off: number
  zombie_potions_drunk_face_off: number
  meters_walked_face_off: number
  zombie_wither_damage_face_off: number
  zombie_blocks_placed_preparation_face_off: number
  zombie_iron_ore_broken_face_off: number
  allies_healed_face_off: number
  diamond_ore_broken_face_off: number
  amount_healed_face_off: number
  iron_ore_broken_face_off: number
  total_deaths_face_off: number
  zombie_total_kills_face_off: number
  zombie_b_assists_face_off: number
  potions_drunk_face_off: number
  final_assists_face_off: number
  deaths_face_off: number
  zombie_kills_melee_face_off: number
  zombie_time_played_face_off: number
  final_assists_melee: number
  zombie_final_assists_melee: number
  zombie_steaks_eaten_standard: number
  zombie_final_assists_melee_standard: number
  final_assists_standard: number
  steaks_eaten: number
  final_assists_melee_standard: number
  steaks_eaten_standard: number
  zombie_steaks_eaten: number
  zombie_final_assists_standard: number
}
interface ZombieInventory {
  0: string
  1: string
  2: string
  3: string
  6: string
  7: string
  8: string
  17: string
}
interface GingerBread {
  engine_active: string
  booster_active: string
  frame_active: string
  helmet_active: string
  jacket_active: string
  skin_active: string
  pants_active: string
  shoes_active: string
  horn: string
  coins: number
  box_pickups: number
  laps_completed: number
  banana_hits_received: number
  coins_picked_up: number
  parts: string
  bronze_trophy: number
  wins: number
  silver_trophy: number
  blue_torpedo_hit: number
  banana_hits_sent: number
  silver_trophy_weekly_a: number
  silver_trophy_monthly_b: number
  silver_trophy_retro: number
  bronze_trophy_weekly_a: number
  bronze_trophy_monthly_b: number
  bronze_trophy_olympus: number
  box_pickups_weekly_a: number
  box_pickups_weekly_b: number
  box_pickups_monthly_b: number
  box_pickups_olympus: number
  box_pickups_junglerush: number
  box_pickups_retro: number
  box_pickups_canyon: number
  olympus_plays: number
  junglerush_plays: number
  retro_plays: number
  canyon_plays: number
  box_pickups_monthly_a: number
}
interface SkyWars {
  coins: number
  win_streak: number
  survived_players_solo: number
  blocks_placed: number
  blocks_broken: number
  losses: number
  deaths_solo_normal: number
  quits: number
  losses_solo: number
  survived_players: number
  survived_players_kit_basic_solo_default: number
  deaths_kit_basic_solo_default: number
  losses_kit_basic_solo_default: number
  deaths: number
  losses_solo_normal: number
  deaths_solo: number
  kills_kit_basic_solo_default: number
  games: number
  kills_solo_normal: number
  kills: number
  arrows_shot: number
  games_solo: number
  souls_gathered: number
  kills_solo: number
  games_kit_basic_solo_default: number
  souls: number
  soul_well: number
  usedSoulWell: boolean
  solo_ender_mastery: number
  egg_thrown: number
  deaths_solo_insane: number
  losses_solo_insane: number
  wins_solo_insane: number
  wins: number
  kills_solo_insane: number
  wins_solo: number
  wins_kit_basic_solo_default: number
  arrows_hit: number
  items_enchanted: number
  enderpearls_thrown: number
  solo_mining_expertise: number
  activeCage: string
  activeKit_TEAM: string
  wins_team_insane: number
  kills_team: number
  survived_players_kit_attacking_team_scout: number
  kills_team_insane: number
  kills_kit_attacking_team_scout: number
  survived_players_team: number
  wins_kit_attacking_team_scout: number
  wins_team: number
  games_team: number
  games_kit_attacking_team_scout: number
  assists_solo: number
  assists_kit_basic_solo_default: number
  assists: number
  wins_solo_normal: number
  soul_well_rares: number
  solo_arrow_recovery: number
  activeKit_SOLO: string
  losses_kit_basic_solo_armorsmith: number
  survived_players_kit_basic_solo_armorsmith: number
  kills_kit_basic_solo_armorsmith: number
  deaths_kit_basic_solo_armorsmith: number
  wins_kit_basic_solo_armorsmith: number
  games_kit_basic_solo_armorsmith: number
  votes_Congo: number
  votes_Siege: number
  assists_kit_basic_solo_armorsmith: number
  kills_kit_basic_solo_snowman: number
  survived_players_kit_basic_solo_snowman: number
  deaths_kit_basic_solo_snowman: number
  losses_kit_basic_solo_snowman: number
  deaths_team_insane: number
  losses_kit_attacking_team_scout: number
  deaths_kit_attacking_team_scout: number
  losses_team_insane: number
  losses_team: number
  deaths_team: number
  deaths_team_normal: number
  kills_team_normal: number
  wins_team_normal: number
  games_kit_basic_solo_snowman: number
  wins_kit_basic_solo_snowman: number
  team_instant_smelting: number
  solo_instant_smelting: number
  deaths_kit_mega_mega_default: number
  survived_players_mega: number
  deaths_mega_normal: number
  losses_mega_normal: number
  deaths_mega: number
  survived_players_kit_mega_mega_default: number
  losses_mega: number
  losses_kit_mega_mega_default: number
  activeKit_MEGA: string
  assists_kit_basic_solo_snowman: number
  kills_mega: number
  kills_kit_mega_mega_default: number
  kills_mega_normal: number
  kit_mega_mega_knight: number
  wins_mega: number
  survived_players_kit_mega_mega_knight: number
  wins_kit_mega_mega_knight: number
  deaths_kit_mega_mega_knight: number
  wins_mega_normal: number
  kills_kit_mega_mega_knight: number
  losses_kit_mega_mega_knight: number
  mega_arrow_recovery: number
  assists_mega: number
  assists_kit_mega_mega_knight: number
  games_mega: number
  games_kit_mega_mega_knight: number
  deaths_kit_advanced_solo_enchanter: number
  kills_kit_advanced_solo_enchanter: number
  losses_kit_advanced_solo_enchanter: number
  survived_players_kit_advanced_solo_enchanter: number
  votes_Shattered: number
  wins_kit_advanced_solo_enchanter: number
  games_kit_advanced_solo_enchanter: number
  soul_well_legendaries: number
  votes_Aqueduct: number
  mega_mining_expertise: number
  mega_ender_mastery: number
  solo_speed_boost: number
  team_mining_expertise: number
  mega_juggernaut: number
  solo_juggernaut: number
  paid_souls: number
  mega_rusher: number
  solo_marksmanship: number
  deaths_kit_advanced_solo_knight: number
  survived_players_kit_advanced_solo_knight: number
  losses_kit_advanced_solo_knight: number
  team_blazing_arrows: number
  refill_chest_destroy: number
  votes_Canopy: number
  team_ender_mastery: number
  kills_kit_advanced_solo_knight: number
  losses_kit_advanced_solo_pyro: number
  deaths_kit_advanced_solo_pyro: number
  kills_monthly_b: number
  mega_blazing_arrows: number
  kills_weekly_b: number
  survived_players_kit_advanced_solo_pyro: number
  kills_kit_advanced_solo_pyro: number
  kills_weekly_a: number
  team_speed_boost: number
  kills_monthly_a: number
  wins_kit_advanced_solo_knight: number
  games_kit_advanced_solo_knight: number
  activeKit_RANKED: string
  killstreak: number
  highestKillstreak: number
  winstreak: number
  highestWinstreak: number
  assists_ranked: number
  games_ranked: number
  deaths_ranked: number
  kills_kit_ranked_ranked_default: number
  kills_ranked_normal: number
  losses_ranked: number
  games_kit_ranked_ranked_default: number
  deaths_ranked_normal: number
  survived_players_ranked: number
  kills_ranked: number
  deaths_kit_ranked_ranked_default: number
  assists_kit_ranked_ranked_default: number
  survived_players_kit_ranked_ranked_default: number
  losses_ranked_normal: number
  losses_kit_ranked_ranked_default: number
  winstreak_ranked: number
  wins_ranked_normal: number
  killstreak_ranked: number
  killstreak_kit_ranked_ranked_default: number
  winstreak_kit_ranked_ranked_default: number
  wins_kit_ranked_ranked_default: number
  wins_ranked: number
  killstreak_solo: number
  winstreak_kit_basic_solo_snowman: number
  winstreak_solo: number
  killstreak_kit_basic_solo_snowman: number
  xezbeth_luck: number
  losses_kit_ranked_ranked_champion: number
  deaths_kit_ranked_ranked_champion: number
  survived_players_kit_ranked_ranked_champion: number
  kills_kit_ranked_ranked_champion: number
  games_kit_ranked_ranked_champion: number
  killstreak_kit_ranked_ranked_champion: number
  wins_kit_ranked_ranked_champion: number
  winstreak_kit_ranked_ranked_champion: number
  solo_knowledge: number
  assists_kit_ranked_ranked_champion: number
  killstreak_kit_basic_solo_armorsmith: number
  winstreak_kit_basic_solo_armorsmith: number
  votes_Eirene: number
  ranked_instant_smelting: number
  votes_Rocky: number
  solo_resistance_boost: number
  team_savior: number
  winstreak_kit_advanced_solo_knight: number
  killstreak_kit_advanced_solo_knight: number
  team_juggernaut: number
  mystery_boxes_season_one: number
  extra_wheels: number
  team_resistance_boost: number
  team_knowledge: number
  team_nourishment: number
  kit_mega_mega_armorer: number
  losses_team_normal: number
  losses_kit_mega_mega_armorer: number
  deaths_kit_mega_mega_armorer: number
  survived_players_kit_mega_mega_armorer: number
  kills_kit_mega_mega_armorer: number
  assists_kit_mega_mega_armorer: number
  games_kit_mega_mega_armorer: number
  mega_instant_smelting: number
  kit_mega_mega_knight_inventory: Kit_mega_mega_knight_inventory
  chests_opened_kit_ranked_ranked_champion: number
  chests_opened_ranked: number
  time_played_ranked: number
  chests_opened: number
  melee_kills_ranked: number
  melee_kills: number
  most_kills_game_kit_ranked_ranked_champion: number
  time_played_kit_ranked_ranked_champion: number
  time_played: number
  most_kills_game: number
  most_kills_game_ranked: number
  melee_kills_kit_ranked_ranked_champion: number
  longest_bow_shot: number
  fastest_win: number
  fastest_win_solo: number
  fastest_win_kit_basic_solo_armorsmith: number
  longest_bow_shot_solo: number
  longest_bow_shot_kit_basic_solo_armorsmith: number
  melee_kills_solo: number
  chests_opened_kit_basic_solo_armorsmith: number
  void_kills: number
  chests_opened_solo: number
  arrows_shot_solo: number
  arrows_hit_kit_basic_solo_armorsmith: number
  most_kills_game_kit_basic_solo_armorsmith: number
  arrows_shot_kit_basic_solo_armorsmith: number
  void_kills_kit_basic_solo_armorsmith: number
  arrows_hit_solo: number
  most_kills_game_solo: number
  time_played_kit_basic_solo_armorsmith: number
  melee_kills_kit_basic_solo_armorsmith: number
  time_played_solo: number
  void_kills_solo: number
  void_kills_kit_ranked_ranked_champion: number
  void_kills_ranked: number
  fastest_win_kit_ranked_ranked_champion: number
  longest_bow_shot_ranked: number
  longest_bow_shot_kit_ranked_ranked_champion: number
  fastest_win_ranked: number
  arrows_shot_kit_ranked_ranked_champion: number
  arrows_hit_ranked: number
  arrows_shot_ranked: number
  arrows_hit_kit_ranked_ranked_champion: number
  kit_basic_solo_energix_inventory: Kit_basic_solo_energix_inventory
  mega_lucky_charm: number
  "quickjoin_uses_Festive Tribute": number
  quickjoin_uses_total: number
  longest_bow_shot_kit_mega_mega_armorer: number
  longest_bow_shot_mega: number
  melee_kills_kit_mega_mega_armorer: number
  chests_opened_kit_mega_mega_armorer: number
  chests_opened_mega: number
  arrows_hit_kit_mega_mega_armorer: number
  arrows_shot_kit_mega_mega_armorer: number
  most_kills_game_mega: number
  melee_kills_mega: number
  most_kills_game_kit_mega_mega_armorer: number
  arrows_shot_mega: number
  time_played_kit_mega_mega_armorer: number
  arrows_hit_mega: number
  time_played_mega: number
  kit_basic_solo_armorsmith_inventory: Kit_basic_solo_armorsmith_inventory
  kit_ranked_ranked_champion_inventory: Kit_ranked_ranked_champion_inventory
  kit_mega_mega_armorer_inventory: Kit_mega_mega_armorer_inventory
  games_kit_ranked_ranked_scout: number
  survived_players_kit_ranked_ranked_scout: number
  most_kills_game_kit_ranked_ranked_scout: number
  time_played_kit_ranked_ranked_scout: number
  chests_opened_kit_ranked_ranked_scout: number
  melee_kills_kit_ranked_ranked_scout: number
  deaths_kit_ranked_ranked_scout: number
  losses_kit_ranked_ranked_scout: number
  kills_kit_ranked_ranked_scout: number
  fastest_win_kit_ranked_ranked_scout: number
  winstreak_kit_ranked_ranked_scout: number
  killstreak_kit_ranked_ranked_scout: number
  wins_kit_ranked_ranked_scout: number
  void_kills_kit_ranked_ranked_scout: number
  longest_bow_shot_kit_ranked_ranked_scout: number
  arrows_shot_kit_ranked_ranked_scout: number
  arrows_hit_kit_ranked_ranked_scout: number
  assists_kit_ranked_ranked_scout: number
  solo_lucky_charm: number
  most_kills_game_kit_advanced_solo_knight: number
  void_kills_kit_advanced_solo_knight: number
  time_played_kit_advanced_solo_knight: number
  chests_opened_kit_advanced_solo_knight: number
  melee_kills_kit_advanced_solo_knight: number
  chests_opened_kit_mega_mega_knight: number
  time_played_kit_mega_mega_knight: number
  votes_Fungi: number
  kit_ranked_ranked_scout_inventory: Kit_ranked_ranked_scout_inventory
  kit_defending_team_frog_inventory: Kit_defending_team_frog_inventory
  melee_kills_kit_mega_mega_knight: number
  arrows_shot_kit_mega_mega_knight: number
  most_kills_game_kit_mega_mega_knight: number
  "votes_Agni Temple": number
  mega_bridger: number
  solo_bridger: number
  games_played_skywars: number
  lastMode: string
  quickjoin_uses_random: number
  deaths_kit_basic_solo_grenade: number
  losses_kit_basic_solo_grenade: number
  time_played_kit_basic_solo_grenade: number
  chests_opened_kit_basic_solo_grenade: number
  mega_tank: number
  team_lucky_charm: number
  mega_nourishment: number
  longest_bow_shot_kit_advanced_solo_knight: number
  fastest_win_kit_advanced_solo_knight: number
  arrows_hit_kit_advanced_solo_knight: number
  arrows_shot_kit_advanced_solo_knight: number
  longest_bow_shot_team: number
  fastest_win_team: number
  fastest_win_kit_supporting_team_armorsmith: number
  longest_bow_shot_kit_supporting_team_armorsmith: number
  survived_players_kit_supporting_team_armorsmith: number
  melee_kills_team: number
  kills_kit_supporting_team_armorsmith: number
  chests_opened_kit_supporting_team_armorsmith: number
  assists_kit_supporting_team_armorsmith: number
  time_played_kit_supporting_team_armorsmith: number
  winstreak_team: number
  arrows_hit_kit_supporting_team_armorsmith: number
  chests_opened_team: number
  assists_team: number
  games_kit_supporting_team_armorsmith: number
  killstreak_kit_supporting_team_armorsmith: number
  winstreak_kit_supporting_team_armorsmith: number
  arrows_shot_team: number
  most_kills_game_kit_supporting_team_armorsmith: number
  void_kills_kit_supporting_team_armorsmith: number
  wins_kit_supporting_team_armorsmith: number
  arrows_hit_team: number
  killstreak_team: number
  most_kills_game_team: number
  arrows_shot_kit_supporting_team_armorsmith: number
  time_played_team: number
  melee_kills_kit_supporting_team_armorsmith: number
  void_kills_team: number
  losses_kit_supporting_team_armorsmith: number
  deaths_kit_supporting_team_armorsmith: number
  longest_bow_shot_kit_mega_mega_knight: number
  arrows_hit_kit_mega_mega_knight: number
  rush_explained_last: number
  rush_explained: number
  win_streak_lab: number
  survived_players_lab_solo: number
  time_played_lab_kit_advanced_solo_knight: number
  chests_opened_lab_solo: number
  losses_lab_kit_advanced_solo_knight: number
  deaths_lab: number
  deaths_lab_solo: number
  time_played_lab_solo: number
  time_played_lab: number
  assists_lab_solo: number
  coins_gained_lab: number
  survived_players_lab: number
  assists_lab_kit_advanced_solo_knight: number
  assists_lab: number
  chests_opened_lab: number
  losses_lab_solo: number
  losses_lab: number
  chests_opened_lab_kit_advanced_solo_knight: number
  quits_lab: number
  enderpearls_thrown_lab: number
  deaths_lab_kit_advanced_solo_knight: number
  survived_players_lab_kit_advanced_solo_knight: number
  solo_environmental_expert: number
  longest_bow_kill_kit_basic_solo_armorsmith: number
  longest_bow_kill: number
  longest_bow_kill_solo: number
  mega_notoriety: number
  inGamePresentsCap_2017_10: number
  longest_bow_kill_kit_basic_solo_scout: number
  kills_kit_basic_solo_scout: number
  survived_players_kit_basic_solo_scout: number
  losses_kit_basic_solo_scout: number
  most_kills_game_kit_basic_solo_scout: number
  deaths_kit_basic_solo_scout: number
  melee_kills_kit_basic_solo_scout: number
  time_played_kit_basic_solo_scout: number
  void_kills_kit_basic_solo_scout: number
  chests_opened_kit_basic_solo_scout: number
  slime_explained_last: number
  slime_explained: number
  longest_bow_shot_lab: number
  longest_bow_shot_lab_kit_basic_solo_scout: number
  longest_bow_shot_lab_solo: number
  games_lab: number
  deaths_lab_kit_basic_solo_scout: number
  arrows_shot_lab_solo: number
  games_lab_solo: number
  arrows_hit_lab_kit_basic_solo_scout: number
  games_lab_kit_basic_solo_scout: number
  time_played_lab_kit_basic_solo_scout: number
  survived_players_lab_kit_basic_solo_scout: number
  arrows_shot_lab_kit_basic_solo_scout: number
  chests_opened_lab_kit_basic_solo_scout: number
  losses_lab_kit_basic_solo_scout: number
  arrows_hit_lab: number
  arrows_shot_lab: number
  arrows_hit_lab_solo: number
  blocks_placed_lab: number
  souls_gathered_lab: number
  kills_lab: number
  kills_lab_kit_basic_solo_scout: number
  kills_lab_solo: number
  assists_kit_basic_solo_scout: number
  longest_bow_shot_kit_basic_solo_scout: number
  arrows_shot_kit_basic_solo_scout: number
  arrows_hit_kit_basic_solo_scout: number
  fastest_win_kit_basic_solo_scout: number
  wins_kit_basic_solo_scout: number
  winstreak_kit_basic_solo_scout: number
  killstreak_kit_basic_solo_scout: number
  games_kit_basic_solo_scout: number
  inGamePresentsCap_2017_23: number
  longest_bow_kill_kit_ranked_ranked_scout: number
  longest_bow_kill_ranked: number
  kit_ranked_ranked_athlete_inventory: Kit_ranked_ranked_athlete_inventory
  solo_nourishment: number
  "solo_annoy-o-mite": number
  solo_bulldozer: number
  solo_blazing_arrows: number
  solo_black_magic: number
  inGamePresentsCap_2017_25: number
  void_kills_mega: number
  void_kills_kit_mega_mega_knight: number
  inGamePresentsCap_2017_29: number
  longest_bow_kill_kit_mega_mega_knight: number
  longest_bow_kill_mega: number
  fastest_win_kit_mega_mega_knight: number
  fastest_win_mega: number
  winstreak_mega: number
  winstreak_kit_mega_mega_knight: number
  activeKit_TEAMS: string
  inGamePresentsCap_2017_30: number
  longest_bow_kill_kit_attacking_team_scout: number
  longest_bow_kill_team: number
  fastest_win_kit_attacking_team_scout: number
  chests_opened_kit_attacking_team_scout: number
  arrows_shot_kit_attacking_team_scout: number
  melee_kills_kit_attacking_team_scout: number
  time_played_kit_attacking_team_scout: number
  winstreak_kit_attacking_team_scout: number
  killstreak_kit_attacking_team_scout: number
  assists_kit_attacking_team_scout: number
  most_kills_game_kit_attacking_team_scout: number
  longest_bow_kill_kit_supporting_team_armorsmith: number
  "team_annoy-o-mite": number
  mob_kills: number
  mob_kills_solo: number
  mob_kills_kit_basic_solo_scout: number
  melee_kills_lab_solo: number
  melee_kills_lab: number
  melee_kills_lab_kit_basic_solo_scout: number
  inGamePresentsCap_2018_1: number
  inGamePresentsCap_2018_2: number
  inGamePresentsCap_2018_6: number
  blocks_broken_lab: number
  inGamePresentsCap_2018_7: number
  freeLootChestNpc: number
  skywars_chests: number
  SkyWars_openedChests: number
  skywars_chest_history: string[]
  SkyWars_openedRares: number
  SkyWars_openedCommons: number
  kit_basic_solo_scout_inventory: Kit_basic_solo_scout_inventory
  shop_sort: string
  shop_sort_enable_owned_first: boolean
  active_projectiletrail: string
  active_victorydance: string
  active_sprays: string
  cosmetic_tokens: number
  active_balloon: string
  active_deathcry: string
  quickjoin_uses_Memorial: number
  team_arrow_recovery: number
  active_cage: string
  lucky_explained: number
  lucky_explained_last: number
  void_kills_lab: number
  void_kills_lab_kit_basic_solo_scout: number
  void_kills_lab_solo: number
  team_bridger: number
  solo_fat: number
  chests_opened_lab_kit_supporting_team_armorsmith: number
  chests_opened_lab_team: number
  survived_players_lab_team: number
  deaths_lab_kit_supporting_team_armorsmith: number
  time_played_lab_team: number
  survived_players_lab_kit_supporting_team_armorsmith: number
  losses_lab_kit_supporting_team_armorsmith: number
  losses_lab_team: number
  time_played_lab_kit_supporting_team_armorsmith: number
  deaths_lab_team: number
  longest_bow_kill_lab_team: number
  longest_bow_kill_lab_kit_supporting_team_armorsmith: number
  longest_bow_kill_lab: number
  arrows_shot_lab_kit_supporting_team_armorsmith: number
  arrows_shot_lab_team: number
  games_lab_kit_supporting_team_armorsmith: number
  melee_kills_lab_team: number
  kills_lab_team: number
  games_lab_team: number
  kills_lab_kit_supporting_team_armorsmith: number
  melee_kills_lab_kit_supporting_team_armorsmith: number
  SkyWars_openedLegendaries: number
  SkyWars_openedEpics: number
  active_killmessages: string
  active_killeffect: string
  votes_Shire: number
  void_kills_kit_attacking_team_scout: number
  longest_bow_shot_kit_attacking_team_scout: number
  arrows_hit_kit_attacking_team_scout: number
  wins_lab: number
  killstreak_lab: number
  winstreak_lab_kit_basic_solo_scout: number
  lab_win_rush_lab_solo: number
  winstreak_lab: number
  lab_win_rush_lab: number
  winstreak_lab_solo: number
  lab_win_rush_lab_kit_basic_solo_scout: number
  wins_lab_kit_basic_solo_scout: number
  killstreak_lab_solo: number
  wins_lab_solo: number
  killstreak_lab_kit_basic_solo_scout: number
  team_environmental_expert: number
  assists_lab_kit_basic_solo_scout: number
  lab_win_lucky_blocks_lab_kit_basic_solo_scout: number
  lab_win_lucky_blocks_lab_solo: number
  lab_win_lucky_blocks_lab: number
  "quickjoin_uses_Desserted Islands": number
  mega_marksmanship: number
  quickjoin_uses_Skychurch: number
  bow_kills: number
  bow_kills_solo: number
  bow_kills_kit_basic_solo_scout: number
  SkyWars_skywars_rating_4_18_position: number
  SkyWars_skywars_rating_4_18_rating: number
  mega_necromancer: number
  longest_bow_kill_lab_kit_attacking_team_scout: number
  arrows_hit_lab_team: number
  kills_lab_kit_attacking_team_scout: number
  survived_players_lab_kit_attacking_team_scout: number
  games_lab_kit_attacking_team_scout: number
  winstreak_lab_team: number
  melee_kills_lab_kit_attacking_team_scout: number
  lab_win_lucky_blocks_lab_kit_attacking_team_scout: number
  time_played_lab_kit_attacking_team_scout: number
  wins_lab_team: number
  void_kills_lab_team: number
  void_kills_lab_kit_attacking_team_scout: number
  bow_kills_lab_team: number
  bow_kills_lab_kit_attacking_team_scout: number
  arrows_hit_lab_kit_attacking_team_scout: number
  arrows_shot_lab_kit_attacking_team_scout: number
  winstreak_lab_kit_attacking_team_scout: number
  lab_win_lucky_blocks_lab_team: number
  chests_opened_lab_kit_attacking_team_scout: number
  wins_lab_kit_attacking_team_scout: number
  killstreak_lab_kit_attacking_team_scout: number
  killstreak_lab_team: number
  bow_kills_lab: number
  quickjoin_uses_Tribal: number
  tnt_madness_explained_last: number
  tnt_madness_explained: number
  quickjoin_uses_Palette: number
  quickjoin_uses_Nomad: number
  quickjoin_uses_Villa: number
  solo_necromancer: number
  bow_kills_team: number
  bow_kills_kit_attacking_team_scout: number
  hunters_vs_beasts_explained_last: number
  hunters_vs_beasts_explained: number
  quickjoin_uses_Winterhelm: number
  quickjoin_uses_Jinzhou: number
  team_black_magic: number
  beast_chance: number
  time_played_lab_kit_basic_solo_troll: number
  deaths_lab_kit_basic_solo_troll: number
  chests_opened_lab_kit_basic_solo_troll: number
  survived_players_lab_kit_basic_solo_troll: number
  losses_lab_kit_basic_solo_troll: number
  losses_kit_basic_solo_troll: number
  time_played_kit_basic_solo_troll: number
  deaths_kit_basic_solo_troll: number
  SkyWars_skywars_rating_5_18_rating: number
  SkyWars_skywars_rating_5_18_position: number
  fastest_win_lab_solo: number
  fastest_win_lab: number
  fastest_win_lab_kit_basic_solo_scout: number
  lab_win_hunters_vs_beasts_lab_kit_basic_solo_scout: number
  lab_win_hunters_vs_beasts_lab_solo: number
  lab_win_hunters_vs_beasts_lab: number
  egg_thrown_lab: number
  items_enchanted_lab: number
  most_kills_game_lab_kit_basic_solo_scout: number
  most_kills_game_lab_solo: number
  most_kills_game_lab: number
  mob_kills_lab_solo: number
  mob_kills_lab: number
  mob_kills_lab_kit_basic_solo_scout: number
  team_fat: number
  activeKit_MEGA_DOUBLES_random: boolean
  activeKit_MEGA_DOUBLES: string
  team_robbery: number
  activeKit_RANKED_random: boolean
  longest_bow_kill_kit_ranked_ranked_champion: number
  longest_bow_kill_kit_ranked_ranked_armorer: number
  fastest_win_kit_ranked_ranked_armorer: number
  most_kills_game_kit_ranked_ranked_armorer: number
  longest_bow_shot_kit_ranked_ranked_armorer: number
  melee_kills_kit_ranked_ranked_armorer: number
  time_played_kit_ranked_ranked_armorer: number
  chests_opened_kit_ranked_ranked_armorer: number
  wins_kit_ranked_ranked_armorer: number
  arrows_hit_kit_ranked_ranked_armorer: number
  winstreak_kit_ranked_ranked_armorer: number
  arrows_shot_kit_ranked_ranked_armorer: number
  games_kit_ranked_ranked_armorer: number
  survived_players_kit_ranked_ranked_armorer: number
  kills_kit_ranked_ranked_armorer: number
  killstreak_kit_ranked_ranked_armorer: number
  void_kills_kit_ranked_ranked_armorer: number
  deaths_kit_ranked_ranked_armorer: number
  losses_kit_ranked_ranked_armorer: number
  activeKit_SOLO_random: boolean
  most_kills_game_kit_advanced_solo_armorer: number
  chests_opened_kit_advanced_solo_armorer: number
  kills_kit_advanced_solo_armorer: number
  survived_players_kit_advanced_solo_armorer: number
  deaths_kit_advanced_solo_armorer: number
  losses_kit_advanced_solo_armorer: number
  time_played_kit_advanced_solo_armorer: number
  fastest_win_kit_advanced_solo_armorer: number
  longest_bow_kill_kit_advanced_solo_armorer: number
  winstreak_kit_advanced_solo_armorer: number
  killstreak_kit_advanced_solo_armorer: number
  wins_kit_advanced_solo_armorer: number
  games_kit_advanced_solo_armorer: number
  melee_kills_kit_advanced_solo_armorer: number
  void_kills_kit_advanced_solo_armorer: number
  longest_bow_shot_kit_advanced_solo_armorer: number
  arrows_hit_kit_advanced_solo_armorer: number
  arrows_shot_kit_advanced_solo_armorer: number
  assists_kit_advanced_solo_armorer: number
  quickjoin_uses_Crumble: number
  longest_bow_kill_kit_advanced_solo_knight: number
  assists_kit_advanced_solo_knight: number
  quickjoin_uses_Frostbite: number
  solo_frost: number
  longest_bow_kill_kit_blacksmith_ranked_blacksmith: number
  most_kills_game_kit_blacksmith_ranked_blacksmith: number
  fastest_win_kit_blacksmith_ranked_blacksmith: number
  void_kills_kit_blacksmith_ranked_blacksmith: number
  games_kit_blacksmith_ranked_blacksmith: number
  melee_kills_kit_blacksmith_ranked_blacksmith: number
  killstreak_kit_blacksmith_ranked_blacksmith: number
  survived_players_kit_blacksmith_ranked_blacksmith: number
  wins_kit_blacksmith_ranked_blacksmith: number
  time_played_kit_blacksmith_ranked_blacksmith: number
  winstreak_kit_blacksmith_ranked_blacksmith: number
  kills_kit_blacksmith_ranked_blacksmith: number
  chests_opened_kit_blacksmith_ranked_blacksmith: number
  SkyWars_skywars_rating_6_18_position: number
  SkyWars_skywars_rating_6_18_rating: number
  quickjoin_uses_Fossil: number
  solo_revenge: number
  most_kills_game_kit_ranked_ranked_healer: number
  deaths_kit_ranked_ranked_healer: number
  void_kills_kit_ranked_ranked_healer: number
  losses_kit_ranked_ranked_healer: number
  chests_opened_kit_ranked_ranked_healer: number
  kills_kit_ranked_ranked_healer: number
  survived_players_kit_ranked_ranked_healer: number
  games_kit_ranked_ranked_healer: number
  time_played_kit_ranked_ranked_healer: number
  fastest_win_kit_ranked_ranked_bowman: number
  longest_bow_shot_kit_ranked_ranked_bowman: number
  most_kills_game_kit_ranked_ranked_bowman: number
  arrows_shot_kit_ranked_ranked_bowman: number
  games_kit_ranked_ranked_bowman: number
  survived_players_kit_ranked_ranked_bowman: number
  time_played_kit_ranked_ranked_bowman: number
  chests_opened_kit_ranked_ranked_bowman: number
  kills_kit_ranked_ranked_bowman: number
  void_kills_kit_ranked_ranked_bowman: number
  arrows_hit_kit_ranked_ranked_bowman: number
  wins_kit_ranked_ranked_bowman: number
  winstreak_kit_ranked_ranked_bowman: number
  killstreak_kit_ranked_ranked_bowman: number
  assists_kit_ranked_ranked_healer: number
  assists_kit_ranked_ranked_armorer: number
  team_frost: number
  longest_bow_shot_mega_doubles: number
  most_kills_game_kit_mega_mega_default: number
  most_kills_game_mega_doubles: number
  longest_bow_shot_kit_mega_mega_default: number
  arrows_shot_mega_doubles: number
  time_played_mega_doubles: number
  losses_mega_doubles_normal: number
  arrows_hit_mega_doubles: number
  games_mega_doubles: number
  kills_mega_doubles_normal: number
  deaths_mega_doubles_normal: number
  survived_players_mega_doubles: number
  losses_mega_doubles: number
  kills_mega_doubles: number
  time_played_kit_mega_mega_default: number
  chests_opened_kit_mega_mega_default: number
  games_kit_mega_mega_default: number
  void_kills_mega_doubles: number
  arrows_hit_kit_mega_mega_default: number
  arrows_shot_kit_mega_mega_default: number
  chests_opened_mega_doubles: number
  deaths_mega_doubles: number
  void_kills_kit_mega_mega_default: number
  fastest_win_mega_doubles: number
  longest_bow_kill_kit_mega_mega_armorer: number
  fastest_win_kit_mega_mega_armorer: number
  longest_bow_kill_mega_doubles: number
  killstreak_kit_mega_mega_armorer: number
  melee_kills_mega_doubles: number
  assists_mega_doubles: number
  wins_mega_doubles: number
  wins_kit_mega_mega_armorer: number
  winstreak_mega_doubles: number
  wins_mega_doubles_normal: number
  winstreak_kit_mega_mega_armorer: number
  void_kills_kit_mega_mega_armorer: number
  killstreak_mega_doubles: number
  losses_kit_blacksmith_ranked_blacksmith: number
  deaths_kit_blacksmith_ranked_blacksmith: number
  team_necromancer: number
  longest_bow_kill_kit_ranked_ranked_bowman: number
  deaths_kit_ranked_ranked_bowman: number
  losses_kit_ranked_ranked_bowman: number
  melee_kills_kit_ranked_ranked_bowman: number
  solo_robbery: number
  SkyWars_skywars_rating_7_18_position: number
  SkyWars_skywars_rating_7_18_rating: number
  deaths_kit_ranked_ranked_magician: number
  chests_opened_kit_ranked_ranked_magician: number
  time_played_kit_ranked_ranked_magician: number
  losses_kit_ranked_ranked_magician: number
  survived_players_kit_ranked_ranked_magician: number
  arrows_shot_kit_blacksmith_ranked_blacksmith: number
  assists_kit_blacksmith_ranked_blacksmith: number
  SkyWars_skywars_rating_8_18_position: number
  SkyWars_skywars_rating_8_18_rating: number
  longest_bow_shot_kit_blacksmith_ranked_blacksmith: number
  arrows_hit_kit_blacksmith_ranked_blacksmith: number
  losses_kit_ranked_ranked_paladin: number
  chests_opened_kit_ranked_ranked_paladin: number
  deaths_kit_ranked_ranked_paladin: number
  time_played_kit_ranked_ranked_paladin: number
  most_kills_game_kit_ranked_ranked_magician: number
  longest_bow_kill_kit_ranked_ranked_magician: number
  kills_kit_ranked_ranked_magician: number
  assists_kit_ranked_ranked_magician: number
  melee_kills_kit_ranked_ranked_magician: number
  games_kit_ranked_ranked_magician: number
  fastest_win_kit_ranked_ranked_healer: number
  winstreak_kit_ranked_ranked_healer: number
  killstreak_kit_ranked_ranked_healer: number
  wins_kit_ranked_ranked_healer: number
  SkyWars_skywars_rating_9_18_position: number
  SkyWars_skywars_rating_9_18_rating: number
  SkyWars_skywars_rating_10_18_position: number
  SkyWars_skywars_rating_10_18_rating: number
  inGamePresentsCap_2018_15: number
  inGamePresentsCap_2018_16: number
  mega_black_magic: number
  inGamePresentsCap_2018_17: number
  skywars_experience: number
  team_bulldozer: number
  team_marksmanship: number
  angel_of_death_level: number
  selected_prestige_icon: string
  inGamePresentsCap_2018_19: number
  heads_tasty_solo: number
  heads_divine_kit_basic_solo_scout: number
  heads: number
  heads_tasty: number
  heads_yucky_solo: number
  heads_divine: number
  heads_divine_solo: number
  heads_solo: number
  heads_tasty_kit_basic_solo_scout: number
  heads_yucky_kit_basic_solo_scout: number
  heads_kit_basic_solo_scout: number
  heads_yucky: number
  head_collection: Head_collection
  challenge_wins: number
  challenge_wins_0_solo: number
  challenge_wins_kit_basic_solo_scout: number
  challenge_wins_solo: number
  challenge_wins_0_kit_basic_solo_scout: number
  challenge_wins_0: number
  heads_eww_solo: number
  heads_salty: number
  heads_salty_kit_basic_solo_scout: number
  heads_eww_kit_basic_solo_scout: number
  heads_eww: number
  heads_salty_solo: number
  heads_meh_kit_basic_solo_scout: number
  heads_meh: number
  heads_meh_solo: number
  inGamePresentsCap_2018_21: number
  challenge_attempts_half_health: number
  challenge_attempts_kit_basic_solo_scout: number
  challenge_attempts_1_solo: number
  challenge_attempts_half_health_solo: number
  challenge_attempts_1: number
  challenge_attempts_solo: number
  challenge_attempts_half_health_kit_basic_solo_scout: number
  challenge_attempts_1_kit_basic_solo_scout: number
  challenge_attempts: number
  inGamePresentsCap_2018_22: number
  heads_heavenly: number
  heads_heavenly_kit_basic_solo_scout: number
  heads_heavenly_solo: number
  inGamePresentsCap_2018_23: number
  heads_succulent_solo: number
  heads_succulent: number
  heads_succulent_kit_basic_solo_scout: number
  heads_decent_kit_basic_solo_scout: number
  heads_decent: number
  heads_decent_solo: number
  "deaths_kit_mythical_end-lord": number
  "survived_players_kit_mythical_end-lord": number
  "losses_kit_mythical_end-lord": number
  "time_played_kit_mythical_end-lord": number
  "chests_opened_kit_mythical_end-lord": number
  inGamePresentsCap_2018_24: number
  inGamePresentsCap_2018_27: number
  SkyWars_skywars_rating_12_18_rating: number
  SkyWars_skywars_rating_12_18_position: number
  inGamePresentsCap_2019_6: number
  SkyWars_skywars_rating_1_19_position: number
  SkyWars_skywars_rating_1_19_rating: number
  levelFormatted: string
}
interface Kit_mega_mega_knight_inventory {
  "GOLD_LEGGINGS:0": string
  "GOLD_HELMET:0": string
  "DIAMOND_SWORD:0": string
}
interface Kit_basic_solo_energix_inventory {
  "POTION:9": string
}
interface Kit_basic_solo_armorsmith_inventory {
  "ENCHANTED_BOOK:0": string
  "EXP_BOTTLE:0": string
  "ANVIL:0": string
  "DIAMOND_HELMET:0": string
}
interface Kit_ranked_ranked_champion_inventory {
  "IRON_LEGGINGS:0": string
  "IRON_AXE:0": string
  "ENCHANTED_BOOK:0": string
  "IRON_PICKAXE:0": string
  "IRON_HELMET:0": string
  "IRON_BOOTS:0": string
  "IRON_CHESTPLATE:0": string
  "DIAMOND_SWORD:0": string
  "ANVIL:0": string
}
interface Kit_mega_mega_armorer_inventory {
  "IRON_BOOTS:0": string
  "POTION:8": string
  "IRON_CHESTPLATE:0": string
}
interface Kit_ranked_ranked_scout_inventory {
  "DIAMOND_AXE:0": string
  "POTION:2": string
  "IRON_LEGGINGS:0": string
  "IRON_HELMET:0": string
  "IRON_BOOTS:0": string
  "IRON_CHESTPLATE:0": string
  "DIAMOND_PICKAXE:0": string
}
interface Kit_defending_team_frog_inventory {
  "POTION:2": string
  "LEATHER_CHESTPLATE:0": string
  "LEATHER_LEGGINGS:0": string
  "SKULL_ITEM:3": string
  "LEATHER_BOOTS:0": string
}
interface Kit_ranked_ranked_athlete_inventory {
  "FISHING_ROD:0": string
  "POTION:2": string
  "IRON_LEGGINGS:0": string
  "IRON_AXE:0": string
  "IRON_PICKAXE:0": string
  "IRON_HELMET:0": string
  "IRON_BOOTS:0": string
  "WATER_BUCKET:0": string
  "IRON_CHESTPLATE:0": string
  "DIAMOND_SWORD:0": string
  "GOLDEN_APPLE:0": string
}
interface Kit_basic_solo_scout_inventory {
  "POTION:2": string
}
interface Head_collection {
  recent: RecentItem[]
  prestigious: PrestigiousItem[]
}
interface RecentItem {
  uuid: string
  timestamp: number
  mode: string
  sacrifice: string
}
interface PrestigiousItem {
  uuid: string
  timestamp: number
  mode: string
  sacrifice: string
}
interface TrueCombat {
  coins: number
  crazywalls_kills_weekly_b_solo_chaos: number
  arrows_shot: number
  kills: number
  survived_players: number
  crazywalls_kills_monthly_b_solo_chaos: number
  skulls_gathered: number
  crazywalls_wins_solo_chaos: number
  crazywalls_kills_solo_chaos: number
  wins: number
  golden_skulls: number
  giant_zombie: number
  solo_speed_mining: number
  solo_vampirism: number
  show_noob_holograms: boolean
  win_streak: number
  crazywalls_losses_solo_chaos: number
  items_enchanted: number
  crazywalls_games_solo_chaos: number
  losses: number
  crazywalls_deaths_solo_chaos: number
  games: number
  deaths: number
  solo_chaos_rusher: number
  votes_Crypt: number
  crazywalls_deaths_solo: number
  crazywalls_games_solo: number
  crazywalls_kills_monthly_b_solo: number
  crazywalls_losses_solo: number
  crazywalls_kills_solo: number
  crazywalls_kills_weekly_a_solo: number
  crazywalls_kills_weekly_a_solo_chaos: number
  solo_bounty_hunter: number
  solo_rusher: number
  crazywalls_games_team_chaos: number
  crazywalls_losses_team_chaos: number
  crazywalls_kills_monthly_b_team_chaos: number
  crazywalls_deaths_team_chaos: number
  crazywalls_kills_team_chaos: number
  crazywalls_kills_weekly_a_team_chaos: number
  team_swiftness: number
  crazywalls_kills_weekly_b_solo: number
  giant_zombie_rares: number
  solo_chaos_vampirism: number
  solo_smart_mining: number
  crazywalls_kills_monthly_a_solo_chaos: number
  kit_basic_chaos_knight: number
  kit_basic_chaos_archer: number
  gold_dust: number
  kills_monthly_b: number
  solo_chaos_tomb_robber: number
  solo_chaos_berserk: number
  activeKit_Solo_chaos: string
  kills_weekly_b: number
  kit_basic_chaos_alchemist: number
  kills_monthly_a: number
}
interface SuperSmash {
  smashLevel: number
  lastLevel_THE_BULK: number
  win_streak: number
  class_stats: Class_stats
  damage_dealt: number
  losses_weekly_a: number
  games_weekly_a: number
  losses_monthly_b: number
  losses: number
  games_monthly_b: number
  quits: number
  deaths_normal: number
  games_normal: number
  losses_normal: number
  deaths: number
  damage_dealt_normal: number
  games: number
  coins: number
  smashed_normal: number
  kills_monthly_b: number
  kills: number
  smashed: number
  kills_normal: number
  kills_weekly_a: number
}
interface Class_stats {
  THE_BULK: THE_BULK
}
interface THE_BULK {
  boulder: Boulder
  melee: Melee
  games: number
  deaths_normal: number
  losses_normal: number
  damage_dealt: number
  losses: number
  deaths: number
  games_normal: number
  damage_dealt_normal: number
  seismic_slam: Seismic_slam
  kills: number
  monster_charge: Monster_charge
  monster_mash: Monster_mash
  smashed: number
  throw_cake: Throw_cake
  smashed_normal: number
  kills_normal: number
}
interface Boulder {
  damage_dealt: number
  damage_dealt_normal: number
}
interface Melee {
  damage_dealt_normal: number
  damage_dealt: number
}
interface Seismic_slam {
  damage_dealt: number
  damage_dealt_normal: number
}
interface Monster_charge {
  kills_normal: number
  damage_dealt: number
  kills: number
  damage_dealt_normal: number
}
interface Monster_mash {
  damage_dealt: number
  damage_dealt_normal: number
}
interface Throw_cake {
  smashed: number
  smashed_normal: number
}
interface SpeedUHC {
  firstJoinLobbyInt: number
  tearWellUses: number
  tears: number
  found_RARE: number
  killstreak: number
  highestKillstreak: number
  win_streak: number
  deaths_solo_insane: number
  coins: number
  losses: number
  deaths_solo: number
  kills_monthly_b: number
  losses_solo_insane: number
  quits: number
  survived_players_solo: number
  kills_mastery_wild_specialist: number
  kills_weekly_b: number
  kills: number
  deaths: number
  tears_gathered: number
  deaths_mastery_wild_specialist: number
  losses_mastery_wild_specialist: number
  kills_solo: number
  kills_insane: number
  blocks_broken: number
  losses_insane: number
  losses_solo: number
  deaths_insane: number
  deaths_kit_basic_insane_default: number
  survived_players: number
  kills_solo_insane: number
  losses_kit_basic_insane_default: number
  survived_players_insane: number
  survived_players_kit_basic_insane_default: number
  blocks_placed: number
  kills_kit_basic_insane_default: number
  games_solo: number
  games: number
  games_insane: number
  games_kit_basic_insane_default: number
  items_enchanted: number
  winstreak_kit_basic_insane_default: number
  wins: number
  wins_mastery_wild_specialist: number
  winstreak_insane: number
  killstreak_insane: number
  wins_insane: number
  killstreak_solo: number
  killstreak_kit_basic_insane_default: number
  winstreak_solo: number
  wins_kit_basic_insane_default: number
  winstreak: number
  wins_solo: number
  wins_solo_insane: number
  score: number
  movedOver: boolean
}
interface SkyClash {
  card_packs: number
  active_class: number
  class_1: string
  perk_creeper: number
  perk_creeper_new: boolean
  perk_sugar_rush: number
  perk_hit_and_run_duplicates: number
  perk_sugar_rush_new: boolean
  highestKillstreak: number
  killstreak: number
  playstreak: number
  play_streak: number
  longest_bow_shot_kit_guardian: number
  win_streak: number
  longest_bow_shot: number
  losses: number
  melee_kills_kit_guardian: number
  games_played_kit_guardian: number
  bow_hits: number
  kills: number
  deaths_solo: number
  bow_shots_kit_guardian: number
  most_kills_game: number
  most_kills_game_kit_guardian: number
  games_played: number
  kills_kit_guardian: number
  quits: number
  bow_shots: number
  melee_kills: number
  losses_solo: number
  deaths_kit_guardian: number
  kills_solo: number
  kills_monthly_b: number
  bow_hits_kit_guardian: number
  deaths: number
  coins: number
  kills_weekly_b: number
}
interface Bedwars {
  Experience?: number
  bedwars_boxes?: number
  first_join_7?: boolean
  games_played_bedwars_1?: number
  chest_history?: string
  bedwars_box_commons?: number
  bedwars_box?: number
  bedwars_box_rares?: number
  activeProjectileTrail?: string
  shop_sort?: string
  shop_sort_enable_owned_first?: boolean
  spray_storage_new?: string
  winstreak?: number
  activeIslandTopper?: string
  gold_resources_collected_bedwars?: number
  eight_one_items_purchased_bedwars?: number
  eight_one_deaths_bedwars?: number
  eight_one_games_played_bedwars?: number
  deaths_bedwars?: number
  eight_one_entity_attack_deaths_bedwars?: number
  resources_collected_bedwars?: number
  eight_one_losses_bedwars?: number
  entity_attack_deaths_bedwars?: number
  losses_bedwars?: number
  items_purchased_bedwars?: number
  games_played_bedwars?: number
  eight_one_iron_resources_collected_bedwars?: number
  eight_one_resources_collected_bedwars?: number
  iron_resources_collected_bedwars?: number
  eight_one__items_purchased_bedwars?: number
  eight_one_gold_resources_collected_bedwars?: number
  _items_purchased_bedwars?: number
  diamond_resources_collected_bedwars?: number
  emerald_resources_collected_bedwars?: number
  eight_one_emerald_resources_collected_bedwars?: number
  kills_bedwars?: number
  entity_attack_kills_bedwars?: number
  eight_one_diamond_resources_collected_bedwars?: number
  eight_one_entity_attack_kills_bedwars?: number
  eight_one_kills_bedwars?: number
  void_deaths_bedwars?: number
  eight_one_void_deaths_bedwars?: number
  eight_one_final_kills_bedwars?: number
  eight_one_beds_broken_bedwars?: number
  coins?: number
  eight_one_void_final_kills_bedwars?: number
  final_kills_bedwars?: number
  void_final_kills_bedwars?: number
  beds_broken_bedwars?: number
  final_deaths_bedwars?: number
  four_three_void_final_kills_bedwars?: number
  entity_attack_final_deaths_bedwars?: number
  four_three_iron_resources_collected_bedwars?: number
  four_three_entity_attack_final_deaths_bedwars?: number
  four_three_games_played_bedwars?: number
  four_three__items_purchased_bedwars?: number
  four_three_beds_lost_bedwars?: number
  beds_lost_bedwars?: number
  four_three_gold_resources_collected_bedwars?: number
  four_three_beds_broken_bedwars?: number
  four_three_losses_bedwars?: number
  four_three_final_kills_bedwars?: number
  four_three_items_purchased_bedwars?: number
  four_three_final_deaths_bedwars?: number
  four_three_resources_collected_bedwars?: number
  four_three_entity_attack_kills_bedwars?: number
  "permanent _items_purchased_bedwars"?: number
  four_three_void_deaths_bedwars?: number
  "four_three_permanent _items_purchased_bedwars"?: number
  four_three_deaths_bedwars?: number
  four_three_kills_bedwars?: number
  four_four__items_purchased_bedwars?: number
  "four_four_permanent _items_purchased_bedwars"?: number
  four_four_wrapped_present_resources_collected_bedwars?: number
  four_four_deaths_bedwars?: number
  four_four_gold_resources_collected_bedwars?: number
  four_four_diamond_resources_collected_bedwars?: number
  four_four_iron_resources_collected_bedwars?: number
  four_four_games_played_bedwars?: number
  four_four_wins_bedwars?: number
  fall_final_kills_bedwars?: number
  wins_bedwars?: number
  four_four_resources_collected_bedwars?: number
  four_four_void_deaths_bedwars?: number
  four_four_items_purchased_bedwars?: number
  four_four_fall_final_kills_bedwars?: number
  wrapped_present_resources_collected_bedwars?: number
  four_four_final_kills_bedwars?: number
  four_four_emerald_resources_collected_bedwars?: number
  bedwars_christmas_boxes?: number
  free_event_key_bedwars_christmas_boxes_2017?: boolean
  Bedwars_openedRares?: number
  chest_history_new?: string[]
  Bedwars_openedCommons?: number
  Bedwars_openedChests?: number
  four_four_beds_broken_bedwars?: number
  four_four_kills_bedwars?: number
  entity_attack_final_kills_bedwars?: number
  four_four_entity_attack_final_kills_bedwars?: number
  four_four_entity_attack_kills_bedwars?: number
  four_four_entity_attack_deaths_bedwars?: number
  Bedwars_openedEpics?: number
  activeVictoryDance?: string
  activeGlyph?: string
  activeSprays?: string
  void_kills_bedwars?: number
  four_four_void_kills_bedwars?: number
  four_four_void_final_kills_bedwars?: number
  four_four_final_deaths_bedwars?: number
  fall_kills_bedwars?: number
  four_four_beds_lost_bedwars?: number
  four_four_losses_bedwars?: number
  four_four_entity_attack_final_deaths_bedwars?: number
  four_four_fall_kills_bedwars?: number
  fall_final_deaths_bedwars?: number
  four_four_fall_final_deaths_bedwars?: number
  eight_one_beds_lost_bedwars?: number
  eight_one_entity_attack_final_kills_bedwars?: number
  eight_one_final_deaths_bedwars?: number
  eight_one_entity_attack_final_deaths_bedwars?: number
  eight_one_fall_kills_bedwars?: number
  eight_one_wrapped_present_resources_collected_bedwars?: number
  "eight_one_permanent _items_purchased_bedwars"?: number
  eight_one_void_kills_bedwars?: number
  activeNPCSkin?: string
  eight_one_wins_bedwars?: number
  Bedwars_openedLegendaries?: number
  activeDeathCry?: string
  activeKillEffect?: string
  quickjoin_uses_random?: number
  quickjoin_uses_total?: number
  four_three_void_kills_bedwars?: number
  void_final_deaths_bedwars?: number
  four_three_wrapped_present_resources_collected_bedwars?: number
  four_three_void_final_deaths_bedwars?: number
  four_three_diamond_resources_collected_bedwars?: number
  four_three_emerald_resources_collected_bedwars?: number
  eight_two_emerald_resources_collected_bedwars?: number
  eight_two_resources_collected_bedwars?: number
  eight_two_kills_bedwars?: number
  eight_two_entity_attack_kills_bedwars?: number
  eight_two_iron_resources_collected_bedwars?: number
  eight_two_final_deaths_bedwars?: number
  eight_two_void_final_deaths_bedwars?: number
  eight_two_deaths_bedwars?: number
  eight_two__items_purchased_bedwars?: number
  eight_two_wrapped_present_resources_collected_bedwars?: number
  eight_two_games_played_bedwars?: number
  eight_two_items_purchased_bedwars?: number
  eight_two_beds_lost_bedwars?: number
  eight_two_entity_attack_deaths_bedwars?: number
  eight_two_gold_resources_collected_bedwars?: number
  eight_two_losses_bedwars?: number
  eight_two_diamond_resources_collected_bedwars?: number
  eight_two_void_kills_bedwars?: number
  eight_two_final_kills_bedwars?: number
  eight_two_void_deaths_bedwars?: number
  eight_two_beds_broken_bedwars?: number
  "eight_two_permanent _items_purchased_bedwars"?: number
  eight_two_entity_attack_final_kills_bedwars?: number
  eight_two_fall_kills_bedwars?: number
  eight_two_entity_attack_final_deaths_bedwars?: number
  four_three_wins_bedwars?: number
  four_three_fall_kills_bedwars?: number
  four_three_entity_attack_deaths_bedwars?: number
  four_three_entity_attack_final_kills_bedwars?: number
  free_event_key_bedwars_christmas_boxes_2018?: boolean
  eight_one_void_final_deaths_bedwars?: number
  seen_beta_menu?: number
  favorite_slots?: string
  four_four_void_final_deaths_bedwars?: number
  eight_two_wins_bedwars?: number
  eight_two_void_final_kills_bedwars?: number
  quickjoin_uses_Eastwood?: number
  quickjoin_uses_Aquarium?: number
  quickjoin_uses_Boletum?: number
  fall_deaths_bedwars?: number
  four_three_fall_deaths_bedwars?: number
  four_three_fall_final_kills_bedwars?: number
  four_three_fall_final_deaths_bedwars?: number
  bedwars_lunar_boxes?: number
  free_event_key_bedwars_lunar_boxes_2018?: boolean
  quickjoin_uses_Treenan?: number
  eight_one_winstreak?: number
  understands_streaks?: boolean
  understands_resource_bank?: boolean
  castle_beds_lost_bedwars?: number
  "castle_permanent _items_purchased_bedwars"?: number
  castle_deaths_bedwars?: number
  castle__items_purchased_bedwars?: number
  castle_games_played_bedwars?: number
  castle_final_deaths_bedwars?: number
  castle_void_final_deaths_bedwars?: number
  castle_fall_kills_bedwars?: number
  castle_entity_attack_kills_bedwars?: number
  castle_items_purchased_bedwars?: number
  castle_diamond_resources_collected_bedwars?: number
  castle_gold_resources_collected_bedwars?: number
  castle_resources_collected_bedwars?: number
  castle_losses_bedwars?: number
  castle_void_deaths_bedwars?: number
  castle_iron_resources_collected_bedwars?: number
  castle_fall_deaths_bedwars?: number
  castle_kills_bedwars?: number
  castle_winstreak?: number
  castle_wins_bedwars?: number
  castle_entity_attack_deaths_bedwars?: number
  castle_emerald_resources_collected_bedwars?: number
  castle_void_kills_bedwars?: number
  castle_entity_explosion_deaths_bedwars?: number
  castle_beds_broken_bedwars?: number
  castle_entity_attack_final_kills_bedwars?: number
  castle_fall_final_deaths_bedwars?: number
  castle_void_final_kills_bedwars?: number
  castle_final_kills_bedwars?: number
  selected_ultimate?: string
  eight_one_ultimate_winstreak?: number
  eight_one_ultimate_final_kills_bedwars?: number
  eight_one_ultimate_entity_attack_final_kills_bedwars?: number
  eight_one_ultimate_games_played_bedwars?: number
  eight_one_ultimate_emerald_resources_collected_bedwars?: number
  eight_one_ultimate_diamond_resources_collected_bedwars?: number
  eight_one_ultimate_items_purchased_bedwars?: number
  eight_one_ultimate_beds_broken_bedwars?: number
  "eight_one_ultimate_permanent _items_purchased_bedwars"?: number
  eight_one_ultimate_iron_resources_collected_bedwars?: number
  eight_one_ultimate__items_purchased_bedwars?: number
  eight_one_ultimate_wins_bedwars?: number
  eight_one_ultimate_resources_collected_bedwars?: number
  eight_one_ultimate_gold_resources_collected_bedwars?: number
  lastTourneyAd?: number
  lastHytaleAd?: number
  four_three_winstreak?: number
  four_four_winstreak?: number
  activeKillMessages?: string
  activeBedDestroy?: string
  four_four_fall_deaths_bedwars?: number
  0?: number
  1?: number
}
interface MurderMystery {
  mm_christmas_chests: number
  coins: number
  MurderMystery_openedChests: number
  chest_history_new: string[]
  MurderMystery_openedRares: number
  MurderMystery_openedCommons: number
  MurderMystery_openedLegendaries: number
  MurderMystery_openedEpics: number
  active_knife_skin: string
  active_last_words: string
  shop_sort: string
  shop_sort_enable_owned_first: boolean
  active_kill_note: string
  murdermystery_books: string[]
  wasSpecialRoleLastGame: boolean
  detective_chance: number
  murderer_chance: number
  "quickjoin_uses_Gold Rush": number
  quickjoin_uses_total: number
}
interface Duels {
  games_played_duels?: number
  duels_winstreak_best_uhc_four?: number
  rematch_option_1?: string
  kit_menu_option?: string
  mw_duels_class?: string
  duels_winstreak_best_mw_four?: number
  sw_duels_kit?: string
  show_lb_option?: string
  duels_winstreak_best_sw_duel?: number
  duels_winstreak_best_sw_doubles?: number
  duels_recently_played?: string
  combo_duel_melee_hits?: number
  melee_swings?: number
  combo_duel_wins?: number
  melee_hits?: number
  wins?: number
  combo_duel_rounds_played?: number
  combo_duel_health_regenerated?: number
  rounds_played?: number
  combo_duel_damage_dealt?: number
  kills?: number
  combo_duel_melee_swings?: number
  combo_duel_kills?: number
  health_regenerated?: number
  damage_dealt?: number
  sw_doubles_melee_swings?: number
  losses?: number
  sw_doubles_health_regenerated?: number
  sw_doubles_deaths?: number
  sw_doubles_melee_hits?: number
  deaths?: number
  sw_doubles_rounds_played?: number
  sw_doubles_losses?: number
  sw_doubles_damage_dealt?: number
  sw_doubles_kills?: number
  sw_doubles_wins?: number
  sw_tournament_health_regenerated?: number
  sw_tournament_rounds_played?: number
  sw_tournament_melee_hits?: number
  sw_tournament_damage_dealt?: number
  sw_tournament_melee_swings?: number
  selected_1?: string
  selected_2?: string
  sw_tournament_kills?: number
  sw_tournament_deaths?: number
  sw_tournament_bow_shots?: number
  bow_shots?: number
  blitz_duels_kit?: string
  current_winstreak?: number
  current_blitz_winstreak?: number
  blitz_duel_melee_swings?: number
  blitz_duel_damage_dealt?: number
  blitz_duel_melee_hits?: number
  blitz_duel_losses?: number
  blitz_duel_rounds_played?: number
  blitz_duel_health_regenerated?: number
  blitz_duel_deaths?: number
  best_overall_winstreak?: number
  best_blitz_winstreak?: number
  blitz_duel_bow_shots?: number
  blitz_duel_wins?: number
  blitz_duel_kills?: number
  bow_hits?: number
  blitz_duel_bow_hits?: number
  duels_winstreak_best_blitz_duel?: number
  current_skywars_winstreak?: number
  best_skywars_winstreak?: number
  sw_duel_kit_wins?: number
  scout_kit_wins?: number
  sw_duel_scout_kit_wins?: number
  sw_duel_health_regenerated?: number
  sw_duel_kills?: number
  kit_wins?: number
  sw_duel_damage_dealt?: number
  sw_duel_rounds_played?: number
  sw_duel_melee_hits?: number
  sw_duel_melee_swings?: number
  sw_duel_wins?: number
  sw_duel_losses?: number
  sw_duel_deaths?: number
  chat_enabled?: string
  uhc_duel_health_regenerated?: number
  uhc_duel_rounds_played?: number
  uhc_duel_damage_dealt?: number
  uhc_duel_melee_swings?: number
  uhc_duel_melee_hits?: number
  uhc_duel_bow_shots?: number
  uhc_duel_bow_hits?: number
  best_no_debuff_winstreak?: number
  current_no_debuff_winstreak?: number
  duels_winstreak_best_potion_duel?: number
  coins?: number
  potion_duel_rounds_played?: number
  potion_duel_melee_hits?: number
  potion_duel_health_regenerated?: number
  potion_duel_heal_pots_used?: number
  potion_duel_kills?: number
  potion_duel_wins?: number
  potion_duel_melee_swings?: number
  potion_duel_damage_dealt?: number
  heal_pots_used?: number
  potion_duel_deaths?: number
  potion_duel_losses?: number
  sw_duels_kit_new?: string
  sw_duel_armorer_kit_wins?: number
  armorer_kit_wins?: number
  sw_tournament_losses?: number
  sw_duel_bow_hits?: number
  sw_duel_bow_shots?: number
  sw_tournament_bow_hits?: number
  sw_tournament_wins?: number
  sumo_tournament_rounds_played?: number
  sumo_tournament_melee_hits?: number
  sumo_tournament_melee_swings?: number
  sumo_tournament_losses?: number
  bowspleef_duel_rounds_played?: number
  op_duel_health_regenerated?: number
  op_duel_damage_dealt?: number
  op_duel_rounds_played?: number
  op_duel_melee_swings?: number
  op_duel_melee_hits?: number
  classic_duel_rounds_played?: number
  classic_duel_melee_hits?: number
  classic_duel_health_regenerated?: number
  classic_duel_damage_dealt?: number
  classic_duel_bow_shots?: number
  classic_duel_melee_swings?: number
  selected_2_new?: string
  selected_1_new?: string
  sumo_duel_melee_swings?: number
  sumo_duel_rounds_played?: number
  sumo_duel_melee_hits?: number
  bridge_four_goals?: number
  bridge_doubles_wins?: number
  bridge_four_wins?: number
  bridge_duel_wins?: number
  bridge_duel_deaths?: number
  bridge_doubles_deaths?: number
  bridge_four_deaths?: number
  goals?: number
  bridge_duel_goals?: number
  bridge_doubles_goals?: number
  bridge_2v2v2v2_wins?: number
  bridge_four_rounds_played?: number
  bridge_four_kills?: number
  bridge_2v2v2v2_losses?: number
  bridge_2v2v2v2_rounds_played?: number
  bridge_doubles_rounds_played?: number
  bridge_doubles_kills?: number
  bridge_duel_kills?: number
  bridge_2v2v2v2_goals?: number
  bridge_four_losses?: number
  bridge_2v2v2v2_kills?: number
  bridge_duel_losses?: number
  bridge_2v2v2v2_deaths?: number
  bridge_duel_rounds_played?: number
  tnt_games_rookie_title_prestige?: number
  uhc_rookie_title_prestige?: number
  tournament_rookie_title_prestige?: number
  bridge_rookie_title_prestige?: number
  combo_rookie_title_prestige?: number
  all_modes_rookie_title_prestige?: number
  skywars_rookie_title_prestige?: number
  sumo_rookie_title_prestige?: number
  mega_walls_rookie_title_prestige?: number
  op_rookie_title_prestige?: number
  classic_rookie_title_prestige?: number
  bow_rookie_title_prestige?: number
  no_debuff_rookie_title_prestige?: number
  blitz_rookie_title_prestige?: number
  current_bridge_winstreak?: number
  best_bridge_winstreak?: number
  current_winstreak_mode_bridge_duel?: number
  best_winstreak_mode_bridge_duel?: number
  bridgeMapWins?: string[]
  maps_won_on?: string[]
  bridge_duel_health_regenerated?: number
  bridge_duel_damage_dealt?: number
  bridge_duel_melee_swings?: number
  bridge_duel_bow_hits?: number
  blocks_placed?: number
  bridge_duel_bridge_deaths?: number
  bridge_duel_bridge_kills?: number
  bridge_duel_melee_hits?: number
  bridge_duel_blocks_placed?: number
  bridge_kills?: number
  bridge_deaths?: number
  bridge_duel_bow_shots?: number
  duels_winstreak_best_bridge_duel?: number
  0?: number
  1?: number
  2?: number
}
interface Legacy {
  next_tokens_seconds: number
  paintball_tokens: number
  total_tokens: number
  tokens: number
}
interface Eugene {
  dailyTwoKExp: number
}
interface Voting {
  total_pmc: number
  total: number
  secondary_pmc: number
  last_pmc: number
  votesToday: number
  secondary_mcipl: number
  total_mcipl: number
  last_mcipl: number
  last_vote: number
  total_mcsorg: number
  secondary_mcsorg: number
  last_mcsorg: number
  secondary_mcsl: number
  total_mcsl: number
  last_mcsl: number
  total_mcmp: number
  secondary_mcmp: number
  last_mcmp: number
  total_topg: number
  secondary_topg: number
  last_topg: number
  total_minestatus: number
  secondary_minestatus: number
  last_minestatus: number
  total_mcf: number
  secondary_mcf: number
  last_mcf: number
}
interface PetConsumables {
  MUSHROOM_SOUP: number
  HAY_BLOCK: number
  FEATHER: number
  BREAD: number
  CAKE: number
  COOKED_BEEF: number
  WATER_BUCKET: number
  WOOD_SWORD: number
  STICK: number
  MILK_BUCKET: number
  LEASH: number
  LAVA_BUCKET: number
  MAGMA_CREAM: number
  SLIME_BALL: number
  RAW_FISH: number
  MELON: number
  PORK: number
  PUMPKIN_PIE: number
  BONE: number
  CARROT_ITEM: number
  GOLD_RECORD: number
  APPLE: number
  WHEAT: number
  COOKIE: number
  BAKED_POTATO: number
  RED_ROSE: number
  ROTTEN_FLESH: number
}
interface PetStats {
  HORSE_WHITE: HORSE_WHITE
  RED_HELPER: RED_HELPER
  ENDERMITE: ENDERMITE
  GREEN_HELPER: GREEN_HELPER
  ENDERMAN: ENDERMAN
}
interface HORSE_WHITE {
  HUNGER: HUNGER
  THIRST: THIRST
  EXERCISE: EXERCISE
}
interface HUNGER {
  value: number
  timestamp: number
}
interface THIRST {
  timestamp: number
  value: number
}
interface EXERCISE {
  timestamp: number
  value: number
}
interface RED_HELPER {
  HUNGER: HUNGER
  EXERCISE: EXERCISE
  THIRST: THIRST
}
interface ENDERMITE {
  HUNGER: HUNGER
  THIRST: THIRST
  EXERCISE: EXERCISE
  name: string
  experience: number
}
interface GREEN_HELPER {
  HUNGER: HUNGER
  EXERCISE: EXERCISE
  THIRST: THIRST
  experience: number
}
interface ENDERMAN {
  name: string
}
interface Outfit {
  BOOTS: string
  LEGGINGS: string
  CHESTPLATE: string
  HELMET: string
}
interface SocialMedia {
  TWITTER: string
  links: Links
  prompt: boolean
}
interface Links {
  TWITTER: string
  DISCORD: string
  HYPIXEL: string
  YOUTUBE: string
}
interface GiftingMeta {
  giftsGiven: number
  bundlesGiven: number
  realBundlesGiven: number
  milestones: string[]
  realBundlesReceived: number
  bundlesReceived: number
}
interface Challenges {
  all_time: All_time
}
interface All_time {
  SKYWARS__feeding_the_void_challenge: number
  SKYWARS__rush_challenge: number
  BEDWARS__support: number
  BEDWARS__offensive: number
  SKYWARS__enderman_challenge: number
  PAINTBALL__finish_challenge: number
  TNTGAMES__pvp_run_challenge: number
  TNTGAMES__tnt_tag_challenge: number
  DUELS__feed_the_void_challenge: number
  SPEED_UHC__alchemist_challenge: number
  SPEED_UHC__wizard_challenge: number
  SPEED_UHC__nether_challenge: number
  SKYWARS__ranked_challenge: number
  MCGO__killing_spree_challenge: number
  MCGO__knife_challenge: number
}
interface SkywarsAug2017 {
  0: number
  1: number
}
interface Update_books {
  global: string
  SALE: string
}
interface Update_book_delays {
  SALE: number
}
interface Halloween2018Cooldowns {
  VIP1: boolean
  VIP0: boolean
  MVP0: boolean
  VIP_PLUS0: boolean
  NORMAL1: boolean
  MVP_PLUS0: boolean
  NORMAL0: boolean
  MVP1: boolean
  VIP_PLUS1: boolean
  MVP_PLUS1: boolean
  NORMAL2: boolean
  MVP_PLUS2: boolean
  NORMAL3: boolean
  VIP_PLUS2: boolean
  VIP_PLUS3: boolean
  MVP2: boolean
  VIP2: boolean
  VIP3: boolean
  MVP_PLUS3: boolean
  MVP3: boolean
}
interface AdventRewards_v2_2018 {
  day1: number
  day2: number
  day4: number
  day15: number
  day16: number
  day17: number
  day19: number
  day21: number
  day22: number
  day23: number
  day24: number
  day25: number
}
interface Summer2019Cooldowns {
  VIP0: boolean
  NORMAL0: boolean
  VIP_PLUS0: boolean
  MVP_PLUS0: boolean
  MVP0: boolean
}
interface CustomRating {
  QUAKECRAFT: number
  WALLS: number
  PAINTBALL: number
  SURVIVAL_GAMES: number
  WALLS3: number
  MCGO: number
  UHC: number
  BATTLEGROUND: number
  SUPER_SMASH: number
  SKYWARS: number
  TRUE_COMBAT: number
  SKYCLASH: number
  SPEED_UHC: number
  BEDWARS: number
  MURDER_MYSTERY: number
}

export interface Player {
  _id: string
  clock: boolean
  displayname: string
  firstLogin: number
  karma: number
  knownAliases: string[]
  knownAliasesLower: string[]
  lastLogin: number
  mostRecentMinecraftVersion: number
  mostRecentlyThanked: string
  mostRecentlyThankedUuid: string
  mostRecentlyTippedUuid: string
  networkExp: number
  newClock: string
  playername: string
  quests: Quests
  settings: Settings
  stats: Stats
  thanksSent: number
  timePlaying: number
  uuid: string
  websiteSet: boolean
  lastEugeneMessage: number
  particleQuality: string
  vanityTokens: number
  eugene: Eugene
  voting: Voting
  mcVersionRp: string
  petConsumables: PetConsumables
  petStats: PetStats
  newMainTutorial: boolean
  outfit: Outfit
  totalRewards: number
  totalDailyRewards: number
  rewardStreak: number
  rewardScore: number
  rewardHighScore: number
  newPackageRank: string
  levelUp_VIP: number
  beamLink: boolean
  gifts_grinch: number
  quickjoin_uses: number
  socialMedia: SocialMedia
  lastLogout: number
  currentPet: string
  currentCloak: string
  network_update_book: string
  giftingMeta?: GiftingMeta
  main2017Tutorial: boolean
  completed_christmas_quests_2017: number
  channel: string
  levelUp_MVP_PLUS: number
  rankPlusColor: string
  completed_christmas_quests_2018: number
  challenges: Challenges
  vanityFavorites: string
  parkourCheckpointBests: {
    SkywarsAug2017: SkywarsAug2017
    Duels: Duels
    Bedwars: Bedwars
  }
  monthlyPackageRank: string
  mostRecentMonthlyPackageRank: string
  summer2018Cooldowns: {
    NORMAL0: boolean
    VIP0: boolean
    MVP_PLUS0: boolean
    VIP_PLUS0: boolean
    MVP0: boolean
    SUPERSTAR0: boolean
    NORMAL1: boolean
    VIP1: boolean
    VIP_PLUS1: boolean
    MVP1: boolean
    SUPERSTAR1: boolean
    MVP_PLUS1: boolean
    VIP2: boolean
    NORMAL2: boolean
    VIP_PLUS2: boolean
    MVP2: boolean
    SUPERSTAR2: boolean
    MVP_PLUS2: boolean
    NORMAL3: boolean
    VIP3: boolean
    MVP3: boolean
    VIP_PLUS3: boolean
    MVP_PLUS3: boolean
  }
  fortuneBuff: number
  particlePack: string
  update_books: Update_books
  achievementPoints?: number
  update_book_delays: Update_book_delays
  halloween2018Cooldowns: Halloween2018Cooldowns
  adventRewards_v2_2018: AdventRewards_v2_2018
  xmas2018_MAIN_LOBBY_4: boolean
  xmas2018_MAIN_LOBBY_6: boolean
  xmas2018_MAIN_LOBBY_10: boolean
  xmas2018_MAIN_LOBBY_9: boolean
  xmas2018_MAIN_LOBBY_30: boolean
  xmas2018_MAIN_LOBBY_19: boolean
  xmas2018_MAIN_LOBBY_29: boolean
  xmas2018_MAIN_LOBBY_28: boolean
  xmas2018_MAIN_LOBBY_32: boolean
  xmas2018_MAIN_LOBBY_33: boolean
  xmas2018_MAIN_LOBBY_36: boolean
  xmas2018_MAIN_LOBBY_35: boolean
  xmas2018_MAIN_LOBBY_39: boolean
  xmas2018_MAIN_LOBBY_7: boolean
  xmas2018_MAIN_LOBBY_2: boolean
  xmas2018_SKYWARS_1: boolean
  xmas2018_SKYWARS_3: boolean
  xmas2018_SKYWARS_2: boolean
  lastHytaleAd: number
  currentGadget: string
  completed_christmas_quests_2019: number
  currentClickEffect: string
  mostRecentGameType: "SKYWARS"
  summer2019Cooldowns: Summer2019Cooldowns
  rank_for_mod: string
  questNumber: number
  kills: number
  wins: number
  coins: number
  points: number
  friends: number
  networkLevel: number
  oldLevel: number
  bedwarsLevel: number
  bw_level: number
  sw_level: number
  sw_level_mult: number
  uhcScore: number
  customRating: CustomRating
  display: string
}

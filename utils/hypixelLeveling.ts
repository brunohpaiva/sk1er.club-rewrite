const BASE = 10000
const GROWTH = 2500
const HALF_GROWTH = GROWTH * 0.5
const REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH
const REVERSE_CONST = REVERSE_PQ_PREFIX * REVERSE_PQ_PREFIX
const GROWTH_DIVIDES_2 = 2 / GROWTH

function getLevel(exp: number) {
  return exp < 0
    ? 1
    : Math.floor(
        1 +
          REVERSE_PQ_PREFIX +
          Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * exp)
      )
}

function getExactLevel(exp: number) {
  return getLevel(exp) + getPercentageToNextLevel(exp)
}

function getExpFromLevelToNext(level: number) {
  return level < 1 ? BASE : GROWTH * (level - 1) + BASE
}

function getTotalExpToLevel(level: number) {
  const lv = Math.floor(level)
  const totalExpToFullLevel = getTotalExpToFullLevel(lv)

  return level == lv
    ? totalExpToFullLevel
    : (getTotalExpToFullLevel(lv + 1) - totalExpToFullLevel) * (level % 1) +
        totalExpToFullLevel
}

function getTotalExpToFullLevel(level: number) {
  return (HALF_GROWTH * (level - 2) + BASE) * (level - 1)
}

function getPercentageToNextLevel(exp: number) {
  const level = getLevel(exp)
  const totalExpToLevel = getTotalExpToLevel(level)
  return (
    (exp - totalExpToLevel) / (getTotalExpToLevel(level + 1) - totalExpToLevel)
  )
}

export {
  getLevel,
  getExactLevel,
  getExpFromLevelToNext,
  getTotalExpToLevel,
  getTotalExpToFullLevel,
  getPercentageToNextLevel,
}

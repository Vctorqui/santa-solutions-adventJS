function createFrame(names) {
  const maxWordLength = Math.max(...names.map((name) => name.length))
  const frameWidth = maxWordLength + 4
  const borderLine = '*'.repeat(frameWidth)
  const frameNames = names.map((name) => `* ${name.padEnd(maxWordLength)} *`)
  return [borderLine, ...frameNames, borderLine].join('\n')
}

const frame1 = ['midu', 'madeval', 'educalvolpz']
const createFrame1 = createFrame(frame1)
console.log(createFrame1)

const frame2 = ['midu']
const createFrame2 = createFrame(frame2)
console.log(createFrame2)

const frame3 = ['a', 'bb', 'ccc']
const createFrame3 = createFrame(frame3)
console.log(createFrame3)

const frame4 = ['a', 'bb', 'ccc', 'dddd']
const createFrame4 = createFrame(frame4)
console.log(createFrame4)

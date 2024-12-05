function createFrame(names) {
  const maxWordLength = Math.max(...names.map((name) => name.length))
  const frameWidth = maxWordLength + 4
  const borderLine = '*'.repeat(frameWidth)
  const frameNames = names.map((name) => `* ${name.padEnd(maxWordLength)} *`)
  return [borderLine, ...frameNames, borderLine].join('\n')
}

createFrame(['midu', 'madeval', 'educalvolpz'])

createFrame(['midu'])

createFrame(['a', 'bb', 'ccc'])

createFrame(['a', 'bb', 'ccc', 'dddd'])

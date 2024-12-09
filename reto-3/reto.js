const organizeInventory = (inventory) => {
  const groupedByCategory = {}
  for (const gift of inventory) {
    const category = gift.category
    const name = gift.name
    const quantity = gift.quantity

    if (!groupedByCategory[category]) {
      groupedByCategory[category] = { [name]: quantity }
    } else {
      if (!groupedByCategory[category][name]) {
        groupedByCategory[category][name] = quantity
      } else {
        groupedByCategory[category][name] =
          quantity + groupedByCategory[category][name]
      }
    }
  }

  return groupedByCategory
}

const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' },
]

const result = organizeInventory(inventory)
console.log(result)

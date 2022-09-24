


const uniqueItem = (items, propNames) => {
    const unique = Array.from(new Set(items.map(a => a.name)))
        .map(name => {
            return items.find(a => a.name === name)
        })

    return unique
}

export default uniqueItem
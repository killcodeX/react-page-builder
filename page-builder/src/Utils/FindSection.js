// function to find section and add layer into it

export let findSection = (page, id, layer) => {
  return page.map((section) => {
    if (section.id === id) {
      section.layer.push(layer)
    } else if (section.layers) {
      section.layers = findSection(section.layers);
    }
    return section;
  });
}
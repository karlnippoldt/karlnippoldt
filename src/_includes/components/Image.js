module.exports = ({ src, alt = '', classStr} = {}) => (`
  <img${ classStr ? ` class="${ classStr }"` : ``} src="${ src }" alt="${ alt }">
`);
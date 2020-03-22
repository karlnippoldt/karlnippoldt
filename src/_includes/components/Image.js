module.exports = function({ src, alt = '', width, cols, classStr, no2x = false } = {}) {
  if (src.endsWith('.svg')) {
    const imgUrl = `https://res.cloudinary.com/karlnippoldt/image/upload/${src}`;
    return `<img src="${imgUrl}" loading="lazy" class="img-fluid ${ classStr ? ` ${ classStr }` : ``}" alt="${ alt }">`;
  } else if (!width) {
    const fullSize = `https://res.cloudinary.com/karlnippoldt/image/upload/q_auto,f_auto/${src}`;
    return `<img src="${fullSize}" loading="lazy" class="img-fluid ${ classStr ? ` ${ classStr }` : ``}"${ width ? ` width="${ width }"` : ``} alt="${ alt }">`;
  } else {
    const widths = [ 320, 640, 960, 1280, 1600, 1920, 2240, 2560 ];
    const srcsetWidths = widths.filter(number => (number - 320) <= width );
    const fallback = no2x ? `https://res.cloudinary.com/karlnippoldt/image/upload/q_auto,f_auto/${src}`: `https://res.cloudinary.com/karlnippoldt/image/upload/q_auto,f_auto,w_0.5/${src}`;
    const baseUrl = `https://res.cloudinary.com/karlnippoldt/image/upload`;
    const srcset = srcsetWidths.map(w => {
      return `${ baseUrl }/q_auto,f_auto,w_${w}/${src} ${w}w`;
    }).join(', ');
    return `<img src="${ fallback }" srcset="${ srcset }" loading="lazy"${cols ? ` sizes="(min-width: 768px) ${ Math.round(100/cols) }vw, 100vw"` : ``} class="img-fluid ${ classStr ? ` ${ classStr }` : ``}"${ width ? ` width="${ no2x ? width : Math.round(width / 2) }"` : ``} alt="${ alt }">`;
  }
}
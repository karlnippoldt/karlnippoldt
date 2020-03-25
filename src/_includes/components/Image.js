module.exports = function({ src, alt = '', width, cols, classStr, no2x = false } = {}) {
  if (src.endsWith('.svg')) {
    const imgUrl = `https://res.cloudinary.com/karlnippoldt/image/upload/${src}`;
    return `<img src="${imgUrl}" class="img-fluid ${ classStr ? ` ${ classStr }` : ``}"${ width ? ` width="${ width }"` : ``} alt="${ alt }">`;
  } else if (!width) {
    const fullSize = `https://res.cloudinary.com/karlnippoldt/image/upload/q_auto,f_auto/${src}`;
    return `<img src="${fullSize}" class="img-fluid ${ classStr ? ` ${ classStr }` : ``}"${ width ? ` width="${ width }"` : ``} alt="${ alt }">`;
  } else {
    const widths = [ 320, 640, 960, 1280, 1600, 1920, 2240, 2560 ];
    const srcsetWidths = widths.filter(number => number <= width );
    const baseUrl = `https://res.cloudinary.com/karlnippoldt/image/upload`;
    const fallback = no2x ? `${ baseUrl }/q_auto,f_auto/${ src }`: `${ baseUrl }/q_auto,f_auto,w_0.5/${src}`;
    const srcset = srcsetWidths.map(w => {
      return `${ baseUrl }/q_auto,f_auto,w_${w}/${src} ${w}w`;
    }).concat(`${ baseUrl }/q_auto,f_auto/${src} ${width}w`).join(', ');
    return `<img src="${ fallback }" srcset="${ srcset }"${cols ? ` sizes="(min-width: 768px) ${ Math.round(100/cols) }vw, 100vw"` : ``} class="img-fluid ${ classStr ? ` ${ classStr }` : ``}"${ width ? ` width="${ no2x ? width : Math.round(width / 2) }"` : ``} alt="${ alt }">`;
  }
}
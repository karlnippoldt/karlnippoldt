const Image = require('./Image.js');

module.exports = function({ imagesSrc, imagesAltText, imagesWidth, id, no2x = false, border = false, caption = false } = {}) {
    var imageCode = "";
    for (let index = 0; index < imagesSrc.length; index++) {
        const src = imagesSrc[index];
        const altText = imagesAltText[index];
        var width;
        if (imagesWidth) {width = imagesWidth[index];}
        imageCode += `
<div class="col-md image-margins text-center">
    <figure class="figure my-0">
        <a${ id ? ` data-fancybox="${ id }"` : ``} data-caption="${ altText }" href="https://res.cloudinary.com/karlnippoldt/image/upload/q_auto,f_auto/${ src }">
            ${ Image({
                src: src,
                alt: altText,
                classStr: `figure-img ${ border ? ` img-thumbnail` : ``}`,
                width: width,
                cols: imagesSrc.length,
                no2x: no2x
            })}
        </a>
        ${ caption ? `<figcaption class="figure-caption text-center">${ altText }</figcaption>` : ``}
    </figure>
</div>`
    }
    return`
<div class="section section-wide">
    <div class="row align-items-center">
        ${ imageCode }
    </div>
</div>`};
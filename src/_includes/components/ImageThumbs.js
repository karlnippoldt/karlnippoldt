module.exports = function({ imagesSrc, imagesAltText, imagesWidth, id, border = false, caption = false } = {}) {
    var imageCode = "";
    for (let index = 0; index < imagesSrc.length; index++) {
        const src = imagesSrc[index];
        const altText = imagesAltText[index];
        var width;
        if (imagesWidth) {width = imagesWidth[index];}
        imageCode += `
<div class="col-md image-margins text-center">
    <figure class="figure my-0">
        <a${ id ? ` data-fancybox="${ id }"` : ``} data-caption="${ altText }"${ imagesWidth ? ` data-width="${ width }"` : ``} href="${ src }">
            <img class="figure-img img-fluid${ border ? ` img-thumbnail` : ``}" src="${ src }"${ imagesWidth ? ` width="${ width }"` : ``} alt="${ caption ? `` : ` ${ altText }`}">
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
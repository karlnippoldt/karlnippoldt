const Button = require('./Button.js');
const Image = require('./Image.js');

module.exports = function({ title, url="", dateString, role, skills, description, thumbnail, thumbnailAlt, link = false } = {}) {
    var tagsCode = "";
    skills.forEach(skill => {
        tagsCode += `<li>${ skill }</li>`;
    });
    
    return `
<div class="section-tall section-wide">
    <div class="row align-items-center">
        <div class="col-md-7 col-lg-8">
            <div>
                ${ link ? `<a href="${ url }"><h1>${ title }</h1></a>`: `<h1>${ title }</h1>`}
                <p class="emphasized">
                    ${ role ? `<span class="line">${ role }<span class="gray">&nbsp;/&nbsp;</span></span>` : ``}<span class="line">${ dateString }</span>
                </p>
                <ul class="tags">${ tagsCode }</ul>
                <p${ link ? `` : ` class="lead"`}>${ description }</p>
                ${ link ? Button({
                    text: "More about this project",
                    icon: "feather:chevron-right",
                    href: url
                }) : ``}
            </div>
        </div>
        <div class="col-md-5 col-lg-4 image-margins order-first order-md-last">
            ${ link ? `<a href="${ url }">${ Image({
                src: thumbnail,
                alt: thumbnailAlt,
                width: 900,
                cols: 3
            }) }</a>` : Image({
                src: thumbnail,
                alt: thumbnailAlt,
                width: 900,
                cols: 3
            })}
        </div>
    </div>
</div>`};
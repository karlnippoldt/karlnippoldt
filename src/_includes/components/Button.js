module.exports = function({ text, icon, href, submit = false, buttonType = "secondary", large = false, newWindow = false } = {}) {
  var className = "";
  switch (buttonType) {
    case "primary":
      className = " btn-primary";
      break;
    case "secondary":
      className = " btn-secondary";
  }
  if (href) {
    return `
    <a class="btn${ large ? ` btn-lg` : ``} ${ className }" href="${ href }"${ newWindow ? ` target="_blank"`: ``}>${ text } ${ icon ? `<span class="iconify" data-icon="${ icon }"></span>`: `` }</a>`
  } else {
    return `
    <button type="${ submit ? `submit` : `button`}" class="btn${ large ? ` btn-lg` : ``} ${ className }">${ text } ${ icon ? `<span class="iconify" data-icon="${ icon }"></span>`: `` }</button>`
  }
};
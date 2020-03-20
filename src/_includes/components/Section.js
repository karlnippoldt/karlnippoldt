module.exports = (content = '', {tall = false, classStr, id} = {}) => (`
<div class="${ tall ? `section-tall` : `section`}${ classStr ? ` ${ classStr }` : ``}"${ id ? `id=${ id }` : ``}>
  ${ content }
</div>
`);
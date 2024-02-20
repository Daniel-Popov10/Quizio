export function configUserNav(navTemplate) {
  return function (ctx, next) {
    ctx.renderNav(navTemplate());
    next();
  };
}
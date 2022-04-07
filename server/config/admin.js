module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9bcd29b0cc728276c275e6676ce5072a'),
  },
});

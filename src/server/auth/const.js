const ssoEndpoints = {
  dv: 'https://securesso-dv.tsl.enterprise.com/opensso/SSOPOST/metaAlias/users/idp',
  at: 'https://securesso-at.tsl.enterprise.com/opensso/SSOPOST/metaAlias/users/idp',
  pt148: 'https://securesso-pt148.tsl.enterprise.com/opensso/SSOPOST/metaAlias/users/idp',
  pt168: 'https://securesso-pt168.tsl.enterprise.com/opensso/SSOPOST/metaAlias/users/idp',
  st: 'https://securesso-st.tsl.enterprise.com/opensso/SSOPOST/metaAlias/users/idp',
  pr: '', // don't know these endpoints, populate later...
  tr: '',
  ps: '',
};
const loginPathDefault = '/login';
const failPathDefault = '/login/fail';
const logoutPathDefault = '/logout';
const homePathDefault = '/';
module.exports = { ssoEndpoints, loginPathDefault, failPathDefault, homePathDefault, logoutPathDefault };

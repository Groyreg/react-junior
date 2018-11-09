import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST } from './constants'

export function handleLogin() {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
    })

    //eslint-disable-next-line no-undef
    VK.Auth.login(r => {
      if (r.session) {
        let username = r.session.user.first_name + ' ' + r.session.user.last_name

        dispatch({
          type: LOGIN_SUCCESS,
          payload: username,
        })
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    }, 4) // запрос прав на доступ к photo
  }
}

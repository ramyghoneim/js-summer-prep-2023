function validUsername(username) {
  if ((username.length > 2 && username.length < 11) && ((/[a-zA-Z]/).test(username.charAt(0))) &&
    !((/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/).test(username))) {
    return true
  }
  else {
    return false
  }
}
function validPassword(password) {
  const length = password.length;

  if (length < 10 || length > 64) {
    return false;
  }

  let hasLetter = false;
  let hasNumber = false;
  let hasSpecialCharacter = false;

  for (let i = 0; i < length; i++) {
    const char = password[i];

    if (/[a-zA-Z]/.test(char)) {
      hasLetter = true;
    } else if (/[0-9]/.test(char)) {
      hasNumber = true;
    } else if ('`!@#$%^&*()_\-+=[]{};:\'"\\|,.<>/?~ '.includes(char)) {
      hasSpecialCharacter = true;
    }
  }

  return hasLetter && hasNumber && hasSpecialCharacter;
}

module.exports = { validUsername, validPassword };

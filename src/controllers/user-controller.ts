import UserAPI from '../api/user-api';

export default class UserController {
  public getUserDatById() {
    new UserAPI().getUserById(JSON.parse(localStorage.getItem('userId'))).then((result: any) => {
      if (result.status === 200) {
        localStorage.setItem('userData', JSON.stringify(JSON.parse(result.response)));
      } else {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public searchUserByLogin(login: string) {
    new UserAPI().searchUser({ login }).then((result: any) => {
      if (result.status === 200) {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public changeUserProfileFields(data: JSON, formData, input) {
    if (data.newPassword && data.newPassword !== JSON.parse(localStorage.getItem('userData')).password) {
      new UserAPI().changeUserPassword({
        oldPassword: JSON.parse(localStorage.getItem('userData')).password ?? '',
        newPassword: data.newPassword,
      }).then((result: any) => {
        if (result.status === 200) {
          localStorage.setItem('userData', JSON.stringify(JSON.parse(result.response)));
        } else {
          console.log(result.response);
        }
      }).catch((err) => console.log(err));
    }
    formData.forEach((value, key) => {
      if (key === 'avatar' && value && value.name) {
        new UserAPI().changeUserAvatar(input.files[0]).then((result: any) => {
          if (result.status === 200) {
            localStorage.setItem('userData', JSON.stringify(JSON.parse(result.response)));
          } else {
            console.log(result);
          }
        }).catch((err) => console.log(err));
      }
    });
    new UserAPI().changeUserProfile({
      first_name: data.first_name,
      second_name: data.second_name,
      display_name: data.display_name,
      login: data.login,
      email: data.email,
      phone: data.phone,
    }).then((result: any) => {
      if (result.status === 200) {
        localStorage.setItem('userData', JSON.stringify(JSON.parse(result.response)));
      } else {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }
}

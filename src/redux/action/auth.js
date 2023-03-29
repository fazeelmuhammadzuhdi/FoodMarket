import axios from 'axios';
import {setLoading} from '../../redux/action';
import {showMessage} from '../../utils';
import {storeData} from '../../utils/storage';

const API_HOST = {
  url: 'http://foodmarket-backend.buildwithangga.id/api',
};

export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    axios
      .post(`${API_HOST.url}/register`, dataRegister)
      .then(res => {
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        const profile = res.data.data.user;
        // console.log('data success :', res.data);

        storeData('userProfile', profile);
        storeData('token', {value: token});

        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);

          axios
            .post(`${API_HOST.url}/user/photo`, photoForUpload, {
              headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data',
              },
            })
            .then(resUpload => {
              //   profile.profile_photo_url = `${API_HOST.storage}/${resUpload.data.data[0]}`;
              profile.profile_photo_url = `http://foodmarket-backend.buildwithangga.id/storage/${resUpload.data.data[0]}`;
              storeData('userProfile', profile);
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
            })
            // eslint-disable-next-line handle-callback-err
            .catch(err => {
              showMessage('Upload photo failed');
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
            });
        }

        dispatch(setLoading(false));
        navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      })
      .catch(err => {
        // console.log('sign up error :', err.response.data.message);
        dispatch(setLoading(false));
        showMessage(err?.response?.data?.message);
      });
  };

import { modifyInfo } from '../../../hooks/useStudent';
import get_user_info from "../../info/services/info_data_process";

export const change_user_info = async (user, token) => {
  return modifyInfo(user, token)
};

export const Get_user_info = async (token) => {
  return get_user_info(token)  // reuse the function in info module
};

export const createUserObject = (userId, userInfo) => {
  return {
    user_id: userId,
    ho_ten: userInfo.name,
    so_dien_thoai: userInfo.phoneNumber,
    ngay_sinh: new Date(userInfo.birthDate).toISOString(), // Chuyển đổi định dạng ngày tháng về ISO
    dia_chi: userInfo.location
  };
};

export const mm_dd_to_yy_mm = (date) => { // DEPRECATED
  const parts = date.split('/');
  const month = parts[0];
  const day = parts[1];
  const year = parts[2];
  return `${year}-${month}-${day}`;
}
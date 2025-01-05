import { instance } from "@/util";

const itemApi = {
  getAll(data) {
    const url = "item";
    return instance.get(url, data);
  },
  getById(data) {
    const url = `user/sale/item?_id=${data._id}&getArtistId=${data.getArtistId}`;
    return instance.get(url);
  },
  getWithCategory(_id) {
    const url = `item/Category?_id=${_id}`;
    return instance.get(url);
  },
  add(data) {
    const url = "user/sale/item";
    return instance.post(url, data);
  },
  update(data) {
    const url = `user/sale/item`;
    return instance.put(url, data);
  },
  delete(data) {
    const url = `user/sale/item`;
    return instance.delete(url, data);
  },
};
export default itemApi;

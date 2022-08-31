import { FAKE_JOB_LIST } from "./job";
const getAll = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FAKE_JOB_LIST);
    }, 250);
  });
};

export default {
  getAll,
};

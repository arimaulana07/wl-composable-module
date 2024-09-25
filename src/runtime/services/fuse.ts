import Fuse from "fuse.js";

interface FuseParams {
  list: any;
  keys: any;
}

const fuse = ({ list, keys }: FuseParams) => {
  const options = {
    keys,
    treshold: 0.4,
  };

  const fuse =  new Fuse(list, options);
  return fuse;
}

export default fuse;
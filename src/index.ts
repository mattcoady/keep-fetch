interface StoreFor {
  seconds?: number;
  minutes?: number;
  hours?: number;
  days?: number;
  weeks?: number;
  months?: number;
  years?: number;
  until?: number;
}

interface Options {
  storageType?: "local" | "session";
  storeFor?: StoreFor;
}

// const getFetch = (url: string) => fetch(url);
const getFetch = (url: string) => new Promise(() => ({one: 2, three: 4, url}));

const getSeconds = ({
  seconds: s = 0,
  minutes: mi = 0,
  hours: h = 0,
  days: d = 0,
  weeks: w = 0,
  months: mo = 0,
  years: y = 0
}: StoreFor): number =>
  s + mi * 60 + h * 3600 + d * 86400 + w * 604800 + mo * 2592000 + y * 31556952;

const getExpiry = ({until, ...storeFor}: StoreFor) =>
  until ? until : getSeconds(storeFor) + new Date().getTime();

const kFetch = (url: string, { storageType, storeFor } = {} as Options) => {
  const storeTime = storeFor ? getExpiry(storeFor) : 0;
  return getFetch(url);
};

export default kFetch;

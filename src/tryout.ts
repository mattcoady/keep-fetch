import kFetch from './index';

kFetch('Blah', {
  storageType: "local",
  storeFor: {
    seconds: 60
  }
}).then(e => e);
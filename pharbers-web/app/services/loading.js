import Service from '@ember/service';
import { computed } from '@ember/object';

// eslint-disable-next-line ember/no-classic-classes
export default Service.extend({
  loading: document.getElementById('loadingio-spinner-double-ring-ho1zizxmctu'),
  afterLoading: computed(function () {
    let loadingNum = 0;
    if (document.readyState === 'complete') {
      loadingNum = 1;
    }
    return loadingNum;
  }),
});

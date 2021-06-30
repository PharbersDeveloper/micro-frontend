import Service from '@ember/service';
import { inject as service } from '@ember/service';

// eslint-disable-next-line ember/no-classic-classes
export default Service.extend({
  ossService: service('services/oss'),
  ajax: service(),
  cookies: service(),
  downloadURI(urlName) {
    window.console.log(urlName);
    fetch(urlName.url)
      .then((response) => {
        if (response.status === 200) {
          return response.blob();
        }
        throw new Error(`status: ${response.status}`);
      })
      .then((blob) => {
        var link = document.createElement('a');

        link.download = urlName.name;
        // var blob = new Blob([response]);
        link.href = URL.createObjectURL(blob);
        // link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        // delete link;

        window.console.log('success');
      })
      .catch((error) => {
        window.console.log('failed. cause:', error);
      });
  },
  genDownloadUrl(index) {
    let curLanguage = window.localStorage.getItem('lang');
    let bookName;
    let uuid;
    if (index == 0) {
      bookName =
        curLanguage === '中文'
          ? '广阔市场用药分析及展望'
          : 'Analysis and Prospects for Broad Medication Market';
      uuid = 'Blue Book.pdf';
    } else if (index == 1) {
      bookName =
        curLanguage === '中文'
          ? '带量采购对中国医药市场格局的影响'
          : "VBP's impact on the Chinese Pharmaceutical Market";
      uuid = 'Blue Book2020.pdf';
    }
    // let uuid = 'Blue Book.pdf';
    let accept = 'pdf';
    let client = this.ossService.get('ossClient');
    let url = client.signatureUrl(accept + '/' + uuid, { expires: 43200 });
    window.console.log(url);
    this.downloadURI({ url: url, name: bookName });
    return url;
  },
});

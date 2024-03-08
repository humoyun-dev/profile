import axios, { AxiosResponse } from 'axios';
import {api} from "@/api.json"

const DownloadService = {
  downloadFile: (filename?: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      axios({
        url: `${api}/api/cvs/`,
        method: 'GET',
        responseType: 'blob',
      })
        .then((response: AxiosResponse<Blob>) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', filename || 'downloaded-file.txt');
          document.body.appendChild(link);
          link.click();
          resolve();
        })
        .catch(error => {
          console.error('Error downloading file:', error);
          reject(error);
        });
    });
  },
};

export default DownloadService;

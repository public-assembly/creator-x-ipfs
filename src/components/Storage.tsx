import { Web3Storage } from 'web3.storage';
import React, { useState } from 'react';

export const Storage = () => {
  const storage = new Web3Storage({
    token: process.env.NEXT_PUBLIC_WEB3_KEY as string,
  });

  const [filename, setFilename] = useState<string>('');
  const [filesToUpload, setFilesToUpload] = useState<any[]>([]);

  const fileInput = (event: any): void => {
    setFilename(event.target.files[0].name);
    setFilesToUpload((filesToUpload) => [
      ...filesToUpload,
      event.target.files[0],
    ]);
  };

  async function handleClick() {
    console.log('Files to upload:', filesToUpload);
    const cid = await storage.put(filesToUpload);
    console.log('Stored files with cid:', cid);
    return cid;
  }

  return (
    <div className='py-8'>
      <>
        <label className='btn-primary'>
          Select
          <input
            id='input'
            type='file'
            onChange={fileInput}
            hidden
            accept='image/jpg, image/jpeg, image/png, image/svg+xml, image/gif, video/mp4, video/quicktime, audio/mpeg, audio/mp3, audio/vnd.wav, audio/vnd.wave, audio/wav, audio/wave, audio/x-wav, audio/aiff'
          ></input>
        </label>
        <div className='py-4'>Filename: {filename}</div>
      </>
      <button className='btn-primary' onClick={() => handleClick()}>
        Store Files
      </button>
    </div>
  );
};

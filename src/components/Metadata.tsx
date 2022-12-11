import React, { useState } from 'react';
import { StoreNFT } from './StoreNFT';

export const Metadata = () => {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [filename, setFilename] = useState<string>('');
  const [fileToUpload, setFileToUpload] = useState<any>();

  const handleInput = (event: any): void => {
    setFilename(event?.target.files[0].name);
    setFileToUpload(event?.target.files[0]);
    console.log('File to upload:', fileToUpload);
  };

  //   console.log('Name:', name);
  //   console.log('Description', description);

  return (
    <div className=''>
      <div className='max-w-sm'>
        <form className='flex flex-col gap-y-4 py-4'>
          <div className='flex flex-col gap-y-1'>
            <label className='text-[#3C4242]' htmlFor='name'>
              Enter a name for your NFT
            </label>
            <input
              id='name'
              name='name'
              placeholder='Name'
              type='text'
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              required
              className='bg-[#222222] rounded-md p-2 text-white'
            ></input>
          </div>
          <div className='flex flex-col gap-y-1'>
            <label className='text-[#3C4242]' htmlFor='name'>Provide a description of your NFT</label>
            <input
              id='description'
              name='description'
              placeholder='Description'
              type='text'
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
              required
              className='bg-[#222222] rounded-md p-2 text-white'
            ></input>
          </div>
          <div className='w-full sm:max-w-4rem py-2'>
            <label htmlFor='image' className='btn-secondary'>
              Select File
            </label>
          </div>
          <input
            id='image'
            name='image'
            type='file'
            onChange={handleInput}
            hidden
            accept='image/jpg, image/jpeg, image/png, image/svg+xml, image/gif, video/mp4, video/quicktime, audio/mpeg, audio/mp3, audio/vnd.wav, audio/vnd.wave, audio/wav, audio/wave, audio/x-wav, audio/aiff'
          ></input>
          <div className=''>{filename}</div>
        </form>
      </div>
      <StoreNFT
        name={name}
        description={description}
        thumbnail={fileToUpload}
      />
    </div>
  );
};

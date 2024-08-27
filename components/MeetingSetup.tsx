"use client"
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

const MeetingSetup = ({ setIsSetupComplete}:{setIsSetupComplete:(value:boolean)=>void}) => {
  const [isMicCamtoggledOn, setisMicCamtoggledOn ] = useState(false);
  
  const call = useCall();

  useEffect(() => {
    if (call) {
      if (isMicCamtoggledOn) {
        call.camera?.disable();
        call.microphone?.disable();
      } else {
        call.camera?.enable();
        call.microphone?.enable();
      }
    }
  }, [isMicCamtoggledOn, call]);

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
      MeetingSetup
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-2 ">
        <label className="flex items-center justify-center gap-2 font-normal">


        <input type='checkbox'
        checked={isMicCamtoggledOn}
        onChange={(e)=>setisMicCamtoggledOn(e.target.checked)}/>
        Join with mic and camera off
        </label>
        <DeviceSettings/>
      </div>
      <Button className='rounded-md bg-green-500 px-4 py-2.5 text-white hover:bg-green-600'
      onClick={()=>{
        call?.join()
setIsSetupComplete(true)
      }}
      >
Join meeting

      </Button>
    </div>
  );
};

export default MeetingSetup;
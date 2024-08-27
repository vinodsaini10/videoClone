'use client'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useGetCallById } from '@/hooks/useGetCallByID'
import { useUser } from '@clerk/nextjs'
import { useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'

const Table = ({ title, description }: { title: string, description: string }) => (
  <div className="flex flex-col items-start gap-2 xl:flex-row">
    <h1 className='text-base font-medium text-sky-100 lg:text-xl xl:min-w-31'>{title}</h1>
    <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">{description}</h1>
  </div>
)

const PersonalRoom = () => {
  const { toast } = useToast();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const router = useRouter();
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const meetingId = user?.id;

  // Call the hook unconditionally
  const { call, isCallLoading } = useGetCallById(meetingId ?? '');

  useEffect(() => {
    if (meetingId && client && !isCallLoading) {
      // Perform any additional logic if necessary
      setLoading(false);
    } else if (!meetingId) {
      setError('Meeting ID is not available.');
      setLoading(false);
    }
  }, [meetingId, client, isCallLoading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!meetingId) {
    return <p>Meeting ID is not available.</p>;
  }

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  const startRoom = async () => {
    if (!client || !user) {
      toast({ title: 'Unable to start meeting. Please try again later.' });
      return;
    }

    try {
      if (!call) {
        const newCall = client.call('default', meetingId);
        await newCall.getOrCreate({
          data: {
            starts_at: new Date().toISOString(),
          }
        });
      }

      router.push(`/meeting/${meetingId}?personal=true`);
    } catch (error) {
      console.error(error);
      toast({ title: 'Failed to start the meeting. Please try again later.' });
    }
  }

  return (
    <section className='flex size-full flex-col gap-10'>
      <h1 className='text-md font-bold'>Personal Room</h1>
      <div className="flex flex-col w-full gap-8 xl:max-w-[900px]">
        <Table title="Topic " description={`${user?.username}'s Meeting Room`} />
        <Table title="Meeting ID " description={meetingId} />
        <Table title="Invite Link " description={meetingLink} />
      </div>
      <div className="flex gap-5">
        <Button className='bg-blue-700 hover:bg-blue-800 text-white' onClick={startRoom}>
          Start Meeting
        </Button>
        <Button className='bg-gray-800 hover:bg-gray-900 text-white' onClick={() => {
          navigator.clipboard.writeText(meetingLink);
          toast({ title: 'Link Copied' });
        }}>
          Copy Invitation
        </Button>
      </div>
    </section>
  )
}

export default PersonalRoom;

'use client'

import Image from 'next/image';
import { PlusCircle } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';

import { Button } from '@/components/ui/button';

const DocumentsPage = () => {
  const { user } = useUser();
  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4'>
      <Image
        src='/empty.png'
        height='300'
        width='300'
        alt='Empty'
        className='dark:hidden'
      />
      <Image
        src='/empty-dark.png'
        height='300'
        width='300'
        alt='Empty'
        className='hidden dark:block'
      />
      <h2 className='text-lg font-medium'>
        Welcom to {user?.firstName}&apos;s Zite
      </h2>
      <Button>
        <PlusCircle className='h-4 w-t mr-2'/>
        Create a note
      </Button>
    </div>
  );  
}
 
export default DocumentsPage;
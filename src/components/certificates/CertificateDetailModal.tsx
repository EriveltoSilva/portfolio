import { X2Icon } from '@/assets/icons/XIcon';
import { Certificate } from '@/types/Certificates';
import Image from 'next/image';

interface CertificateDetailModalProps {
  certificate: Certificate;
  closeCertificateDetailModal: () => void;
}

export function CertificateDetailModal({ certificate, closeCertificateDetailModal }: CertificateDetailModalProps) {
  return (
    <div className='fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4'>
      <div className='relative w-full h-full max-w-4xl max-h-90vh bg-zinc-950 rounded-xl overflow-hidden'>
        <button
          type='button'
          onClick={closeCertificateDetailModal}
          className='absolute top-4 right-4 z-10 text-zinc-400'
        >
          <X2Icon />
        </button>
        <div className='relative w-full h-full'>
          <Image
            src={certificate.image}
            alt='Certificate'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
    </div>
  );
}




// import { X2Icon } from '@/assets/icons/XIcon';
// import { Certificate } from '@/types/Certificates';
// import Image from 'next/image';

// interface CertificateDetailModalProps {
//   certificate: Certificate;
//   closeCertificateDetailModal: () => void,
// }



// export function CertificateDetailModal({ certificate, closeCertificateDetailModal }: CertificateDetailModalProps) {
//   return (
//     <div className='fixed inset-0 z-50 bg-black/60  p-5'>
//       <div className='flex justify-end'>
//         <button type='button' onClick={closeCertificateDetailModal} className='size-5 text-zinc-400'><X2Icon /> </button>
//       </div>

//       <div className='lg:w-full h-screen w-full rounded-xl px-6 py-5 bg-zinc-950  space-y-5'>
//         <div className='flex w-1/2'>
//           <div className='flex-1 w-screen'>
//             <Image src={certificate.image} alt='Bot assistant'
//               // width={800} height={700}
//               layout='fill'
//             // objectFit='cover'
//             />
//           </div>

//         </div>
//       </div>

//     </div >
//   );
// }


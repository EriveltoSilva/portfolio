import { EmailIcon } from '@/assets/icons/EmailIcon';
import { UserIcon } from '@/assets/icons/UserIcon';
import { WhatsappIcon } from '@/assets/icons/WhatsappIcon';
import { X2Icon } from '@/assets/icons/XIcon';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { Input } from '../Input';

interface ContactFormModalProps {
  closeContactFormModal: () => void,
}


export function ContactFormModal({ closeContactFormModal }: ContactFormModalProps) {
  return (
    <div className='fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-5'>
      <div className='w-[720px] rounded-xl px-6 py-5 bg-[#00497A]  space-y-5'>
        <div className='flex '>

          <div className='flex justify-between items-start'>
            <Image src="/bot.png" alt='Bot assistant' width={100} height={100} />
          </div>

          <div className='flex-1 space-y-4 p-8 w-full flex flex-col items-start'>
            <h2 className='text-white text-lg font-semibold'>Preencha seus Dados</h2>

            <form className='space-y-3 w-full'>
              <Input Icon={UserIcon} name='name' placeholder='Nome' type='text' />
              <Input Icon={EmailIcon} name='email' placeholder='E-mail' type='email' />
              <Input Icon={WhatsappIcon} name='whatsapp' placeholder='Whatsapp' type='text' />

              <textarea placeholder='Escreva a mensagem' className='w-full h-32 p-3 placeholder:text-gray-400 rounded-lg outline-none text-gray-500'>

              </textarea>

              <Button onClick={() => alert("Obrigado")} text="Enviar mensagem" className="justify-center w-full" />
            </form>
          </div>

          <div className='flex justify-end'>
            <button type='button' onClick={closeContactFormModal} className='size-5 text-zinc-400'><X2Icon /> </button>
          </div>

        </div>
      </div>
    </div>
  );
}


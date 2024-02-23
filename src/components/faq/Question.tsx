import Image from 'next/image';
import {useState} from "react";

const Question = ({id}: { id: string }) => {

    const [isOpen, setIsOpen] = useState(false);

    function toggle(id: string) {
        const element = document.getElementById(id);
        if (element) {
            if (element.classList.contains('expanded')) {
                element.classList.remove('expanded');
                element.classList.add('collapse');
                setTimeout(() => {
                    setIsOpen(false);
                }, 150);
                return;
            }
            if (!element.classList.contains('expanded')) {
                element.classList.add('expanded');
                element.classList.remove('collapse');
                setTimeout(() => {
                    setIsOpen(true);
                }, 150);
                return;
            }
        }
    }

    return (
        <div className='flex flex-col mt-2'>
            <div className='items-center flex lg:justify-between gap-6 target' onClick={(e) => toggle(id)}>
                <p className='text-base font-bold text-black'>Quais exames são incluídos no check-up feminino?</p>
                {
                    isOpen ?
                        <Image src='/assets/icons/less.svg' className='cursor-pointer' width={30} height={30}
                               alt='ver menos'/>
                        :
                        <Image src='/assets/icons/more.svg' className='cursor-pointer' width={30} height={30}
                               alt='ver mais'/>
                }
            </div>
            <div className='answer' id={id}>
                <p className='text-base'>O check-up feminino é crucial para a prevenção e detecção precoce de doenças
                    que afetam as mulheres. O programa de check-up oferece uma análise abrangente de sua saúde,
                    incluindo exames de rotina, avaliação ginecológica e orientação personalizada.</p>
            </div>
            <hr className='mt-3'/>
        </div>
    );
}

export default Question;
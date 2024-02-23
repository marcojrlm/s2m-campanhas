import Report from '@/components/socialData/Report';
import Image from 'next/image';

const SocialData = () => {

    function scroll(direction: number) {
        const container = document.getElementById('target');

        if (!container) return;

        if (direction < 0) {
            container.style.transform += 'translateX(450px)';
            return;
        }
        container.style.transform += 'translateX(-450px)';
    }

    return (
        <section className='w-11/12 lg:w-10/12 m-auto relative flex overflow-scroll lg:gap-16 scrollbar-hide my-12'>
            <div className='w-20 bg-white h-full justify-center items-center absolute left-0 hidden z-50 lg:block'>
                <Image src='assets/icons/previous.svg' width={50} height={50} alt='previous'
                       className='cursor-pointer  absolute top-0 left-0 bottom-0 m-auto' onClick={() => scroll(-100)}/>
            </div>

            <div id='target'
                 className='w-full lg:w-10/12 m-auto flex flex-col lg:flex-row gap-7 scrollbar-hide scroll-ql'>
                <Report stars={4} name='Regiane' professional='Paciente'/>
                <Report stars={5} name='Regiane' professional='Paciente'/>
                <Report stars={4} name='Regiane' professional='Paciente'/>
                <Report stars={5} name='Regiane' professional='Paciente'/>
                <Report stars={4} name='Regiane' professional='Paciente'/>
                <Report stars={4} name='Regiane' professional='Paciente'/>
                <Report stars={4} name='Regiane' professional='Paciente'/>
                <Report stars={4} name='Regiane' professional='Paciente'/>
                <Report stars={4} name='Regiane' professional='Paciente'/>
            </div>
            <div className='w-20 bg-white h-full justify-center items-center absolute right-0 m-auto z-50 hidden lg:block'>
                <Image src='assets/icons/next.svg' width={50} height={50} alt='previous'
                       className='cursor-pointer absolute right-0 top-0 bottom-0 m-auto' onClick={() => scroll(100)}/>
            </div>
        </section>
    );
}

export default SocialData;
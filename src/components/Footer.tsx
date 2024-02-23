import Image from 'next/image';

const Footer = () => {
    return (
        <section className='bg-primary'>
            <div className='w-full lg:w-10/12 flex flex-col lg:flex-row lg:justify-between gap-6 py-8 m-auto'>
                <div className='flex lg:flex-col items-center justify-center gap-6 w-11/12 lg:w-1/3'>
                    <Image alt='Logo s2' src='/assets/logos/logo-s2.png' height={500} width={150}/>
                    <Image alt='Logo s2' src='/assets/logos/db-logo.png' height={500} width={150}/>
                </div>

                <p className='text-sm text-white w-11/12 lg:w-1/3 m-auto text-center'>Uma iniciativa do DB Diagnósticos
                    para transformação digital de laboratórios,
                    clínicas e profissionais da área da saúde.</p>

                <div className='flex lg:justify-center m-auto gap-4 lg:w-1/3'>
                    <Image alt='Logo s2' src='/assets/icons/ln.svg' height={25} width={25}/>
                    <Image alt='Logo s2' src='/assets/icons/ig.svg' height={25} width={25}/>
                    <Image alt='Logo s2' src='/assets/icons/fb.svg' height={25} width={25}/>
                </div>
            </div>
        </section>
    );
}

export default Footer;
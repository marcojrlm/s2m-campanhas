import Image from 'next/image';

const Box = () => {
    return (
        <div className='w-full relative'>
            <Image src='assets/icons/maliicon.svg' alt='email' width={50} height={30}
                   className='absolute left-0 right-0 -top-[25px] m-auto'/>
            <div className='border-2 border-neutralLight rounded-lg flex flex-col justify-center items-center p-6 gap-3 text-center'>
                <p className='text-md mt-3 font-bold'>Fácil</p>
                <p className='text-base'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>
        </div>
    );

}

export default Box;
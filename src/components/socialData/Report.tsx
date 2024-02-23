import Image from 'next/image';

const SocialData = ({stars = 5, name, professional}: { stars: number, name: string, professional: string }) => {
    return (
        <div className='border-2 border-neutralLight p-4 min-w-60 lg:min-w-80 rounded-lg flex flex-col gap-4'>
            <Image
                width={100}
                height={25}
                src={stars === 4 ? '/assets/icons/stars.svg' : '/assets/icons/5stars.svg'}
                alt='perfil'
            />
            <p className='text-base'>Slate helps you see how many
                more days you need to work to
                reach your financial goal.</p>
            <div className='flex gap-3'>
                <Image
                    width={50}
                    height={25}
                    src='/assets/images/regiane.png'
                    alt='perfil'
                />
                <div className='flex font-bold flex-col text-sm'>
                    <p className='text-purple'>{name}</p>
                    <p className='text-dark'>{professional}</p>
                </div>
            </div>
        </div>
    );
}

export default SocialData;
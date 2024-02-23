const Button = ({text}: { text: string }) => {
    return (
        <button className='bg-orange py-3 w-full rounded-base text-white text-base font-bold'>{text}</button>
    );
}

export default Button;
import { SignInButton } from 'ethos-wallet-beta';


const TryItOut = () => {

    return (
        <div>
            <div className="flex space-x-2 text-xs">
                <div
                    className={'flex h-6 rounded-full bg-gradient-to-r from-violet-400/30 via-violet-400 to-violet-400/30 p-px font-medium text-violet-300'}
                >
                    <div
                        className={'flex items-center rounded-full px-2.5 bg-slate-800'}
                    >
                        Try it out
                    </div>
                </div>
            </div>
            <div className='grid place-items-center h-60'>
                <SignInButton className='rounded-full bg-[#6D28D9] py-2 px-4 text-sm font-semibold text-white' />
            </div>
        </div>
    );
}

export default TryItOut;
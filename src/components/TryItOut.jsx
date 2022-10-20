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
                <SignInButton className='rounded-full bg-purple-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500' />
            </div>
        </div>
    );
}

export default TryItOut;
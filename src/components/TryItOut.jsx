import React, { useCallback, useState } from 'react';

import { ethos, SignInButton } from 'ethos-connect';


const TryItOut = () => {
    const { wallet } = ethos.useWallet();
    const [addressWidget, setAddressWidget] = useState(false);

    const toggleWidget = useCallback(() => {
        setAddressWidget((prev) => !prev)
    }, [])

    return (
        <div>
            <div className="space-x-2 text-xs">
                <div className='flex justify-between items-center'>
                    <div
                        className={'flex h-6 rounded-full bg-gradient-to-r from-violet-400/30 via-violet-400 to-violet-400/30 p-px font-medium text-violet-300'}
                    >
                        <div
                            className={'flex items-center rounded-full px-2.5 bg-slate-800'}
                        >
                            Try it out
                        </div>
                    </div>
                    <div
                        className={'flex h-6 rounded-full cursor-pointer bg-gradient-to-r from-violet-400/30 via-violet-400 to-violet-400/30 p-px font-medium text-violet-300'}
                        onClick={toggleWidget}
                    >
                        <div
                            className={'flex items-center rounded-full px-2.5 bg-slate-800'}
                        >
                            Switch to {addressWidget ? 'Sign In Button' : 'Address Widget'}
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid place-items-center h-60'>
                {addressWidget ? (
                    <div>
                        <ethos.components.AddressWidget 
                          excludeButtons={[
                            ethos.enums.AddressWidgetButtons.CopyWalletAddress,
                            ethos.enums.AddressWidgetButtons.Logout,
                          ]}
                        />
                        {wallet && (
                            <div className='text-xs text-center text-white p-3'>(mouse over me)</div>
                        )}
                    </div>
                ) : (
                    wallet ? (
                        <button 
                            className='rounded-full bg-[#6D28D9] py-2 px-4 text-sm font-semibold text-white'
                            onClick={wallet.disconnect}
                        >
                            Sign Out
                        </button>
                    ) : (
                        <SignInButton className='rounded-full bg-[#6D28D9] py-2 px-4 text-sm font-semibold text-white' />
                    )
                )}
            </div>
        </div>
    );
}

export default TryItOut;
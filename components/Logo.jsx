import LogoIconLightTheme from '@/images/logo-icon-light-theme.svg'
import LogoTextLightTheme from '@/images/logo-text-light-theme.svg'
import LogoIconDarkTheme from '@/images/logo-icon-dark-theme.svg'
import LogoTextDarkTheme from '@/images/logo-text-dark-theme.svg'

export function Logomark(props) {
  return (
    <>
      <div className='dark:hidden'>
        <LogoIconLightTheme />
      </div>
      <div className='hidden dark:block'>
        <LogoIconDarkTheme />
      </div>
    </>
  )
}

export function Logo(props) {
  return (
    <>
      <div className='dark:hidden'>
        <LogoTextLightTheme />
      </div>
      <div className='hidden dark:block'>
        <LogoTextDarkTheme />
      </div>
    </>
  )
}

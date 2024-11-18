import brackets from '../assets/svg/Brackets'

const Tagline = ({className, children}) => {
  return (
    <div className={`tagline flex items-center ${className || ''}`}>
        {brackets('left')}
        <span className='mx-3 text-n-3'>{children}</span>
        {brackets('right')}
    </div>
  )
}

export default Tagline
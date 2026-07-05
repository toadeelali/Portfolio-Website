/* eslint-disable jsx-a11y/img-redundant-alt */

interface Props {
  wrapperClassName?: string
  className?: string
  spinning?: boolean
  active?: boolean
  text?: string
  events?: {
    onClick: any
  }
  image: {
    src: string
    alt: string
  }
}

const Personality = (props: Props) => {
  return (
    <div className={`flex w-[80%] flex-col items-center justify-center ${props.wrapperClassName || ''}`}>
      <div
        className={`
          personality-circle relative mx-auto flex size-[130px] cursor-pointer items-center justify-center
          before:content-[''] before:absolute before:z-[-1] before:size-[128px] before:rounded-full
          before:animate-circle-rotation before:bg-[linear-gradient(90deg,var(--color-primary),var(--color-blue))]
          ${props.spinning ? 'spinning' : ''}
          ${props.active ? 'active' : ''}
          ${props.className || ''}
        `}
        onClick={props.events?.onClick}
      >
        <img
          className="size-[120px] rounded-full transition-all duration-[0.06s] ease-in-out [.active_&]:scale-85 [.active_&]:grayscale [.active_&]:border-transparent"
          src={props.image?.src}
          alt={props.image?.alt}
          height="120"
          width="120"
        />
      </div>
      <p className="mt-2 text-[1.2rem]">{props.text}</p>
    </div>
  )
}

export default Personality

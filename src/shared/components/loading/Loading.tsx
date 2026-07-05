interface Props {
  className?: string
  text?: string
  image?: any
  component?: any
}

const Loading = (props: Props) => {
  return (
    <div className={`absolute inset-0 z-10 flex items-center justify-center text-center transition-all duration-[0.06s] bg-[rgba(var(--loading-bg-color),0.5)] ${props.className || ''}`}>
      {props.component ? (
        <>{props.component}</>
      ) : (
        <div>
          {props.image && <props.image />}
          {props.text && <p>{props?.text}</p>}
        </div>
      )}
    </div>
  )
}

export default Loading

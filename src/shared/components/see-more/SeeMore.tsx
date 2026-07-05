const SeeMore = ({t, props}: any) => {
  return (
    <div className="text-center">
      <a className="link text-center text-[1.1rem] lg:mt-12" href={props.url} target="blank">
        {props.text}
      </a>
    </div>
  )
}

export default SeeMore

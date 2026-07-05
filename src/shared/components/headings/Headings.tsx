const Headings = (props: any) => {
  const trim = (str: string): string => str.split(' ').join('-').toLowerCase()

  return (
    <header className="text-center">
      <h2 id={trim(props.title)} className="text-[1.5rem] font-semibold leading-8 sm:text-[1.7rem] sm:leading-[2.1rem]">
        <a className="cursor-default" href={`#${trim(props.title)}`}>
          {props.title}
        </a>
      </h2>
      <h3 className="text-[1.05rem] font-normal leading-[1.76rem] sm:text-[1.2rem] sm:leading-[1.9rem]">{props.subtitle}</h3>
    </header>
  )
}

export default Headings

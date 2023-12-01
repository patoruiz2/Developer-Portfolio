
type Props<T> = {
  srcDesktop: T,
  srcMobile: T,
  alt: T
}

const Picture = <T extends string>({ alt, srcDesktop, srcMobile }: Props<T>) => {
  return (
    <picture>
      <source media="(min-width:375px)" srcSet={srcMobile} />
      <img src={srcDesktop} alt={alt} />
    </picture>
  )
}

export default Picture
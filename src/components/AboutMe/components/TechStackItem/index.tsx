import { StackT } from '../../../../model'
import Picture from '../../../Picture'

type Props = {
  stack: StackT[]
}

const TechStackItem = ({ stack }: Props) => {
  return (
    <>
      {
        stack.map((item) => (
          <li key={item.alt}>
            <Picture  {...item} />
          </li>
        ))
      }
    </>
  )
}

export default TechStackItem
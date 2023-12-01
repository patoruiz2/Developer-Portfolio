import { StackT } from '../../../../model'
import TechStackItem from '../TechStackItem'


type Props = {
  stack: StackT[]
}

const TechStackList = ({ stack }: Props) => {
  return (
    <ul className="grid grid-cols-3 gap-3">
      <TechStackItem stack={stack} />
    </ul>
  )
}

export default TechStackList
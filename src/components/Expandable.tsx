import { useState } from "react";

interface Props {
  Children : string;
  maxChar?: number;
}

const Expandable = ({Children , maxChar=10}: Props) => {
const [isExpanded , setExpanded] = useState(false);

  if(Children.length <= maxChar) return <p>{Children}</p>
  
  const text = isExpanded ? Children : Children.substring(0 , maxChar);
  return <p>{text}...<button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button></p>
}

export default Expandable
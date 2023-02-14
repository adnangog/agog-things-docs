
import Markdown from '../../helpers/markdown';
import AppMarkdown from './textbox.md'
import Basic from "./basic";
import Numeric from "./numeric";

const comp = {
  "Basic" : <Basic/>,
  "Numeric" : <Numeric/>
}

export default function Table() {
    return <Markdown AppMarkdown={AppMarkdown} comp={comp} />
}

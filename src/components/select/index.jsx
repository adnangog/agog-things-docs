
import Markdown from '../../helpers/markdown';
import AppMarkdown from './select.md'
import Basic from "./basic";
import Multiple from "./multiple";
import Grouping from "./grouping";
import Filtering from "./filtering";
import Etiquette from "./etiquette";
import TotalSelected from "./selectedall";
import Clear from "./clear";

const comp = {
  "Basic" : <Basic/>,
  "Multiple" : <Multiple/>,
  "Grouping" : <Grouping/>,
  "Filtering" : <Filtering/>,
  "Etiquette" : <Etiquette/>,
  "TotalSelected" : <TotalSelected/>,
  "Clear" : <Clear/>
}

export default function Table() {
    return <Markdown AppMarkdown={AppMarkdown} comp={comp} />
}

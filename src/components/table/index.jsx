
import Markdown from '../../helpers/markdown';
import AppMarkdown from './table.md'
import Basic from "./basic"
import Sorting from "./sorting"
import Filtering from "./filtering"
import Paging from "./pager"
import RowSelection from "./selectAll"
import Fixed from "./fixed"
import FullScreen from "./fullscreen"
import ShowHide from "./showhide"

const comp = {
  "Basic" : <Basic/>,
  "Sorting" : <Sorting/>,
  "Filtering" : <Filtering/>,
  "Paging" : <Paging/>,
  "RowSelection" : <RowSelection/>,
  "Fixed" : <Fixed/>,
  "FullScreen" : <FullScreen/>,
  "ShowHide" : <ShowHide/>,
}

export default function Table() {
    return <Markdown AppMarkdown={AppMarkdown} comp={comp} />
}

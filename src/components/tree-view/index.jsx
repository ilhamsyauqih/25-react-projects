import MenuList from "./menu-list";

const TreeView = ({menus=[]}) => {
    return <div>
        <MenuList list={menus}/>
    </div>
}

export default TreeView;
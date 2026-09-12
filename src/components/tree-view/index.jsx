import MenuList from './menu-list'

export default function TreeView({menus=[]}){
    return <div className="tree-view-components">
        <MenuList list={menus}/>
    </div>
}
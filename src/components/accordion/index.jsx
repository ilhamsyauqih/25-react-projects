import { use, useState } from 'react';
import data from './data'
import './styles.css'

const Accordian = () => {

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelect = (getId) => {
        setSelected(getId === selected ? null : getId)
    }

    const handleMultipleSelect = (getId) => {
        let cpyMultiple = [...multiple];

        const findIndexOfCurrentId = cpyMultiple.indexOf(getId);
        
        if(findIndexOfCurrentId === -1) cpyMultiple.push(getId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)

        setMultiple(cpyMultiple)
    }
    

    return <div className="wrapper">
        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Multiple Select</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                data.map((dataItem)=>(
                    <div className='item'>
                        <div onClick={
                            enableMultiSelection ? 
                            ()=>handleMultipleSelect(dataItem.id) :
                            ()=>handleSingleSelect(dataItem.id)} className='title'>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ?
                            multiple.indexOf(dataItem.id) !== -1 && <div>{dataItem.answer}</div> :
                            selected === dataItem.id && <div>{dataItem.answer}</div>
                        }
                        {/* {
                            selected === dataItem.id ?
                            <div>{dataItem.answer}</div> : null
                        } */}
                    </div>
                )) : <div>Data not found</div>
            }
        </div>
    </div>
}

export default Accordian;
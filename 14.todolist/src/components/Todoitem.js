const Todoitem = ({ id, isDone, content, date,onUpdate,onDelete}) => {
    const formatDate = new Date(date).toLocaleDateString();
    return (
        <div className='Todoitem'>

            <input type="checkbox" checked={isDone}
            onChange={() => onUpdate(id)}/> 
            {content}&emsp;
            <span>{formatDate}</span>
            <button onClick={() =>{
                onDelete(id)
                }}>삭제</button>
        </div>
    )


}

export default Todoitem;
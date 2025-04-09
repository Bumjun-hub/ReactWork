import { useState } from "react";
import Todoitem from "./Todoitem";

// todos = 배열4개 들어있음 
const List = ({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState('');

    const getSearchData = () => { // 검색기능
        if (search == "") {
            return todos;
        }
        return todos.filter((todo) => {
            return todo.content.toLowerCase().includes(search.toLowerCase()) // search 값이 포함되어있으면(true)getSearchData 값 반환 
        })
    }
    const filterTodos = getSearchData();

    return (

        <div className='List'>
            <h3>TodoList</h3>
            <input type="text" placeholder="검색어를 입력하세요"
                onChange={(e) => {
                    setSearch(e.target.value);
                }} />

            <div className='todos_wrapper'>

                {
                    filterTodos.map(item =>
                        <Todoitem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete} />
                    )}

            </div>

        </div>

    )

}

export default List;
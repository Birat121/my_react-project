function List(){
    const fruits= ["apple", "orange", "banana", "coconut"];

    const listItems=fruits.map(fruit => <li>{fruit}</li>);

    return (<ol className="list">{listItems}</ol>);



}

export default List
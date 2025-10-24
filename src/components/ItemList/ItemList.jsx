export const ItemList = ({list}) => {
    return (<>
    {list.length ? (
    list.map((prod) => <Link key={prod.id}></Link>) 
    ):( <p>No hay productos</p>)}
    </>
    );
}
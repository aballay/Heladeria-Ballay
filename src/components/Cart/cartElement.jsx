function CountElementWidget(props) {
    return (
        <div>
            <button>-</button>
            <div>{props.itemCount}</div>
            <button >+</button>
        </div>
    )
}

function CartElement(props) {


    console.log(props.pItem)
    return (

        <div>
            <div>
                Producto:
                {props.pItem.product}
            </div>
            <div>
                <CountElementWidget itemCount={props.pItem.count} />
            </div>
            <div>
                Precio:
                {props.pItem.price}
            </div>
        </div>
    );
}

export default CartElement;


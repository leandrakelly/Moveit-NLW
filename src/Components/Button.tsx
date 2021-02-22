interface Buttonprops{
    color: string;
    children: string;
}

export function Button(props: Buttonprops){
    return(
        <button type="button" style={{ backgroundColor: props.color, }}>
           {props.children} <strong>1</strong>
        </button>
    );
}
type changeFn = (e: React.ChangeEvent<HTMLInputElement>) => void;

export default function Checkbox({name, checked, onChange}: 
    {name: string, checked: boolean, onChange: changeFn}) {
    
    return (
        <>
            <input type="checkbox" 
                checked={checked} 
                onChange={onChange}/>
            <label>{name}</label><br />
        </>
    );
}